import { Github, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import logo from "../../public//image/logo.png";
export default function Header() {
  return (
    <div className="w-full">
      <div className="rounded-xl border border-[#AFAFAF] bg-black p-6 flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">Mirza Usman Baig</h1>
          <p
            className="text-[#AFAFAF] flex items-center gap-1"
            style={{ fontFamily: "Inder, sans-serif" }}
          >
            Passionate Developer, Designer, Hardworker 🤍
          </p>
          <p
            className="text-[#AFAFAF] text-sm flex"
            style={{ fontFamily: "Inder, sans-serif" }}
          >
            <TbWorld className="w-6 h-6 mr-2" />
            Based in Pakistan PK.
          </p>

          <div className="flex gap-3 mt-3">
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded border border-[#2F2F2F] text-[#7B7B7B] hover:text-white hover:border-[#767676] transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded border border-[#2F2F2F] text-[#7B7B7B] hover:text-white hover:border-[#767676] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded border border-[#2F2F2F] text-[#7B7B7B] hover:text-white hover:border-[#767676] transition-colors"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded border border-[#2F2F2F] text-[#7B7B7B] hover:text-white hover:border-[#767676] transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded border border-[#2F2F2F] text-[#7B7B7B] hover:text-white hover:border-[#767676] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="hidden md:flex">
          <Image
            src={logo}
            alt="logo"
            className="w-[150px] h-[150px] rounded-full"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
