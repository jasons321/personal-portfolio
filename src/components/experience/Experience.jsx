import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const EXPERIENCE = [
  {
    id: 1,
    period: '2025 - 2026',
    title: 'Automation Quality Engineer Intern',
    company: 'Ligentia',
    location: 'Leeds, UK',
    description: 'Writing automated end-to-end tests using Playwright and C# to ensure product quality across the logistics platform.',
    type: 'work',
  },
  {
    id: 2,
    period: '2024 – 2025',
    title: 'Industrial Placement Developer',
    company: 'Cantarus',
    location: 'Manchester, UK',
    description: '.NET Developer specialising in C#, JavaScript, and various content management systems, delivering client solutions across a range of industries.',
    type: 'work',
  },
  {
    id: 3,
    period: '2025 - 2026',
    title: 'International Secretary',
    company: 'University of Leeds Hiking Society',
    location: 'Leeds, UK',
    description: 'Lead Sunday hikes and manage the international student body within the society.',
    type: 'volunteer',
  },
  {
    id: 4,
    period: '2024 – 2025',
    title: 'Treasurer',
    company: 'University of Leeds Chess Society',
    location: 'Leeds, UK',
    description: 'Managed society finances, estimated budgets and income, and prepared statements of income for committee review.',
    type: 'volunteer',
  },
  {
    id: 5,
    period: '2024 – Current',
    title: 'Volunteer Web Designer',
    company: 'SmartNakuru',
    location: 'Remote',
    description: 'Delivered web design for selected pages as part of a short-term design project.',
    type: 'volunteer',
  },
  {
    id: 6,
    period: '2021 – 2022',
    title: 'Volunteer English Teacher',
    company: 'Community Programme',
    location: 'Jakarta, Indonesia',
    description: 'Taught English to a small group of children from disadvantaged backgrounds.',
    type: 'volunteer',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__inner">
        <motion.div
          className="section__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <p className="section__label">Career</p>
          <h2 className="section__title">Experience</h2>
          <div className="section__divider" />
        </motion.div>

        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.id}
              className="timeline__item"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <div className="timeline__marker">
                <div className={`timeline__dot${item.type === 'work' ? ' timeline__dot--filled' : ''}`} />
                <div className="timeline__line" />
              </div>
              <div className="timeline__content">
                <span className="timeline__period">{item.period}</span>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__company">
                  {item.company} &middot; {item.location}
                </p>
                <p className="timeline__description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
