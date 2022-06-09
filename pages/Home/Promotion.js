import Image from 'next/image';
import banner3 from '../../public/assets/game-img/banner-3.png';
import banner4 from '../../public/assets/game-img/banner-4.png';
import banner5 from '../../public/assets/game-img/banner-5.png';
import banner6 from '../../public/assets/game-img/banner-6.png';
import earnbig from '../../public/assets/game-img/earn-big.png';
import flag from '../../public/assets/game-img/flag.png';
import play1 from '../../public/assets/game-img/play-1.png';
import play2 from '../../public/assets/game-img/play-2.png';
import player from '../../public/assets/game-img/sports-player.png';
import casinoribbon from '../../public/assets/game-img/casino-ribbon.png';


const Promotion = () => {
    return (
        <div className='promotion'>
            <Image
                src={earnbig}
                alt=""
            />
            <h1 className="text-xs p-2 text-left font-bold mb-5 mt-5"><span className="w-60 p-4 text-white text-xl border-l-4 border-l-primary" style={{ background: "linear-gradient(90.19deg, rgba(41, 39, 39, 0.6) 9.31%, rgba(41, 39, 39, 0) 108.49%)" }}>Promotions</span></h1>
            <div className='flex justify-center gap-1'>
                <div className='w-1/2 grid sm:grid-cols-1 md:grid-cols-1 gap-1'>
                    <Image
                        src={banner3}
                        width={874}
                        height={187}
                        alt=''
                    />
                    <Image
                        src={banner4}
                        width={874}
                        height={193}
                        alt=''
                    />
                </div>
                <div>
                    <Image
                        src={banner5}
                        width={292}
                        height={265}
                        alt=''
                    />
                </div>
                <div>
                    <Image
                        src={banner6}
                        width={292}
                        height={265}
                        alt=''
                    />
                </div>

            </div>
            <style>
                {
                    `
                    .promotion{
                        background-image: url(/assets/game-img/bg-promo.png);
                    }
                    `
                }
            </style>

            <h1 className='text-[#AB51AC] m-5 text-5xl'>FAQs</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className='max-w-md my-auto faq ml-5'>
                    <div tabIndex="0" className="collapse collapse-arrow border border-slate-300 bg-[#000] bg-opacity-50">
                        <div className="collapse-title text-sm font-bold text-white">
                            What is Royal Casino?
                        </div>
                        <div className="collapse-content text-white">
                            <p>No need worry about downloading the casino software; play straight from the browser of your choice! Play all the latest and greatest games boasting HD graphics.</p>
                        </div>
                    </div>
                    <div tabIndex="0" className="collapse collapse-arrow border border-slate-300 bg-[#000] bg-opacity-50">
                        <div className="collapse-title text-sm font-bold text-white">
                            How do I join Royal Casino as a member
                        </div>
                        <div className="collapse-content text-white">
                            <p>No need worry about downloading the casino software; play straight from the browser of your choice! Play all the latest and greatest games boasting HD graphics.</p>
                        </div>
                    </div>
                    <div tabIndex="0" className="collapse collapse-arrow border border-slate-300 bg-[#000] bg-opacity-50">
                        <div className="collapse-title text-sm font-bold text-white">
                            How do I join Royal Casino as a member
                        </div>
                        <div className="collapse-content text-white">
                            <p>No need worry about downloading the casino software; play straight from the browser of your choice! Play all the latest and greatest games boasting HD graphics.</p>
                        </div>
                    </div>
                    <div tabIndex="0" className="collapse collapse-arrow border border-slate-300 bg-[#000] bg-opacity-50">
                        <div className="collapse-title text-sm font-bold text-white">
                            Where can I redeem my earning?
                        </div>
                        <div className="collapse-content text-white">
                            <p>No need worry about downloading the casino software; play straight from the browser of your choice! Play all the latest and greatest games boasting HD graphics.</p>
                        </div>
                    </div>
                    <div tabIndex="0" className="collapse collapse-arrow border border-slate-300 bg-[#000] bg-opacity-50">
                        <div className="collapse-title text-sm font-bold text-white">
                            Where can I redeem my earning?
                        </div>
                        <div className="collapse-content text-white">
                            <p>No need worry about downloading the casino software; play straight from the browser of your choice! Play all the latest and greatest games boasting HD graphics.</p>
                        </div>
                    </div>
                    <div tabIndex="0" className="collapse collapse-arrow border border-slate-300 bg-[#000] bg-opacity-50">
                        <div className="collapse-title text-sm font-bold text-white">
                            Where can I redeem my earning?
                        </div>
                        <div className="collapse-content text-white">
                            <p>No need worry about downloading the casino software; play straight from the browser of your choice! Play all the latest and greatest games boasting HD graphics.</p>
                        </div>
                    </div>
                    <div tabIndex="0" className="collapse collapse-arrow border border-slate-300 bg-[#000] bg-opacity-50">
                        <div className="collapse-title text-sm font-bold text-white">
                            Where can I redeem my earning?
                        </div>
                        <div className="collapse-content text-white">
                            <p>No need worry about downloading the casino software; play straight from the browser of your choice! Play all the latest and greatest games boasting HD graphics.</p>
                        </div>
                    </div>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2'>
                    <div className='flex justify-center gap-2 mb-2 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                        <div className="w-fit bg-[#191A17] bg-opacity-50 overflow-x-hidden h-96 py-5 pr-5">
                            <div className="sm:-mx-6 lg:-mx-8">
                                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-12">
                                    <div className="overflow-hidden">
                                        <table className="text-center">
                                            <caption className='text-[#AB51AC] text-2xl'>Recent Winners</caption>
                                            <tbody>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Monica L.Mashburn
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $340.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-2 whitespace-nowrap text-sm">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={flag} alt="" />
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-300 px-4 py-2 whitespace-nowrap">
                                                        Ida M.Zendejas
                                                    </td>
                                                    <td className="text-sm text-white px-4 py-2 whitespace-nowrap">
                                                        $349.00
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='verticle-banner flex gap-2'>
                            <Image
                                src={play1}
                                alt=""
                            />
                            <Image
                                src={play2}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className='max-w-3xl'>
                        <Image
                            src={player}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center p-5 bg-[#000] bg-opacity-50 mt-3 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                <div>
                    <Image
                        src={casinoribbon}
                        alt=""
                    />
                </div>
                <div>
                    <h2 className='uppercase font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Slot of the week</h2>
                    <h2 className='mb-3 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>$100 slot bonus</h2>
                    <p className='text-white'>Every week we top us your account with an extra $100 to try out our large selection of slots. Start playing today</p>
                    <button className='btn btn-ghost border-none rounded-full text-white uppercase px-8 py-1 text-xs signup mt-3' style={{ background: "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)" }}>GETTING START</button>

                </div>
                <div>
                    <div className='flex justify-center items-center mt-8'>
                        <span className='text-white border-slate-100 rounded-full p-3 bg-neutral mr-3'>18+</span><p className='text-white'>Gambling games might create addiction. Play resonsibly.</p>
                    </div>
                    <div>
                        <p className='border p-3 mt-5 rounded border-t-primary border-b-secondary border-l-primary border-r-primary text-white'>Winning percentage in 2020: 96.89%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;