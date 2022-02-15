import type { NextPage } from 'next'
import React, { useState } from "react";
import InfoBox from "../components/atoms/infobox";
import styles from "./index.module.scss";
import Title from "../components/atoms/title";
import UserList from "../components/organisms/userList";

type LayoutProps = {
  children: React.ReactNode;
};

const Home: NextPage = () => {
  return (
    <>
    <div className={styles.container}>
    <Title>Bot一覧</Title>
    <InfoBox>
      <UserList></UserList>
    </InfoBox>
    </div>
    </>
  )
}

export default Home
