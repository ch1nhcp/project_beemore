import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";

export default function CarouselCard() {
  return (
    <>
      <Carousel show={3.5} slide={3} swiping={true}>
        <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
          <div className="relative w-full h-80 md:h-64 lg:h-44">
            <img
              src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg"
              alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="px-3 py-4">
            <h3 className="text-sm text-gray-500 pb-2">
              <a
                className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                href="#"
              >
                <span className="absolute inset-0"></span>
                Basic Level
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </article>
        <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
          <div className="relative w-full h-80 md:h-64 lg:h-44">
            <img
              src="https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg"
              alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="px-3 py-4">
            <h3 className="text-sm text-gray-500 pb-2">
              <a
                className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                href="#"
              >
                <span className="absolute inset-0"></span>
                Basic Level
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </article>
        <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
          <div className="relative w-full h-80 md:h-64 lg:h-44">
            <img
              src="https://cdn.pixabay.com/photo/2021/08/03/11/01/stairs-6519085_960_720.jpg"
              alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="px-3 py-4">
            <h3 className="text-sm text-gray-500 pb-2">
              <a
                className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                href="#"
              >
                <span className="absolute inset-0"></span>
                Intermediate Level
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </article>
        <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
          <div className="relative w-full h-80 md:h-64 lg:h-44">
            <img
              src="https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg"
              alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="px-3 py-4">
            <h3 className="text-sm text-gray-500 pb-2">
              <a
                className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                href="#"
              >
                <span className="absolute inset-0"></span>
                Advanced Level
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </article>
      </Carousel>
    </>
  );
}
