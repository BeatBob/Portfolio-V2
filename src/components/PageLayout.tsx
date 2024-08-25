"use client";

import { useStart } from "@/context/Start";
import { scrollPageTo } from "@/utils/animatedScrollTo";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

function PageLayout() {
  const [progressBar, setProgressBar] = useState(0);
  const [mobile, setMobile] = useState(true);
  const [menuToggle, setMenuToggle] = useState(false);
  const [scrollSectionValue, setScrollSectionValue] = useState({ about: 0, experience: 0, work: 0, contact: 0 });
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState("en");
  const [themeColor, setThemeColor] = useState("");
  const [scrollIndex, setScrollIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const { isEnter } = useStart();

  useEffect(() => {
    setThemeColor(theme || "black");
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      let scrolledPercentage = 0;

      let isMobile = document.documentElement.scrollWidth < 1024 || document.documentElement.clientWidth > 2200;

      let sectionAbout = document.getElementById("about");
      let sectionExperience = document.getElementById("experience");
      let sectionWork = document.getElementById("work");
      let sectionContact = document.getElementById("contact");
      let canScroll = true;

      function getScrollValue(section: any, adjust: boolean) {
        const rect = section.getBoundingClientRect();
        return (
          (isMobile ? rect.top : rect.left) +
          (isMobile ? window.scrollY : window.scrollX) -
          (adjust && isMobile ? 50 : 200)
        );
      }

      const scrollValue = [
        getScrollValue(sectionAbout, false),
        getScrollValue(sectionExperience, true),
        getScrollValue(sectionWork, true),
        getScrollValue(sectionContact, true),
      ];

      setScrollSectionValue((prevState) => {
        return {
          ...prevState,
          about: scrollValue[0],
          experience: scrollValue[1],
          work: scrollValue[2],
          contact: scrollValue[3],
        };
      });

      function scrollProgress() {
        const winWidthtPx = document.documentElement.scrollWidth - document.documentElement.clientWidth;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        scrolledPercentage = isMobile
          ? Math.round((document.documentElement.scrollTop / winHeightPx) * 100)
          : Math.round((document.documentElement.scrollLeft / winWidthtPx) * 100);

        setMobile(isMobile);

        setProgressBar(scrolledPercentage);
      }

      function onwheel(event: any) {
        if (canScroll) {
          let scrollDesktop = document.documentElement.scrollLeft;

          event.stopImmediatePropagation();

          if (event.wheelDeltaY > 0) {
            scrolledPercentage !== 0 && scrollPageTo((scrollDesktop -= 200), 300);
          } else {
            scrolledPercentage !== 100 && scrollPageTo((scrollDesktop += 200), 300);
          }

          canScroll = false;
          setTimeout(() => {
            canScroll = true;
          }, 300);
        }
      }

      window.addEventListener("scroll", scrollProgress);
      !isMobile && window.addEventListener("wheel", onwheel);
      !isMobile &&
        window.addEventListener(
          "wheel",
          function (e) {
            if (e.ctrlKey) {
              e.preventDefault();
            }
          },
          { passive: false }
        );

      return () => {
        window.removeEventListener("scroll", scrollProgress);
        !isMobile && window.removeEventListener("wheel", onwheel);
      };
    }
  }, []);

  return (
    <div>
      {/* progress bar  */}
      <>
        <div
          className={`fixed transition-all right-3 top-3 h-1 w-96 border dark:border-white border-slate-700 z-50 hidden lg:block 4xl:hidden`}
        >
          <div style={{ width: `${progressBar}%` }} className={`transition-all h-1 dark:bg-white bg-slate-700`}></div>
        </div>

        {/* mobile & large monitor  */}
        <div
          style={{ height: `${progressBar}%` }}
          className={`fixed transition-all right-0 top-0 w-1 dark:bg-white bg-slate-700 z-50 lg:hidden 4xl:block`}
        ></div>
      </>

      {/* menu  */}
      <div className="fixed top-2 lg:top-4 left-2 lg:left-3 right-auto grid lg:grid-cols-[50px_1fr] gap-5 4xl:gap-14 z-50">
        <div className={`w-full 4xl:w-fit h-full flex lg:flex-col gap-5`}>
          {/* menu  */}
          <div
            onClick={() => setMenuToggle((prev) => !prev)}
            className="group relative cursor-pointer flex flex-col items-center justify-center backdrop-blur-lg transition-all w-full aspect-square border lg:border-2 rounded-full border-gray-700 dark:border-white"
          >
            <div className="p-[2px] 4xl:p-1 lg:group-hover:mb-2 lg:mb-1 mb-2 transition-all w-fit h-fit mx-auto rounded-full bg-black dark:bg-white"></div>
            <div className="p-[2px] 4xl:p-1 w-fit h-fit mx-auto rounded-full bg-black dark:bg-white"></div>
            <div className="p-[2px] 4xl:p-1 lg:group-hover:mt-2 lg:mt-1 mt-2 transition-all w-fit h-fit mx-auto rounded-full bg-black dark:bg-white"></div>
          </div>

          {/* theme  */}
          <div className="w-full grid grid-cols-4 lg:block">
            {/* theme Light */}
            <div
              onClick={() => setTheme("light")}
              className="px-4 lg:px-2 4xl:px-4 lg:py-4 4xl:py-6 flex justify-center items-center cursor-pointer  border-gray-700 dark:border-white border lg:border-2 rounded-l-full lg:rounded-bl-none lg:rounded-t-full backdrop-blur-lg"
            >
              <Sun
                className="lg:hover:scale-125 hover:scale-90 scale-75 lg:scale-100 4xl:scale-150 4xl:hover:scale-[1.7] transition-all duration-300"
                strokeWidth={2}
                size={20}
                color={themeColor === "light" ? "black" : "#6b7280"}
              />
            </div>

            {/* theme Dark */}
            <div
              onClick={() => setTheme("dark")}
              className="px-4 lg:px-2 4xl:px-4 lg:py-4 4xl:py-6 flex justify-center items-center cursor-pointer  border-gray-700 dark:border-white border-y lg:border-x-2 lg:border-y-0 backdrop-blur-lg"
            >
              <Moon
                className="lg:hover:scale-125 hover:scale-90 scale-75 lg:scale-100 4xl:scale-150 4xl:hover:scale-[1.7] transition-all duration-300"
                strokeWidth={2.5}
                size={20}
                color={themeColor === "dark" ? "white" : "#6b7280"}
              />
            </div>

            {/* lang EN */}
            <div
              onClick={() => setLang("en")}
              className={`${
                lang === "en" ? "" : "text-gray-500"
              } group cursor-pointer px-2 4xl:px-4 lg:py-4 4xl:py-6 border-gray-700 dark:border-white flex items-center justify-center font-bold text-sm 4xl:text-3xl border-y lg:border-x-2 lg:border-b-0 lg:border-t-2 border-l backdrop-blur-lg`}
            >
              <span className="group-hover:scale-125 transition-all duration-300">EN</span>
            </div>

            {/* lang EN */}
            <div
              onClick={() => setLang("id")}
              className={`${
                lang === "id" ? "" : "text-gray-500"
              } group cursor-pointer px-2 4xl:px-4 lg:py-4 4xl:py-6 flex items-center justify-center font-bold text-sm 4xl:text-3xl border-gray-700 dark:border-white rounded-r-full lg:rounded-b-full lg:rounded-tr-none border lg:border-2 backdrop-blur-lg`}
            >
              <span className="group-hover:scale-125 transition-all duration-300">ID</span>
            </div>
          </div>
        </div>

        {/* menu options */}
        <div className="w-fit grid gap-4 h-fit lg:text-lg 4xl:text-3xl overflow-hidden">
          <div
            onClick={() => {
              scrollPageTo(scrollSectionValue.about, 400, mobile ? true : false);
            }}
            className={`font-normal backdrop-blur-lg px-4 4xl:px-6 py-2 4xl:py-3 rounded-full w-fit border-2 border-gray-700 dark:border-white cursor-pointer transition-all duration-200,(mobile?true:false) ${
              menuToggle ? "opacity-100 ml-0" : "opacity-100 -ml-96"
            }`}
          >
            {lang === "en" ? "About" : "Profil"}
          </div>
          <div
            onClick={() => {
              scrollPageTo(scrollSectionValue.experience, 400, mobile ? true : false);
            }}
            className={`font-normal backdrop-blur-lg px-4 4xl:px-6 py-2 4xl:py-3 rounded-full w-fit border-2 border-gray-700 dark:border-white cursor-pointer transition-all duration-300 ${
              menuToggle ? "opacity-100 ml-0" : "opacity-100 -ml-96"
            }`}
          >
            {lang === "en" ? "Experience" : "Pengalaman"}
          </div>
          <div
            onClick={() => {
              scrollPageTo(scrollSectionValue.work, 400, mobile ? true : false);
            }}
            className={`font-normal backdrop-blur-lg px-4 4xl:px-6 py-2 4xl:py-3 rounded-full w-fit border-2 border-gray-700 dark:border-white cursor-pointer transition-all duration-500 ${
              menuToggle ? "opacity-100 ml-0" : "opacity-100 -ml-96"
            }`}
          >
            {lang === "en" ? "Work" : "Pekerjaan"}
          </div>
          <div
            onClick={() => {
              scrollPageTo(scrollSectionValue.contact, 400, mobile ? true : false);
            }}
            className={`font-normal backdrop-blur-lg px-4 4xl:px-6 py-2 4xl:py-3 rounded-full w-fit border-2 border-gray-700 dark:border-white cursor-pointer transition-all duration-700 ${
              menuToggle ? "opacity-100 ml-0" : "opacity-100 -ml-96"
            }`}
          >
            {lang === "en" ? "Contact" : "Kontak"}
          </div>
          <a
            href="https://drive.google.com/file/d/1MUiOCvabl2l_O8uKUx41U2KvRZXQSMHR/view?usp=sharing"
            target="_blank"
            className={`font-normal backdrop-blur-lg px-4 4xl:px-6 py-2 4xl:py-3 rounded-full w-fit border-2 border-gray-700 dark:border-white cursor-pointer transition-all duration-1000 ${
              menuToggle ? "opacity-100 ml-0" : "opacity-100 -ml-96"
            }`}
          >
            Resume
          </a>
        </div>
      </div>

      {/* background  */}
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
                  priority
                  className={`opacity-20 transition-all`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content  */}
      <div className="w-screen lg:w-fit 4xl:container 4xl:mb-60 lg:grid lg:grid-cols-[6vw_auto_auto_auto_90vw] 4xl:grid-cols-none gap-40 lg:max-h-screen 4xl:max-h-none overflow-x-visible">
        <div className="4xl:hidden"></div>

        {/* about  */}
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

              <Image src={`/images/Robi-Photo.jpg`} alt="Robi-Photo" fill priority className={`rounded-md`} />
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

        {/* experience */}
        <div
          id="experience"
          className="relative pt-14 lg:min-h-screen 4xl:min-h-fit lg:max-w-screen-lg 2xl:max-w-screen-xl 4xl:max-w-none lg:mr-40 4xl:mr-0 mb-20 lg:mb-0"
        >
          <p className="rojal_font text-5xl lg:text-9xl 2xl:text-[10rem] 4xl:text-[13rem] mb-10 relative text-center lg:text-left lg:left-60 4xl:left-0">
            {lang === "en" ? "Experience" : "Pengalaman"}
          </p>

          <div
            style={{ left: `${(mobile ? 0 : 100) - progressBar * (mobile ? 0 : 5)}px` }}
            className="relative w-full lg:flex items-start gap-20 overflow-hidden lg:overflow-visible"
          >
            <div
              style={{ left: `${(mobile ? 0 : 250) - progressBar * (mobile ? 0 : 5)}px` }}
              className="relative mx-auto w-11/12 lg:w-8/12 text-lg lg:text-xl xl:text-2xl 4xl:text-3xl font-normal  text-center lg:text-left"
            >
              <p className="mb-5">
                {lang === "en"
                  ? "I specialize in creating responsive, high-performance websites that are both professional and easy to use. My expertise is in front-end development, including HTML, CSS, and JavaScript. I have experience building small to medium-sized web applications, always trying to adhere to best practices to ensure quality and efficiency."
                  : "Saya berspesialisasi dalam membuat situs web responsif dan berkinerja tinggi yang profesional dan mudah digunakan. Keahlian saya meliputi front-end development, termasuk HTML, CSS, dan JavaScript. Saya memiliki pengalaman dalam membangun aplikasi web berskala kecil hingga menengah, selalu mencoba mematuhi best practices untuk memastikan kualitas dan efisiensi."}
              </p>
              <p>
                {lang === "en"
                  ? "Visit my LinkedIn profile for more details, or feel free to contact me directly."
                  : "Untuk informasi lebih lanjut, kunjungi profil LinkedIn saya atau hubungi saya langsung."}
              </p>
            </div>

            <div
              style={{ left: `${(mobile ? 0 : 250) - progressBar * (mobile ? 0 : 5)}px` }}
              className="relative mx-auto w-11/12 lg:w-full text-lg lg:text-xl xl:text-2xl 4xl:text-3xl font-normal mt-10 lg:mt-0 text-center lg:text-left"
            >
              <p className="mb-5">
                {lang === "en"
                  ? "Here are a few technologies I've been working with recently"
                  : "Berikut beberapa teknologi yang saya gunakan"}
                :
              </p>
              <ul className="grid grid-cols-2 ml-10 text-left">
                {[
                  "HTML/CSS",
                  "JavaScript (ES6)",
                  "React",
                  "NextJs",
                  "Sanity",
                  "Redux Toolkit",
                  "GIT",
                  "GITHUB",
                  "Postman",
                  "Axios",
                  "Chrome DevTools",
                ].map((item) => (
                  <li className="list-disc font-bold" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* work */}
        <div
          id="work"
          className="relative pt-14 lg:min-h-screen 4xl:min-h-fit lg:max-w-fit 4xl:max-w-none lg:mx-40 4xl:mx-0 mb-20 lg:mb-0"
        >
          <p
            style={{ left: `${(mobile ? 0 : 100) + (progressBar - 80) * (mobile ? 0 : 2)}px` }}
            className="rojal_font text-5xl lg:text-9xl 2xl:text-[10rem] 4xl:text-[13rem] mb-10 relative transition-all text-center lg:text-left 4xl:left-0"
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

        {/* contact */}
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
      </div>

      {/* desktop footer  */}
      <div className="fixed bottom-1 inset-x-0 py-4 px-4 z-50 transition-all duration-500 hidden lg:block 4xl:hidden">
        <Drawer>
          <div className="w-fit mx-auto">
            <DrawerTrigger asChild>
              <Button variant="outline">{lang === "en" ? "Social Profiles" : "Profil Sosial"}</Button>
            </DrawerTrigger>
          </div>

          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <div className="mt-8 mb-5">
                <div className="flex items-center justify-center gap-5 w-fit mx-auto my-3 ">
                  <a
                    href="https://github.com/BeatBob"
                    target="blank"
                    className="relative block w-8 hover:scale-125 aspect-square transition-all "
                  >
                    <Image src={`/images/github-mark-white.png`} alt="github" fill className={`dark:invert-0 invert`} />
                  </a>

                  <a
                    href="https://x.com/BeatmBob"
                    target="blank"
                    className="relative block w-8 hover:scale-125 aspect-square transition-all "
                  >
                    <Image src={`/images/twitter.png`} alt="twitter" fill className={`dark:invert`} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/m-robi/"
                    target="blank"
                    className="relative block w-8 hover:scale-125 aspect-square transition-all "
                  >
                    <Image src={`/images/linkedin.png`} alt="linkedin" fill className={`dark:invert`} />
                  </a>
                </div>

                <p className="text-center font-medium">©2024 | Coded by BeatmBob (M. Robi)</p>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* mobile footer  */}
      <div
        className={`lg:hidden 4xl:block fixed ${
          progressBar >= 98 ? "bottom-0" : "-bottom-40"
        } left-0 right-1 py-4 px-4 z-50 transition-all duration-500 backdrop-blur-sm`}
      >
        <div>
          <div className="flex items-center gap-5 4xl:gap-10 w-fit mx-auto mb-3">
            <a
              href="https://github.com/BeatBob"
              target="blank"
              className="relative block w-8 4xl:w-14 hover:scale-125 aspect-square transition-all "
            >
              <Image src={`/images/github-mark-white.png`} alt="github" fill className={`invert dark:invert-0`} />
            </a>

            <a
              href="https://x.com/BeatmBob"
              target="blank"
              className="relative block w-8 4xl:w-14 hover:scale-125 aspect-square transition-all "
            >
              <Image src={`/images/twitter.png`} alt="twitter" fill className={`dark:invert`} />
            </a>

            <a
              href="https://www.linkedin.com/in/m-robi/"
              target="blank"
              className="relative block w-8 4xl:w-14 hover:scale-125 aspect-square transition-all "
            >
              <Image src={`/images/linkedin.png`} alt="linkedin" fill className={`dark:invert`} />
            </a>
          </div>

          <p className="text-center 4xl:text-2xl">
            ©2024 | Coded by{" "}
            <a
              href="https://github.com/BeatBob"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:font-medium"
            >
              BeatmBob
            </a>{" "}
            (M. Robi)
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
