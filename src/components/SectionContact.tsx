"use client";

import Image from "next/image";

type Props = {
  progressBar: Number | any;
  mobile: boolean;
  lang: string;
};

export default function SectionContact({ progressBar, mobile, lang }: Props) {
  return (
    <div
      id="contact"
      className="relative pt-14 lg:min-h-screen 4xl:min-h-fit lg:max-w-[800px] xl:max-w-screen-lg 2xl:max-w-screen-xl 4xl:max-w-none lg:ml-40 2xl:mr-40 4xl:mx-0 mb-32 lg:mb-0"
    >
      <p className="rojal_font text-5xl lg:text-9xl 2xl:text-[10rem] 4xl:text-[13rem] mb-10 relative text-center lg:text-left lg:left-60 4xl:left-0">
        {lang === "en" ? "What's next?" : "Apa Selanjutnya?"}
      </p>

      <div
        style={{ left: `${(mobile ? 0 : 150) - (progressBar - 90) * (mobile ? 0 : 15)}px` }}
        className="relative w-full lg:flex items-start gap-20 overflow-hidden lg:overflow-visible"
      >
        <div className="group mx-auto w-72 md:min-w-[24rem] 2xl:md:min-w-[30rem] aspect-square relative rounded-md">
          <div className="absolute w-full h-full border-4 border-gray-500 group-hover:border-black group-hover:dark:border-white rounded-md group-hover:-bottom-4 -bottom-6 lg:-bottom-5 group-hover:-right-4 -right-6 lg:-right-5 transition-all"></div>

          <Image src={`/images/Robi-Photo.jpg`} alt="Robi-Photo" fill className={`rounded-md`} />
        </div>

        <div
          style={{ left: `${(mobile ? 0 : 50) - (progressBar - 90) * (mobile ? 0 : 5)}px` }}
          className="relative mx-auto w-11/12 text-lg lg:text-xl xl:text-2xl 4xl:text-3xl font-normal mt-20 lg:mt-0 text-center lg:text-left"
        >
          <p className="mb-5">{lang === "en" ? "Get In Touch!" : ""}</p>
          <p>
            {lang === "en"
              ? `I’m always open to new opportunities and would love to hear from you. Whether you have a question or just want to say hello, feel free to reach out. I’ll do my best to get back to you`
              : "Saya selalu terbuka untuk peluang baru. Apakah Anda memiliki pertanyaan atau hanya ingin menyapa, jangan ragu untuk menghubungi saya. Saya akan berusaha sebaik mungkin untuk membalas pesan Anda!"}
          </p>

          <div className="px-5 py-3 border-2 cursor-pointer border-gray-600 dark:border-white w-fit mt-10 mx-auto lg:mx-0 backdrop-blur-md">
            {lang === "en" ? "Send Message" : "Kirim Pesan"}
          </div>
        </div>
      </div>
    </div>
  );
}
