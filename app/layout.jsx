import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export async function generateMetadata() {
  return {
    title: "Home",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#269669" height={4} speed={200} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
