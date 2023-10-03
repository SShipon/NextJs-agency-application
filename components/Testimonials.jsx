import Image from "next/image";

async function getData() {
  const data = await fetch(process.env.BASE_URL + "TestimonialList");

  if (!data.ok) throw new Error("Testimonial Calling failed");

  return data.json();
}

const Testimonial = async () => {
  const testimonials = await getData();

  return (
    <div>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 pb-6 lg:pb-16">
            <div className="flex flex-wrap justify-center lg:justify-center items-center text-center lg:text-center">
              <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                <span className="text-green-600 font-bold">
                  Read the testimonial block
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                  Testimonials
                </h2>
              </div>
            </div>
          </div>
          <div className="relative flex">
            <div className="flex flex-wrap max-w-6xl px-2 mx-auto">
              <div className="mb-4 w-full lg:w-1/3 px-3">
                <div className="p-8 bg-white rounded shadow text-center">
                  <div
                    className="bg-no-repeat bg-left-top"
                    style={{
                      backgroundImage:
                        'url("atis-assets/elements/quote-grey.svg")',
                    }}
                  >
                    <p className="mb-8 text-gray-500 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque et placerat metus. Morbi aliquet felis sit
                      amet erat finibus, ac condimentum ligula ornare.
                    </p>
                    <Image
                      className="mb-2 mx-auto w-12 h-12 rounded-full object-cover"
                      src="/hero/hero4.png"
                      alt=""
                      width={100}
                      height={100}
                    />
                    <h4 className="mb-1 text-2xl font-bold font-heading">
                      Alice Bradley
                    </h4>
                    <p className="text-gray-500">Backend Developer</p>
                  </div>
                </div>
              </div>
              {testimonials?.length > 0
                ? testimonials.map((item, index) => (
                    <div key={index} className="mb-4 w-full lg:w-1/3 px-3">
                      <div className="p-8 bg-white rounded shadow text-center">
                        <div
                          className="bg-no-repeat bg-left-top"
                          style={{
                            backgroundImage:
                              'url("atis-assets/elements/quote-grey.svg")',
                          }}
                        >
                          <p className="mb-8 text-gray-500 leading-loose">
                            {item.msg}
                          </p>
                          <Image
                            className="mb-2 mx-auto w-12 h-12 rounded-full object-cover"
                            src={item.image}
                            alt=""
                            width={100}
                            height={100}
                          />
                          <h4 className="mb-1 text-2xl font-bold font-heading">
                            {item.name}
                          </h4>
                          <p className="text-gray-500">{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Testimonial;
