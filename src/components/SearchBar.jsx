import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();
    console.log(searchTerm);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (searchTerm === "") return;
        const resp = await fetch(
            `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await resp.json();
        console.log(data);
        navigate(`/results`, {
            state: { data: data.products },
        });
        setSearchTerm("")
    };

    return (
        <form
            onSubmit={handleSubmit}
            className=" border-2 px-2 py-1 bg-gray-100 rounded-lg flex items-center"
        >
            <input
                className=" outline-none bg-transparent w-full"
                type="text"
                placeholder="Product"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
                <CiSearch />
            </button>
        </form>
    );
};

export default SearchBar;
