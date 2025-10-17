import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Header/Header.module.css";

export function Header() {
   return (
      <header className={styles.header}>
         <Link href="/" className={styles.anchor}>
            Page
         </Link>
         <Link href="/about" className={styles.anchor}>
            About
         </Link>
      </header>
   );
}
