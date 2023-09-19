import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg bg-navBg">
      <div className="px-48 py-8 flex flex-col sm:flex-row items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link href="https://alex-kalupaila.vercel.app/">
          Aliaksei Kalupaila
        </Link>
        <Link href="mailto:alexey2928@gmail.com" target={"_blank"}>
          Get in touch
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
