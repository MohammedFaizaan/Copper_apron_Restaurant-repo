import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Food_Web(){

    return(
        <>
        <section>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <footer>
                <Footer/>
            </footer>
        </section>

        </>
    )
}