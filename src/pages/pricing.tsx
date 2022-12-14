import { Accordion, TextInput } from "@mantine/core";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Card1 from "../components/Cards/Card1";
import Layout from "../components/Layouts/Layout";
import { data2, faq } from "../data/pricing";

const Pricing = () => {
  return (
    <Layout>
      <div className="px-5 pt-32 md:px-0">
        <h1 className="text-3xl leading-snug text-center text-gray-700 lg:text-5xl">
          Everything you need. <br /> Nothing you dont.
        </h1>
        <h1 className="my-6 tracking-wider text-center text-gray-600 lg:my-10 lg:text-xl">
          Our bookkeeping and banking tools can be used separately or together{" "}
          <br /> for maximum control of your business finances.
        </h1>

        <div className="items-end max-w-screen-lg mx-auto md:flex lg:px-14 gap-x-5">
          <TextInput
            placeholder="Enter your email"
            label="Email Address"
            radius={"md"}
            size="lg"
            className="w-full"
          />
          <TextInput
            placeholder="Create a password"
            label="Password"
            radius={"md"}
            size="lg"
            className="w-full"
          />
          <div className="w-full">
            <button className="w-full py-3 mt-10 text-lg font-semibold rounded-full bg-fuchsia-300 lg:mt-0">
              Create your free account
            </button>
          </div>
        </div>

        <div className="flex items-center mx-auto my-4 w-96 gap-x-3">
          <div className="h-[1px] bg-blue-500 flex-1"></div>
          <p>or</p>
          <div className="h-[1px] bg-blue-500 flex-1"></div>
        </div>

        <div className="w-full mx-auto lg:w-96">
          <button className="w-full px-8 py-3 text-lg font-semibold text-white bg-blue-400 rounded-full">
            Create your free account
          </button>
        </div>
        <div className="my-5 text-lg text-center">
          By signing up, you are indicating that you have read and agree to the
          <span className="font-semibold"> Terms of Use</span> and
          <span className="font-semibold"> Privacy Policy.</span>
        </div>
      </div>

      <div className="min-h-screen px-5 lg:bg-blue-900 mt-60">
        <div className="grid justify-between max-w-screen-lg grid-cols-1 gap-8 mx-auto -mb-40 -translate-y-48 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex-1 p-10 bg-white border border-black shadow-sm rounded-xl hover:bg-orange-100 hover:border-orange-500"
            >
              <div className="text-center h-80">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.sub_title}</p>
                <h5 className="text-5xl font-bold text-violet-500 mt-7">$0</h5>
                <h6 className="mb-5 text-xl font-semibold">100% free</h6>
                <p className="text-gray-500 underline">
                  See all Accountiong feature
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-screen-lg mx-auto">
          <div className="grid p-10 bg-white rounded shadow-sm gap-x-8 lg:grid-cols-3">
            <div>
              <h5>Add on</h5>
              <h3 className="py-3 text-2xl font-bold">Recruitment (ATA)</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident blanditiis voluptates et, maiores rerum dolorem
                minima!
              </p>
            </div>

            <div className="border border-gray-200 rounded">
              <p className="p-3 border-b border-gray-200">
                <b className="text-lg">Basic</b> - 10 job offers
              </p>
              <div className="p-3">
                <b>$49/month</b>
                <p className="text-gray-600">
                  billed yearly or $59 month-to-month
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded">
              <p className="p-3 border-b border-gray-200">
                <b className="text-lg">Basic</b> - 10 job offers
              </p>
              <div className="p-3">
                <b>$49/month</b>
                <p className="text-gray-600">
                  billed yearly or $59 month-to-month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg px-5 mx-auto">
        {data2.map((item) => (
          <div key={item.id} className="grid gap-5 py-10 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <button
                className={`px-4 py-1 text-lg  rounded-lg`}
                style={{ backgroundColor: item.type_bg }}
              >
                {item.type}
              </button>
              <h3 className="pt-2 pb-1 text-3xl font-bold">{item.title}</h3>
              <p>{item.sub_title}</p>
            </div>
            <div>
              {item.col_1.map((v) => (
                <div
                  key={v}
                  className="flex tracking-wider text-gray-600 gap-x-3"
                >
                  <AiOutlineCheck size={25} />
                  <p className="mb-5">{v}</p>
                </div>
              ))}
            </div>
            <div>
              {item.col_2.map((v) => (
                <div
                  key={v}
                  className="flex tracking-wider text-gray-600 gap-x-3"
                >
                  <AiOutlineCheck size={25} />
                  <p className="mb-5">{v}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="py-5 bg-purple-400">
        <FAQ />
      </div>
    </Layout>
  );
};

export default Pricing;

export const FAQ = () => (
  <React.Fragment>
    <h3 className="py-2 text-2xl font-semibold text-center lg:text-4xl lg:py-5">
      Frequently Asked Questions
    </h3>
    <div className="max-w-screen-md mx-auto">
      {faq.map((v) => (
        <Accordion key={v.id}>
          <Accordion.Item value={v.q}>
            <Accordion.Control className="hover:bg-purple-400">
              <h6 className="text-xl font-semibold">{v.q}</h6>
            </Accordion.Control>
            <Accordion.Panel>{v.a}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  </React.Fragment>
);

const data = [
  {
    id: 1,
    title: "Invoicing",
    sub_title: "Look like a pro",
    price: "$9",
  },
  {
    id: 2,
    title: "Accounting",
    sub_title: "Always be organized",
    price: "$19",
  },
  {
    id: 3,
    title: "Banking",
    sub_title: "Ditch fees, and bookkeeping",
    price: "$29",
  },
];
