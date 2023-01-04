import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Reprehenderit occaecat non incididunt Lorem quis irure esse. Mollit
          Lorem magna amet do ipsum veniam magna. Qui incididunt proident duis
          enim exercitation nostrud sit reprehenderit aliqua Lorem laborum
          occaecat non non. Magna cillum ipsum amet sit aute nulla. Ipsum irure
          eu irure cupidatat ad Lorem officia adipisicing dolor adipisicing id
          qui et tempor.
        </p>
        <p className={styles.text}>
          Reprehenderit occaecat non incididunt Lorem quis irure esse. Mollit
          Lorem magna amet do ipsum veniam magna. Qui incididunt proident duis
          enim exercitation nostrud sit reprehenderit aliqua Lorem laborum
          occaecat non non. Magna cillum ipsum amet sit aute nulla. Ipsum irure
          eu irure cupidatat ad Lorem officia adipisicing dolor adipisicing id
          qui et tempor.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninjas list
        </Link>
      </div>
    </>
  );
}
