"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <div className="py-20 bg-gray-900 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="pb-12 flex flex-wrap items-center justify-between border-b border-gray-800">
            <div className="w-full lg:w-1/5 mb-12 lg:mb-4">
              <Link
                className="inline-block text-3xl font-bold leading-none"
                href="#"
              >
                <Image
                  className="h-12"
                  src="/atis-assets/logo/atis/atis-mono-white.svg"
                  alt=""
                  width={100}
                  height={100}
                  priority={true}
                />
              </Link>
            </div>
            <div className="w-full lg:w-auto">
              <ul className="flex flex-wrap lg:space-x-5 items-center">
                <li className="w-full md:w-auto mb-2 md:mb-0">
                  <Link
                    className="lg:text-sm text-gray-400 hover:text-gray-300"
                    href={"/"}
                  >
                    Start
                  </Link>
                </li>
                <li className="hidden md:block">
                  <svg
                    className="mx-4 w-4 h-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li className="w-full md:w-auto mb-2 md:mb-0">
                  <Link
                    className="lg:text-sm text-gray-400 hover:text-gray-300"
                    href={"/team"}
                  >
                    Team
                  </Link>
                </li>
                <li className="hidden md:block">
                  <svg
                    className="mx-4 w-4 h-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li className="w-full md:w-auto mb-2 md:mb-0">
                  <Link
                    className="lg:text-sm text-gray-400 hover:text-gray-300"
                    href={"/services"}
                  >
                    Services
                  </Link>
                </li>
                <li className="hidden md:block">
                  <svg
                    className="mx-4 w-4 h-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li className="w-full md:w-auto mb-2 md:mb-0">
                  <Link
                    className="lg:text-sm text-gray-400 hover:text-gray-300"
                    href={"/projects"}
                  >
                    Projects
                  </Link>
                </li>
                <li className="hidden md:block">
                  <svg
                    className="mx-4 w-4 h-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li>
                  <Link
                    className="lg:text-sm text-gray-400 hover:text-gray-300"
                    href={"/testimonial"}
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-between items-center">
            <p className="order-last text-sm text-gray-400">
              © 2024. All rights reserved.
            </p>
            <div className="mb-4 lg:mb-0 order-first lg:order-last">
              <Link
                className="inline-block mr-2 p-2 bg-gray-800 hover:bg-gray-700 rounded"
                href="/"
              >
                <Image
                  src="atis-assets/social/facebook.svg" 
                  alt="facebook"
                  width={30}
                  height={30}
                  priority={true}
                />
              </Link>
              <Link
                className="inline-block mr-2 p-2 bg-gray-800 hover:bg-gray-700 rounded"
                href="/"
              >
                <Image
                  src="atis-assets/social/twitter.svg"
                  alt="twitter"
                  width={30}
                  height={30}
                  priority={true}
                />
              </Link>
              <Link
                className="inline-block mr-2 p-2 bg-gray-800 hover:bg-gray-700 rounded"
                href="/"
              >
                <Image
                  src="atis-assets/social/instagram.svg"
                  alt="instagram"
                  width={30}
                  height={30}
                  priority={true}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
