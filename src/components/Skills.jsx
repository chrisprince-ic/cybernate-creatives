import { BiTimer } from 'react-icons/bi';
import { GiStarMedal } from 'react-icons/gi';

export default function Skills() {
  return (
    <div
      id="skills"
      className="min-h-screen container pt-28 flex flex-col mx-auto px-4 mt-10 space-y-12 md:pt-40 md:space-y-0 md:flex-row"
    >
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-4xl text-grayishLightWhite text-center font-bold md:text-left">
          Why hire us for your next project ?
        </h2>
        <p className="max-w-sm text-darkGrayishLightWhiteOpac ml-6 text-center md:text-left md:ml-0">
          Hire us to build your website and digital designs and take your online
          presence to the next level. Our team of software developers and
          designers will work closely with you to create a custom solution that
          meets your specific needs and goals.
        </p>

        {/* <div className="flex justify-center md:justify-start">
          <button className="bg-lightGreenishSkyBlue py-3 px-4 text-center font-medium rounded-full md:py-2 hover:bg-veryLightGreen">
            Reach out
          </button>
        </div> */}
      </div>

      <div className="flex flex-col space-y-6 pb-8 md:w-1/2">
        <div className="border border-solid border-lightGreenishSkyBlue rounded-md p-2 flex space-x-2">
          <div className="w-1/4">
            <BiTimer className="w-full h-full text-veryLightGreen" />
          </div>

          <div className="w-3/4 flex flex-col space-y-3">
            <h3 className=" text-sm font-bold tracking-wide text-grayishLightWhite">
              Timely Services
            </h3>
            <p className="text-base text-darkGrayishLightWhiteOpac">
              Fast, Efficient and Reliable that is our theme. We know that no
              one likes to be kept waiting.
            </p>
          </div>
        </div>
        <div className="border border-solid border-lightGreenishSkyBlue rounded-md p-2 flex space-x-2">
          <div className="w-1/4">
            <GiStarMedal className="w-full h-full text-veryLightGreen" />
          </div>

          <div className="w-3/4 flex flex-col space-y-3">
            <h3 className=" text-sm font-bold tracking-wide text-grayishLightWhite">
              Experienced Enginners
            </h3>
            <p className="text-base text-darkGrayishLightWhiteOpac">
              We have a team of experienced software enginners who will make you
              live experiences you've never seen before.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
