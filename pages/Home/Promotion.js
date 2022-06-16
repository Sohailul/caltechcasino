import { useState, useEffect } from "react";
import Image from 'next/image';
import banner3 from '../../public/assets/game-img/banner-3.png';
import banner4 from '../../public/assets/game-img/banner-4.png';
import banner5 from '../../public/assets/game-img/banner-5.png';
import banner6 from '../../public/assets/game-img/banner-6.png';
import earnbig from '../../public/assets/game-img/earn-big.png';
import play1 from '../../public/assets/game-img/play-1.png';
import play2 from '../../public/assets/game-img/play-2.png';
import player from '../../public/assets/game-img/sports-player.png';
import casinoribbon from '../../public/assets/game-img/casino-ribbon.png';
import Brands from './Brands';


const Promotion = () => {
    const [winners, setWinners] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('/winners.json')
            .then((res) => res.json())
            .then((data) => {
                setWinners(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='promotion'>
            <Image
                src={earnbig}
                alt=""
            />
            <h1 className="text-xs p-2 text-left font-bold mb-5 mt-5"><span className="w-60 p-2 text-white text-xl border-l-2 border-l-primary" style={{ background: "linear-gradient(90.19deg, rgba(41, 39, 39, 0.6) 9.31%, rgba(41, 39, 39, 0) 108.49%)" }}>Promotions</span></h1>
            <div className='flex justify-center gap-1'>
                <div className='grid gap-2'>
                    <Image
                        src={banner3}
                        alt=''
                    />
                    <Image
                        src={banner4}
                        alt=''
                    />
                </div>
                <div className='grid gap-2'>
                    <Image
                        src={banner5}
                        alt=''
                    />
                </div>
                <div className='grid gap-2'>
                    <Image
                        src={banner6}
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
                    
                    ::-webkit-scrollbar {
                    width: 10px;
                    }


                    ::-webkit-scrollbar-track {
                    background: #000; 
                    }
                    

                    ::-webkit-scrollbar-thumb {
                    background: #555;
                    border-radius: 30px;
                    }


                    ::-webkit-scrollbar-thumb:hover {
                    background: #fff; 
                    }
                    `
                }
            </style>

            <h1 className='text-[#AB51AC] m-5 text-5xl'>FAQs</h1>
            <div>
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2'>
                    <div className='lg:max-w-md md:max-w my-auto faq ml-5'>
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
                    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 mx-3'>
                        <div className='flex justify-center gap-2 lg:gap-24 mb-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                            <div className="w-fit bg-[#191A17] bg-opacity-50 overflow-x-hidden overflow-scroll h-72 py-3 mt-5">
                                <div className="overflow-hidden w-full">
                                    <table className="lg:w-72">
                                        <caption className='text-[#AB51AC] text-2xl'>Recent Winners</caption>
                                        <tbody>
                                            {
                                                winners?.map((winner) => {
                                                    return (
                                                        <tr className="whitespace-nowrap" key={winner.id}>
                                                            <td className="px-3 py-4">
                                                                <Image 
                                                                src={winner.flag}
                                                                width={36}
                                                                height={16}
                                                                alt=""
                                                                />
                                                            </td>
                                                            <td className="px-3 py-4 text-center">
                                                                <div className="text-sm text-gray-300">
                                                                    {winner.name}
                                                                </div>
                                                            </td>
                                                            <td className=" px-5 py-4">
                                                                <div className="text-sm text-gray-300">${winner.amount}</div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='max-w h-auto verticle-banner flex gap-2 mt-5'>
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
                        <div>
                            <Image
                                src={player}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center p-5 bg-[#000] bg-opacity-50 mt-3 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                <div>
                    <Image
                        src={casinoribbon}
                        alt=""
                    />
                </div>
                <div className='mr-3'>
                    <h2 className='uppercase font-bold text-3xl md:text-xl text-transparent text-[#FD8987]'>Slot of the week</h2>
                    <h2 className='mb-3 font-bold text-3xl md:text-xl text-transparent text-[#FD8987]'>$100 slot bonus</h2>
                    <p className='text-white'>Every week we top us your account with an extra $100 to try out our large selection of slots. Start playing today</p>
                    <button className='btn btn-ghost border-none rounded-full text-white uppercase px-8 py-1 text-xs signup mt-3' style={{ background: "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)" }}>GETTING START</button>

                </div>
                <div className='m-2'>
                    <div className='flex justify-center items-center mt-8'>
                        <span className='text-white border-slate-100 rounded-full p-3 bg-neutral mr-3'>18+</span><p className='text-white'>Gambling games might create addiction. Play resonsibly.</p>
                    </div>
                    <div>
                        <p className='border p-3 mt-5 rounded border-t-primary border-b-secondary border-l-primary border-r-primary text-white text-center'>Winning percentage in 2020: 96.89%</p>
                    </div>
                </div>
            </div>
            <Brands />
        </div>
    );
};

export default Promotion;