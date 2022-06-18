import Image from "next/image";
import Link from "next/link";
import promowidebanner from '../../../public/assets/contact/promowide-banner.png';
const PromoWideBanner = () => {
  return (
    <div className="my-5 w-2/3 m-auto ">
        <Link href="/contact">
        <a>
        <Image
        src={promowidebanner}
        width={1412}
        height={295}
        alt=""
        />
        </a>
        </Link>
    </div>
  )
}

export default PromoWideBanner;
