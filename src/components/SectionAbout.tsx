"use client";

import Image from "next/image";

type Props = {
  progressBar: Number | any;
  mobile: boolean;
  lang: string;
};

export default function SectionAbout({ progressBar, mobile, lang }: Props) {
  return (
    <div
      id="about"
      className="relative pt-28 lg:pt-14 lg:min-h-screen 4xl:min-h-fit lg:max-w-screen-lg 2xl:max-w-screen-xl 4xl:max-w-none lg:mr-40 4xl:mr-0 mb-20 lg:mb-0"
    >
      <p className="rojal_font text-5xl lg:text-9xl 2xl:text-[10rem] 4xl:text-[13rem] mb-10 relative text-center lg:text-left lg:left-60 4xl:left-0">
        {lang === "en" ? "About" : "Profil"}
      </p>

      <div
        style={{ left: `${(mobile ? 0 : 150) - progressBar * (mobile ? 0 : 10)}px` }}
        className="relative w-full lg:flex items-center gap-20 overflow-hidden lg:overflow-visible"
      >
        <div
          style={{ transform: `rotate(${(progressBar / 100) * (mobile ? 0 : -45)}deg)` }}
          className="group mx-auto w-9/12 lg:w-64 md:min-w-[24rem] 2xl:md:min-w-[30rem] aspect-square relative rounded-md"
        >
          <div className="absolute w-full h-full border-4 border-gray-500 group-hover:border-black group-hover:dark:border-white rounded-md group-hover:-bottom-4 -bottom-6 lg:-bottom-5 group-hover:-right-4 -right-6 lg:-right-5 transition-all"></div>

          <Image src={`/images/Robi-Photo.jpg`} sizes="100%" alt="Robi-Photo" fill priority className={`rounded-md`} />
        </div>

        <div
          style={{ left: `${(mobile ? 0 : 50) - progressBar * (mobile ? 0 : 5)}px` }}
          className="relative mx-auto w-11/12 text-lg lg:text-xl xl:text-2xl 4xl:text-3xl font-normal mt-20 lg:mt-0 text-center lg:text-left"
        >
          <p className="mb-5">
            {lang === "en"
              ? "Hello! My name is M. Robi, a self-taught Front-end Developer with a passion for creating digital experiences. My journey into web development kicked off in November 2020 when I started learning about Digital Marketing and quickly discovered a passion for coding."
              : "Halo! Nama saya M. Robi, seorang self-taught Front-end Developer dan saya menikmati menciptakan hal-hal yang hidup di internet seperti website. Perjalanan saya dalam web development dimulai pada November 2020 ketika saya ingin belajar tentang Digital Marketing, namun saya menemukan minat terhadap coding."}
          </p>
          <p className="mb-5">
            {lang === "en"
              ? "I've learned a lot from online resources like FreeCodeCamp, YouTube, and Stack Overflow, gaining skills in HTML, CSS, JavaScript, and various frameworks."
              : "Saya telah belajar banyak dari sumber online seperti FreeCodeCamp, YouTube, dan Stack Overflow, dan memperoleh keterampilan dalam HTML, CSS, JavaScript, dan Framework nya."}
          </p>
          <p className="mb-5">
            {lang === "en"
              ? "Currently, I'm focused on advancing my career in Web Development. I'm excited about the future and eager to continue growing and improving in this field."
              : "Saat ini, saya fokus untuk meningkatkan karir saya di bidang web development. Saya penasaran tentang masa depan dan bersemangat untuk terus tumbuh dan berkembang di bidang ini."}
          </p>
        </div>
      </div>
    </div>
  );
}
