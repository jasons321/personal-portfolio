import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogData from '../../data/blog.json';
import './Blog.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPreview() {
  const recent = blogData.slice(0, 3);

  return (
    <section className="section blog-preview" id="blog">
      <div className="section__inner">
        <motion.div
          className="section__header blog-preview__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <div>
            <p className="section__label">Thoughts & notes</p>
            <h2 className="section__title">Writing</h2>
          </div>
          <Link to="/blog" className="blog-preview__all-link">
            All posts →
          </Link>
        </motion.div>
        <div className="section__divider" style={{ marginTop: 0, marginBottom: '3rem' }} />

        <div className="blog-grid">
          {recent.map((post, i) => (
            <motion.article
              key={post.id}
              className="blog-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={i}
            >
              <div className="blog-card__meta">
                <time className="blog-card__date">{formatDate(post.date)}</time>
                <div className="blog-card__tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="blog-card__title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="blog-card__read-more">
                Read more →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
