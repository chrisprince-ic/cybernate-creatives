import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full h-16 fixed top-0 mb-10 bg-darkGray z-30">
      <nav className="relative container px-6 mx-auto flex items-center justify-between p-3 md:px-0">
        <div>
          <h3>
            <span className="text-lightGreenishSkyBlue text-3xl font-bold">
              C
            </span>
            <span className="tex-lg text-grayishLightWhite font-bold">
              ybernate
            </span>
          </h3>
        </div>

        <div className="hidden md:flex space-x-6 pt-2">
          <a
            href="#"
            className="list-none cursor-pointer text-paleGrayishLightWhite text-base hover:brightness-150"
          >
            Home
          </a>
          <a
            href="#skills"
            className="list-none cursor-pointer text-paleGrayishLightWhite text-base hover:brightness-150"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="list-none cursor-pointer text-paleGrayishLightWhite text-base hover:brightness-150"
          >
            Projects
          </a>
          <a
            href="#cyber"
            className="list-none cursor-pointer text-paleGrayishLightWhite text-base hover:brightness-150"
          >
            Cyber
          </a>
          <a
            href="#about"
            className="list-none cursor-pointer text-paleGrayishLightWhite text-base hover:brightness-150"
          >
            About
          </a>
        </div>

        <Link
          to="/hire-us"
          className="hidden md:grid bg-lightOrange h-8 w-28 text-center rounded-md hover:bg-darkOrange md:place-content-center"
        >
          Hire us
        </Link>

        <button
          onClick={() => setToggle((prevState) => !prevState)}
          className={`block ${
            toggle ? 'open' : ''
          } hamburger md:hidden focus:outline-none`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </nav>

      <div className="md:hidden">
        <div
          className={`absolute ${
            toggle ? 'flex' : 'hidden'
          } flex-col items-center self-end py-8 mt-10 space-y-6 font-bold sm:w-auto sm:self-center bg-darkGray left-6 right-6 drop-shadow-md`}
        >
          <a className="text-paleGrayishLightWhite" href="#">
            Home
          </a>
          <a className="text-paleGrayishLightWhite" href="#skills">
            Skills
          </a>
          <a className="text-paleGrayishLightWhite" href="#projects">
            Projects
          </a>
          <a className="text-paleGrayishLightWhite" href="#cyber">
            Cyber
          </a>
          <a className="text-paleGrayishLightWhite" href="#about">
            About
          </a>
        </div>
      </div>
    </header>
  );
}
