import Header from './header'
import Nav from './nav'
import React, { useState, useEffect, createContext, useContext } from "react";
import styles from './layout.module.scss';
import classnames from "classnames";
import { useSession, signIn, signOut } from "next-auth/react"
import InfoBox from '../atoms/infobox';
import type { NextPage } from "next";

const Layout: NextPage = ({ children }: any) => {
    const [toggle, setToggle] = useState("on");
    const state = {
        toggle,
        setToggle
    };

    const statusClassNames = {
        toggleon: state.toggle === "on",
        toggleoff: state.toggle === "off"
    };
    const { data: session } = useSession();
    console.log(session);
    return (
        <>
            <Header state={state} />
            <div className={styles.container}>
                <div className={styles.nav + " " + classnames(statusClassNames)}>
                    <Nav />
                </div>
                <div className={styles.main_container}>
                    {function f() {
                        if (session) {
                            return (
                                children
                            )
                        }
                        else {
                            return(
                                children
                            )
                        }
                        return (<InfoBox>
                            <p>サインインしてください。</p>
                            <button onClick={() => signIn()}>サインインする</button>
                            </InfoBox>)

                    }()}
                </div>
            </div>

        </>
    );
}

export default Layout;