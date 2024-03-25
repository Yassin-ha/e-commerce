import { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

// eslint-disable-next-line react/prop-types
const ListProducts = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        setLoading(true)
        try {
            const resp = await fetch(`https://dummyjson.com/products`);
            const data = await resp.json();
            setProducts(data.products);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if(category){
            setLoading(true)
            const fetchFilter = async () => {
                const resp = await fetch(`https://dummyjson.com/products/category/${category}`)
                const data = await resp.json()
                setProducts(data.products)
                setLoading(false)
            }
            fetchFilter()
        } else {
            fetchData();
        }
    }, [category]);

    if(loading) {
        return <div className="col-span-3">
            <Loading />
        </div>
    }
    console.log(products);

    return (
        <section className=" sm:col-span-2 md:col-span-3">
            <h2 className=" font-semibold">Products</h2>
            <div className="grid mx-4 my-4 sm:mx-0 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                {products.map((product) => {
                    return (
                        <Card product={product} key={product.id} />
                    );
                })}
            </div>
        </section>
    );
};

export default ListProducts;
