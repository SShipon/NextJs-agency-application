export async function generateMetadata() {
  return {
    title: "Projects",
  };
}

const ProjectsLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default ProjectsLayout;
