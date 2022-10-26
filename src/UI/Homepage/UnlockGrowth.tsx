import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ArrowButton from "../../components/SmComponent/ArrowButton";
import CountConpo from "../../components/SmComponent/CountConpo";
import Title from "../../components/Texts";
import { Section } from "../../pages";

const UnlockGrowth = () => {
  return (
    <div className="bg-white">
      <Section cls="grid grid-cols-2 gap-1">
        <div className="flex flex-col justify-between">
          <Title>Unlock global growth</Title>
          <p className="text-lg ">
            Focus on the core of your business and build the best team on the
            planet. We help you enter new markets without risk, and hire & pay
            your team members wherever they are.
          </p>
          <ArrowButton text="Book demo" />
        </div>
        <div className="grid items-center justify-end grid-rows-2 gap-20">
          <div className="flex items-center justify-between gap-20 ">
            <CountConpo num="150+" title="supported countries" />
            <CountConpo num="7 days" title="to onboard new candidates" />
          </div>

          <div className="flex items-center justify-between gap-20 ">
            <CountConpo num="50+" title="available currencies" />
            <CountConpo num="fast" title="global & local payments" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default UnlockGrowth;
