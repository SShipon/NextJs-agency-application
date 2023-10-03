import Image from "next/image";
import Link from "next/link";

async function getData() {
  const data = await fetch(process.env.BASE_URL + "TeamList");

  if (!data.ok) throw new Error("Team List data calling failed");

  return data.json();
}

const TeamMember = async () => {
  const teamData = await getData();

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
              {teamData?.length > 0
                ? teamData.map((item, i) => (
                    <div key={i} className="mb-6 w-full lg:w-1/2 px-4">
                      <div className="flex flex-wrap items-center bg-white rounded shadow overflow-hidden">
                        <Image
                          className="w-full lg:w-1/3 h-80 object-cover"
                          src={item.image}
                          alt=""
                          width={500}
                          height={500}
                          priority={true}
                        />
                        <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                          <h4 className="mb-2 text-2xl font-bold font-heading">
                            {item.name}
                          </h4>
                          <p className="mb-4 text-gray-500 leading-loose">
                            {item.bio}
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
                  ))
                : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TeamMember;
