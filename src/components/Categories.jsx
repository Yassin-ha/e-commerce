import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Categories = ({setCategory}) => {
    const [categories, SetCategories] = useState([]);

    const fetchData = async () => {
        try {
            const resp = await fetch("https://dummyjson.com/products/categories");
            const data = await resp.json();
            SetCategories(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="sm:grid-span-1 pb-10 sm:pb-0">
            <h2 className=" font-semibold pb-4">Categories</h2>
            <ul className="flex gap-4 flex-wrap sm:block ">
                {categories.map((category, index) => {
                    return (
                        <li key={index}>
                            <button onClick={() => setCategory(category)} className=" bg-gray-200 px-2 py-1 rounded-md capitalize sm:px-0 sm:py-0 sm:pb-2 sm:bg-white">{category}</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Categories;
