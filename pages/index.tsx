import type { NextPage } from 'next'
import Header from "../components/header";
import Nav from "../components/nav";
import React, { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Home: NextPage = () => {
  const [toggle, setToggle] = useState("off");
  const state = {
    toggle,
    setToggle
  };

  const statusClassNames = {
    toggleon: state.toggle === "on",
    toggleoff: state.toggle === "off"
  };

  return (
    <>
      <Header state={state} />
      <Nav state={state} />
      <section>
      </section>
    </>
  )
}

export default Home
