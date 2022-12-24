// import beds from '../../public/beds.jpeg';
import Padding from '../padding';

const About = () => {
  return (
    <Padding
      className="relative -z-[1] w-full min-h-fit rounded-t-lg bg-gradient-to-b from-[hsl(211,67%,6%)] to-[hsl(213,33%,3%)] pt-2 pb-24 mt-8 mt:pb-0"
      id="about"
    >
      <h2 className="font-title tracking-wider text-white text-xl sm:text-2xl md:text-3xl font-light pt-10 border-b-[0.5px] border-b-gray-light pb-9 mb-8">
        About us
      </h2>
      <div className="font-sans text-white leading-relaxed tracking-wide font-extralight text-justify xl:flex xl:flex-row xl:gap-8">
        <div>
          <p className="pb-12">
            Our boutique hotel is incredibly close to all the nightlife and
            restaurants on Court Street and Downtown Athens. And from our
            exquisite rooms to the upgraded showers, weekend breakfast, and free
            onsite parking, you{"'"}re in for a great time.
          </p>
        </div>
        {/* <div className="relative -z-1 mb-12 xl:min-w-[40rem] w-screen xl:w-auto -mx-6 xl:mx-auto">
          <Image
            src={beds}
            alt="two beds from a queen room of the athens central hotel"
            className="w-full brightness-[125%] saturate-[1.33] opacity-[0.96] border-y-white border-y-[1px] xl:rounded-lg xl:border-2 xl:border-white xl:top-0"
          />
        </div>
        <div>
          <p className="pb-12">
            Our family-owned hotel was newly built in 2019 with a modern Greek
            aesthetic. Every room in the hotel was tastefully designed for
            comfort and relaxation. This hotel has been a lifelong dream in the
            making, and we really hope you love it.
          </p>
          <div className="xl:w-full xl:aspect-square bg-[#ffed93]"></div>
        </div> */}
      </div>
    </Padding>
  );
};

export default About;
