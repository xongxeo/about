"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTypescript } from "react-icons/si";
import styles from "./FloatingIcons.module.css";

interface FloatingIconsProps {
  side: "left" | "right";
}

const iconsLeft = [FaReact, SiNextdotjs, SiJavascript, FaHtml5];
const iconsRight = [FaNodeJs, FaCss3Alt, SiTypescript, FaFigma];

export default function FloatingIcons({ side }: FloatingIconsProps) {
  const icons = side === "left" ? iconsLeft : iconsRight;

  return (
    <div className={`${styles.container} ${side === "left" ? styles.left : styles.right}`}>
      {icons.map((Icon, idx) => (
        <motion.div
          key={idx}
          className={styles.icon}
          animate={{
            y: ["0%", "-20%", "0%"],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3 + idx * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}
