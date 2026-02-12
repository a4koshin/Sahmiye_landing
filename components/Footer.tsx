import Link from "next/link";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 pt-10">
          {/* <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Link
              href="#"
              aria-label="Install from Apple Store"
              className="inline-flex items-center gap-2 rounded-full border border-slate-500 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-blue-500 hover:text-white"
            >
              <FaApple className="size-3.5" />
              Apple Store
            </Link>
            <Link
              href="#"
              aria-label="Install from Play Store"
              className="inline-flex items-center gap-2 rounded-full border border-slate-500 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-blue-500 hover:text-white"
            >
              <FaGooglePlay className="size-3.5" />
              Play Store
            </Link>
          </div> */}
          <p className="text-center text-sm font-medium tracking-tight text-slate-300 sm:text-base">
            Sahmiye.com © {new Date().getFullYear()} All Rights Reserved.
          </p>
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="inline-flex size-9 items-center justify-center rounded-full border border-slate-500 text-slate-300 transition-colors hover:border-blue-500 hover:text-white sm:size-10"
            >
              <FaFacebookF className="size-3.5 sm:size-4" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="inline-flex size-9 items-center justify-center rounded-full border border-slate-500 text-slate-300 transition-colors hover:border-blue-500 hover:text-white sm:size-10"
            >
              <FaTwitter className="size-3.5 sm:size-4" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-full border border-slate-500 text-slate-300 transition-colors hover:border-blue-500 hover:text-white sm:size-10"
            >
              <FaLinkedinIn className="size-3.5 sm:size-4" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="inline-flex size-9 items-center justify-center rounded-full border border-slate-500 text-slate-300 transition-colors hover:border-blue-500 hover:text-white sm:size-10"
            >
              <FaInstagram className="size-3.5 sm:size-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
