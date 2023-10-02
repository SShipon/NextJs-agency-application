import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeatureProjects from "@/components/FeatureProjects";
import Brands from "@/components/Brands";

const HomePage = () => {
  return (
    <>
     <Hero />
     <Stats />
     <FeatureProjects txt={true} />
     <Brands />
    </>
  )
};

export default HomePage;