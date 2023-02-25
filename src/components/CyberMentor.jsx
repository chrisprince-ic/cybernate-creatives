import mentor from '../assets/mentor.jpg';

export default function CyberMentor() {
  return (
    <div className="h-screen w-full relative bg-lightGray">
      <div className="absolute top-0 h-full w-full">
        <img
          className="h-full w-full object-cover"
          src={mentor}
          alt="business"
        />
      </div>
      <div className="h-full w-full absolute top-0 bg-darkGrayOpac">
        <div className="container mx-auto pt-40 flex flex-col space-y-8">
          <h1 className="text-5xl text-center nunito font-semibold text-veryLightGreen md:text-7xl">
            Cyber Mentor Program
          </h1>

          <p className="max-w-2xl text-center text-base leading-relaxed px-6 text-paleGrayishLightWhite self-center md:text-lg md:leading-normal md:px-0">
            A program aimed to help and guide everyone interested in software
            engineering. We are here for you and we will guide every step of the
            way if you decide to register for the program however it is still in
            preparation and it will be launching soon
          </p>
          <p className="max-w-2xl text-center text-base leading-relaxed px-6 text-lightOrange self-center md:text-lg md:leading-normal md:px-0">
            Launching soon
          </p>

          <div className="self-center">
            <a
              href="tel:+250789048643"
              className="bg-veryLightGreen py-3 px-4 text-center font-medium rounded-full md:py-2 md:rounded-md hover:bg-lightGreenishSkyBlue"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
