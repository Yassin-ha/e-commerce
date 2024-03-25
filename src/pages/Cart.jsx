import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, total } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    console.log(cartItems);

    if (cartItems.length === 0) {
        return (
            <div className="flex h-[60vh] justify-center items-center">
                <div className="text-center">
                    <h1 className="font-bold text-2xl mb-5">
                        Your shopping cart is empty
                    </h1>
                    <Link to={"/shopping"} className="btn">
                        Back Shopping
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <section className=" container py-5">
            <Link to={"/shopping"} className=" btn">
                back Shopping
            </Link>
            <h1 className=" font-semibold text-xl my-5">Shopping Cart</h1>
            <div className="flex flex-col sm:flex-row gap-10">
                <div className="w-full sm:w-3/4 ">
                    {cartItems.map((item) => {
                        const { id, title, price, thumbnail, amount, stock } = item;
                        return (
                            <article className="flex items-center flex-col sm:flex-row mb-10 gap-6 w-full " key={id}>
                                <div className=" w-4/5 sm:h-32 flex justify-center sm:w-52">
                                    <img src={thumbnail} alt={title} className="h-full" />
                                </div>
                                <div className="flex flex-auto w-full ">
                                    <div className="pt-2 w-full leading-7">
                                        <h2>{title}</h2>
                                        <p>${price}</p>
                                        <p>in stock: {stock}</p>
                                        <button
                                            onClick={() => dispatch(removeItem(item))}
                                            className="btn mt-5"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <button
                                            onClick={() => dispatch(increase(item))}
                                            className="block"
                                        >
                                            <MdKeyboardArrowUp />
                                        </button>
                                        <span className="block">{amount}</span>
                                        <button onClick={() => dispatch(decrease(item))}>
                                            <MdKeyboardArrowDown />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
                <div className=" mt-2 sm:w-1/4">
                    <h3 className=" text-xl font-semibold pb-2">Resume</h3>
                    <div className="flex w-full">
                        <p className=" font-semibold mr-auto ">Total:</p>
                        <p className=" text-xl font-semibold">US ${total}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
