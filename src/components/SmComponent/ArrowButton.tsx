import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ArrowButton = ({ text }: Props) => {
  return (
    <div className="flex items-center gap-2 text-blue-700 hover:underline">
      <Link href="#">
        <a className="text-sm capitalize md:text-lg ">{text}</a>
      </Link>
      <AiOutlineArrowRight />
    </div>
  );
};

export default ArrowButton;

interface Props {
  text: string;
}
