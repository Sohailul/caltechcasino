import { FaUserAlt } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { RiSettingsFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsCheckCircleFill } from "react-icons/bs";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <div>
      <input type="checkbox" id="signup-modal" className="modal-toggle" />
      <label htmlFor="signup-modal" className="modal cursor-pointer">
        <label className="modals-bg p-8 modal-box max-w relative" htmlFor="">
          <div className="text-center">
            <Image src={logo} width={95} height={95} alt="logo" />
          </div>
          <h3 className="font-bold text-lg text-center mb-5 uppercase">
            Royal Casino Sign Up
          </h3>
          <form>
            <div className="flex">
              <div
                className="w-1 h-8"
                style={{
                  background:
                    "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                }}
              ></div>
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <FaUserAlt
                  style={{
                    background:
                      "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                    padding: "2px",
                    borderRadius: "50px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <input
                type="text"
                name="fullname"
                className="w-full -ml-10 pl-10 pr-3 py-2 outline-none bg-black bg-opacity-0 border-b-2 border-[#000] text-[#fff]"
                placeholder="Full name"
                required
              />
            </div>
            <div className="flex mt-3">
              <div
                className="w-1 h-8"
                style={{
                  background:
                    "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                }}
              ></div>
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <RiSettingsFill
                  style={{
                    background:
                      "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                    padding: "2px",
                    borderRadius: "50px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <input
                type="text"
                name="username"
                className="w-full -ml-10 pl-10 pr-3 py-2 outline-none bg-black bg-opacity-0 border-b-2 border-[#000] text-[#fff]"
                placeholder="Username"
                required
              />
            </div>
            <div className="flex mt-3">
              <div
                className="w-1 h-8"
                style={{
                  background:
                    "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                }}
              ></div>
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <MdEmail
                  style={{
                    background:
                      "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                    padding: "2px",
                    borderRadius: "50px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <input
                type="email"
                name="email"
                className="w-full -ml-10 pl-10 pr-3 py-2 outline-none bg-black bg-opacity-0 border-b-2 border-[#000] text-[#fff]"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex mt-3">
              <div
                className="w-1 h-8"
                style={{
                  background:
                    "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                }}
              ></div>
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <BsFillTelephoneFill
                  style={{
                    background:
                      "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                    padding: "2px",
                    borderRadius: "50px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <input
                type="number"
                name="phone"
                className="w-full -ml-10 pl-10 pr-3 py-2 outline-none bg-black bg-opacity-0 border-b-2 border-[#000] text-[#fff]"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="flex mt-3">
              <div
                className="w-1 h-8"
                style={{
                  background:
                    "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                }}
              ></div>
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <IoMdKey
                  style={{
                    background:
                      "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                    padding: "2px",
                    borderRadius: "50px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <input
                type="password"
                name="password"
                className="w-full -ml-10 pl-10 pr-3 py-2 outline-none bg-black bg-opacity-0 border-b-2 border-[#000] text-[#fff]"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex mt-3">
              <div
                className="w-1 h-8"
                style={{
                  background:
                    "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                }}
              ></div>
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <IoMdKey
                  style={{
                    background:
                      "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                    padding: "2px",
                    borderRadius: "50px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <input
                type="password"
                name="password"
                className="w-full -ml-10 pl-10 pr-3 py-2 outline-none bg-black bg-opacity-0 border-b-2 border-[#000] text-[#fff]"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="flex mt-3">
              <div
                className="w-1 h-8"
                style={{
                  background:
                    "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                }}
              ></div>
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <BsCheckCircleFill
                  style={{
                    backgroundImage:
                      "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                    padding: "2px",
                    borderRadius: "50px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <input
                type="text"
                name="sponsorid"
                className="w-full -ml-10 pl-10 pr-3 py-2 outline-none bg-black bg-opacity-0 border-b-2 border-[#000] text-[#fff]"
                placeholder="Sponsor ID (Optional)"
                required
              />
            </div>
            <button className="btn border-none rounded-full text-black uppercase px-8 py-1 regbtn block m-auto mt-5">
              Register
            </button>
            <div className="flex justify-center items-center mt-5">
              <input
                type="checkbox"
                className="checkmark mr-3"
                id="remember"
                name="remember"
                value="login"
              />
              <label htmlFor="remember" className="text-xs">
                I’m over 18 years of age and accept these{" "}
                <Link href="https://google.com">
                  <a className="underline">
                    Term and Conditions and Privacy Policy
                  </a>
                </Link>
              </label>
            </div>
          </form>
          <p className="font-bold text-sm text-center mt-24">
            Already have an Account?
          </p>
          <div className="mt-8">
            <button className="btn text-white rounded-full uppercase px-8 py-1 logbtn uppercase block m-auto">
              Login
            </button>
          </div>
        </label>
      </label>
      <style>
        {`
          .modals-bg{
            background-image: url(/assets/login/reg-background2.png);
            background-repeat: no-repeat;
            background-position: center;
          }
          .regbtn{
            background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
        }

        input::placeholder{
          color: #fff;
          opacity: 1;
        }

        .checkmark{
          accent-color: #FD749B;
        }

        .logbtn{
          border-radius: 100rem;
          color: white;
          border: solid 2px transparent;
          background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
          background-origin: border-box;
          background-clip: content-box, border-box;
          box-shadow: 2px 1000px 1px #272525 inset;
      }
      .logbtn:hover{   
              box-shadow: none;
              color: black;
          }
          `}
      </style>
    </div>
  );
};
export default SignUp;
