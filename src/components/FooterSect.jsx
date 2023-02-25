import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import { useState } from 'react';

export default function FooterSect() {
  const [inputData, setInputData] = useState('');

  function sendInputData() {
    setInputData('');

    alert('Thanks for subscribing to our newsletter');
  }

  return (
    <footer className=" min-h-[30vh] min-w-full p-4">
      <div className="container mx-auto pb-3 flex flex-col-reverse items-center space-y-8 md:flex-row md:justify-between md:items-start">
        <p className="text-sm pt-4 font-medium text-veryLightGreen md:hidden">
          Copyright &copy; 2023, All Rights Reserved
        </p>
        <div className="flex flex-col space-y-4 md:space-y-8">
          <h3 className="text-center md:text-left">
            <span className="text-lightGreenishSkyBlue text-3xl font-bold">
              C
            </span>
            <span className="tex-lg text-grayishLightWhite font-bold">
              ybernate
            </span>
          </h3>

          <div className="flex space-x-3">
            <a target="_blank" href="cybernatecreatives@gmail.com">
              <img
                className=" h-6 w-6 rounded-full cursor-pointer"
                src={google}
                alt="google"
              />
            </a>
            <a target="_blank" href="https://www.twitter.com">
              <img
                className="h-6 w-6 rounded-full cursor-pointer"
                src={twitter}
                alt="twitter"
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/cybernatecreatives"
            >
              <img
                className="h-6 w-6 rounded-full cursor-pointer"
                src={instagram}
                alt="instagram"
              />
            </a>
            <a target={'_blank'} href="https://www.facebook.com">
              <img
                className="h-6 w-6 rounded-full cursor-pointer"
                src={facebook}
                alt="facebook"
              />
            </a>
          </div>
        </div>

        <div className=" w-full flex justify-around text-paleGrayishLightWhite mb-1 md:w-[30%] md:justify-between">
          <ul className="flex flex-col space-y-3">
            <li className="cursor-pointer hover:brightness-150">Home</li>
            <li className="cursor-pointer hover:brightness-150">Skills</li>
            <li className="cursor-pointer hover:brightness-150">Projects</li>
            <li className="cursor-pointer hover:brightness-150">About</li>
          </ul>

          <ul className="flex flex-col space-y-3">
            <li className="cursor-pointer hover:brightness-150">
              Consultation
            </li>
            <li className="cursor-pointer hover:brightness-150">Marketing</li>
            <li className="cursor-pointer hover:brightness-150">Mentorship</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="flex space-x-4">
            <input
              className="rounded-md bg-transparent border text-paleGrayishLightWhite border-solid border-paleGrayishLightWhite text-sm p-2 px-4 focus:outline-none"
              type="text"
              value={inputData}
              placeholder="Updated in your inbox"
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <button
              onClick={sendInputData}
              className=" bg-lightGreenishSkyBlue text-grayishLightWhite p-2 rounded-md focus:outline-none hover:bg-veryLightGreen"
            >
              Go
            </button>
          </div>

          <p className="hidden text-sm font-medium text-veryLightGreen md:block">
            Copyright &copy; 2023, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
