import React, { useState, useEffect } from 'react';
import styles from './logo.module.css';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const classes = {
    circle:"flex justify-center items-center w-15 h-15 border-[3px] border-black rounded-full transition-color duration-300 ease",
    text:"text-[36px] font-bold font-radley lowercase transition-color duration-300 ease"
  }
  return (
    <div className={`${classes.circle} ${scroll ? "bg-black border-white" : "bg-white"} ${className}`}>
      <span className={`${classes.text} ${scroll ? "text-white" : "text-black"}`} >OA</span>
    </div>
  );
};

export default Logo;
