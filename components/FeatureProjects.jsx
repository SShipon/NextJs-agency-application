import Image from "next/image";
import Link from "next/link";
import { StartBtn } from "./ui/StartBtn";
import { ButtonUi } from "./ui/ButtonUi";

async function getData() {
  const data = await fetch(process.env.BASE_URL + "AllProject");

  if (!data.ok) throw new Error("Projects calling failed");

  return data.json();
}

const FeatureProjects = async ({ txt, featureLength }) => {
  const projectsData = await getData();
 

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
            {txt ? (
              <StartBtn txt="View More Projects" link="/projects" />
            ) : null}
          </div>
          <div className="flex flex-wrap -mx-4 mb-4">
            {projectsData?.length >= featureLength
              ? projectsData.slice(0, featureLength).map((item, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4"
                  >
                    <Link href="/">
                      <Image
                        className="h-80 w-full mx-auto object-cover rounded"
                        src={item.image}
                        alt=""
                        width={500}
                        height={500}
                      />
                    </Link>
                  </div>
                ))
              : projectsData.map((item, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4"
                  >
                    <Link href="/">
                      <Image
                        className="h-80 w-full mx-auto object-cover rounded"
                        src={item.image}
                        alt=""
                        width={500}
                        height={500}
                      />
                    </Link>
                  </div>
                ))}
          </div>
          
          { !featureLength ? (
            <ButtonUi text="click here to back" />
          ) : null}
  
        </div>
      </div>
    </section>
  );
};

export default FeatureProjects;
