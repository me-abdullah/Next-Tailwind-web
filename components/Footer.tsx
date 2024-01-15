import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <footer className="text-black">
        <div className="container px-5 py-24 mx-auto flex md:items-start text-start  lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="space-y-6 w-64 flex-shrink-0 md:mx-0 mx-auto text-start md:text-left">
            <Link
              href={"/"}
              className="flex title-font font-medium items-start md:justify-start justify-start text-gray-900"
            >
              <Image
                src="/assest/logo.png"
                alt="Logo"
                width="150"
                height="150"
              />
            </Link>
            <p className="mt-2">
            Excel in Certiport's U.S. National Championship, showcasing Microsoft Office mastery on a national stage.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-start">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="customfont tracking-widest mb-3 text-xl uppercase text-custom">
                Company
              </h2>
              <nav className="list-none mb-10 space-y-4">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Terms of Use</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>How it Works</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="tracking-widest mb-3 text-xl uppercase text-custom customfont">
                Support
              </h2>
              <nav className="list-none mb-10 space-y-4">
                <li>
                  <a>Career</a>
                </li>
                <li>
                  <a>24h Service</a>
                </li>
                <li>
                  <a>Quick Chat</a>
                </li>
                <li>
                  <a>Whatsapp</a>
                </li>
                <li>
                  <a>Support 24h</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2  px-4">
              <label
                htmlFor="footer-field"
                className="leading-7 text-sm customfont"
              >
                Subscribe Our News Letter
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-[#d20f2d] focus:-[#d20f2d] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mt-7">
              <button className="inline-flex customfont text-white bg-gradient-to-tr from-[#d20f2d] to-[#ab182b] border-0 py-2 px-6 focus:outline-none rounded shadow-lg shadow-black/5 dark:shadow-black/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-custom" size={30} />
            </div>
          </Link>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className=" text-sm text-center sm:text-left text-black">
              © 2023 Abdullah Sheikh —
              <Link
                href="https://github.com/M-Abdullah-Sheikh"
                className="text-black ml-1"
                target="_blank"
              >
                Abdullah Sheikh
              </Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link
                href={"https://wa.me/923101089302?text=Hello Greetings..!"}
                target="_blank"
                className="text-black"
              >
                <BsFillPersonLinesFill />
              </Link>
              <Link
                href={"mailto:h.abdullahsheikh568@gmail.com"}
                target="blank"
                className="ml-3 text-black"
              >
                <AiOutlineMail />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/muhammad-abdullah-sheikh/"}
                target="_blank"
                className="ml-3 text-black"
              >
                <FaLinkedin />
              </Link>
              <Link
                href={"https://github.com/M-Abdullah-Sheikh"}
                target="_blank"
                className=" ml-3 text-black"
              >
                <FaGithub />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
