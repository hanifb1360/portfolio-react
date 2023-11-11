import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Development.module.scss'; // Import your SCSS styles

const Development = () => {
  const [animationClass, setAnimationClass] = useState('');

  const handleClick = () => {
    setAnimationClass((prevClass) => (prevClass === '' ? 'animateRight' : ''));
    // Add any other logic you need here
  };

  return (
    <div className={styles.developmentContainer}>
      <Link
        to="/wpprojects"
        className={`${styles.side} ${styles.rightSide} ${animationClass}`}
        onClick={handleClick}
      >
        <h2>WordPress Development</h2>
      </Link>
      <Link
        to="/projects"
        className={`${styles.side} ${styles.leftSide} ${animationClass}`}
        onClick={handleClick}
      >
        <h2>Web Development</h2>
      </Link>
    </div>
  );
};

export default Development;
