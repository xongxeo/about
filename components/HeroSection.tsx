"use client";

import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`section ${styles.hero}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onClick={handleScrollToAbout}
      >
        <motion.h1 
          className={styles.title}
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          Seoyoung Song
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          클릭해서 더 알아보기 
        </motion.p>
      </motion.div>
    </section>
  );
}
