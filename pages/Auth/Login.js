import { FaUserAlt } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import logo from "../../public/assets/logo.png";
import Image from "next/image";

const Login = () => {
  return (
    <div>
      <input type="checkbox" id="login-modal" className="modal-toggle" />
      <label htmlFor="login-modal" className="modal cursor-pointer">
        <label className="modal-bg p-8 modal-box max-w relative" htmlFor="">
          <div className="text-center">
            <Image src={logo} width={95} height={95} alt="logo" />
          </div>
          <h3 className="font-bold text-lg text-center mb-5 uppercase">
            Royal Casino Login
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
                className="w-full -ml-10 pl-10 pr-3 py-2 outline-none bg-black bg-opacity-0 border-b-2 border-[#000] text-[#fff]"
                placeholder="Password"
                required
              />
            </div>
            <p className="my-5 text-gray-300">Forgot Username or Password?</p>
            <button className="btn border-none rounded-full text-[#000] uppercase px-8 py-1 loginbtn block m-auto">
              Login
            </button>
            <div className="mt-3 text-center">
              <label htmlFor="remember" className="checkbox">
                <span className="mr-3">Remember me?</span>
                <input
                  type="checkbox"
                  className="checkmark"
                  id="remember"
                  name="remember"
                  value="login"
                />
              </label>
            </div>
          </form>
          <p className="font-bold text-sm text-center mt-12">New Member?</p>
          <div className="text-center mt-5">
            <button className="btn text-white rounded-full uppercase px-8 py-1 signupbtn uppercase">
              Sign Up
            </button>
          </div>
        </label>
      </label>
      <style>
        {`
          .modal-bg{
            background-image: url(/assets/login/log-background1.png);
            background-repeat: no-repeat;
            background-position: center;
          }
          .loginbtn{
            background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
        }

        input::placeholder{
          color: #fff;
          opacity: 1;
        }

        .signupbtn{
          border-radius: 100rem;
          color: white;
          border: solid 2px transparent;
          background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
          background-origin: border-box;
          background-clip: content-box, border-box;
          box-shadow: 2px 1000px 1px #272525 inset;
      }
      .signupbtn:hover{   
              box-shadow: none;
              color: black;
          }

          .checkmark{
            accent-color: #FD749B;
          }
          `}
      </style>
    </div>
  );
};
export default Login;
