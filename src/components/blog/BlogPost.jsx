import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogData from '../../data/blog.json';
import './Blog.css';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <main className="blog-page">
      <div className="post__inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/blog" className="post__back">← Back to Writing</Link>

          <header className="post__header">
            <div className="blog-card__meta" style={{ marginBottom: '1rem' }}>
              <time className="blog-card__date">{formatDate(post.date)}</time>
              <div className="blog-card__tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-card__tag">{tag}</span>
                ))}
              </div>
            </div>
            <h1 className="post__title">{post.title}</h1>
          </header>

          <div
            className="post__content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </main>
  );
}
