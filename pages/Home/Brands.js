import Image from 'next/image';
import brand1 from '../../public/assets/brand-logo/1.png';
import brand2 from '../../public/assets/brand-logo/2.png';
import brand3 from '../../public/assets/brand-logo/3.png';
import brand4 from '../../public/assets/brand-logo/4.png';
import brand5 from '../../public/assets/brand-logo/5.png';
import brand6 from '../../public/assets/brand-logo/6.png';
import brand7 from '../../public/assets/brand-logo/7.png';

const Brands = () => {
    return (
        <div className='mt-12'>
            <h1 className="m-2 text-xs text-left font-bold mb-5 mt-5"><span className="w-60 p-2 text-white text-xl border-l-2 border-l-primary" style={{ background: "linear-gradient(90.19deg, rgba(41, 39, 39, 0.6) 9.31%, rgba(41, 39, 39, 0) 108.49%)" }}>Provider</span></h1>
            <div className='m-5 mt-12 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2'>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand1}
                        width={85}
                        height={31}
                        alt=""
                    />
                </div>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand2}
                        width={110}
                        height={88}
                        alt=""
                    />
                </div>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand3}
                        width={107}
                        height={84}
                        alt=""
                    />
                </div>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand4}
                        width={116}
                        height={39}
                        alt=""
                    />
                </div>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand5}
                        width={120}
                        height={40}
                        alt=""
                    />
                </div>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand6}
                        width={161}
                        height={99}
                        alt=""
                    />
                </div>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand7}
                        width={115}
                        height={43}
                        alt=""
                    />
                </div>
            </div>
            <div className='mx-5 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mt-5 gap-2'>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand1}
                        width={85}
                        height={31}
                        alt=""
                    />
                </div>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand2}
                        width={110}
                        height={88}
                        alt=""
                    />
                </div>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand3}
                        width={107}
                        height={84}
                        alt=""
                    />
                </div>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand4}
                        width={116}
                        height={39}
                        alt=""
                    />
                </div>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand5}
                        width={120}
                        height={40}
                        alt=""
                    />
                </div>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand6}
                        width={161}
                        height={99}
                        alt=""
                    />
                </div>
                <div className='flex justify-center items-center max-w px-2 h-20 bg-[#2E2F2E] bg-opacity-50 rounded'>
                    <Image
                        src={brand7}
                        width={115}
                        height={43}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Brands;