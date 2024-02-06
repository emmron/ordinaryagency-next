import React, { useState, useEffect } from 'react';
import styles from './logo.module.css';

const Logo = ({ className }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <div className={`${styles.circle} ${scroll ? styles.scrolled : ""} ${className}`}>
      <span className={styles.text}>OA</span>
    </div>
  );
};

export default Logo;
