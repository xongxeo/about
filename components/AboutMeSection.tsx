"use client";

import { motion } from "framer-motion";
import styles from "./AboutMeSection.module.css";
import FloatingIcons from "./FloatingIcons";

export default function AboutMeSection() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <FloatingIcons side="left" />
      <div className="content-container">
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className={styles.cardContainer}>
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={styles.cardTitle}>My Career</h3>
            <ul className={styles.list}>
              <li className={styles.subItem}>
                <div className={styles.subTitle}>✨ 아나운서 준비생</div>
                <div className={styles.subDesc}>
                  커뮤니케이션 역량과 스피치 스킬을 기르며 대중과 소통하는 방법을 체득했습니다.
                </div>
              </li>
              <li className={styles.subItem}>
                <div className={styles.subTitle}>✨ 감정평가사 고시 준비</div>
                <div className={styles.subDesc}>
                  부동산 및 경제 전반에 대한 깊이 있는 지식을 쌓으며 치열하게 몰입하는 법을 배웠습니다.
                </div>
              </li>
              <li className={styles.subItem}>
                <div className={styles.subTitle}>✨ 현재</div>
                <div className={styles.subDesc}>
                  그동안 쌓아온 다방면의 역량을 바탕으로 새로운 가치를 창출하는 여정을 이어가고 있습니다.
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={styles.cardTitle}>Expertise</h3>
            <ul className={styles.list}>
              <li className={styles.subItem}>
                <div className={styles.subTitle}>💡 커뮤니케이션</div>
                <div className={styles.subDesc}>
                  아나운서 준비 과정을 통해 기른 정확한 발음, 전달력 높은 스피치, 그리고 상대를 배려하는 공감 소통 능력.
                </div>
              </li>
              <li className={styles.subItem}>
                <div className={styles.subTitle}>💡 경제/회계적 지식</div>
                <div className={styles.subDesc}>
                  감정평가사 고시 준비로 학습한 경제학적 사고, 탄탄한 가치 평가 역량 및 회계 지식.
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
