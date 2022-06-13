import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/logo.png';
import prodpoker from '../../public/assets/game-img/prod.png';
import casinoright from '../../public/assets/game-img/casino-right.png';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Footer = () => {
  return (
    <div className='bg-[#000] bg-opacity-100' style={{ backgroundImage: "url(/assets/game-img/footer-bg.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="flex justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 px-12">
        <div className="flex items-end w-3/4 lg:-ml-8">
          <Image
            src={prodpoker}
            alt="" />
        </div>
        <div className="w-80 mr-24 mt-3 lg:-ml-16 mb-12 text-white">
          <div className='text-center'>
            <Image
              src={logo}
              alt=""
            />
            <h1 className="text-2xl font-bold mb-3 text-primary">The House of Casino</h1>
          </div>
          <p className='mb-5'>
            Royal Casino is the place where the player join for an awespme casino
            experience,
          </p>
          <p>24 hours a day, 7 days a week, we are here to helps.</p>
          <h1 className="text-2xl font-bold my-5 text-primary">Service</h1>
          <ul>
            <li className='flex items-center'><span><IoMdCheckmarkCircleOutline /></span>&nbsp;Online Gaming License</li>
            <li className='flex items-center'><span><IoMdCheckmarkCircleOutline /></span>&nbsp;Customer Service to Players</li>
            <li className='flex items-center'><span><IoMdCheckmarkCircleOutline /></span>&nbsp;Player retention</li>
          </ul>
          <h1 className="text-2xl font-bold my-5 text-primary">Help</h1>
          <ul>
            <li className='flex items-center'><span><IoMdCheckmarkCircleOutline /></span>&nbsp;How to start an online casino?</li>
          </ul>
        </div>
        <div className="lg:ml-28 w-60 mb-12 text-white lg:mt-24">
          <h1 className="text-2xl font-bold my-5 text-primary">Product</h1>
          <ul>
            <li className='flex items-center'><span><IoMdCheckmarkCircleOutline /></span>&nbsp;White Label casino Solution</li>
            <li className='flex items-center'><span><IoMdCheckmarkCircleOutline /></span>&nbsp;Turn key solution</li>
            <li className='flex items-center'><span><IoMdCheckmarkCircleOutline /></span>&nbsp;Bitcoin casino Solution </li>
            <li className='flex items-center'><span><IoMdCheckmarkCircleOutline /></span>&nbsp;Casino Games</li>
            <li className='flex items-center'><span><IoMdCheckmarkCircleOutline /></span>&nbsp;Sport betting</li>
            <li className='flex items-center'><span><IoMdCheckmarkCircleOutline /></span>&nbsp;Affiliate Platform</li>
            <li className='flex items-center'><span><IoMdCheckmarkCircleOutline /></span>&nbsp;Auctions & Markeplaces</li>
          </ul>
        </div>
        <div className="lg:ml-44 w-52 mb-12 text-white lg:mt-24">
          <h1 className="text-2xl font-bold my-5 text-primary">Go mobile</h1>
          <p className="mb-5">Acess Royal Casino basically everywhere you go</p>
          <Link href="/">
            <a className="font-bold link">Download App</a>
          </Link>
          <br />
          <button className='btn btn-ghost border-none rounded-full text-white uppercase px-12 py-3 text-xs signup my-5' style={{ background: "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)" }}>Contact Us</button>
        </div>
        <div className="flex items-end">
          <div className='text-white -ml-96 mb-12 text-xs'>
            <p>© 2022 Royal Casino Limited or affiliate companies. The trademarks are owned by the Royal Casino group of companies and used under liense. All rights reserved</p>
          </div>
          <Image
            src={casinoright}
            alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;