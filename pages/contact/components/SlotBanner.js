import Image from 'next/image';
import casinoribbon from '../../../public/assets/game-img/casino-ribbon.png';

const SlotBanner = () => {
  return (
    <div className="flex justify-center items-center p-5 bg-[#000] bg-opacity-50 mt-3 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      <div>
        <Image src={casinoribbon} alt="" />
      </div>
      <div className="mr-3">
        <h2 className="uppercase font-bold text-3xl lg:text-3xl md:text-xl text-transparent text-[#FD8987]">
          Slot of the week
        </h2>
        <h2 className="mb-3 font-bold text-3xl lg:text-3xl md:text-xl text-transparent text-[#FD8987]">
          $100 slot bonus
        </h2>
        <p className="text-white">
          Every week we top us your account with an extra $100 to try out our
          large selection of slots. Start playing today
        </p>
        <button
          className="btn btn-ghost border-none rounded-full text-white uppercase px-8 py-1 text-xs signup mt-3"
          style={{
            background:
              "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
          }}
        >
          GETTING START
        </button>
      </div>
      <div className="m-2">
        <div className="flex justify-center items-center mt-8">
          <span className="text-white border-slate-100 rounded-full p-3 bg-neutral mr-3">
            18+
          </span>
          <p className="text-white">
            Gambling games might create addiction. Play resonsibly.
          </p>
        </div>
        <div>
          <p className="border p-3 mt-5 rounded border-t-primary border-b-secondary border-l-primary border-r-primary text-white text-center">
            Winning percentage in 2020: 96.89%
          </p>
        </div>
      </div>
    </div>
  );
};
export default SlotBanner;
