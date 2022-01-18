import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function profile() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />
      <Header />

            <body className="bg-cover bg-[url('https://i.pinimg.com/originals/55/a8/cb/55a8cbe16c3d28bd3462fc4fdea4dd0f.jpg')]   ">

        <div class="container">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 xl:w-1/3 px-4 ">
              <div class="bg-gray-200 rounded-lg overflow-hidden mb-10 rounded-l border-8 border-zinc-900 ">
                <img src="project_201.JPG" alt="image" class="w-full" />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <hr class="border-14 border-zinc-800 p-2"/>
                  <h3>
                    <a
                      href="https://github.com/FastAuto5/FastAuto"
                      class="
                      animate-pulse
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      FastAuto5
                    </a>
                  </h3>
                  <p class="text-base text-dark leading-relaxed  text-justify mb-7">
                    ●A website to make it easier for people to Rent and Buy cars{" "}
                    <br></br>● Gives people the chance to sell or rent their
                    owned Vehicle
                    <br/>● Built with JavaScript, HTML, pure CSS
                  </p>
                  <a
                    href="https://fastauto5.github.io/FastAuto/"
                    class="
                    mt-14
                    bg-zinc-900
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    View Website
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="bg-gray-200 rounded-lg overflow-hidden mb-10 border-8 border-zinc-900 ">
                <img src="project_301.JPG" alt="image" class="w-full" />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <hr class="border-14 border-zinc-800 p-2"/>
                  <h3>
                    <a
                      href="https://github.com/Software-Artists/museum-frontend"
                      class="
                      animate-pulse
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      Liza Museum Arts
                    </a>
                  </h3>
                  <p class="text-base text-dark leading-relaxed  text-justify mb-7">
                    ●View paintings from different museums all over the
                    world.cars <br/>● Book a ticket for events made in
                    museums.<br/>●Built with ReactJS, Bootstrap, NodeJS, MongoDB
                
                  </p>
                  <a
                    href="https://objective-morse-eb4b96.netlify.app/"
                    class="
                    bg-zinc-900
                     mt-20
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    View Website
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="bg-gray-200 rounded-lg overflow-hidden mb-10 border-8 border-zinc-900 ">
                <img src="project_401.JPG" alt="image" class="w-full" />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <hr class="border-14 border-zinc-800 p-2"/>
                  <h3>
                    <a
                      href="https://github.com/ai-survivors/world-cup-22"
                      class="
                      animate-pulse
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      FIFA World Cup 2022
                    </a>
                  </h3>
                  <p class="text-base text-dark leading-relaxed text-justify mb-7">
                    ●A website for Fifa world cup 2022 that has API for
                     world cups and the user will log in and see
                    the data <br></br> ●
                    Book Tickets for The World Cup matches cars <br></br>● Vote
                    for the favorite team
                    <br/>● Built with Django, NextJS, Tailwindcss
                  </p>
                  <a
                    href="https://world-cup-22-frontend.vercel.app/"
                    class="
                    bg-zinc-900
                     inline-block
                     mt-7
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                  >
                    View Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </body>

    </>
  );
}
