import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Development.module.scss'; // Import your SCSS styles

const Development = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [hasSwitched, setHasSwitched] = useState(false);

  const handleClick = () => {
    if (!hasSwitched) {
      setShouldRedirect(true);
      setHasSwitched(true);

      // Delay the redirection after the animation (adjust the timeout as needed)
      setTimeout(() => {
        setShouldRedirect(false);
      }, 1000); // 1000 milliseconds = 1 second
    }
  };

  return (
    <div className={styles.developmentContainer}>
      <Link
        to={shouldRedirect ? '/projects' : '/wpprojects'}
        className={`${styles.side} ${styles.leftSide} ${
          shouldRedirect ? styles.animateRight : ''
        }`}
        onClick={handleClick}
      >
        <h2>Left Part</h2>
        <p>This is the left part.</p>
      </Link>
      <Link
        to={shouldRedirect ? '/wpprojects' : '/projects'}
        className={`${styles.side} ${styles.rightSide} ${
          shouldRedirect ? styles.animateLeft : ''
        }`}
        onClick={handleClick}
      >
        <h2>Right Part</h2>
        <p>This is the right part.</p>
      </Link>
      {shouldRedirect && (
        <div>
          {/* Add any loading or transition elements here */}
          Redirecting...
        </div>
      )}
    </div>
  );
};

export default Development;
