"use client";

import Image from "next/image";

type Props = {
  progressBar: Number | any;
  mobile: boolean;
  lang: string;
};

export default function SectionWork({ progressBar, mobile, lang }: Props) {
  return (
    <div
      id="work"
      className="relative pt-14 lg:min-h-screen 4xl:min-h-fit lg:max-w-fit 4xl:max-w-none lg:mx-40 4xl:mx-0 mb-20 lg:mb-0"
    >
      <p
        style={{ left: `${(mobile ? 0 : 100) + (progressBar - 80) * (mobile ? 0 : 2)}px` }}
        className="rojal_font px-3 text-5xl lg:text-9xl 2xl:text-[10rem] 4xl:text-[13rem] mb-10 relative transition-all text-center lg:text-left 4xl:left-0"
      >
        {lang === "en" ? "Some Things I've Built" : "Beberapa Hal yang Saya Buat"}
      </p>

      <div className="lg:w-fit lg:mx-auto lg:flex justify-center 4xl:block 4xl:ml-0 items-center gap-20 4xl:mt-20">
        <div className="4xl:flex gap-20 4xl:mb-20">
          <div className="group mx-auto w-72 md:min-w-[24rem] 2xl:md:min-w-[30rem] aspect-square relative bg-white">
            <div className="hidden lg:block absolute group-hover:backdrop-blur-sm w-[95%] h-[105%] group-hover:w-[135%] group-hover:2xl:w-[115%] group-hover:h-[95%] border-[3px] border-white group-hover:bg-[#000000d3] 4xl:group-hover:bg-transparent p-5 group-hover:z-20 4xl:group-hover:-z-10 rounded-md transform bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 transition-all duration-300">
              <div className="opacity-0 4xl:hidden group-hover:opacity-100 text-white relative w-full h-full">
                <p className="rojal_font text-3xl lg:text-4xl tracking-wider mb-3">YIPPY</p>

                <p className=" text-lg leading-snug font-normal">
                  {lang === "en"
                    ? "Yippy is an end-to-end corporate gifting solution for your company. For more than 2 years, I was responsible for changing the design to a mobile-responsive web, implementing SEO for organic traffic, improving performance and Core Web Vitals, and creating the Yippy dashboard, which I cannot include in this portfolio."
                    : "Yippy adalah solusi end-to-end corporate gifting untuk perusahaan Anda. Selama lebih dari 2 tahun, saya bertanggung jawab untuk mengubah desain menjadi web yang mobile-responsive, menerapkan SEO untuk organic traffic, meningkatkan performance dan Core Web Vitals, serta membuat dashboard Yippy, yang tidak dapat saya sertakan dalam portofolio ini."}
                </p>

                <div className="absolute bottom-2 left-0 w-fit">
                  <div className="flex flex-wrap items-center gap-5 mb-3 text-lg leading-snug font-bold">
                    <p>NextJS</p>
                    <p>Tailwind</p>
                    <p>Sanity</p>
                    <p>Axios</p>
                    <p>Mixpanel</p>
                  </div>

                  <a
                    href="https://yippy.id/"
                    target="blank"
                    className="relative block w-8 hover:scale-125 aspect-square transition-all"
                  >
                    <Image src={`/images/link.png`} alt="github" fill className={`invert rotate-45`} />
                  </a>
                </div>
              </div>
            </div>

            <Image
              src={`/images/yippy-logo.png`}
              sizes="100%"
              alt="yippy-logo"
              fill
              className={`border-[3px] border-[#000000d3]`}
            />
          </div>

          {/* mobile desc yippy  */}
          <div className="relative w-11/12 mx-auto text-center 4xl:text-left h-full my-10 lg:hidden 4xl:block text-lg lg:text-xl 4xl:text-3xl">
            <p className="font-normal">
              {lang === "en"
                ? "Yippy is an end-to-end corporate gifting solution for your company. For more than 2 years, I was responsible for changing the design to a mobile-responsive web, implementing SEO for organic traffic, improving performance and Core Web Vitals, and creating the Yippy dashboard, which I cannot include in this portfolio."
                : "Yippy adalah solusi end-to-end corporate gifting untuk perusahaan Anda. Selama lebih dari 2 tahun, saya bertanggung jawab untuk mengubah desain menjadi web yang mobile-responsive, menerapkan SEO untuk organic traffic, meningkatkan performance dan Core Web Vitals, serta membuat dashboard Yippy, yang tidak dapat saya sertakan dalam portofolio ini."}
            </p>

            <div className="border-t border-dashed border-black dark:border-white flex flex-wrap items-center justify-center gap-3 4xl:gap-8 mt-4 pt-4 font-bold">
              <p>NextJS</p>
              <p>Tailwind</p>
              <p>Sanity</p>
              <p>Axios</p>
              <p>Mixpanel</p>
            </div>

            <div className="flex items-center gap-5 w-fit mx-auto mt-5">
              <a
                href="https://yippy.id/"
                target="blank"
                className="relative block w-8 4xl:w-12 hover:scale-125 aspect-square transition-all"
              >
                <Image src={`/images/link.png`} alt="github" fill className={`dark:invert rotate-45`} />
              </a>
            </div>
          </div>
        </div>

        <div className="4xl:flex gap-20">
          <div className="group mx-auto w-72 md:min-w-[24rem] 2xl:md:min-w-[30rem] aspect-square relative rounded-md bg-white">
            <div className="hidden lg:block absolute group-hover:backdrop-blur-sm w-[95%] h-[105%] group-hover:w-[135%] group-hover:2xl:w-[115%] group-hover:h-[95%] border-[3px] border-white group-hover:bg-[#000000d3] 4xl:group-hover:bg-transparent p-5 group-hover:z-20 4xl:group-hover:-z-10 rounded-md transform bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 transition-all duration-300">
              <div className="opacity-0 4xl:hidden group-hover:opacity-100 text-white relative w-full h-full">
                <p className="rojal_font text-3xl lg:text-4xl tracking-wider mb-3">PORTFOLIO</p>

                <p className="opacity-0 group-hover:opacity-100 text-white text-lg font-normal">
                  {lang === "en"
                    ? "Because while working at Yippy i didn't have any personal projects to work on outside of working hours. So, please see my first portfolio which I made approximately 2 years ago."
                    : "Karena selama bekerja di Yippy saya tidak mempunyai proyek pribadi apa pun yang dikerjakan di luar jam kerja. Jadi silahkan lihat portofolio pertama saya yang saya buat kurang lebih 2 tahun yang lalu."}
                </p>

                <div className="absolute bottom-2 left-0 w-fit">
                  <div className="flex flex-wrap items-center gap-5 mb-3 text-lg font-bold">
                    <p>NextJS</p>
                    <p>Tailwind</p>
                    <p>Framer Motion</p>
                    <p>mapbox</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <a
                      href="https://github.com/BeatBob/Portofolio"
                      target="blank"
                      className="relative block w-8 hover:scale-125 aspect-square transition-all"
                    >
                      <Image src={`/images/github-mark-white.png`} alt="github" fill className={`invert-0`} />
                    </a>

                    <a
                      href="https://m-robi.vercel.app/"
                      target="blank"
                      className="relative block w-8 hover:scale-125 aspect-square transition-all"
                    >
                      <Image src={`/images/link.png`} alt="github" fill className={`invert rotate-45`} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Image
              src={`/images/mrobi-portfolio-v1.png`}
              alt="Robi-Photo"
              fill
              className={`rounded-md border-[3px] border-[#000000d3]`}
            />
          </div>

          {/* mobile desc portfolio  */}
          <div className="relative w-11/12 mx-auto text-center 4xl:text-left h-full my-10 lg:hidden 4xl:block text-lg lg:text-xl 4xl:text-3xl">
            <p className="font-normal">
              {lang === "en"
                ? "Because while working at Yippy i didn't have any personal projects to work on outside of working hours. So, please see my first portfolio which I made approximately 2 years ago."
                : "Karena selama bekerja di Yippy saya tidak mempunyai proyek pribadi apa pun yang dikerjakan di luar jam kerja. Jadi silahkan lihat portofolio pertama saya yang saya buat kurang lebih 2 tahun yang lalu."}
            </p>

            <div className="border-t border-dashed border-black dark:border-white flex flex-wrap items-center justify-center gap-3 4xl:gap-8 mt-4 pt-4 font-bold">
              <p>NextJS</p>
              <p>Tailwind</p>
              <p>Framer Motion</p>
              <p>mapbox</p>
            </div>

            <div className="flex items-center gap-5 w-fit mx-auto mt-5">
              <a
                href="https://github.com/BeatBob/Portofolio"
                target="blank"
                className="relative block w-8 4xl:w-12 hover:scale-125 aspect-square transition-all"
              >
                <Image src={`/images/github-mark-white.png`} alt="github" fill className={`invert dark:invert-0`} />
              </a>

              <a
                href="https://m-robi.vercel.app/"
                target="blank"
                className="relative block w-8 4xl:w-12 hover:scale-125 aspect-square transition-all"
              >
                <Image src={`/images/link.png`} alt="github" fill className={`dark:invert rotate-45`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
