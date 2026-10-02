import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import food_Home from "../assets/Food_Variety.png";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState([]);

  const callTopMenu = async () => {
    try {
      setIsLoading(true);
      const url =
        "https://dummyjson.com/recipes?limit=0&select=name,image,rating";
      const res = await fetch(url);
      const data = await res.json();
      const filteredTopMenu = data.recipes.filter((top) => top.rating >= 4.8);
      setDisplay(filteredTopMenu);
    } catch (err) {
      console.error("Error fetching top menu:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    callTopMenu();
  }, []);

  const heroSlides = [
    {
      titleLine1: "Late",
      titleLine2: "Night Cravings?",
      description:
        "Satisfy your midnight hunger with our freshly prepared gourmet dishes delivered straight to your door, fast and piping hot.",
    },
    {
      titleLine1: "Explore",
      titleLine2: "Flavors",
      description:
        "Discover rich, authentic taste profiles crafted by master chefs using premium ingredients sourced fresh every day.",
    },
  ];

  return (
    <div className="bg-[#1e1d1d] min-h-screen text-[#EC9B3B]">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {/* Background Food Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={food_Home}
            className="object-cover w-full h-full brightness-50"
            alt="Delicious food variety layout"
          />
        </div>

        {/* Hero Banner Carousel Overlay */}
        <div className="relative z-10 h-full max-w-7xl mx-auto flex items-center px-6 lg:px-12">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-black/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-amber-500/20 shadow-2xl">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="hero-swiper text-left"
            >
              {heroSlides.map((slide, idx) => (
                <SwiperSlide key={idx} className="pb-8">
                  <h1 className="flex flex-col mb-4">
                    <span className="text-4xl md:text-6xl font-extrabold text-[#EC9B3B] tracking-tight">
                      {slide.titleLine1}
                    </span>
                    <span className="text-3xl md:text-5xl font-bold text-white tracking-wide mt-1">
                      {slide.titleLine2}
                    </span>
                  </h1>
                  <p className="text-amber-500/80 text-sm md:text-base mb-6 leading-relaxed max-w-md">
                    {slide.description}
                  </p>
                  <Link
                    to="/menu"
                    className="inline-block px-8 py-3 bg-[#EC9B3B] hover:bg-[#C84B31] text-black font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
                  >
                    Explore Menu
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 bg-[#292828] p-8 rounded-2xl border border-amber-500/20 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#EC9B3B] mb-3">
            Our Finest Dishes
          </h2>
          <p className="text-amber-500/70 text-sm md:text-base leading-relaxed">
            Handpicked customer favorites with top customer ratings. Prepared fresh to deliver an exceptional culinary experience.
          </p>
        </div>

        {/* Content State: Skeleton vs Swiper */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-[#292828] border border-gray-800 rounded-xl p-5 animate-pulse flex flex-col items-center"
              >
                <div className="w-full h-48 bg-gray-700/50 rounded-lg mb-4"></div>
                <div className="h-5 bg-gray-700/50 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-700/50 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto relative px-4 group">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={24}
    slidesPerView={1}
    loop={true}
    // 1. Pass custom element class names here
    navigation={{
      prevEl: ".swiper-button-prev-custom",
      nextEl: ".swiper-button-next-custom",
    }}
    pagination={{ clickable: true }}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="pb-12"
  >
    {display.map((topMenu) => (
      <SwiperSlide key={`${topMenu.id}_Swiper`}>
        <div className="bg-[#292828] border border-amber-500/20 hover:border-amber-500/50 p-5 rounded-xl shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full group">
          <div className="overflow-hidden rounded-lg mb-4 w-full h-48">
            <img
              src={topMenu.image}
              alt={topMenu.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
            {topMenu.name}
          </h3>
          <div className="flex items-center gap-1 text-amber-400 font-medium text-sm">
            <span>★</span>
            <span>{topMenu.rating.toFixed(1)} / 5.0</span>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* 2. Custom Left Button */}
  <button
    className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 bg-[#292828] border border-amber-500/40 text-amber-400 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-amber-500 hover:text-black hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
    aria-label="Previous slide"
  >
    &lt;
  </button>

  {/* 3. Custom Right Button */}
  <button
    className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 bg-[#292828] border border-amber-500/40 text-amber-400 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-amber-500 hover:text-black hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
    aria-label="Next slide"
  >
    &gt;
  </button>
</div>
        )}
      </section>
    </div>
  );
}
