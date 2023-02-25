import business from '../assets/businessmen.jpg';

export default function Cyber() {
  return (
    <div id="cyber" className="h-[100vh] w-full relative bg-lightGray">
      <div className="absolute top-0 h-full w-full">
        <img
          className="h-full w-full object-cover"
          src={business}
          alt="business"
        />
      </div>

      <div className="h-full w-full absolute top-0 bg-darkGrayOpac">
        <div className="container mx-auto pt-28 flex flex-col space-y-8 md:pt-40">
          <h1 className="text-5xl text-center nunito font-semibold text-lightGreenishSkyBlue md:text-7xl">
            Cyber Consultation Program
          </h1>

          <p className="max-w-2xl text-center text-base leading-relaxed px-6 text-paleGrayishLightWhite self-center md:text-lg md:leading-normal md:px-0">
            This program is aimed to help companies,individuals or professionals
            who want to adopt software enginnering in their day to day
            professional activities. Our team of expert software enginners will
            help you and guide in your way of adopting software engineering in
            your activities. our goal is to help our country adopt a more
            digital approach to doing daily tasks and we will be guiding you
            closely in your way.
          </p>

          <div className="self-center">
            <a
              href="tel:+250789048643"
              className="bg-lightGreenishSkyBlue py-3 px-4 text-center font-medium rounded-full md:py-2 md:rounded-md hover:bg-veryLightGreen"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
