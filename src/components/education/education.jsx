import React from 'react';
import { motion } from 'framer-motion';
import './education.css';

const YEAR_ONE = [
  { name: 'Intro to Programming', grade: 86, classification: 'first' },
  { name: 'Intro to Web Technologies', grade: 93, classification: 'first' },
  { name: 'Computer Architecture', grade: 85, classification: 'first' },
  { name: 'Computer Processors', grade: 100, classification: 'first' },
  { name: 'Procedural Programming', grade: 92, classification: 'first' },
  { name: 'Object Oriented Programming', grade: 93, classification: 'first' },
  { name: 'Professional Computing', grade: 78, classification: 'first' },
  { name: 'Programming Project', grade: 90, classification: 'first' },
  { name: 'Fundamental Math Concepts', grade: 70, classification: 'first' },
  { name: 'Intro to Discrete Mathematics', grade: 86, classification: 'first' },
  { name: 'Databases', grade: 63, classification: 'upper-second' },
];

const YEAR_TWO = [
  { name: 'Numerical Computation', grade: 81, classification: 'first' },
  { name: 'Operating Systems', grade: 82, classification: 'first' },
  { name: 'Artificial Intelligence', grade: 83, classification: 'first' },
  { name: 'Algorithms I', grade: 75, classification: 'first' },
  { name: 'Algorithms II', grade: 74, classification: 'first' },
  { name: 'Software Engineering Principles', grade: 76, classification: 'first' },
  { name: 'Software Engineering Project', grade: 70, classification: 'first' },
  { name: 'Data Mining', grade: 67, classification: 'upper-second' },
  { name: 'Networks', grade: 64, classification: 'upper-second' },
  { name: 'Formal Languages & Finite Automata', grade: 68, classification: 'upper-second' },
  { name: 'User Interfaces', grade: 57, classification: 'lower-second' },
  { name: 'Calculus & Mathematical Analysis', grade: 53, classification: 'lower-second' },
];

const YEAR_THREE = [
  { name: 'Distributed Systems', grade: 70, classification: 'first' },
  { name: 'Parallel Computation', grade: 76, classification: 'first' },
  { name: 'Cryptography', grade: 82, classification: 'first' },
  { name: 'Machine Learning', grade: 80, classification: 'first' },
  { name: 'Computer Graphics', grade: 77, classification: 'first' },
  { name: 'Combinatorial Optimisation', grade: 73, classification: 'first' },
  { name: 'Individual Project', grade: 72, classification: 'first' },
  { name: 'Secure Computing', grade: 64, classification: 'upper-second' },
  { name: 'Graph Algorithms & Complexity Theory', grade: 66, classification: 'upper-second' },
];

const LEGEND = [
  { label: 'First Class', sublabel: '≥ 70%', cls: 'first' },
  { label: 'Upper Second', sublabel: '60–69%', cls: 'upper-second' },
  { label: 'Lower Second', sublabel: '50–59%', cls: 'lower-second' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 },
  }),
};

function CourseList({ courses }) {
  return (
    <ul className="course-list">
      {courses.map((course, i) => (
        <motion.li
          key={course.name}
          className={`course-item course-item--${course.classification}`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={i}
        >
          <span className="course-item__name">{course.name}</span>
          <span className="course-item__grade">{course.grade}%</span>
        </motion.li>
      ))}
    </ul>
  );
}

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="section__inner">
        <motion.div
          className="section__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <p className="section__label">Academic background</p>
          <h2 className="section__title">Education</h2>
          <div className="section__divider" />
        </motion.div>

        <div className="education__degrees">
          <motion.div
            className="education__university"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <span className="education__status">Current</span>
            <h3 className="education__degree">MSc Applied Computational Science</h3>
            <p className="education__institution">Imperial College London &middot; 2026 – 2027</p>
          </motion.div>

          <motion.div
            className="education__university"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <h3 className="education__degree">BSc Computer Science</h3>
            <p className="education__institution">University of Leeds &middot; 2022 – 2026</p>
          </motion.div>
        </div>

        <motion.div
          className="education__legend"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          {LEGEND.map(({ label, sublabel, cls }) => (
            <div key={cls} className="legend-item">
              <span className={`legend-dot legend-dot--${cls}`} />
              <span className="legend-item__label">{label}</span>
              <span className="legend-item__sublabel">{sublabel}</span>
            </div>
          ))}
        </motion.div>

        <div className="education__years">
          <div className="education__year">
            <h4 className="education__year-label">Year 1</h4>
            <CourseList courses={YEAR_ONE} />
          </div>
          <div className="education__year">
            <h4 className="education__year-label">Year 2</h4>
            <CourseList courses={YEAR_TWO} />
          </div>
          <div className="education__year">
            <h4 className="education__year-label">Year 3</h4>
            <CourseList courses={YEAR_THREE} />
          </div>
        </div>
      </div>
    </section>
  );
}
