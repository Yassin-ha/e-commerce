import { Link } from "react-router-dom";
import RatingStar from "./RatingStar";


// eslint-disable-next-line react/prop-types
const Card = ({ product }) => {

    // eslint-disable-next-line react/prop-types
    const { id, title, price, thumbnail, discountPercentage, rating } = product;
    return (
        <Link to={`/SingleProduct/${id}`}>
            <div className=" relative h-52 w-full flex justify-center">
                <img src={thumbnail} alt={title} className=" h-full" />
            </div>
            <div className=" leading-9 pl-2">
                <h2 className=" font-semibold">{title}</h2>
                <RatingStar rating={rating} />
                <p>
                    $<span className=" text-xl">{price}</span>{" "}
                    <span className=" text-red-500">-{discountPercentage}%</span>
                </p>
            </div>
        </Link>
    );
};

export default Card;
