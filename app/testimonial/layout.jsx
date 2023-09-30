export async function generateMetadata() {
  return {
    title: "Testimonial",
  };
}

const TestimonialLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default TestimonialLayout;
