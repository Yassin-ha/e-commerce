import { Link } from "react-router-dom";
import CarouselData from "../components/CarouselData";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const resp = await fetch(`https://dummyjson.com/products`);
      const products = await resp.json();
      setProducts(products.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />
  }
  return (
    <section className=" relative">
      <CarouselData products={products} start={0} end={10} />
      <CarouselData
        products={products}
        start={10}
        end={20}
        isRtl={true}
        margin={4}
      />
      <CarouselData products={products} start={20} end={30} />
      <div className=" absolute md:shadow-3xl md:shadow-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-amber-100">
        <Link
          to={"/Shopping"}
          className=" text-xl sm:text-2xl bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
        >
          Start Shopping
        </Link>
      </div>
    </section>
  );
};

export default Home;
