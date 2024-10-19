"use client";

import { Moon, Sun } from "lucide-react";

type Props = {
  setMenuToggle: any;
  menuToggle: boolean;
  setTheme: any;
  themeColor: string;
  setLang: any;
  lang: string;
  scrollSectionValue: any;
  scrollPageTo: any;
  mobile: boolean;
};

export default function Menu({
  setMenuToggle,
  menuToggle,
  setTheme,
  themeColor,
  setLang,
  lang,
  scrollSectionValue,
  scrollPageTo,
  mobile,
}: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 lg:right-auto lg:bottom-0 pb-5 lg:pr-5 pl-4 pt-4 grid lg:grid-cols-[50px_1fr] gap-5 4xl:gap-14 z-50 bg-gradient-to-b lg:bg-gradient-to-r from-white dark:from-gray-900 to-transparent">
      <div className={`w-fit lg:w-full 4xl:w-fit h-full flex lg:flex-col gap-5`}>
        {/* menu  */}
        <div
          onClick={() => setMenuToggle((prev: boolean) => !prev)}
          className="group relative cursor-pointer flex flex-col items-center justify-center backdrop-blur-lg transition-all w-full max-w-[3.15rem] 3xl:max-w-full aspect-square border lg:border-2 rounded-full border-gray-700 dark:border-white"
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
              className="min-w-fit lg:hover:scale-125 hover:scale-90 scale-75 lg:scale-100 4xl:scale-150 4xl:hover:scale-[1.7] transition-all duration-300"
              strokeWidth={2}
              size={25}
              color={themeColor === "light" ? "black" : "#9ca3af"}
            />
          </div>

          {/* theme Dark */}
          <div
            onClick={() => setTheme("dark")}
            className="px-4 lg:px-2 4xl:px-4 lg:py-4 4xl:py-6 flex justify-center items-center cursor-pointer  border-gray-700 dark:border-white border-y lg:border-x-2 lg:border-y-0 backdrop-blur-lg"
          >
            <Moon
              className="min-w-fit lg:hover:scale-125 hover:scale-90 scale-75 lg:scale-100 4xl:scale-150 4xl:hover:scale-[1.7] transition-all duration-300"
              strokeWidth={2.5}
              size={25}
              color={themeColor === "dark" ? "white" : "#9ca3af"}
            />
          </div>

          {/* lang EN */}
          <div
            onClick={() => setLang("en")}
            className={`${
              lang === "en" ? "" : "text-gray-400"
            } group cursor-pointer px-2 4xl:px-4 lg:py-4 4xl:py-6 border-gray-700 dark:border-white flex items-center justify-center font-bold text-sm 4xl:text-3xl border-y lg:border-x-2 lg:border-b-0 lg:border-t-2 border-l backdrop-blur-lg`}
          >
            <span className="group-hover:scale-125 transition-all duration-300">EN</span>
          </div>

          {/* lang EN */}
          <div
            onClick={() => setLang("id")}
            className={`${
              lang === "id" ? "" : "text-gray-400"
            } group cursor-pointer px-2 4xl:px-4 lg:py-4 4xl:py-6 flex items-center justify-center font-bold text-sm 4xl:text-3xl border-gray-700 dark:border-white rounded-r-full lg:rounded-b-full lg:rounded-tr-none border lg:border-2 backdrop-blur-lg`}
          >
            <span className="group-hover:scale-125 transition-all duration-300">ID</span>
          </div>
        </div>
      </div>

      {/* menu options */}
      <div className="w-fit flex flex-wrap lg:grid gap-4 h-fit lg:text-lg 4xl:text-3xl overflow-hidden">
        <div
          onClick={() => {
            scrollPageTo(scrollSectionValue.about, 400, mobile ? true : false);
          }}
          className={`font-normal backdrop-blur-lg px-4 4xl:px-6 py-2 4xl:py-3 rounded-full w-fit h-fit border-2 border-gray-700 dark:border-white cursor-pointer transition-all duration-1000 lg:duration-200 ${
            menuToggle ? "opacity-100 ml-0 mt-0" : "opacity-100 -mt-96 lg:-ml-96"
          }`}
        >
          {lang === "en" ? "About" : "Profil"}
        </div>
        <div
          onClick={() => {
            scrollPageTo(scrollSectionValue.experience, 400, mobile ? true : false);
          }}
          className={`font-normal backdrop-blur-lg px-4 4xl:px-6 py-2 4xl:py-3 rounded-full w-fit h-fit border-2 border-gray-700 dark:border-white cursor-pointer transition-all duration-700 lg:duration-300 ${
            menuToggle ? "opacity-100 ml-0 mt-0" : "opacity-100 -mt-96 lg:-ml-96"
          }`}
        >
          {lang === "en" ? "Experience" : "Pengalaman"}
        </div>
        <div
          onClick={() => {
            scrollPageTo(scrollSectionValue.work, 400, mobile ? true : false);
          }}
          className={`font-normal backdrop-blur-lg px-4 4xl:px-6 py-2 4xl:py-3 rounded-full w-fit h-fit border-2 border-gray-700 dark:border-white cursor-pointer transition-all duration-500 ${
            menuToggle ? "opacity-100 ml-0 mt-0" : "opacity-100 -mt-96 lg:-ml-96"
          }`}
        >
          {lang === "en" ? "Work" : "Pekerjaan"}
        </div>
        <div
          onClick={() => {
            scrollPageTo(scrollSectionValue.contact, 400, mobile ? true : false);
          }}
          className={`font-normal backdrop-blur-lg px-4 4xl:px-6 py-2 4xl:py-3 rounded-full w-fit h-fit border-2 border-gray-700 dark:border-white cursor-pointer transition-all duration-300 lg:duration-700 ${
            menuToggle ? "opacity-100 ml-0 mt-0" : "opacity-100 -mt-96 lg:-ml-96"
          }`}
        >
          {lang === "en" ? "Contact" : "Kontak"}
        </div>
        <a
          href="https://drive.google.com/file/d/1MUiOCvabl2l_O8uKUx41U2KvRZXQSMHR/view?usp=sharing"
          target="_blank"
          className={`font-normal backdrop-blur-lg px-4 4xl:px-6 py-2 4xl:py-3 rounded-full w-fit h-fit border-2 border-gray-700 dark:border-white cursor-pointer transition-all duration-200 lg:duration-1000 ${
            menuToggle ? "opacity-100 ml-0 mt-0" : "opacity-100 -mt-96 lg:-ml-96"
          }`}
        >
          Resume
        </a>
      </div>
    </div>
  );
}
