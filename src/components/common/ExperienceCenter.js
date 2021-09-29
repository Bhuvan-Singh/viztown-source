import React from "react";
import TwentyTwenty from "react-twentytwenty";

export default function ExperienceCenter({ data }) {
  return (
    <>
      <div
        class="xl:max-w-screen-xl mx-auto space-y-3 text-center mt-16 mb-8 lg:mb-4 xl:mt-32"
        id="experience_center"
      >
        <h1 class="text-4xl  text-primary font-bold font-playfair">
          Experience Center
        </h1>
      </div>
      <div class="w-full relative lg:py-16 xl:py-0 ">
        <div class="xl:max-w-screen-xl items-center mx-auto relative z-10">
          <div class="flex flex-col-reverse lg:flex-row lg:flex items-center xl:mt-20">
            <div class="lg:w-5/12 xl:w-1/2 lg:pr-12 xl:pr-32 py-8 px-4 xl:px-0 xl:py-28 relative ">
              <div class="relative z-10">
                <div class="flex">
                  <div class="bg-primary w-6 h-6 rounded-full p-1 shadow-md">
                    <span class="block bg-secondary w-4 h-4 rounded-full z-10"></span>
                  </div>
                  <h4 class="text-primary text-lg uppercase font-semibold ml-2">
                    {data.first.heading}
                  </h4>
                </div>
                <p class="text-primary text-md max-w-2xl mt-6">
                  {data.first.description}
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 relative">
              <img
                class="lazy h-92 w-full object-cover"
                alt=""
                src={data.first.url}
              />
              <img
                class="lazy absolute w-48 bottom-0 -mb-12 right-0 -mr-32 z-30 hidden lg:block"
                alt=""
                src="https://www.viztown.in/assets/images/right-camera.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full relative xl:mt-48 bg-primary lg:py-8 xl:py-0 xl:pb-12"
        id="section1"
      >
        <div className="absolute w-150p h-full bg-primary left-20 hidden xl:block">
          <div className="w-150p transform -rotate-3 absolute h-80 bg-primary -mt-40 left-0 -ml-24"></div>
        </div>
        <div className="xl:max-w-screen-xl items-center mx-auto lg:pt-0 z-10 relative">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 z-20">
              <div className="twentytwenty-wrapper twentytwenty-horizontal">
                <TwentyTwenty
                  left={<img src={data.second.originalImage} />}
                  right={<img src={data.second.modifiedImage} />}
                  slider={
                    <div className="twentytwenty-handle">
                      <span className="twentytwenty-left-arrow"></span>
                      <span className="twentytwenty-right-arrow"></span>
                    </div>
                  }
                />
              </div>
            </div>

            <div className="lg:w-1/2 px-4 xl:px-0 py-8 lg:pl-8 xl:pl-20 relative px-4 xl:px-0">
              <div className="relative z-10 lg:pb-8">
                <div className="flex">
                  <div className="bg-white w-6 h-6 rounded-full p-1 shadow-md">
                    <span className="block bg-secondary w-4 h-4 rounded-full z-10"></span>
                  </div>
                  <h4 className="text-white text-lg uppercase font-semibold ml-2">
                    {data.second.heading}
                  </h4>
                </div>
                <p className="text-white text-md mt-6">
                  {data.second.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative lg:py-16 xl:py-0">
        <div className="xl:max-w-screen-xl items-center mx-auto relative z-10">
          <div className="flex flex-col-reverse lg:flex-row lg:flex items-center xl:mt-20">
            <div className="lg:w-5/12 xl:w-1/2 lg:pr-12 xl:pr-32 py-8 px-4 xl:px-0 xl:py-28 relative ">
              <div className="relative z-10">
                <div className="flex">
                  <div className="bg-primary w-6 h-6 rounded-full p-1 shadow-md">
                    <span className="block bg-secondary w-4 h-4 rounded-full z-10"></span>
                  </div>
                  <h4 className="text-primary text-lg uppercase font-semibold ml-2">
                    {data.third.heading}
                  </h4>
                </div>
                <p className="text-primary text-md max-w-2xl mt-6">
                  {data.third.description}
                </p>
              </div>
            </div>
            <div className="lg:w-7/12 xl:w-1/2 relative mt-8 lg:mt-0">
              <div className="device--tab border-4 border-gray-300">
                <video
                  className="lazy w-full outline-none xl:h-420"
                  controls={true}
                  autoplay={true}
                  muted={true}
                  loop={true}
                  id="design--video"
                >
                  <source src={data.third.url} type="video/mp4" />
                </video>
              </div>
              <img
                className="lazy absolute w-48 bottom-0 -mb-12 right-0 -mr-32 z-30 hidden xl:block"
                alt=""
                src="https://www.viztown.in/assets/images/right-camera.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full relative xl:mt-48 bg-primary xl:pb-12"
        id="section3"
      >
        <div className="absolute w-150p h-full bg-primary left-20 hidden xl:block">
          <div className="w-150p transform -rotate-3 absolute h-80 bg-primary -mt-40 left-0 -ml-24"></div>
        </div>
        <div className="xl:max-w-screen-xl items-center mx-auto lg:pt-0 z-10 relative">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 relative">
              <img
                className="lazy h-92 w-full object-cover"
                alt=""
                src={data.fourth.url}
              />
            </div>

            <div className="lg:w-1/2 px-4 xl:px-0 py-8 lg:pl-8 xl:pl-20 relative px-4 xl:px-0">
              <div className="relative z-10 lg:pb-8">
                <div className="flex">
                  <div className="bg-white w-6 h-6 rounded-full p-1 shadow-md">
                    <span className="block bg-secondary w-4 h-4 rounded-full z-10"></span>
                  </div>
                  <h4 className="text-white text-lg uppercase font-semibold ml-2">
                    {data.fourth.heading}
                  </h4>
                </div>
                <p className="text-white text-md mt-6">
                  {data.fourth.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}