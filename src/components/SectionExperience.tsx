"use client";

type Props = {
  progressBar: Number | any;
  mobile: boolean;
  lang: string;
};

export default function SectionExperience({ progressBar, mobile, lang }: Props) {
  return (
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
          className="relative mx-auto w-11/12 lg:w-8/12 text-lg lg:text-xl 2xl:text-2xl 4xl:text-3xl font-normal  text-center lg:text-left"
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
          className="relative mx-auto w-11/12 lg:w-full text-lg lg:text-xl 2xl:text-2xl 4xl:text-3xl font-normal mt-10 lg:mt-0 text-center lg:text-left"
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
          <p className="my-5">
            {lang === "en"
              ? "and some more that I'm currently studying"
              : "dan beberapa lagi yang sedang saya pelajari"}
            :
          </p>
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
