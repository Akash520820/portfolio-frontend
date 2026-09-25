import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'goals', label: 'Goals' },
  { id: 'contact', label: 'Contact' },
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Plain section IDs + manual scroll: with HashRouter, the URL's # is
  // reserved for routing, so a native "#about" anchor would collide with it.
  const goToSection = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      scrollToId(id);
    }
  };

  return (
    <motion.header
      className="site-nav"
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__brand">
          <span className="site-nav__brand-icon"></span>
          Akash Chakraborty
        </Link>

        <button
          className="site-nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav__links ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <motion.button
              key={link.id}
              type="button"
              className="site-nav__link"
              onClick={goToSection(link.id)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
