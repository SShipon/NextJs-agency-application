"use client"
export const ButtonUi = ({text}) => {
  return (
    <>
      <button className="mb-4 py-4 w-full rounded text-sm bg-green-600 hover:bg-green-700 text-white font-bold leading-normal transition duration-200">
       {text}
      </button>
    </>
  );
};


