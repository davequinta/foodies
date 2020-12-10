import React from 'react';
import Image from 'next/image';
import { benefits } from '../../../utils/helpers';
import BenefitCard from '../BenefitCard';
import MarkedTitle from '../../common/MarkedTitle';

const BenefitsSectionContainer = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full ">
      <section className="relative w-full xl:w-1/3 h-72 md:h-96 xl:h-105 flex justify-center">
        <div className="absolute -top-12 xl:-right-98 xl:-top-40 w-full md:w-100 xl:w-128 ">
          <img
            src="/benefits/onboarding_mockup.png"
            alt="Mock cellphone image"
          />
        </div>
      </section>
      <section className="relative w-full xl:w-3/5 flex flex-col justify-center pt-16">
        <MarkedTitle
          normalTextLower={'Obtén más beneficios'}
          markedText={'Descarga nuestra App'}
          home
        />
        <div className="flex flex-col lg:flex-row flex-wrap w-full justify-around relative mt-20">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={`${benefit.title}-${index}`}
              {...benefit}
              index={index}
            />
          ))}
          <div className="absolute hidden xl:inline left-24 xl:left-24 top-4 z-5">
            <img
              src="/benefits/dot_line_left.png"
              alt="Mock cellphone image"
              className="w-64 xl:w-64 h-80"
            />
          </div>
          <div className="absolute hidden xl:inline right-24 xl:right-24  top-4 z-5 ">
            <img
              src="/benefits/dot_line_right.png"
              alt="Mock cellphone image"
              className="w-64 xl:w-64 h-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsSectionContainer;
