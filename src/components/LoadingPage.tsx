"use client";

import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";

type Props = {
  progressBar: Number | any;
};

export default function LoadingPage({ progressBar }: Props) {
  const [loadingDone, setLoadingDone] = useState(false);
  const [hideFirst, setHideFirst] = useState(false);
  const [hideSecond, setHideSecond] = useState(false);
  const [hideThird, setHideThird] = useState(false);
  const [hideFourth, setHideFourth] = useState(false);
  const [hideFifth, setHideFifth] = useState(false);
  const [hideAll, setHideAll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingDone(true);
    }, 1000);

    setTimeout(() => {
      setHideFirst(true);
    }, 1100);
    setTimeout(() => {
      setHideSecond(true);
    }, 1250);
    setTimeout(() => {
      setHideThird(true);
    }, 1400);
    setTimeout(() => {
      setHideFourth(true);
    }, 1550);
    setTimeout(() => {
      setHideFifth(true);
    }, 1700);
    setTimeout(() => {
      setHideAll(true);
    }, 2000);
  }, []);

  return (
    <div className={`w-screen ${hideAll ? "hidden" : ""} h-screen z-[999999] fixed`}>
      <div
        className={`transition-all absolute flex m-auto items-center justify-center bg-[#9F9FA8] dark:bg-[#47485D] ${
          loadingDone ? "opacity-0 bottom-full" : "inset-0"
        }`}
      >
        <div className={`${loadingDone ? "hidden" : ""}`}>
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="white"
            secondaryColor="black"
            radius="14"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass={``}
          />
        </div>
      </div>

      <div
        className={`w-screen h-screen grid grid-cols-6 lg:grid-cols-8 grid-rows-8 lg:grid-rows-6 ${
          loadingDone ? "" : "hidden"
        }`}
      >
        <div
          className={`bg-white dark:bg-[#47485D] w-full h-full ${
            hideFifth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#9F9FA8] dark:bg-[#3F4051] w-full h-full ${
            hideFirst ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#BFC1D3] dark:bg-[#8083A8] w-full h-full ${
            hideThird ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-white dark:bg-[#47485D] w-full h-full ${
            hideFifth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideSecond ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#BFC1D3] dark:bg-[#8083A8] w-full h-full ${
            hideThird ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-white dark:bg-[#47485D] w-full h-full ${
            hideFifth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideSecond ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideFourth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#BFC1D3] dark:bg-[#8083A8] w-full h-full ${
            hideThird ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-white dark:bg-[#47485D] w-full h-full ${
            hideFifth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideFourth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideSecond ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#BFC1D3] dark:bg-[#8083A8] w-full h-full ${
            hideThird ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#9F9FA8] dark:bg-[#3F4051] w-full h-full ${
            hideFirst ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-white dark:bg-[#47485D] w-full h-full ${
            hideFifth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideFourth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#BFC1D3] dark:bg-[#8083A8] w-full h-full ${
            hideThird ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#9F9FA8] dark:bg-[#3F4051] w-full h-full ${
            hideFirst ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideSecond ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-white dark:bg-[#47485D] w-full h-full ${
            hideFifth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideSecond ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#BFC1D3] dark:bg-[#8083A8] w-full h-full ${
            hideThird ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#9F9FA8] dark:bg-[#3F4051] w-full h-full ${
            hideFirst ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideFourth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#BFC1D3] dark:bg-[#8083A8] w-full h-full ${
            hideThird ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideFourth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-white dark:bg-[#47485D] w-full h-full ${
            hideFifth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#9F9FA8] dark:bg-[#3F4051] w-full h-full ${
            hideFirst ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-white dark:bg-[#47485D] w-full h-full ${
            hideFifth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideFourth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#BFC1D3] dark:bg-[#8083A8] w-full h-full ${
            hideThird ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#9F9FA8] dark:bg-[#3F4051] w-full h-full ${
            hideFirst ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-white dark:bg-[#47485D] w-full h-full ${
            hideFifth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideFourth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#BFC1D3] dark:bg-[#8083A8] w-full h-full ${
            hideThird ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-white dark:bg-[#47485D] w-full h-full ${
            hideFifth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#9F9FA8] dark:bg-[#3F4051] w-full h-full ${
            hideFirst ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideFourth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideSecond ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#BFC1D3] dark:bg-[#8083A8] w-full h-full ${
            hideThird ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-white dark:bg-[#47485D] w-full h-full ${
            hideFifth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#9F9FA8] dark:bg-[#3F4051] w-full h-full ${
            hideFirst ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideFourth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#BFC1D3] dark:bg-[#8083A8] w-full h-full ${
            hideThird ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#9F9FA8] dark:bg-[#3F4051] w-full h-full ${
            hideFirst ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideSecond ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
        <div
          className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] w-full h-full ${
            hideFourth ? "opacity-0 animate-in duration-500 fill-mode-forwards" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}
