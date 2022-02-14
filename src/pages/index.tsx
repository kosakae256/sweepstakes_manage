import type { NextPage } from 'next'
import React, { useState } from "react";
import InfoBox from "../components/atoms/infobox";
import styles from "./index.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const Home: NextPage = () => {
  return (
    <>
    <div className={styles.container}>
    <InfoBox>
      <p>test1</p>
    </InfoBox>
    </div>
    </>
  )
}

export default Home
