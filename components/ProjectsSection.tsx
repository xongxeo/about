"use client";

import { motion } from "framer-motion";
import styles from "./ProjectsSection.module.css";
import FloatingIcons from "./FloatingIcons";

export default function ProjectsSection() {
  const projects = [
    { title: "KUSF 스포츠 마케팅 공모전", desc: "춘천시에 청년 유입을 늘리기 위한 스포츠 관련 행사 기획 (3등 수상)" },
    { title: "유럽통상학술제", desc: "유럽의 ESG 경영과 디지털 전환, 지속가능한 공급망과 관련된 K-beauty의 한계점 및 전략적 솔루션 제안" },
    { title: "성균관대학교 창업학회 SPEC", desc: "성균관대학교 공식 창업학회 SPEC 소속 및 학회 활동 중" },
  ];

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <FloatingIcons side="right" />
      <div className="content-container">
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className={styles.grid}>
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className={styles.imagePlaceholder}>Thumbnail {idx + 1}</div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <p className={styles.projectDesc}>{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
