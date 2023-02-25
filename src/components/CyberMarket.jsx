import finances from '../assets/finances.jpg';
import { BiPhoneCall } from 'react-icons/bi';

export default function CyberMarket() {
  return (
    <div className="h-[100vh] w-full relative bg-lightGray">
      <div className="absolute top-0 h-full w-full">
        <img
          className="h-full w-full object-cover"
          src={finances}
          alt="business"
        />
      </div>
      <div className="h-full w-full absolute top-0 bg-darkGrayOpac">
        <div className="container mx-auto pt-40 flex flex-col space-y-8">
          <h1 className="text-5xl text-center nunito font-semibold text-lightOrange md:text-7xl">
            Cyber Marketing Program
          </h1>

          <h3 className="text-center text-xl text-lightGreenishSkyBlue">
            Introducing the cyber marketing program
          </h3>

          <p className="max-w-2xl text-center text-base leading-relaxed px-6 text-paleGrayishLightWhite self-center md:text-lg md:leading-normal md:px-0">
            This is a digital marketing program targeting companies,individuals
            and professionals who want to boost their online visibility whether
            it is to showcase their products or to show potential clients that
            they are present. We are here for you and ready at anytime to
            present you to the world, and bring countless and limitless
            opportunities at your disposal.
          </p>

          <div className="self-center">
            <a
              href="tel:+250789048643"
              className="bg-lightOrange py-3 px-4 text-center font-medium rounded-full md:py-2 md:rounded-md hover:bg-darkOrange"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
