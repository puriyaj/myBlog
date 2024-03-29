import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"
export const dynamic = 'force-dynamic';
const getData = async () => {
  const res = await fetch("https://my-blog-ten-pearl.vercel.app/api/views", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const  MenuPosts = async ({ withImage }) => {
 const data = await getData();
 
  return (
    <div className={styles.items}>
       {data.map((item,inx) =>
         <Link key={inx} href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src={item.img} alt="" fill className={styles.image} />
          </div>
        )}
       
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles[item.catSlug]}`}>{item.catSlug}</span>
          <h3 className={styles.postTitle}>
            {item.title}
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>{item.user.name}</span>
            <span className={styles.date}> - {item.createdAt}</span>
          </div>
        </div>
      </Link>
        )}
     
    </div>
  );
};

export default MenuPosts;
