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
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogList() {
  return (
    <main className="blog-page">
      <div className="section__inner">
        <motion.div
          className="section__header"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <p className="section__label">All posts</p>
          <h1 className="section__title">Writing</h1>
          <div className="section__divider" />
        </motion.div>

        <div className="blog-grid">
          {blogData.map((post, i) => (
            <motion.article
              key={post.id}
              className="blog-card"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i + 1}
            >
              <div className="blog-card__meta">
                <time className="blog-card__date">{formatDate(post.date)}</time>
                <div className="blog-card__tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
              <h2 className="blog-card__title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="blog-card__read-more">
                Read more →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
