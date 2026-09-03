import React from 'react';
import { motion } from 'framer-motion';
import './skills.css';

const SKILLS = [
  {
    category: 'Languages',
    items: ['JavaScript', 'Java', 'C#', 'Python', 'C++', 'C'],
  },
  {
    category: 'Frameworks & Platforms',
    items: ['React', '.NET', 'Node.js', 'Express.js', 'Qt', 'Playwright'],
  },
  {
    category: 'Tools & Others',
    items: ['MySQL', 'Git', 'Figma', 'Arduino', 'Jupyter', 'AWS', 'Canva'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <motion.div
          className="section__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <p className="section__label">What I work with</p>
          <h2 className="section__title">Skills</h2>
          <div className="section__divider" />
        </motion.div>

        <div className="skills__grid">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skills__group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={gi}
            >
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__items">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
