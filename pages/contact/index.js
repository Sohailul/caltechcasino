import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import profile from "../../public/assets/icon_profile.png";
import support from "../../public/assets/support.png";
import promobanner from "../../public/assets/contact/promobanner.png";
import { AiFillBell } from "react-icons/ai";
import { BsFillGiftFill } from "react-icons/bs";
import { FaBullhorn, FaHome, FaWallet } from "react-icons/fa";
import { GiCircleCage, GiCherry } from "react-icons/gi";
import { MdSportsFootball } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { SiApachenetbeanside } from "react-icons/si";
import { TbAffiliate } from "react-icons/tb";
import { RiVipDiamondLine } from "react-icons/ri";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Banner from "./sections/Banner";
import ContactBanner from "./sections/ContactBanner";
import Slider from "./sections/Slider";
import Categories from "./sections/Categories";
import Providers from "./sections/Providers";
import SlotBanner from "./sections/SlotBanner";
import PromoWideBanner from "./sections/PromoWideBanner";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Caltechcasino: Contact</title>
        <meta name="description" content="Caltechcasino contact page, Sports, Live casino, rewards, paly to earn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Navbar />
            <Banner />
            <ContactBanner />
            <Slider/>
            <Categories/>
            <SlotBanner/>
            <Providers/>
            <PromoWideBanner/>
            <Footer />
            <div className="flex justify-end mr-8">
              <button className="fixed bottom-32">
                <Image src={support} width={80} height={80} alt="" />
              </button>
            </div>
          </div>

          <div className="drawer-side scrollbar-hide">
            <label
              htmlFor="dashboard-sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="p-4 w-72 text-base-content">
              <li className="flex justify-center items-center">
                <Image src={logo} width={95} height={95} alt="" />
              </li>
              <li>
                <div className="flex justify-center items-center mt-12">
                  <Image
                    src={profile}
                    width={60}
                    height={60}
                    alt="profile_icon"
                  />
                </div>
              </li>
              <li className="profile -mt-12 bg-[#2F1745] rounded-xl">
                <div className="card mt-3">
                  <div className="h-60">
                    <div className="mx-auto mt-12 text-center">
                      <button className="text-white rounded-full uppercase px-12 py-1 login mr-5">
                        Login
                      </button>
                    </div>
                    <div className="flex justify-center items-center gap-3 mt-5">
                      <div className="w-28 bg-[#C4C4C4] bg-opacity-10 shadow-xl h-24 rounded-md">
                        <div className="flex justify-center items-center mt-5 text-3xl text-white text-opacity-50">
                          <AiFillBell />
                        </div>
                        <div className="text-sm text-white text-opacity-50 mt-2 flex justify-center items-center font-bold">
                          <h2>Notifications</h2>
                        </div>
                      </div>
                      <div className="w-28 bg-[#C4C4C4] bg-opacity-10 shadow-xl h-24 rounded-md">
                        <div className="flex justify-center items-center mt-5 text-3xl text-white text-opacity-50">
                          <BsFillGiftFill />
                        </div>
                        <div className="text-sm text-white text-opacity-50 mt-2 flex justify-center items-center font-bold">
                          <h2>Freeplay</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="profile mt-8 bg-[#2F1745] rounded-xl ">
                <div className="card mt-3 w-56 mx-auto">
                  <div>
                    <Link href="">
                      <a className="promotionbanner flex justify-start items-center text-md text-white text-opacity-50 py-3 font-[Inter] bg-[#C4C4C4] bg-opacity-10 p-2 rounded-lg mt-3">
                        <span className="home-icon">
                          <FaBullhorn />
                        </span>
                        &nbsp;&nbsp;Promotions
                      </a>
                    </Link>
                    <div className="bg-[#C4C4C4] bg-opacity-10 px-2 rounded-lg divide-y divide-[#010800] mt-2">
                      <Link href="">
                        <a className="home flex justify-start items-center text-md text-white text-opacity-50 py-3 font-[Inter]">
                          <span className="home-icon">
                            <FaHome />
                          </span>
                          &nbsp;&nbsp;Home
                        </a>
                      </Link>
                      <Link href="">
                        <a className="home flex justify-start items-center text-md text-white text-opacity-50 py-3 font-[Inter]">
                          <span className="home-icon">
                            <GiCircleCage />
                          </span>
                          &nbsp;&nbsp;Live Casino
                        </a>
                      </Link>
                      <Link href="">
                        <a className="home flex justify-start items-center text-md text-white text-opacity-50 py-3 font-[Inter]">
                          <span className="home-icon">
                            <MdSportsFootball />
                          </span>
                          &nbsp;&nbsp;Sport book
                        </a>
                      </Link>
                      <Link href="">
                        <a className="home flex justify-start items-center text-md text-white text-opacity-50 py-3 font-[Inter]">
                          <span className="home-icon">
                            <IoIosRocket />
                          </span>
                          &nbsp;&nbsp;SonicX Rocket
                        </a>
                      </Link>
                      <Link href="">
                        <a className="home flex justify-start items-center text-md text-white text-opacity-50 py-3 font-[Inter]">
                          <span className="home-icon">
                            <GiCherry />
                          </span>
                          &nbsp;&nbsp;Slot Game
                        </a>
                      </Link>
                      <Link href="">
                        <a className="home flex justify-start items-center text-md text-white text-opacity-50 py-3 font-[Inter]">
                          <span className="home-icon">
                            <SiApachenetbeanside />
                          </span>
                          &nbsp;&nbsp;Lottery
                        </a>
                      </Link>
                    </div>
                    <div className="bg-[#C4C4C4] bg-opacity-10 p-2 rounded-lg divide-y divide-[#010800] mt-2 mb-8">
                      <Link href="">
                        <a className="home flex justify-start items-center text-md text-white text-opacity-50 py-3 font-[Inter]">
                          <span className="home-icon">
                            <FaWallet />
                          </span>
                          &nbsp;&nbsp;Wallet
                        </a>
                      </Link>
                      <Link href="">
                        <a className="home flex justify-start items-center text-md text-white text-opacity-50 py-3 font-[Inter]">
                          <span className="home-icon">
                            <TbAffiliate />
                          </span>
                          &nbsp;&nbsp;Affiliate
                        </a>
                      </Link>
                      <Link href="">
                        <a className="home flex justify-start items-center text-md text-white text-opacity-50 py-3 font-[Inter]">
                          <span className="home-icon">
                            <RiVipDiamondLine />
                          </span>
                          &nbsp;&nbsp;VIP Club
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="profile mt-3 text-center">
                <Image src={promobanner} alt="" />
              </li>
            </ul>
            <style jsx>
              {`
                .login {
                  border-radius: 100rem;
                  color: white;
                  border: solid 2px transparent;
                  background-image: linear-gradient(
                      rgba(0, 0, 0, 0),
                      rgba(0, 0, 0, 0)
                    ),
                    linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
                  background-origin: border-box;
                  background-clip: content-box, border-box;
                  box-shadow: 2px 1000px 1px #1e0338 inset;
                }
                .login:hover {
                  box-shadow: none;
                  color: white;
                }
                .promotionbanner:hover {
                  background: linear-gradient(
                    178.18deg,
                    #fd749b -13.56%,
                    #281ac8 158.3%
                  );
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
                .home:hover {
                  background: linear-gradient(
                    178.18deg,
                    #fd749b -13.56%,
                    #281ac8 158.3%
                  );
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
                .home-icon:hover {
                  background-image: linear-gradient(
                    178.18deg,
                    #fd749b -13.56%,
                    #281ac8 158.3%
                  );
                  border-radius: 50%;
                  padding: 5px;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
}
