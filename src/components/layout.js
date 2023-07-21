import React from 'react'
import Head from 'next/head'
import styles from '../styles/layout.module.css'

export default function Layout({children}) {
  return (
    <div className={styles.container}>
        <Head>
            <meta name="description" content="User Dashboard" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            {children}
        </main>
    </div>
  )
}