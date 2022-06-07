import Image from 'next/image';
import banner from '../../public/assets/banner.png';

const Banner = () => {
    return (
        <div className='bg-accent'>
            <Image
            src={banner}
            alt=""
            />
        </div>
    );
};

export default Banner;