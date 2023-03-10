import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/repos/hasura/graphql-engine");

  const data = await res.json();

  return {
    props: {
      githubStars: data,
    },
  };
}

export default function Home({ githubStars }: any) {
  return (
    <>
      <Head>
        <title>Hasura</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Image
            src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1676379224/main-web/download_w0rnm7.svg"
            alt="hasura-icon"
            width="116"
            height="35"
          />
          <p className={inter.className}>Next.js Sample App</p>
          <h1 className={inter.className}>Instant GraphQL on all your data</h1>
          <h2
            className={inter.className}
          >{`Github Stars Count - ${githubStars?.stargazers_count}`}</h2>
          <Link href="/about">
            <button className={inter.className}>About</button>
          </Link>
        </div>
      </main>
    </>
  );
}
