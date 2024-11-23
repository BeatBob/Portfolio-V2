"use client";

import Image from "next/image";

type Props = {
  progressBar: Number | any;
  mobile: boolean;
  lang: string;
  dictPage: { [key: string]: string };
};

export default function SectionAbout({ progressBar, mobile, lang, dictPage }: Props) {
  return (
    <div
      id="about"
      className="relative pt-28 lg:pt-14 lg:min-h-screen 4xl:min-h-fit lg:max-w-screen-lg 2xl:max-w-screen-xl 4xl:max-w-none lg:mr-40 4xl:mr-0 mb-20 lg:mb-0"
    >
      <h1 className="rojal_font text-5xl lg:text-9xl 2xl:text-[10rem] 4xl:text-[13rem] mb-10 relative text-center lg:text-left lg:left-60 4xl:left-0">
        {dictPage["about"]}
      </h1>

      <div
        style={{ left: `${(mobile ? 0 : 150) - progressBar * (mobile ? 0 : 10)}px` }}
        className="relative w-full lg:flex items-center gap-20 overflow-hidden lg:overflow-visible"
      >
        {/* image  */}
        <div
          style={{ transform: `rotate(${(progressBar / 100) * (mobile ? 0 : -45)}deg)` }}
          className="group mx-auto w-9/12 lg:w-64 md:min-w-[24rem] 2xl:md:min-w-[30rem] aspect-square relative rounded-md"
        >
          <div className="absolute w-full h-full border-4 border-gray-500 group-hover:border-black group-hover:dark:border-white rounded-md group-hover:-bottom-4 -bottom-6 lg:-bottom-5 group-hover:-right-4 -right-6 lg:-right-5 transition-all"></div>

          <Image src={`/images/Robi-Photo.jpg`} sizes="100%" alt="Robi-Photo" fill priority className={`rounded-md`} />
        </div>

        {/* content  */}
        <div
          style={{ left: `${(mobile ? 0 : 50) - progressBar * (mobile ? 0 : 5)}px` }}
          className="relative mx-auto w-11/12 text-lg lg:text-xl 2xl:text-2xl 4xl:text-3xl font-normal mt-20 lg:mt-0 text-center lg:text-left"
        >
          <p className="mb-5">{dictPage["about_one"]}</p>
          <p className="mb-5">{dictPage["about_two"]}</p>
          <p className="mb-5">{dictPage["about_three"]}</p>
        </div>
      </div>
    </div>
  );
}
