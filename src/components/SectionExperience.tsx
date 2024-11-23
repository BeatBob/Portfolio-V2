"use client";

type Props = {
  progressBar: Number | any;
  mobile: boolean;
  lang: string;
  dictPage: { [key: string]: string };
};

export default function SectionExperience({ progressBar, mobile, lang, dictPage }: Props) {
  return (
    <div
      id="experience"
      className="relative pt-14 lg:min-h-screen 4xl:min-h-fit lg:max-w-screen-lg 2xl:max-w-screen-xl 4xl:max-w-none lg:mr-40 4xl:mr-0 mb-20 lg:mb-0"
    >
      <h2 className="rojal_font text-5xl lg:text-9xl 2xl:text-[10rem] 4xl:text-[13rem] mb-10 relative text-center lg:text-left lg:left-60 4xl:left-0">
        {dictPage["experience"]}
      </h2>

      <div
        style={{ left: `${(mobile ? 0 : 100) - progressBar * (mobile ? 0 : 5)}px` }}
        className="relative w-full lg:flex items-start gap-20 overflow-hidden lg:overflow-visible"
      >
        <div
          style={{ left: `${(mobile ? 0 : 250) - progressBar * (mobile ? 0 : 5)}px` }}
          className="relative mx-auto w-11/12 lg:w-8/12 text-lg lg:text-xl 2xl:text-2xl 4xl:text-3xl font-normal  text-center lg:text-left"
        >
          <p className="mb-5">{dictPage["experience_one"]}</p>
          <p>{dictPage["experience_two"]}</p>
        </div>

        <div
          style={{ left: `${(mobile ? 0 : 250) - progressBar * (mobile ? 0 : 5)}px` }}
          className="relative mx-auto w-11/12 lg:w-full text-lg lg:text-xl 2xl:text-2xl 4xl:text-3xl font-normal mt-10 lg:mt-0 text-center lg:text-left"
        >
          <p className="mb-5">{dictPage["experience_three"]}:</p>
          <ul className="grid grid-cols-2 ml-10 text-left">
            {[
              "HTML/CSS",
              "JavaScript (ES6)",
              "React",
              "Next JS",
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
          <p className="my-5">{dictPage["experience_four"]}:</p>
          <ul className="grid grid-cols-2 ml-10 text-left">
            {["Express JS", "Typescript"].map((item) => (
              <li className="list-disc font-bold" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
