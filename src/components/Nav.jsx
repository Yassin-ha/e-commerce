import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const {amount} = useSelector(state => state.cart)


    useEffect(() => {
        const handleResize = () => {
            const isMobileQuery = window.matchMedia("(max-width: 500px)").matches;
            setIsMobile(isMobileQuery);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className=" mb-5">
            <div className="container flex justify-between h-20 items-center">
                <Link to={"/"}>
                    {" "}
                    <h1 className="text-3xl font-bold">
                        {" "}
                        <span className=" text-blue-500">S</span>-Shop
                    </h1>
                </Link>
                <div className="flex items-center gap-4">
                    {!isMobile && <SearchBar />}
                    <button className=" btn">
                        login
                    </button>
                    <Link to={"/cart"} className="relative">
                        <FiShoppingCart className=" text-lg" />
                        <div className="absolute -top-4 left-2">
                            <span className=" text-blue-500">{amount}</span>
                        </div>
                    </Link>
                </div>
            </div>
            {isMobile && <div className="container"> <SearchBar /></div>}
        </nav>
    );
};

export default Nav;
