import { motion, Variants } from 'framer-motion';
import { Link as ReactScrollLink } from 'react-scroll';
import { EMAIL_DATA } from '../../constants';
import { StickyState } from '../../hooks/useStickState';
import { LinkCallButton } from '../button';
import { useFocusedSection } from '../focusedSectionProvider/FocusedSectionProvider';
import Padding from '../padding';
import StarDiv from '../stardiv/StarDiv';
interface AboutProps {
  aboutRef: (node?: Element | null | undefined) => void;
  stickyState: StickyState;
}

const About = (props: AboutProps) => {
  const {
    aboutRef,
    stickyState: { isSticky, ref },
  } = props;

  const {
    refs: { Contact: contact },
  } = useFocusedSection();

  return (
    <div
      ref={contact.ref}
      className="select-none relative z-0 w-full gradient-blue bg-opacity-90 text-white pt-10"
    >
      <StickyHeader isSticky={isSticky} label="Get In Touch" stickyRef={ref} />
      <div className="w-fit mx-auto" id="contact" ref={aboutRef}>
        <div
          id="contact-content"
          className={`pt-12 flex flex-wrap justify-between items-start gap-6 mt:gap-9 md:gap-11 lg:gap-14 w-fit mx-auto px-6`}
        >
          <div className="relative mx-auto space-y-11">
            <Address />
            <div className="w-full text-sm">
              <h3 className="mb-4 text-xl font-title font-normal">
                Our Front Desk is Open 24/7
              </h3>
              <div className="w-full max-w-full grid grid-cols-[auto_1fr] justify-items-start text-[hsla(0,0%,100%,75%)] font-extralight">
                <div className="w-full flex flex-wrap justify-between items-center gap-1 pr-4">
                  <label
                    className="font-title font-light text-[1.25rem]"
                    htmlFor="phone-number"
                  >
                    Phone Number
                  </label>
                  <p>:</p>
                </div>
                <LinkCallButton
                  darkMode
                  size="large"
                  underline={false}
                  id="phone-number"
                />
                <div className="w-full flex flex-wrap justify-between items-center gap-1 pr-4">
                  <label
                    className="font-title font-light text-[1.25rem]"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <p>:</p>
                </div>
                <LinkCallButton
                  buttonData={EMAIL_DATA}
                  darkMode
                  size="large"
                  underline={false}
                  id="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 max-w-[18rem]">
              <div className="overflow-hidden aspect-square">
                <iframe
                  className="select-none pl-8"
                  aria-label="a booking.com rating point card"
                  referrerPolicy="no-referrer"
                  src="https://badge.hotelstatic.com/?position=inline&amp;clickable=true&amp;url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fus%2Fathens-central.html"
                ></iframe>
                <div className="pl-8">
                  <StarDiv color="white">
                    <p className="text-center font-semibold text-blue-deep text-sm max-w-[8rem]">
                      The only 4 star hotel in Athens
                    </p>
                  </StarDiv>
                </div>
              </div>
            </div>
          </div>
          <iframe
            aria-label="A google map showing the Athens Central Hotel"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.0494872241065!2d-82.09823380000003!3d39.33246430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8848735b1021f905%3A0x400f2aa6ca675df3!2sAthens%20Central%20Hotel!5e0!3m2!1sen!2sus!4v1672186189896!5m2!1sen!2sus"
            className="border-[1px] p-[1px] select-none mx-auto w-full mt:w-[min(89vh,89vw)] max-w-full md:max-w-lg border-white aspect-square rounded-md shadow-sm"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export const Address = () => {
  return (
    <div className="select-all flex flex-col justify-center items-start text-[hsla(0,0%,100%,75%)] font-extralight">
      <h3 className="text-white mb-4 text-xl font-title font-normal">
        Athens Central Hotel
      </h3>
      <a
        href="https://goo.gl/maps/rqUJ6pViG9GRt3rn9"
        target="_blank"
        rel="noreferrer"
        className="text-sm p-2 -ml-2 rounded-md"
      >
        <p className="font-title text-[1.25rem] mb-1 tracking-wide">
          88 East State Street
        </p>
        <p className="font-title text-[1.25rem] mb-1 tracking-wide">
          Athens, OH 45701
        </p>
        <p className="font-title text-[1.08rem] tracking-wide">United States</p>
      </a>
    </div>
  );
};

export default About;

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-2 mt-28 pb-12 text-sm font-title font-light text-gray-light tracking-wide">
      <section className="text-lg border-t-[1px] border-b-[1px] border-t-gray-light py-5 text-center space-y-3">
        <h3>&copy; Athens Central Hotel, 2023</h3>
        <p>All Rights Reserved</p>
      </section>
    </footer>
  );
};

interface StickyHeaderProps {
  stickyRef: (node?: Element | null | undefined) => void;
  isSticky: boolean;
  label: string;
}

const StickyHeader = (props: StickyHeaderProps) => {
  const { isSticky, stickyRef, label } = props;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      custom={isSticky}
      ref={stickyRef}
      className={`pt-4 w-screen sticky top-[4.95rem] z-10 font-title select-none tracking-wider text-white text-2xl sm:text-3xl md:text-[1.9rem] font-normal mt:text-center flex flex-col justify-center ${
        isSticky ? 'shadow-md' : ''
      }`}
    >
      <Padding className="flex justify-center items-center w-full">
        <ReactScrollLink
          to="contact-content"
          spy={true}
          smooth={true}
          offset={-150}
          className="p-2 rounded-full outline-offset-4"
          duration={380}
          href="/#contact"
        >
          <h2>{label}</h2>
        </ReactScrollLink>
      </Padding>
    </motion.div>
  );
};

const variants: Variants = {
  initial: {
    paddingBottom: '1rem',
    backgroundColor: 'hsla(60,30%,96%,0%)',
    color: 'hsla(211,84%,100%,100%)',
  },
  animate: (isSticky: boolean) => ({
    backgroundColor: isSticky ? 'hsla(60,30%,96%,100%)' : 'hsla(60,30%,96%,0%)',
    color: isSticky ? 'hsla(211,84%,30%,100%)' : 'hsla(211,84%,100%,100%)',
    transition: {
      duration: 0.33,
      ease: 'easeInOut',
    },
  }),
};
