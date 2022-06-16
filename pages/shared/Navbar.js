import { BsDiscord, BsTwitter, BsInstagram, BsQuestionCircle } from 'react-icons/bs';
import { FaTelegramPlane, FaGlobeAfrica } from 'react-icons/fa';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
const Navbar = () => {
    return (
        <div>
            <div className="navbar" style={{ color: "#fff" }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <div className="form-control hidden lg:flex">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div className="relative search-input">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block p-3 pl-10 w-80 text-sm text-white border-slate-300 rounded-full bg-[#2F1745]" placeholder="Search for games..." required="" />
                        </div>

                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='hidden lg:flex flex justify-center items-center gap-3 mr-12 text-xl'>
                        <span><a href=""><FaGlobeAfrica /></a></span>
                        <span><a href=""><BsQuestionCircle /></a></span>
                        <span></span>
                        <span><BsTwitter /></span>
                        <span><FaTelegramPlane /></span>
                        <span><BsDiscord /></span>
                    </div>
                    <label for="login-modal" className='btn modal-button text-white rounded-full uppercase px-8 py-1 login mr-5'>Login</label>
                    <label for="signup-modal" className='btn modal-button border-none rounded-full text-white uppercase px-8 py-1 signup'>Sign Up</label>

                </div>
                <style jsx>
                    {
                        `   
                        .login{
                            border-radius: 100rem;
                            //font-size: 1rem;
                            //padding: .5rem 3rem;
                            color: white;
                            //box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
                            border: solid 2px transparent;
                            background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
                            background-origin: border-box;
                            background-clip: content-box, border-box;
                            box-shadow: 2px 1000px 1px #1E0338 inset;
                        }
                        .login:hover{   
                                //background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
                                //border: 1px solid none;
                                box-shadow: none;
                                color: white;
                            }
                                .signup{
                                    background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
                                }
                                .search-input input{
                                    border: 1px solid gray;
                                    font-family: "inter";
                                    font-weight: 600;
                                    font-size: 12px;
                                }
                            `
                    }
                </style>

                <Login/>
                <SignUp/>
            </div>
        </div>
    );
};

export default Navbar;