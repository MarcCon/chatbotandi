"use client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Home = () => {
  const categories = {
    "Jetzt chatten": "basic-chat",
    // "Function calling": "function-calling",
    // "File search": "file-search",
    // All: "all",
  };

  return (
    <main className={styles.main}>
      <Image src="/kiKompass.svg" width={200} height={200} alt="" />
      <div className={styles.title}>
        Hallo ich beantworte dir Fragen zu den Sessions.
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/examples/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
