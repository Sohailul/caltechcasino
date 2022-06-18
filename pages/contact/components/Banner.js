import Image from 'next/image';
import banner from '../../../public/assets/contact/banner.png';

const Banner = () => {
  return (
    <div className='bg-[#1E0338]'>
            <Image
            src={banner}
            alt=""
            />
        </div>
  )
}
export default Banner;
