import React from "react";
import './sidebar.css';
import { AiFillDashboard } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineBarChart, MdOutlineHeadsetMic, } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { FaBoxes } from "react-icons/fa";

const sidebarItems = [
    { icon: <AiFillDashboard />    , title: "Dashboard", link: "#dashboard" },
    { icon: <IoDocumentText />, title: "Accounts", link: "#accounts" },
    { icon: <FaBoxes />, title: "Inventory Managemnet", link: "./inventorymanagement" },
    { icon: <MdOutlineBarChart />    , title: "Sales", link: "#sales" },
    { icon: <FaCartShopping />    , title: "Purchase", link: "#purhase" },
    { icon: <TbReportSearch />    , title: "Reports", link: "#reports" },
    { icon: <VscSettings />    , title: "Settings", link: "#settings" },
    { icon: <MdOutlineHeadsetMic />    , title: "Help & Support", link: "#accohelp&support"},
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebarItems.map((item, index) => (
        <a key={index} href={item.link}>
          <span className="icon">{item.icon}</span>
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
