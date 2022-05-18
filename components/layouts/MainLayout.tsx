import React, { FC, PropsWithChildren } from 'react'
import styles from './MainLayout.module.css';
import Head from 'next/head';
import { Navbar } from '../Navbar';

type Props = {};

export const MainLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Axel</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar /> 
    
          <main className={styles.main}>
            { children }
          </main>
    
        </div>
      )
}
