import Slider from "react-slick"


// eslint-disable-next-line react/prop-types
const Mobile = ({images}) => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings} >
             {/* eslint-disable-next-line react/prop-types */}
            {images && images.map((image, index) => {
                return <img className=" h-[255px] !w-fit" key={index} src={image} alt={index} />
            })}
        </Slider>
    )
}

export default Mobile
