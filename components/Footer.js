import React from 'react';
import Link from 'next/link';
import styles from './futer.module.css';

const Footer = () => {
  return (
    <>
      <p className={styles.futer}>
        Created by <Link href='https://alexgeodev.vercel.app/'>Alexgeodev</Link>
      </p>
    </>
  )
}

export default Footer;