import { Button, Menu } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { handleThemeChange } from "../../utils/utils";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";
import { Resources, Solutions } from "./TBDropdowns";

const Topbar = () => {
  const [navBg, setNavBg] = useState(false);
  // const isHome = props.name === 'Homepage' ? true : false;

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  console.log(navBg);

  return (
    <div
      className={`fixed top-0 z-10 w-full shadow-sm transition px-10 ${
        navBg ? "bg-white text-black" : "bg-[#162473] text-white"
      }`}
    >
      <div className="flex items-center justify-between h-24 md:px-10">
        <div className="flex items-center justify-between gap-x-10 relative">
          <Link href="/">
            <a
              className={`text-5xl font-bold ${navBg ? "text-green-500" : ""}`}
            >
              Lano
            </a>
          </Link>
          {/* {["Solutions", "Resources", "Pricing"].map((v) => (
            <p key={v} className="text-xl">
              {v}
            </p>
          ))} */}
          <Solutions />
          <Resources />
          <Link href={"/pricing"}>
            <a className="text-lg">Pricing</a>
          </Link>
        </div>

        <div className="flex items-center justify-between gap-x-6">
          <div className="p-2 rounded hover:text-black">
            <Link href="#">
              <TfiWorld size={16} />
            </Link>
          </div>

          <Link href="#">
            <a className="hover:border-b-2 font-semibold text-lg">Login</a>
          </Link>
          <Button
            className="border-[#3f4a83] hover:bg-[#162473] hover:border-white"
            variant="outline"
            color="indigo"
            radius="md"
            size="lg"
          >
            Book a demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
