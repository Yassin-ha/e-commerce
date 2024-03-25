import { Link } from "react-router-dom";
import Slider from "react-slick";

// eslint-disable-next-line react/prop-types
const CarouselData = ({ isRtl, start, end, products}) => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        rtl: isRtl,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div className={` overflow-x-hidden`}>
            <Slider {...settings}>
                 {/* eslint-disable-next-line react/prop-types */}
                {products.slice(start, end).map((product) => {
                    const { images, id, title } = product;
                    const image = images[0];
                    return (
                        <Link
                            to={`/singleProduct/${id}`}
                            title={title}
                            key={id}
                            className=" h-40 md:h-48"
                        >
                            <img src={image} alt={title} className="h-full" />
                        </Link>
                    );
                })}
            </Slider>
        </div>
    );
};

export default CarouselData;
