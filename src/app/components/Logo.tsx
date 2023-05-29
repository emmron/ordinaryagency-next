import React from 'react';
import styles from './logo.module.css';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`${styles.circle} ${className}`}>
      <span className={styles.text}>OA</span>
    </div>
  );
};

export default Logo;
