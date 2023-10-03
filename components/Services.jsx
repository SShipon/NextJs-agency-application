import Image from "next/image";

async function getData() {
  const data = await fetch(process.env.BASE_URL + "AllService");

  if (!data.ok) throw new Error("Service data calling failed");

  return data.json();
}

const Services = async () => {
  const serviceData = await getData();

  return (
    <div>
      <section>
        {serviceData?.length > 0
          ? serviceData.map((item, i) => (
              <div key={i} className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap items-center -mx-4">
                    <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                      <div className="max-w-md">
                        <span className="text-green-600 font-bold">
                          Try our services
                        </span>
                        <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                          {item.title}
                        </h2>
                        <div className="mb-6 max-w-sm">
                          <p className="text-gray-500 leading-loose">
                           {item.des}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <div className="mb-4 flex flex-wrap items-end">
                        <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                          <Image
                            className="w-full h-32 lg:h-48 object-cover rounded"
                            src={item.image1}
                            alt=""
                            width={500}
                            height={500}
                            priority={true}
                          />
                        </div>
                        <div className="w-full lg:w-1/3 px-3">
                          <Image
                            className="w-full h-32 lg:h-48 object-cover rounded"
                            src={item.image2}
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
                            src={item.image3}
                            alt=""
                            width={500}
                            height={500}
                            priority={true}
                          />
                        </div>
                        <div className="w-full lg:w-2/3 px-3">
                          <Image
                            className="w-full h-32 lg:h-48 object-cover rounded"
                            src={item.image4}
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
            ))
          : null}
      </section>
    </div>
  );
};

export default Services;
