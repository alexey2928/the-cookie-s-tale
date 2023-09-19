import Navbar from "@/components/Navbar";
import "./globals.css";
import { Baskervville } from "next/font/google";
import Footer from "@/components/Footer";

const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "The Cookie's Tale",
  description: "Tell us a tale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${baskervville.className} bg-main flex flex-col h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
