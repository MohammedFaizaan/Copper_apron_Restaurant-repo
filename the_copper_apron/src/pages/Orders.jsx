import { useSelector, useDispatch } from "react-redux";
import {addQuantity, subQuantity} from "../features/cart/cartSlice"
import { Link } from "react-router-dom";

export default function Orders() {
  const display = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const checkIsEmpty = display?.length === 0;

  const grandTotal = display.reduce((total, item) => {
    const clearString = item.grandTotal

    return total + parseFloat(clearString);
  }, 0);

  const addItemsQuantity = (id)=>{
    dispatch(addQuantity(id));
  }

  const subItemsQuantity = (id)=>{
    dispatch(subQuantity(id));
  }

  return (
    <div className="bg-[#292828]">

    <div className="max-w-6xl mx-auto p-6 text-[#EC9B3B] bg-[#292828]">
      {/* Page Header */}
      <div className="flex justify-between">
      <header className="mb-8 border-b border-amber-500/20 pb-4">
        <h1 className="text-3xl font-bold tracking-tight">Your Orders</h1>
        <p className="text-sm text-amber-500/70 mt-1">
          Track active deliveries, review past purchases, and manage your
          receipts.
        </p>
      </header>
      <div className="flex items-center mb-8">
      <Link to="/order_history" className="px-6 py-3 ml-5 bg-amber-500 hover:bg-amber-600 text-black  font-semibold rounded-lg transition-colors">
        Recent orders
      </Link>
      </div>
      </div>

      <div>
        {checkIsEmpty ? (
          /* Empty State */
          <div className="text-center py-16 bg-[#292828] rounded-xl border border-amber-500/30">
            <div className="text-5xl mb-4">📦</div>
            <h2 className="text-2xl font-semibold mb-2">No orders found</h2>
            <p className="text-gray-400 mb-6">
              Looks like you haven't placed any food orders yet.
            </p>
            <Link
              to="/menu"
              className="px-6 py-3 ml-5 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          /* Orders List */
          <div className="space-y-6">
            {display.map((order) => (
              <div
                key={order.id || order._id}
                className="bg-[#292828] border border-amber-500/30 rounded-xl p-6 shadow-lg hover:border-amber-500/60 transition-all"
              >
                {/* Order Meta Bar */}
                <div className="flex flex-wrap justify-between items-center border-b border-gray-700 pb-4 mb-4 gap-4">
                  <div>
                    <span className="text-xs uppercase text-gray-400 block">
                      Order ID
                    </span>
                    <span className="font-mono text-sm font-semibold text-white">
                      #{order.id || "ORD-89231"}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs uppercase text-gray-400 block">
                      Date Placed
                    </span>
                    <span className="text-sm text-gray-200">
                      {order.date || "Sep 25, 2026"}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs uppercase text-gray-400 block">
                      Total Amount
                    </span>
                    <span className="text-sm font-bold text-amber-400">
                      ${order.price * order.quantity}
                    </span>
                  </div>
                  <div>
                    {/* Status Badge */}
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {order.status || "In Delivery"}
                    </span>
                  </div>
                </div>

                {/* Order Content */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-24 h-24 object-cover rounded-lg border border-gray-700"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {order.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-1">
                      Quantity: {order.quantity || 1}
                    </p>
                    <div className="flex justify-center sm:justify-start">
                    <button 
                    onClick={()=> subItemsQuantity(order.id)}
                    className="bg-amber-500 hover:bg-amber-600 text-black px-4 rounded-xl mr-2">
                      -
                    </button>
                    <p className="p-3 border border-amber-500 rounded-xl">{order.quantity || 1}</p>
                    <button
                    onClick={()=> addItemsQuantity(order.id)}
                    className="bg-amber-500 hover:bg-amber-600 text-black px-4 rounded-xl ml-2">
                      +
                    </button>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                    <button className="flex-1 px-4 py-2 text-sm bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors">
                      Track Order
                    </button>
                    <button className="flex-1 px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-amber-500 border border-amber-500/30 rounded-lg transition-colors">
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Grand Total Footer */}
            <div className="flex justify-between items-center bg-[#292828] p-4 rounded-xl border border-amber-500/20 mt-6">
              <span className="text-lg font-medium">Total Spent:</span>
              <span className="text-2xl font-bold text-amber-400">
                ${grandTotal}
              </span>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
