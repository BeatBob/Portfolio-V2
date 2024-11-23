"use client";

type Props = {
  progressBar: Number | any;
  IsBeingScroll: boolean;
};

export default function ProgressBarComponents({ progressBar, IsBeingScroll }: Props) {
  return (
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
  );
}
