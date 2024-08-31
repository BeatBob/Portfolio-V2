"use client";

import { useStart } from "@/context/Start";
import { scrollPageTo } from "@/utils/animatedScrollTo";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Menu from "./Menu";
import PageBackground from "./PageBackground";
import SectionAbout from "./SectionAbout";
import SectionExperience from "./SectionExperience";
import SectionWork from "./SectionWork";
import SectionContact from "./SectionContact";
import Footer from "./Footer";
import ProgressBarComponents from "./ProgressBarComponents";

function PageLayout() {
  const [progressBar, setProgressBar] = useState(0);
  const [mobile, setMobile] = useState(true);
  const [menuToggle, setMenuToggle] = useState(false);
  const [scrollSectionValue, setScrollSectionValue] = useState({ about: 0, experience: 0, work: 0, contact: 0 });
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState("en");
  const [themeColor, setThemeColor] = useState("");
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
      {/* <div className="w-screen h-screen z-50 grid grid-cols-5 grid-rows-4 fixed">
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
        <div className="bg-[#5D5F7A] border border-white w-full h-full"></div>
      </div> */}

      {/* progress bar  */}
      <ProgressBarComponents progressBar={progressBar} />
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

      {/* nav  */}
      <Menu
        setMenuToggle={setMenuToggle}
        menuToggle={menuToggle}
        setTheme={setTheme}
        themeColor={themeColor}
        setLang={setLang}
        lang={lang}
        scrollSectionValue={scrollSectionValue}
        scrollPageTo={scrollPageTo}
        mobile={mobile}
      />

      <PageBackground progressBar={progressBar} />

      {/* content  */}
      <div className="w-screen lg:w-fit 4xl:container 4xl:mb-60 lg:grid lg:grid-cols-[6vw_auto_auto_auto_90vw] 4xl:grid-cols-none gap-40 lg:max-h-screen 4xl:max-h-none overflow-x-visible">
        <div className="4xl:hidden"></div>

        {/* about  */}
        <SectionAbout progressBar={progressBar} mobile={mobile} lang={lang} />

        {/* experience */}
        <SectionExperience progressBar={progressBar} mobile={mobile} lang={lang} />

        {/* work */}
        <SectionWork progressBar={progressBar} mobile={mobile} lang={lang} />

        {/* contact */}
        <SectionContact progressBar={progressBar} mobile={mobile} lang={lang} />
      </div>

      {/* Footer */}
      <Footer progressBar={progressBar} lang={lang} />
    </div>
  );
}

export default PageLayout;
