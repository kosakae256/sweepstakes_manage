import '../styles/globals.scss';
import '../styles/destyle.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
import Layout from '../components/templates/layout'
import React, { useState, useEffect, createContext, useContext } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
