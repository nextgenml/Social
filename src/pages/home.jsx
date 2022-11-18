import React, { Fragment } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  FaBurn,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import HeaderCard from "../Component/HeaderCard";
import BadgeButton from "../Component/BadgeButton";
import SocialCard from "../Component/SocialCard";
import Table from "../Component/Table";

const Home = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 ">
        <HeaderCard title="Balance" value="200,00" Icon={BsCurrencyDollar} />
        <HeaderCard title="Burn" value="200,00" Icon={FaBurn} />
        <HeaderCard
          title="Number of Content"
          value="20"
          Icon={AiFillDatabase}
        />
        <div className="flex items-center justify-between p-3 font-medium text-white bg-blue-500 border-b-4 border-blue-600 rounded-md shadow-lg group">
          <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
            <FiTarget className="text-2xl text-blue-600" />
          </div>
          <div className="flex flex-row gap-2">
            <BadgeButton name="Good" />
            <BadgeButton name="Better" />
            <BadgeButton name="Best" val={2000} />
          </div>
          <div className="text-right">
            <br />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center pl-5 mt-5 md:justify-start gap-x-20 ">
        <SocialCard Icon={FaFacebook} IconClass="bg-[#23638d]" />
        <SocialCard Icon={FaLinkedin} IconClass="bg-[#2e6bdd]" />
        <SocialCard Icon={FaTwitter} IconClass="bg-[#4eb3df]" />
        <SocialCard Icon={FaPinterest} IconClass="bg-[#e12940]" />
        <SocialCard Icon={FaInstagram} IconClass="instagramLogo" />
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 ">
        <Table Icon={FaFacebook} IconClass="text-[#23638d]" />
        <Table Icon={FaLinkedin} IconClass="text-[#2e6bdd]" />
        <Table Icon={FaTwitter} IconClass="text-[#4eb3df]" />
        <Table Icon={FaPinterest} IconClass="text-[#e12940]" />
      </div>
    </Fragment>
  );
};

export default Home;
