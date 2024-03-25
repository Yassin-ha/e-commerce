import { FaCheck } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Clicked = ({ images }) => {
  return (
    <div className="flex items-center flex-col sm:flex-row gap-5 mt-5">
      <img src={images[0]} alt="product image" className=" h-40" />
      <h1 className="flex gap-2 items-center">
        <FaCheck className=" text-green-600 " />
        <span>Add to cart</span>
      </h1>
    </div>
  );
};

export default Clicked;
