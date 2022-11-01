import { Menu } from "@mantine/core";
import { BsBank2, BsGlobe, BsGlobe2 } from "react-icons/bs";
import Link from "next/link";
import { TbFileDollar } from "react-icons/tb";
import { MdPrivacyTip } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { FaAffiliatetheme } from "react-icons/fa";
import {
  FaBlogger,
  FaMoneyCheckAlt,
  FaProductHunt,
  FaUserFriends,
} from "react-icons/fa";
import {
  AiFillApi,
  AiFillCaretDown,
  AiFillCompass,
  AiOutlineApi,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

// export const Solutions = () => {
//   return (
//     <TBDropdown name="Products">
//       <div className="flex justify-between gap-x-7">
//         <p>Scale your global team</p>
//         <p>About our platform</p>
//       </div>
//       <hr />
//       <div className="flex justify-between gap-5 ">
//         <div>
//           <div className="flex items-center gap-6 my-5 ">
//             <BsGlobe2 className="text-blue-400" size={30} />

//             <div className="flex flex-col ">
//               <Link href="/global-employment">
//                 <a className="text-lg text-black ">Hire Global Employeess</a>
//               </Link>
//               <Link href="/global-employment">
//                 <a className="text-gray-500 ">
//                   Hire talent abroad with an Employer of Record{" "}
//                 </a>
//               </Link>
//             </div>
//           </div>
//           <div className="flex items-center gap-6 ">
//             <BsBank2 className="text-blue-400" size={30} />
//             <div className="flex flex-col ">
//               <Link href="/contractor-management">
//                 <a className="text-lg text-black ">Manage Contractors</a>
//               </Link>
//               <Link href="/contractor-management">
//                 <a className="text-gray-500 ">
//                   Compliantly hire, manage and pay contractors
//                 </a>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="flex items-center gap-6 my-5">
//             <TbFileDollar className="text-blue-400" size={30} />
//             <div className="flex flex-col ">
//               <Link href="/global-payroll">
//                 <a className="text-lg text-black ">Run Global Payroll</a>
//               </Link>
//               <Link href="/global-payroll">
//                 <a className="text-gray-500 ">
//                   Manage payroll for your entire team in one place
//                 </a>
//               </Link>
//             </div>
//           </div>
//           <div className="flex items-center gap-6 my-5 ">
//             <FaMoneyCheckAlt className="text-blue-400" size={30} />
//             <div className="flex flex-col ">
//               <Link href="/global-payments">
//                 <a className="text-lg text-black ">Pay Remote Teams</a>
//               </Link>
//               <Link href="/global-payments">
//                 <a className="text-gray-500 ">
//                   Send global payments in 50+ currencies at low cost
//                 </a>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="gap-6 my-5 ">
//           <p className="py-2 text-lg text-black ">API and Integrations</p>
//           <Link href="/privacypolicy">
//             <p className="py-2 text-lg text-black ">Security and Privacy</p>
//           </Link>
//           <p className="py-2 text-lg text-black">Global Compliance</p>
//         </div>
//       </div>
//     </TBDropdown>
//   );
// };

// export const Resources = () => {
//   return (
//     <TBDropdown name="Resources">
//       <div className="flex justify-between gap-x-7">
//         <p>Grow your global business</p>
//         <p>Further information</p>
//       </div>
//       <hr />
//       <div className="flex justify-between gap-5 ">
//         <div>
//           <div className="flex items-center gap-6 my-5 ">
//             <FaUserFriends className="text-blue-400" size={30} />

//             <div className="flex flex-col ">
//               <Link href="">
//                 <a className="text-lg text-black ">Case Studies</a>
//               </Link>
//               <Link href="">
//                 <a className="text-gray-500 ">
//                   Learn how Lano helps companies unlock growth
//                 </a>
//               </Link>
//             </div>
//           </div>
//           <div className="flex items-center gap-6 ">
//             <FaBlogger className="text-blue-400" size={30} />
//             <div className="flex flex-col ">
//               <Link href="">
//                 <a className="text-lg text-black ">Blog</a>
//               </Link>
//               <Link href="">
//                 <a className="text-gray-500 ">
//                   Useful information for companies and contractors
//                 </a>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex items-center gap-6 my-5 ">
//             <BsGlobe className="text-blue-400" size={30} />
//             <div className="flex flex-col ">
//               <Link href="/global-employment">
//                 <a className="text-lg text-black ">Global Hiring Guide</a>
//               </Link>
//               <Link href="/global-employment">
//                 <a className="text-gray-500 ">
//                   All you need to know to hire abroad
//                 </a>
//               </Link>
//             </div>
//           </div>
//           <div className="flex items-center gap-6 ">
//             <FaProductHunt className="text-blue-400" size={30} />
//             <div className="flex flex-col ">
//               <Link href="">
//                 <a className="text-lg text-black ">Podcast</a>
//               </Link>
//               <Link href="">
//                 <a className="text-gray-500 ">
//                   Listen to our podcast The State Of Work
//                 </a>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col items-center gap-6 my-5 ">
//           <Link href="https://intercom.help/lano/en/">
//             <a className=" text-lg text-black font-[500] hover:">Help Center</a>
//           </Link>
//           <p className=" text-lg text-black font-[500] ">Affiliate Program</p>
//         </div>
//       </div>
//     </TBDropdown>
//   );
// };

export const Solutions = () => {
  return (
    <Menu
      trigger="hover"
      openDelay={100}
      closeDelay={200}
      radius="md"
      shadow={"xl"}
      offset={30}
    >
      <Menu.Target>
        <button className="text-[16px] hover:underline flex items-center gap-x-2">
          <span>Solutions</span> <AiFillCaretDown size={13} className="" />
        </button>
      </Menu.Target>
      <Menu.Dropdown sx={{ color: "#000" }} className="p-5 shadow-lg">
        <div className="flex gap-2 p-3 mb-3 rounded-lg hover:bg-gray-300">
          <BsGlobe2 className="text-[#3b3b3b]" size={20} />

          <div className="flex flex-col ">
            <Link href="/global-employment">
              <a className="text-lg text-[#3b3b3b] ">Hire Global Employeess</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 p-3 mb-3 rounded-lg hover:bg-gray-300 ">
          <BsBank2 className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/contractor-management">
              <a className="text-lg text-[#3b3b3b] ">Manage Contractors</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 p-3 mb-3 rounded-lg hover:bg-gray-300 ">
          <TbFileDollar className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payroll">
              <a className="text-lg text-[#3b3b3b]">Run Global Payroll</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 p-3 rounded-lg hover:bg-gray-300">
          <FaMoneyCheckAlt className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payments">
              <a className="text-lg text-[#3b3b3b] ">Pay Remote Teams</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 p-3 rounded-lg hover:bg-gray-300">
          <AiOutlineApi className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payments">
              <a className="text-lg text-[#3b3b3b] ">API and Integrations</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 p-3 rounded-lg hover:bg-gray-300">
          <MdPrivacyTip className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/privacypolicy">
              <a className="text-lg text-[#3b3b3b] ">Security and Privacy</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 p-3 rounded-lg hover:bg-gray-300">
          <AiFillCompass className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payments">
              <a className="text-lg text-[#3b3b3b] "> Global Compliance</a>
            </Link>
          </div>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export const Resources = () => {
  return (
    <Menu
      trigger="hover"
      openDelay={100}
      closeDelay={200}
      radius="md"
      shadow={"xl"}
      offset={30}
    >
      <Menu.Target>
        <button className="text-[16px] hover:underline flex items-center gap-x-2">
          <span>Resources</span> <AiFillCaretDown size={13} />
        </button>
      </Menu.Target>
      <Menu.Dropdown sx={{ color: "#000" }} className="p-5 shadow-lg">
        <div className="flex gap-2 p-3 mb-3 rounded-lg hover:bg-gray-300">
          <FaUserFriends className="text-[#3b3b3b]" size={20} />

          <div className="flex flex-col ">
            <Link href="/global-employment">
              <a className="text-lg text-[#3b3b3b] ">Case Studies</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 p-3 mb-3 rounded-lg hover:bg-gray-300 ">
          <FaBlogger className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/contractor-management">
              <a className="text-lg text-[#3b3b3b] ">Blog</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 p-3 mb-3 rounded-lg hover:bg-gray-300 ">
          <BsGlobe className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payroll">
              <a className="text-lg text-[#3b3b3b]">Global Hiring Guide</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 p-3 rounded-lg hover:bg-gray-300">
          <FaProductHunt className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payments">
              <a className="text-lg text-[#3b3b3b] ">Podcast</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 p-3 rounded-lg hover:bg-gray-300">
          <BiHelpCircle className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="https://intercom.help/lano/en/">
              <a className="text-lg text-[#3b3b3b] ">Help Center</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 p-3 rounded-lg hover:bg-gray-300">
          <FaAffiliatetheme className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payments">
              <a className="text-lg text-[#3b3b3b] ">Affiliate Program</a>
            </Link>
          </div>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export const PhoneNenu = () => (
  <Menu openDelay={100} closeDelay={400} offset={-60}>
    <Menu.Target>
      <AiOutlineMenu size={22} />
    </Menu.Target>
    <Menu.Dropdown sx={{ borderRadius: 0 }}>
      <div className="relative w-screen min-h-screen p-10 pt-8 text-black">
        <div className="flex justify-end">
          <Menu.Target>
            <AiOutlineClose size={22} />
          </Menu.Target>
        </div>
        <div className="flex flex-col ">
          <div className="my-2 ">
            <Link href="/">
              <a className="text-lg font-bold capitalize hover:underline">
                Home
              </a>
            </Link>
          </div>
          <div className="my-2 ">
            <Link href="/global-employment">
              <a className="text-lg font-bold capitalize hover:underline">
                Solution
              </a>
            </Link>
          </div>

          <div className="flex gap-6 my-2 ">
            <BsGlobe2 className="text-blue-400" size={30} />

            <div className="flex flex-col ">
              <Link href="/global-employment">
                <a className="text-lg text-black ">Hire Global Employeess</a>
              </Link>
            </div>
          </div>
          <div className="flex gap-6 my-2 ">
            <BsBank2 className="text-blue-400" size={30} />
            <div className="flex flex-col ">
              <Link href="/contractor-management">
                <a className="text-lg text-black ">Manage Contractors</a>
              </Link>
            </div>
          </div>
          <div className="flex gap-6 my-2 ">
            <TbFileDollar className="text-blue-400" size={30} />
            <div className="flex flex-col ">
              <Link href="/global-payroll">
                <a className="text-lg text-black ">Run Global Payroll</a>
              </Link>
            </div>
          </div>
          <div className="flex gap-6 my-2 ">
            <FaMoneyCheckAlt className="text-blue-400" size={30} />
            <div className="flex flex-col ">
              <Link href="/global-payments">
                <a className="text-lg text-black ">Pay Remote Teams</a>
              </Link>
            </div>
          </div>
          <div className="my-2 ">
            <Link href="/pricing">
              <a className="text-lg font-bold capitalize hover:underline">
                Pricing
              </a>
            </Link>
          </div>
          <div className="my-2 ">
            <Link href="/privacypolicy">
              <a className="text-lg font-bold capitalize hover:underline">
                Privacy Policy
              </a>
            </Link>
          </div>
          <div className="my-2 ">
            <Link href="https://intercom.help/lano/en/">
              <a className="text-lg font-bold capitalize hover:underline">
                Help Center
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Menu.Dropdown>
  </Menu>
);

const TBDropdown = ({ children, name }: TBDropdownProp) => (
  <Menu trigger="hover" openDelay={100} closeDelay={400} offset={-60}>
    <Menu.Target>
      <button className="text-[16px] hover:underline">{name}</button>
    </Menu.Target>
    <Menu.Dropdown sx={{ borderRadius: 0 }}>
      <div className="relative w-screen p-10 text-black">{children}</div>
    </Menu.Dropdown>
  </Menu>
);

interface TBDropdownProp {
  children: React.ReactNode;
  name: string;
}
