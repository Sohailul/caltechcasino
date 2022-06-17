import Image from "next/image";
import banner from '../../../public/assets/contact/banner-2.png';

const ContactBanner = () => {
  return (
    <div className="flex justify-evenly items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-8">
        <div>
            <Image
            src={banner}
            alt=""
            />
        </div>
        <div>
            <h1 className="text-5xl uppercase font-black">Contact</h1>
            <h3 className="text-white uppercase text-2xl tracking-widest leading-loose">Get In Touch</h3>
            <p className="font-semibold leading-5 tracking-wide text-white text-sm">If you have any questions or enquiry about your Royal Casino account, please contact us.</p>
            <button className='btn border-none rounded-full text-black uppercase px-8 py-1 contact mt-5'>Contact</button>
        </div>

        <style>
            {
                `
                h1{
                    background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .contact{
                    background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
                }
                `
            }
        </style>
    </div>
  )
}

export default ContactBanner;
