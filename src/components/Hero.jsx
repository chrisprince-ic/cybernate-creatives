import Chris from '../assets/chris.svg';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="container mx-auto mt-32 flex flex-col text-center space-y-4 md:flex-row md:text-left md:justify-between ">
      <div className="max-w-md flex flex-col space-y-8 md:w-1/2">
        <p>
          <span>👇</span>
          <span className="ml-3 text-lightGreenishSkyBlue text-sm">
            redifined web experiences by
          </span>
        </p>

        <h1 className="text-6xl font-bold text-grayishLightWhite leading-tight">
          Cybernated Creatives
        </h1>
        <div className="max-w-sm mx-auto md:mx-0">
          <p className="text-paleGrayishLightWhiteOpac text-base px-6 leading-snug mb-3 md:px-0">
            Professional web design and software development services for a
            stunning online presence .
          </p>
          <p className="text-paleGrayishLightWhiteOpac text-base px-6 leading-snug md:px-0">
            Here at cybernated creatives we provide you with web experiences
            you've never seen before.
          </p>
        </div>

        <div className="max-w-sm mx-auto flex space-x-4 md:mx-0">
          <a
            href="#skills"
            className="hidden bg-lightOrange py-3 px-4 text-center font-medium rounded-full md:block md:py-2 md:rounded-md hover:bg-darkOrange"
          >
            Explore More
          </a>
          <Link
            to={'/hire-us'}
            className="bg-lightOrange py-3 px-4 text-center font-medium rounded-md hover:bg-darkOrange md:hidden"
          >
            Hire Us
          </Link>
          {/* <p className="hidden self-center text-lightGreenishSkyBlue text-sm underline cursor-pointer md:block hover:brightness-150">
            Cyber Programs
          </p> */}
        </div>
      </div>

      <img
        className="hidden md:block"
        src={Chris}
        alt="Ikirezi Christian Software engineer at cyber"
      />
    </div>
  );
}
