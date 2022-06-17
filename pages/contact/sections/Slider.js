import Image from 'next/image';
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import ic1 from "../../../public/assets/contact/ic1.png";
import ic2 from "../../../public/assets/contact/ic2.png";
import ic3 from "../../../public/assets/contact/ic3.png";
import ic4 from "../../../public/assets/contact/ic4.png";
import ic5 from "../../../public/assets/contact/ic5.png";

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)", borderRadius: "50px" }}
        onClick={onClick}
      />
    );
  }
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)", borderRadius: "50px" }}
        onClick={onClick}
      />
    );
  }

const SlickSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='w-3/4 m-auto mt-5 items-center mb-5'>
      <Slider {...settings}>
        <div className='text-center'>
          <Image src={ic1} width={116} height={116} alt="" />
          <h3 className="font-bold text-xl uppercase text-white">Documents</h3>
        </div>
        <div className='text-center'>
          <Image src={ic2} width={116} height={116} alt="" />
          <h3 className="font-bold text-xl uppercase text-white">Account</h3>
        </div>
        <div className='text-center'>
          <Image src={ic3} width={116} height={116} alt="" />
          <h3 className="font-bold text-xl uppercase text-white">Banking</h3>
        </div>
        <div className='text-center'>
          <Image src={ic4} width={116} height={116} alt="" />
          <h3 className="font-bold text-xl uppercase text-white">Login/Register</h3>
        </div>
        <div className='text-center'>
          <Image src={ic5} width={116} height={116} alt="" />
          <h3 className="font-bold text-xl uppercase text-white">Support</h3>
        </div>
        <div className='text-center'>
          <Image src={ic3} width={116} height={116} alt="" />
          <h3 className="font-bold text-xl uppercase text-white">Banking</h3>
        </div>
      </Slider>
    </div>
  );
};
export default SlickSlider;
