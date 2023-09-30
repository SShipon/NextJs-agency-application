import Link from "next/link";
import { StartBtn } from "./ui/StartBtn";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-gray-50">
        <div className="pt-12 pb-20 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                      <span>Build &amp; Launch without</span>
                      <span className="text-emerald-600"> problems</span>
                    </h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-gray-400 leading-loose">
                      It is possible to build a business without solving
                      specific problem, but it is much more challenging to do
                      so.
                    </p>
                    <div>
                      <StartBtn txt="Get Started" />
                      <Link
                        className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-600 hover:bg-white hover:text-gray-800 transition duration-300 rounded-bl-none rounded-xl font-bold leading-loose"
                        href="/"
                      >
                        How it works
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap lg:mb-4 lg:ml-6">
                  <Image
                    className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-[36px] rounded-br-none"
                    src="/hero/hero1.png"
                    alt=""
                    width={500}
                    height={500}
                    priority={true}
                    quality={100}
                  />
                  <Image
                    className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-[36px] rounded-bl-none"
                    src="/hero/hero2.jpg"
                    alt=""
                    width={500}
                    height={500}
                    priority={true}
                    quality={100}
                  />
                </div>
                <div className="flex flex-warm">
                  <Image
                    className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-[36px] rounded-br-none"
                    src="/hero/hero3.jpg"
                    alt=""
                    width={500}
                    height={500}
                    priority={true}
                    quality={100}
                  />
                  <Image
                    className=" md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-[36px] rounded-bl-none"
                    src="/hero/hero4.png"
                    alt=""
                    width={500}
                    height={500}
                    priority={true}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
