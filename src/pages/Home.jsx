import React from "react";
import Post from "../components/Post";
import Users from "../components/Users";
import Gallary from "../components/Gallary";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import Hero1 from "../components/Hero1";
import State from "../components/State";
import DEtails from "../components/DEtails";

const Home = () => {
  return (
    <div className=" border-gray-200">
      {/* <Post />
      <Users />
      <Gallary />
      <ContactUs /> */}
      <Hero1 />
      {/* <Hero /> */}
      <State />
      <DEtails />
    </div>
  );
};

export default Home;
