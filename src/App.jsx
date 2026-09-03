import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero/Hero';
import About from './components/about/about';
import Experience from './components/experience/Experience';
import Skills from './components/skills/skills';
import Projects from './components/projects/Projects';
import Education from './components/education/education';
import BlogPreview from './components/blog/BlogPreview';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <BlogPreview />
    </main>
  );
}

function App() {
  return (
    <Router basename="/personal-portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
