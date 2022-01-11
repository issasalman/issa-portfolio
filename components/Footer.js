import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        < >
            <div class='w-full bg-zinc-900 text-gray-200 fixed bottom-0'>

                <div class="flex flex-col items-center justify-center mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
                    <Link href="/">
                        <img class='cursor-grab	hover:scale-110 animate-pulse' src='./cont.png' width="200" height="200" />
                    </Link>

                    <div class="flex items-center gap-x-8 mt-6">


                        <a href="https://wa.me/+962787974750" class="pt-0.5" data-tippy-content="WhatsApp">
                            <button className="rounded-full hover:scale-125">
                                <img src="wu.png" alt="" width="23" height="23" />

                            </button>
                        </a>
                        <a className="pb-0.5 rounded-full hover:scale-125" href="https://www.linkedin.com/in/issasalman/"

                            data-tippy-content="Facebook">
                            <img src="li.png" alt="" width="23" height="23" />
                        </a>
                        <a className="rounded-full hover:scale-125" href="https://github.com/issasalman">
                            <img src="gh.png" alt="" width="23" height="23" />
                        </a>
                        <a className="rounded-full hover:scale-125" href="https://web.facebook.com/issa.hulk/" data-tippy-content="Twitter">
                            <img src="fb.png" alt="" width="23" height="23" />

                        </a>
                    </div>
                    <div class="flex items-center mt-6">
                        <p class="font-serif text-xs hover:scale-105 leading-4">2022 <span class="font-serif">Issa Salman</span></p>
                        <div class="border-l border-gray-800 pl-2 ml-2">
                            <p class="font-serif text-xs hover:scale-105 leading-4">©️ All Rights Reserved</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
