"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          Spozyte kalorie
        </h3>
        <p>Spozyte kalorie</p>
        <p>1668 kcal</p>
        <p>B. 104g T. 79g W. 125g</p>
        <p>Zalecane</p>
        <p>2000 kcal</p>
      </div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <p>Sniadanie</p>
        <p>300 kcal</p>
      </div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <p>II Sniadanie</p>
        <p>400 kcal</p>
      </div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <p>Obiad</p>
        <p>500 kcal</p>
      </div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <p>Podwieczorek</p>
        <p>500 kcal</p>
      </div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <p>Kolacja</p>
        <p>500 kcal</p>
      </div>

      <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          Twoja aktualna masa ciała
        </h3>
        <p>70 kg</p>
      </div>
    </>
  );
}
