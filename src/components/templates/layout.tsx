import Header from './header'
import Nav from './nav'
import React, { useState, useEffect, createContext, useContext } from "react";
import styles from './layout.module.scss';
import classnames from "classnames";

function Layout({ children }: any) {
    const [toggle, setToggle] = useState("on");
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
            <div className={styles.container}>
                <div className={styles.nav + " " + classnames(statusClassNames)}>
                    <Nav />
                </div>
                <div className={styles.main_container}>
                    {children}
                </div>
            </div>

        </>
    );
}

export default Layout;