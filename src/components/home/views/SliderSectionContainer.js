import React, { useState } from 'react';
import Slider from 'react-slick';

const testimonials = [
  {
    bigText: '“El mejor lugar para degustar en familia y amigos!”',
    normalText:
      'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. ',
  },
  {
    bigText: '“El mejor lugar para degustar en familia y amigos!”',
    normalText:
      'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. ',
  },
  {
    bigText: '“El mejor lugar para degustar en familia y amigos!”',
    normalText:
      'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. ',
  },
];

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div className={className} style={{ display: 'block' }} onClick={onClick} />
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div className={className} style={{ display: 'block' }} onClick={onClick} />
  );
};

const SliderSectionContainer = () => {
  let slider = null;
  const [slideCount, setSlideCount] = useState(1);
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    nextArrow: null,
    prevArrow: null,
  };
  const next = () => {
    if (slideCount < testimonials.length) {
      setSlideCount(slideCount + 1);
      slider.slickNext();
    }
  };
  const previous = () => {
    if (slideCount > 1) {
      setSlideCount(slideCount - 1);
      slider.slickPrev();
    }
  };
  return (
    <section
      id="testimonials"
      className="relative w-full h-110 xl:h-100 mt-10 flex items-center justify-center"
    >
      <div className="w-80 md:w-100 xl:w-110 z-20">
        <Slider ref={(c) => (slider = c)} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className=" w-full flex justify-center items-center text-center"
            >
              <span className="text-3xl">{testimonial.bigText}</span>
              <p className="text-lg text-gray-500 mt-10 font-sans">
                {testimonial.normalText}
              </p>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-10">
          <button
            className="button hover:text-primary  text-lg font-black"
            onClick={previous}
          >
            <span>{'<'}</span>
          </button>
          <span className="px-3 font-black">
            {slideCount} / {testimonials.length}
          </span>
          <button
            className="button hover:text-primary text-lg font-black "
            onClick={next}
          >
            {'>'}
          </button>
        </div>
      </div>
      <img
        src="/bg-red-left.png"
        className=" absolute top-0 left-0 h-full w-56 hidden md:block "
      />
      <img
        src="/bg-red-right.png"
        className=" absolute -bottom-10 right-0 h-full w-56 z-10 hidden md:block"
      />
      <img
        src="/ketchup.png"
        className=" absolute bottom-0 right-0 h-auto w-72 z-10 hidden xl:block"
      />
    </section>
  );
};

export default SliderSectionContainer;
