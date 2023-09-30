"use client";

import Link from "next/link";

export const StartBtn = ({ txt }) => {
  return (
    <>
      <button>
        <Link
          className="inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-250 rounded-l-xl rounded-t-xl"
          href="/"
        >
          {txt}
        </Link>
      </button>
    </>
  );
};
