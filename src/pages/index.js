import Head from 'next/head';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';
import styles from '../styles/Home.module.css';
import UploadForm from '@/components/UploadForm';
import { GoSearch } from "react-icons/go";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next Dashboard</title>
      </Head>

      <div className={`${styles.wrapper} ${inter.className}`}>
        <h1>Dashboard</h1>

        <div className={styles.searchBar}>
          <span className={styles.searchIcon}><GoSearch /></span>
          <input type="search" name="search" id="search" placeholder='Seach your transcriptions' className={`${styles.search} ${inter.className}`}/>
        </div>

        <div className={styles.formWrapper}>
          <UploadForm />
        </div>

        <div className={styles.recentWrapper}>

        </div>

      </div>
    </Layout>
  )
}
