"use client";

import Image from "next/image";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Button } from "./ui/button";

type Props = {
  progressBar: Number | any;
  lang: string;
};

export default function Footer({ progressBar, lang }: Props) {
  return (
    <>
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
    </>
  );
}
