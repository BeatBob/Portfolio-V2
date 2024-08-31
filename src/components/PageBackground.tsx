"use client";

import Image from "next/image";

type Props = {
  progressBar: Number | any;
};

export default function PageBackground({ progressBar }: Props) {
  return (
    <div className={`bg-[#9B9BA2] dark:bg-[#373845] fixed inset-0 -z-10 flex items-center justify-center opacity-50`}>
      <div
        className={`bg-[#9F9FA8] dark:bg-[#3F4051] h-[90vh] lg:h-auto w-auto lg:w-[85vw] aspect-square rounded-full flex items-center justify-center`}
      >
        <div
          className={`bg-[#A3A3AE] dark:bg-[#47485D] h-[70vh] lg:h-auto w-auto lg:w-[65vw] aspect-square rounded-full flex items-center justify-center`}
        >
          <div
            className={`bg-[#AEAFBC] dark:bg-[#5D5F7A] h-[50vh] lg:h-auto w-auto lg:w-[45vw] aspect-square rounded-full flex items-center justify-center`}
          >
            <div
              className={`bg-[#BFC1D3] dark:bg-[#8083A8] h-[30vh] lg:h-auto w-auto lg:w-[25vw] aspect-square rounded-full flex items-center justify-center relative`}
            >
              <Image
                src={`/images/logo.png`}
                alt="logo"
                style={{ transform: `rotate(${(progressBar / 100) * 360}deg)` }}
                fill
                sizes="100%"
                priority
                className={`opacity-20 transition-all`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
