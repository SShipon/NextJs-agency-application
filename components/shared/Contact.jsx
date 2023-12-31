"use client";

import Link from "next/link";
import { ButtonUi } from "../ui/ButtonUi";
import { StartBtn } from "../ui/StartBtn";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className="mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4">
            <Link
              className="mb-6 inline-block text-3xl font-bold leading-none"
              href="/"
            >
              <Image
                className="h-12"
                src="/atis-assets/logo/atis/atis-mono-sign.svg"
                alt=""
                width={100}
                height={100}
                
              />
            </Link>
            <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">
              So much more than a business analytics tool
            </h2>
            <p className="mb-8 text-gray-500 leading-loose">
            Business Analytics tools that we will be discussing in detail.
            </p>
            <StartBtn txt="Get Started" />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
              <div className="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">
                <form action="">
                  <div className="mb-6">
                    <span className="text-sm text-gray-400">Sign Up</span>
                    <h4 className="text-2xl">Create an account</h4>
                  </div>
                  <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
                      <input
                        className="py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 px-2">
                      <input
                        className="py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <input
                    className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                    type="email"
                    placeholder="hello@example.com"
                  />
                  <textarea
                    className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                    type="email"
                    placeholder="Message"
                  />
                  <ButtonUi text="Send" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
