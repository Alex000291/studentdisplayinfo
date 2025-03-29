'use client'

import Link from 'next/link'
import styles from './error.module.css'

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Sorry, something went wrong</p>
      <Link href="/" className={styles.link}>Go back to home</Link>
    </div>
  )
}