import { Link } from "react-router-dom"

export default function Order_History(){

    return(
        <>
        <div className="bg-[#292828] py-30 flex flex-col items-center text-[#EC9B3B]">
            <div className="items-center flex flex-col p-10 border-2 border-amber-500 rounded-xl mx-10">
            <p className="text-2xl mb-5">This is order's history</p>
            <p className="text-lg mb-5">This page is under development. Click the button below to redirect back to home page</p>
            <Link to="/home" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors">
            Home page
            </Link>
            </div>
        </div>
        </>
    )
}