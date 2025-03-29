"use client";  // Add this at the top

import styles from './header.module.css'

import { signOut } from "@/app/action";

import Link from "next/link";

export default function Header() {


  return (
    <div className={styles.header}>
        <Link href="/" className={styles.home}>home</Link>
        <Link href="/profile" className={styles.profile}>profile</Link>
        <button onClick={signOut} className={styles.signOut}>sign out</button>
    </div>
  );
}
