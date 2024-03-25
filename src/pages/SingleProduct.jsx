import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { HashLoader } from "react-spinners";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { DesktopSize, Mobile } from "../components/imagesDisplay/indexImg";
import { Card, RatingStar, Clicked} from '../components/ComponentIndex'


const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await resp.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMoreProducts = async () => {
    try {
      const resp = await fetch(
        `https://dummyjson.com/products/category/${product.category}`
      );
      const data = await resp.json();
      const listProducts = data.products.filter(item => item.id !== product.id)
      setSimilarProducts(listProducts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    setClicked(false);
    window.scroll(0, 0);
  }, [id]);
  useEffect(() => {
    fetchMoreProducts();
    window.scroll(0, 0);
  }, [product]);

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

  if (loading) {
    return (
      <div className="flex justify-center h-[70vh] items-center">
        <HashLoader color="#36d7b7" />
      </div>
    );
  }

  const {
    brand,
    description,
    images,
    price,
    title,
    rating,
    discountPercentage,
    category,
    stock,
  } = product;
  return (
    <section className="container">
      <Link to={"/shopping"} className="btn w-fit flex items-center gap-2">
        <FaArrowLeft /> Go Back
      </Link>
      <div>
        {clicked ? (
        <Clicked images={images} />
      ) : (
        <div className=" pt-6 sm:flex sm:gap-5 ">
          {isMobile ? (
            <Mobile images={images} title={title} />
          ) : (
            <DesktopSize images={images} title={title} />
          )}
          <div className="max-w-[500px] mt-5 leading-8">
            <h1 className=" text-2xl font-bold capitalize">{title}</h1>
            <div className="flex items-center gap-2">
              <RatingStar rating={rating} />
              <span>{rating}</span>
            </div>
            <p className=" font-semibold">
              Price: <span className=" font-thin">${price}</span>
            </p>
            <p className=" font-semibold">
              Brand: <span className=" font-thin">{brand}</span>
            </p>
            <p className=" font-semibold">
              Category: <span className=" font-thin">{category}</span>
            </p>
            <p className=" font-semibold">
              Stock: <span className=" font-thin">{stock}</span>
            </p>

            <p className=" font-semibold">
              Discount Percentage:{" "}
              <span className=" font-thin">-{discountPercentage}%</span>
            </p>
            <p>{description}</p>
            <button
              onClick={() => {
                dispatch(addToCart(product));
                setClicked(true);
              }}
              className=" flex items-center gap-6 mt-5 bg-blue-500 text-white px-2 py-2 rounded-md text-xl"
            >
              Add to cart
              <MdOutlineAddShoppingCart />
            </button>
          </div>
        </div>
      )}
      <div className="my-10">
        <h1 className=" text-xl font-bold my-4">More Products</h1>
        <div className=" grid mx-5 sm:mx-0 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {similarProducts.map((product) => {
            return <Card product={product} key={product.id} />;
          })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default SingleProduct;
