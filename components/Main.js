import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Typical from "react-typical";

export default function Main() {
    return (
        <>
            <body className="bg-cover bg-[url('https://i.pinimg.com/originals/55/a8/cb/55a8cbe16c3d28bd3462fc4fdea4dd0f.jpg')]   ">
                < Header />



                {/* <div className="flex justify-center">
            <span className="primary-text text-gray-500">
              {" "}
              Hello, I'M <span className="highlighted-text">Issa Salman</span>
            </span>
          </div> */}
                <div className="flex flex-wrap-reverse lg:flex lg:flex-wrap-reverse justify-between mx-10 ">
                    <div className="bg-[url('/bgw.jpg')]   md:w-1/2 xl:w-1/3 md:ml-20 rounded-3xl  sm:overflow-auto overflow-auto h-60 md:h-auto border-4">
                        <div className="grid justify-center  ">
                            {" "}
                            <h1 className="text-gray-100 my-14  md:text-3xl text-l">
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Hello There 🖐️😄",
                                        2000,
                                        "Im Issa Salman 😇",
                                        2000,
                                        "Software Developer 💓",
                                        2000,
                                    ]}
                                />
                            </h1>

                        </div>

                        <div className="grid justify-center overflow-auto">
                            {" "}
                            <h1 className="text-gray-100 md:mx-10 mx-6  overflow-auto md:text-xl text-xs">

                                Software Engineer From ASAC with a vast array of knowledge in many different front-end and back-end languages, responsive frameworks, databases, and best code practices. My objective is to be one of the best web devs
                            </h1>

                        </div>
                        <div className="flex justify-center  mt-32">
                            <img className=" mx-4 animate-pulse" width="30" src="cf.png"/>
                            <img className="mx-4 animate-pulse" width="30" src="ltuc.png"/>
                            <img className="mx-4 animate-pulse" width="30" src="hu.jpg"/>


                        </div>

                    </div>

                    <div className=" opacity-80  md:w-1/4 md:mr-20">
                        <img class=" rounded-full border-4 hover:scale-110 cursor-grab" src="issaf.jpg"/>

                    </div>

                </div>


                < Footer />
            </body>


        </>

    )
}
