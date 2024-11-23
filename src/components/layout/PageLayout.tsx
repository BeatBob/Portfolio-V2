"use client";

import { scrollPageTo } from "@/utils/animatedScrollTo";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Menu from "../Menu";
import PageBackground from "../PageBackground";
import SectionAbout from "../SectionAbout";
import SectionExperience from "../SectionExperience";
import SectionWork from "../SectionWork";
import SectionContact from "../SectionContact";
import Footer from "../Footer";
import ProgressBarComponents from "../ProgressBarComponents";
import LoadingPage from "../LoadingPage";
import Analytics from "@/lib/mixpanel";

type Page = {
  dictPage: { [key: string]: string };
  lang: string;
};

function PageLayout({ dictPage, lang }: Page) {
  const [progressBar, setProgressBar] = useState(0);
  const [mobile, setMobile] = useState(true);
  const [IsBeingScroll, setIsBeingScroll] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [themeColor, setThemeColor] = useState("");
  const [scrollSectionValue, setScrollSectionValue] = useState({ about: 0, experience: 0, work: 0, contact: 0 });
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setThemeColor(theme || "black");
  }, [theme]);

  useEffect(() => {
    Analytics.init();
    Analytics.track("Home");

    const timeoutId = setTimeout(() => {
      const isMobileView = document.documentElement.scrollWidth < 1024 || document.documentElement.clientWidth > 2200;
      const winWidthtPx = document.documentElement.scrollWidth - document.documentElement.clientWidth;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      let scroll = isMobileView
        ? Math.round((document.documentElement.scrollTop / winHeightPx) * 100)
        : Math.round((document.documentElement.scrollLeft / winWidthtPx) * 100);

      setMobile(isMobileView);
      setProgressBar(scroll);
    }, 100);

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
        setIsBeingScroll(true);
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
          setIsBeingScroll(true);
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
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <div>
      <LoadingPage progressBar={progressBar} />

      <ProgressBarComponents progressBar={progressBar} IsBeingScroll={IsBeingScroll} />

      <PageBackground progressBar={progressBar} />

      {/* nav  */}
      <Menu
        setMenuToggle={setMenuToggle}
        menuToggle={menuToggle}
        setTheme={setTheme}
        themeColor={themeColor}
        lang={lang}
        scrollSectionValue={scrollSectionValue}
        scrollPageTo={scrollPageTo}
        mobile={mobile}
        dictPage={dictPage}
      />

      {/* content  */}
      <div className="w-screen lg:w-fit 4xl:container 4xl:mb-60 lg:grid lg:grid-cols-[6vw_auto_auto_auto_90vw] 4xl:grid-cols-none gap-40 lg:max-h-screen 4xl:max-h-none overflow-x-visible">
        <div className="4xl:hidden"></div>

        {/* about  */}
        <SectionAbout progressBar={progressBar} mobile={mobile} lang={lang} dictPage={dictPage} />

        {/* experience */}
        <SectionExperience progressBar={progressBar} mobile={mobile} lang={lang} dictPage={dictPage} />

        {/* work */}
        <SectionWork progressBar={progressBar} mobile={mobile} lang={lang} dictPage={dictPage} />

        {/* contact */}
        <SectionContact progressBar={progressBar} mobile={mobile} lang={lang} dictPage={dictPage} />
      </div>

      {/* Footer */}
      <Footer progressBar={progressBar} lang={lang} dictPage={dictPage} />
    </div>
  );
}

export default PageLayout;
