import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart} from "../features/cart/cartSlice";

export default function Menu() {
  const display = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const [allMenu, setAllMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState(0);
  const [searchBox, setSearchBox] = useState("");
  
  // Recipe detail state
  const [showDetails, setShowDetails] = useState(null);
  const [checkDetails, setCheckDetails] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  // Fetch all recipes once and attach randomized price consistently
  const fetchRecipes = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://dummyjson.com/recipes?limit=50&select=name,image,cookTimeMinutes"
      );
      const data = await res.json();

      const updatedRecipes = data.recipes.map((recipe) => {
        const min = 5;
        const max = 15;
        let price = Math.floor(Math.random() * (max - min + 1)) + min;
        if (recipe.cookTimeMinutes > 30) {
          price += 8.5;
        }

        return {
          ...recipe,
          price: price.toFixed(2),
        };
      });

      setAllMenu(updatedRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Filter recipes based on search
  const filteredMenu = allMenu.filter((item) =>
    item.name.toLowerCase().includes(searchBox.toLowerCase().trim())
  );

  // Apply pagination over the filtered items
  const itemsPerPage = 10;
  const paginatedMenu = searchBox.trim()
    ? filteredMenu
    : filteredMenu.slice(pagination, pagination + itemsPerPage);

  const handleAddToCart = (item) => {

      dispatch(
        addToCart({
          id: item.id,
          image: item.image,
          name: item.name,
          price: item.price
        })
      );
  };

  const showMenuDetails = async (id) => {
    if (checkDetails === id) {
      setCheckDetails(null);
      return;
    }

    try {
      setIsLoadingDetails(true);
      setCheckDetails(id);
      const res = await fetch(
        `https://dummyjson.com/recipes/${id}?select=ingredients,servings,cuisine,caloriesPerServing,rating`
      );
      const data = await res.json();
      setShowDetails(data);
    } catch (err) {
      console.error("Failed to fetch menu details:", err);
    } finally {
      setIsLoadingDetails(false);
    }
  };

  const prevBtn = () => {
    setPagination((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const nextBtn = () => {
    setPagination((prev) =>
      Math.min(prev + itemsPerPage, Math.floor(allMenu.length / itemsPerPage) * itemsPerPage)
    );
  };

  const notepad_design = "border-t-2 border-l-2 border-blue-400 p-1";

  return (
    <div className="text-[#EC9B3B] min-h-screen bg-[#1e1e1e] pt-20 pb-20">
      {/* Header Section */}
      <div className="flex flex-col items-center shadow-xl bg-[#292828] py-10 mb-10 sm:mx-20 sm:rounded-xl sm:px-20">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#EC9B3B] mb-5 text-center">
          Welcome to Our Gourmet Menu
        </h1>
        <p className="text-md sm:text-xl max-w-3xl text-center text-[#cf8a35]">
          Explore our freshly crafted dishes made with organic ingredients. Use the search bar below to find your favorite meals and view detailed nutritional facts.
        </p>
      </div>

      {/* Control Bar */}
      <div className="bg-[#292828] flex flex-col items-center p-5 mb-10">
        <div className="mb-5 flex items-center flex-col sm:flex-row">

          <input
            type="text"
            value={searchBox}
            onChange={(e) => {
              setSearchBox(e.target.value);
              setPagination(0);
            }}
            placeholder="Search for a dish..."
            className="px-10 py-2 rounded-lg border-2 border-amber-400 mr-5 text-black bg-white hidden sm:flex"
          />
          <button
            onClick={fetchRecipes}
            className="cursor-pointer border-2 border-amber-400 px-5 py-2 rounded-md hover:bg-amber-400 hover:text-black transition hidden sm:flex"
          >
            Refresh Menu
          </button>

          <input
            type="text"
            value={searchBox}
            onChange={(e) => {
              setSearchBox(e.target.value);
              setPagination(0);
            }}
            placeholder="Search for a dish..."
            className="px-5 py-2 rounded-lg border-2 border-amber-400 mr-5 text-black bg-white mb-5 sm:mb-0 sm:hidden"
          />
          <button
            onClick={fetchRecipes}
            className="cursor-pointer border-2 border-amber-400 px-2 py-2 rounded-full hover:bg-amber-400 hover:text-black transition flex sm:hidden"
          >
            🔃
          </button>

        </div>

        {/* Pagination Controls */}
        {!searchBox && (
          <div className="flex gap-5">
            <button
              onClick={prevBtn}
              disabled={isLoading || pagination === 0}
              className="cursor-pointer border-2 border-amber-400 px-5 py-1 rounded-md disabled:opacity-50 hidden sm:flex"
            >
              Previous Page
            </button>
            <button
              onClick={prevBtn}
              disabled={isLoading || pagination === 0}
              className="cursor-pointer border-2 border-amber-400 px-5 py-1 rounded-md disabled:opacity-50 flex sm:hidden"
            >
              &lt;
            </button>
            <button
              onClick={nextBtn}
              disabled={isLoading || pagination + itemsPerPage >= allMenu.length}
              className="cursor-pointer border-2 border-amber-400 px-5 py-1 rounded-md disabled:opacity-50 hidden sm:flex"
            >
              Next Page
            </button>
            <button
              onClick={nextBtn}
              disabled={isLoading || pagination + itemsPerPage >= allMenu.length}
              className="cursor-pointer border-2 border-amber-400 px-5 py-1 rounded-md disabled:opacity-50 flex sm:hidden"
            >
              &gt;
            </button>
          </div>
        )}
      </div>

      {/* Cart Counter Info */}
      <div className="px-20 mb-5">
        <p className="text-lg font-bold">Items in Cart: ({display.length})</p>
      </div>

      {/* No Results Warning */}
      {!isLoading && filteredMenu.length === 0 && (
        <div className="bg-[#b80303af] text-white text-lg p-10 mx-10 sm:mx-30 my-10 rounded-xl border-2 border-[#ff0101] text-center">
          ⚠ No dishes found matching your criteria. Try another search!
        </div>
      )}

      {/* Skeleton Loading State */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-20">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="rounded-md border border-amber-500 p-4 bg-[#2b2a2a] animate-pulse flex flex-col items-center">
              <div className="w-48 h-48 rounded-md bg-gray-600 mb-4"></div>
              <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-600 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      ) : (
        /* Recipes Grid */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 sm:px-20 sm:grid-cols-2">
          {paginatedMenu.map((food) => (
            <div
              key={food.id}
              className="relative bg-[#292828] border-2 border-amber-500 flex flex-col items-center p-6 rounded-lg shadow-xl"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <p className="text-xl font-bold text-center mb-2">{food.name}</p>
              <p className="text-lg font-semibold mb-4">${food.price}</p>

              <button
                onClick={() => handleAddToCart(food)}
                className="cursor-pointer border-2 border-amber-400 px-5 py-1 rounded-md mb-3 hover:bg-amber-400 hover:text-black transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => showMenuDetails(food.id)}
                className="cursor-pointer border-2 border-amber-400 px-5 py-1 rounded-md hover:bg-amber-400 hover:text-black transition"
              >
                View Ingredients & Details
              </button>

              {/* Details Overlay */}
              {checkDetails === food.id && (
                <div className="absolute inset-0 bg-[#fae52d] text-black p-6 rounded-lg overflow-y-auto z-10">
                  <div className="flex justify-between items-center mb-4">
                    <p className="font-bold text-lg">Recipe Details</p>
                    <button
                      onClick={() => setCheckDetails(null)}
                      className="text-[#a80202] font-bold cursor-pointer"
                    >
                      Close X
                    </button>
                  </div>

                  {isLoadingDetails ? (
                    <p>Loading details...</p>
                  ) : (
                    <div>
                      <p className={notepad_design}>Rating: {showDetails?.rating} / 5</p>
                      <p className={notepad_design}>Cuisine: {showDetails?.cuisine}</p>
                      <p className={notepad_design}>Servings: {showDetails?.servings}</p>
                      <p className={notepad_design}>
                        Calories per Serving: {showDetails?.caloriesPerServing} kcal
                      </p>
                      <p className={`${notepad_design} font-bold mt-2`}>Key Ingredients:</p>
                      <ul className="list-disc pl-5">
                        {showDetails?.ingredients?.map((ingredient, index) => (
                          <li key={`${index}_${ingredient}`} className="py-0.5">
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
