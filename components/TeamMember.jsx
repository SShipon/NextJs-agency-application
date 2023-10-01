import Image from "next/image";
import Link from "next/link";

const TeamMember = () => {
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-8 lg:mb-16 text-center mx-auto max-w-xl">
              <span className="text-green-600 font-bold">
                Check our awesome team members
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                Check our awesome team members
              </h2>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="mb-6 w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap items-center bg-white rounded shadow overflow-hidden">
                  <Image
                    className="w-full lg:w-1/3 h-80 object-cover"
                    src="/hero/hero1.png"
                    alt="danny image"
                    width={100}
                    height={100}
                    priority={true}
                  />
                  <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                    <h4 className="mb-2 text-2xl font-bold font-heading">
                      Danny Bailey
                    </h4>
                    <p className="mb-4 text-gray-500 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed vitae felis at ante bibendum mollis et et mauris.
                    </p>
                    <div className="flex">
                      <Link className="mr-3" href="#">
                        <Image
                          src="atis-assets/social/facebook.svg"
                          alt="facebook"
                          width={30}
                          height={30}
                          priority={true}
                        />
                      </Link>
                      <Link className="mr-3" href="#">
                        <Image
                          src="atis-assets/social/twitter.svg"
                          alt="twitter"
                          width={30}
                          height={30}
                          priority={true}
                        />
                      </Link>
                      <Link href="#">
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
              <div className="mb-6 w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap items-center bg-white rounded shadow overflow-hidden">
                  <Image
                    className="w-full lg:w-1/3 h-80 object-cover"
                    src="/hero/hero1.png"
                    alt="ian brown"
                    width={100}
                    height={100}
                    priority={true}
                  />
                  <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                    <h4 className="mb-2 text-2xl font-bold font-heading">
                      Ian Brown
                    </h4>
                    <p className="mb-4 text-gray-500 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed vitae felis at ante bibendum mollis et et mauris.
                    </p>
                    <div className="flex">
                      <Link className="mr-3" href="#">
                        <Image
                          src="atis-assets/social/facebook.svg"
                          alt="facebook"
                          width={30}
                          height={30}
                          priority={true}
                        />
                      </Link>
                      <Link className="mr-3" href="#">
                        <Image
                          src="atis-assets/social/twitter.svg"
                          alt="twitter"
                          width={30}
                          height={30}
                          priority={true}
                        />
                      </Link>
                      <Link href="#">
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
              <div className="mb-6 w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap items-center bg-white rounded shadow overflow-hidden">
                  <Image
                    className="w-full lg:w-1/3 h-80 object-cover"
                    src="/hero/hero4.png"
                    alt="daisy"
                    width={500}
                    height={500}
                    priority={true}
                  />
                  <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                    <h4 className="mb-2 text-2xl font-bold font-heading">
                      Daisy Carter
                    </h4>
                    <p className="mb-4 text-gray-500 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed vitae felis at ante bibendum mollis et et mauris.
                    </p>
                    <div className="flex">
                      <Link className="mr-3" href="#">
                        <Image
                          src="atis-assets/social/facebook.svg"
                          alt=""
                          width={30}
                          height={30}
                          priority={true}
                        />
                      </Link>
                      <Link className="mr-3" href="#">
                        <Image
                          src="atis-assets/social/twitter.svg"
                          alt=""
                          width={30}
                          height={30}
                          priority={true}
                        />
                      </Link>
                      <Link href="#">
                        <Image
                          src="atis-assets/social/instagram.svg"
                          alt=""
                          width={30}
                          height={30}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6 w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap items-center bg-white rounded shadow overflow-hidden">
                  <Image
                    className="w-full lg:w-1/3 h-80 object-cover"
                    src="/hero/hero4.png"
                    alt=""
                    width={500}
                    height={500}
                    priority={true}
                  />
                  <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                    <h4 className="mb-2 text-2xl font-bold font-heading">
                      Dennis Robertson
                    </h4>
                    <p className="mb-4 text-gray-500 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed vitae felis at ante bibendum mollis et et mauris.
                    </p>
                    <div className="flex">
                      <Link className="mr-3" href="#">
                        <Image
                          src="atis-assets/social/facebook.svg"
                          alt=""
                          width={30}
                          height={30}
                          priority={true}
                        />
                      </Link>
                      <Link className="mr-3" href="#">
                        <Image
                          src="atis-assets/social/twitter.svg"
                          alt=""
                          width={30}
                          height={30}
                          priority={true}
                        />
                      </Link>
                      <Link href="#">
                        <Image
                          src="atis-assets/social/instagram.svg"
                          alt=""
                          width={30}
                          height={30}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TeamMember;
