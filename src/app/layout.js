import Navbar from "@/components/Navbar";
import "./globals.css";
import { Baskervville } from "next/font/google";

const baskervville = Baskervville({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "The Cookie's Tale",
  description: "Tell us a tale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${baskervville.className} bg-main`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
