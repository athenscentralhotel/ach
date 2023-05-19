import { createClient } from 'contentful';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TABLET_MEDIA_QUERY } from '../../constants';
import { CallButton } from '../button';
import HeroCarousel, { ImageData } from '../heroCarousel/HeroCarousel';
import StarDiv from '../stardiv/StarDiv';

export interface HeroData {
  hotelName: string;
  hotelCaption: string;
  starText: string;
  imageData: ImageData[];
  backgroundImage: string;
}

export type ReviewSummaryStat = {
  numberOfReviews: number;
  averageReviews: string;
};

interface HeroProps {
  aboutInView: boolean;
  ads: boolean;
  data: HeroData;
  averageReviews: ReviewSummaryStat;
}

const Hero = (props: HeroProps) => {
  const { aboutInView, ads, data, averageReviews } = props;
  const isMobile = useMediaQuery({ query: TABLET_MEDIA_QUERY });
  const [isFirstRender, setisFirstRender] = useState(() => true);
  const buttonClasses = isFirstRender ? '' : isMobile ? '' : 'w-1/3 max-w-sm';

  useEffect(() => {
    setisFirstRender(() => false);
  }, []);

  if (isFirstRender) return null;

  return (
    <main className="relative w-full -mt-10 overflow-clip" id="hero">
      <SiteBG src={data.backgroundImage} />
      <motion.div layout>
        <Pitch
          mobile={isMobile}
          isFirstRender={isFirstRender}
          buttonClasses={buttonClasses}
          aboutInView={aboutInView}
          ads={ads}
          heroData={data}
        />
        {ads && (
          <MobileAds
            isFirstRender={isFirstRender}
            mobile={isMobile}
            ads={ads}
            starText={data.starText}
          />
        )}
        <ReviewSummary reviewStats={props.averageReviews} />
        <HeroCarousel hints={false} imageData={data.imageData} />
      </motion.div>
    </main>
  );
};

interface PitchProps {
  mobile: boolean;
  isFirstRender: boolean;
  buttonClasses: string;
  aboutInView: boolean;
  ads: boolean;
  heroData: HeroData;
}

interface MobileAdsProps {
  isFirstRender: boolean;
  mobile: boolean;
  ads: boolean;
  starText: string;
}

const MobileAds = (props: MobileAdsProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto relative">
      {!props.isFirstRender && props.ads && (
        <div className="flex flex-col gap-4 min-[300px]:gap-2 min-[300px]:flex-row justify-start items-center min-[300px]:justify-between">
          <div className="-ml-10 -mt-5 min-[300px]:mt-0 min-[300px]:ml-0 max-w-[18rem]">
            <div className="overflow-hidden w-[130px] aspect-square">
              <iframe
                className="scale-75 select-none"
                aria-label="a booking.com rating point card"
                referrerPolicy="no-referrer"
                src="https://badge.hotelstatic.com/?position=inline&amp;clickable=true&amp;url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fus%2Fathens-central.html"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-[8rem] w-fit min-[300px]:mr-10">
            <StarDiv>
              <p className="text-center font-medium text-white text-sm min-w-[6rem]">
                {props.starText}
              </p>
            </StarDiv>
          </div>
        </div>
      )}
    </div>
  );
};

const Pitch = (props: PitchProps) => (
  <div className={`w-full mx-auto`}>
    <section className="relative flex flex-col items-center justify-center max-w-5xl gap-1 mx-auto mt-12 cursor-default md:mt-10">
      <h1 className="px-6 font-title font-black uppercase tracking-wide text-[1.94rem] sm:text-[2.3rem] mt:text-[2.38rem] md:text-[2.5rem] lg:text-[2.58rem] xl:text-[2.69rem] cursor-default text-center mb-[0.3rem] text-blue-deep">
        {props.heroData.hotelName}
      </h1>
      <h2 className="px-6 font-subtitle font-normal cursor-default text-[1.125rem] lg:text-[1.2rem] xl:text-[1.25rem] text-center text-gray-link tracking-wide mt-1 mt:mt-0">
        {props.heroData.hotelCaption}
      </h2>
      {!props.isFirstRender && (
        <div className="mt-4">
          <CallButton />
        </div>
      )}
    </section>
  </div>
);

const ReviewSummary = (props: { reviewStats: ReviewSummaryStat }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-gray-link flex justify-center items-center gap-2">
        Average reviews are
        <span className="text-black -mr-1">
          {props.reviewStats.averageReviews}
        </span>
        <p className="text-black -mr-2">out of 5</p>{' '}
      </div>
      <Link
        href="/#reviews"
        className="text-blue-dark text-center hover:underline w-fit mx-auto pb-4"
      >
        See our reviews
      </Link>
    </div>
  );
};

const SiteBG = (props: { src: string }) => (
  <React.Fragment>
    <div className="fixed -z-[5] top-0 left-0 bottom-0 right-0 bg-[hsl(49,36%,96%)] opacity-[0.931] bg-clip-padding backdrop-filter backdrop-blur-xl shadow-sm"></div>
    <div className="fixed top-0 bottom-0 left-0 right-0 -z-10">
      <Image
        src={props.src}
        priority={false}
        quality={25}
        alt=""
        sizes="(min-width: 0px) 100vw"
        fill
        className="z-0 object-cover grayscale-[40%] brightness-125 mt:scale-105 md:scale-110 lg:scale-125 xl:scale-150"
      />
    </div>
  </React.Fragment>
);

export default memo(Hero);

interface EntryImage {
  sys: { id: string };
  fields: {
    file: {
      url: string;
    };
  };
}

interface Entry {
  sys: {
    id: string;
  };
  fields: {
    hotelName: string;
    hotelCaption: string;
    starText: string;
    images: EntryImage[];
    backgroundImage: EntryImage;
  };
}

export async function getHeroDataFromContentful() {
  const client = createClient({
    space: 'whrqes1tuvv5',
    accessToken: 'V_ajOeV3uMRT1T9cWIVOONxCr9Q8q75yA0NF5RgMnTU',
  });

  const heroData: HeroData = {
    hotelName: '',
    hotelCaption: '',
    starText: '',
    imageData: [],
    backgroundImage: '',
  };

  try {
    const entry = (await client.getEntry('3GgqaVPoQZmpABlpKe39OF')) as Entry;

    const imageData: ImageData[] = entry.fields.images.map((img, index) => ({
      alt: '',
      desc: '',
      id: img.sys.id,
      objectFit: 'cover',
      relativeOrder: index,
      src: `https:${img.fields.file.url}`,
    }));

    heroData.hotelName = entry.fields.hotelName;
    heroData.hotelCaption = entry.fields.hotelCaption;
    heroData.starText = entry.fields.starText;
    heroData.imageData = imageData;
    heroData.backgroundImage = `https:${entry.fields.backgroundImage.fields.file.url}`;
  } catch (e) {
    console.log(e);
  }

  return heroData;
}
