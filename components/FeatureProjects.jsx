import Image from "next/image";
import Link from "next/link";
import { StartBtn } from "./ui/StartBtn";

const FeatureProjects = () => {
  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container px-4 mx-auto">
          <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
            <div className="text-center lg:text-left">
              <span className="text-emerald-600 font-bold">
               It is possible to build a business
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                Featured Projects
              </h2>
            </div>
           <StartBtn txt="View More Projects" />
          </div>
          <div className="flex flex-wrap -mx-4 mb-4">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
              <Link href="/">
                <Image
                  className="h-80 w-full mx-auto object-cover rounded"
                  src="/fp/fp1.jpg"
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
            </div>
            <div className="relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="relative h-80 mb-5 mx-auto rounded-lg">
                <Image
                  className="w-full relative h-full rounded-lg object-cover"
                  src="/fp/hero3.jpg"
                  alt=""
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />

                <div className="absolute inset-0 p-6 flex flex-col items-start">
                  <span className="text-gray-400">2021</span>
                  <p className="mb-auto text-xl lg:text-2xl text-white font-bold">
                  It is much more challenging to do so
                  </p>
                  <Link
                    className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                    href="/"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
              <Link href="#">
                <Image
                  className="h-80 w-full mx-auto object-cover rounded"
                  src="/fp/fp2.jpg"
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
              <Link href="/">
                <Image
                  className="h-80 w-full mx-auto object-cover rounded"
                  src="/fp/hero3.jpg"
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
              <Link href="/">
                <Image
                  className="h-80 w-full mx-auto object-cover rounded"
                  src="/fp/fp4.jpg"
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
              <Link href="#">
                <Image
                  className="h-80 w-full mx-auto object-cover rounded"
                  src="/fp/fp5.jpg"
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Link
              className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-emerald-600 hover:bg-emerald-700 text-gray-50 font-bold leading-loose transition duration-200"
              href="/"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProjects;
