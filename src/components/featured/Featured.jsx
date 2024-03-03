import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
const Featured = () => {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>The Fraternal Kiss: A Symbol of Unity.</h1>
          <p className={styles.postDesc}>
          In the midst of lifes hustle, the fraternal kiss emerges as a powerful symbol of connection and unity. Whether a cheek-to-cheek peck or a warm hug, this timeless gesture transcends differences, reminding us of our shared humanity. In a world that often emphasizes individualism, the fraternal kiss stands as a simple yet profound call to celebrate the bonds that connect us all.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
