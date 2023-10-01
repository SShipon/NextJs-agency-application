import Image from "next/image";

const Services = () => {
  return (
    <div>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                <div className="max-w-md">
                  <span className="text-green-600 font-bold">
                    Try our services
                  </span>
                  <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                    Build &amp; Launch without problems
                  </h2>
                  <div className="mb-6 max-w-sm">
                    <p className="text-gray-500 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="mb-4 flex flex-wrap items-end">
                  <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                    <Image
                      className="w-full h-32 lg:h-48 object-cover rounded"
                      src="/hero/hero1.png"
                      alt=""
                      width={500}
                      height={500}
                      priority={true}
                    />
                  </div>
                  <div className="w-full lg:w-1/3 px-3">
                  <Image
                      className="w-full h-32 lg:h-48 object-cover rounded"
                      src="/hero/hero1.png"
                      alt=""
                      width={500}
                      height={500}
                      priority={true}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-start">
                  <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                  <Image
                      className="w-full h-32 lg:h-48 object-cover rounded"
                      src="/hero/hero1.png"
                      alt=""
                      width={500}
                      height={500}
                      priority={true}
                    />
                  </div>
                  <div className="w-full lg:w-2/3 px-3">
                  <Image
                      className="w-full h-32 lg:h-48 object-cover rounded"
                      src="/hero/hero1.png"
                      alt=""
                      width={500}
                      height={500}
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                <div className="max-w-md">
                  <span className="text-green-600 font-bold">
                    Try our services
                  </span>
                  <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                    Build &amp; Launch without problems
                  </h2>
                  <div className="mb-6 max-w-sm">
                    <p className="text-gray-500 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="mb-4 flex flex-wrap items-end">
                  <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                    <Image
                      className="w-full h-32 lg:h-48 object-cover rounded"
                      src="/hero/hero4.png"
                      alt=""
                      width={500}
                      height={500}
                      priority={true}
                    />
                  </div>
                  <div className="w-full lg:w-1/3 px-3">
                  <Image
                      className="w-full h-32 lg:h-48 object-cover rounded"
                      src="/hero/hero1.png"
                      alt=""
                      width={500}
                      height={500}
                      priority={true}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-start">
                  <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                  <Image
                      className="w-full h-32 lg:h-48 object-cover rounded"
                      src="/hero/hero2.jpg"
                      alt=""
                      width={500}
                      height={500}
                      priority={true}
                    />
                  </div>
                  <div className="w-full lg:w-2/3 px-3">
                  <Image
                      className="w-full h-32 lg:h-48 object-cover rounded"
                      src="/hero/hero2.jpg"
                      alt=""
                      width={500}
                      height={500}
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
