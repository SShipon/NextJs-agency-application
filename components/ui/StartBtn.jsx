"use client";

import Link from "next/link";

export const StartBtn = ({ txt }) => {
  return (
    <>
      <button>
        <Link
          className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
          href="#"
        >
          {txt}
        </Link>
      </button>
    </>
  );
};
