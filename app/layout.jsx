import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({ children }) {
  return (
    <body>
      <NextTopLoader color="#266969" height={3} speed={200} />
      <Navbar />
      {children}
      <Footer />
    </body>
  );
}
