import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Tools from "./Tools";
import VideoForm from "./VideoForm";


function Body() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-120" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              SNAP VIDEO{" "}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Download, Enjoy, Repeat! Get ready to save and savor your videos.
            </p>
            <VideoForm />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
