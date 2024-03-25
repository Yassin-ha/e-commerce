
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const RatingStar = ({rating}) => {
    const starComponents = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        starComponents.push(<FaStar key={i} className=' text-orange-400' />);
    }

    if (hasHalfStar) {
        starComponents.push(<FaStarHalfAlt className=' text-orange-400' key={starComponents.length} />);
    }

    const remainingStars = 5 - starComponents.length;
    for (let i = 0; i < remainingStars; i++) {
        starComponents.push(<FaRegStar key={starComponents.length} />);
    }

    return <div className='flex'>{starComponents}</div>;
};

export default RatingStar;
