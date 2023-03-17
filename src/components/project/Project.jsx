import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Project.module.scss";

const Project = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);

  const handleProjectClick = () => {
    if (showDetails) {
      setShowDetails(false);
    } else {
      setShowDetails(true);
    }
  };

  useEffect(() => {
    const handleCloseDetails = () => {
      console.log("handleCloseDetails called");

      setTimeout(() => {
        if (!showDetails) {
          console.log("window already closed");
          return;
        }

        setShowDetails(false);
      }, 500); // Delay for 500 milliseconds before closing the window

      // Animate the window moving down before closing
      if (detailsRef.current) {
        detailsRef.current.style.transform = "translateY(100%)";
      }
    };

    if (showDetails) {
      // Animate the window moving up when it is opened
      if (detailsRef.current) {
        detailsRef.current.style.transform = "translateY(-100%)";

        // Listen for the animation to finish before setting the timeout to close the window
        detailsRef.current.addEventListener(
          "transitionend",
          handleCloseDetails
        );
      }
    } else {
      // Remove the event listener when the window is closed
      if (detailsRef.current) {
        detailsRef.current.removeEventListener(
          "transitionend",
          handleCloseDetails
        );
      }
    }

    // Clean up the effect when the component is unmounted
    return () => {
      if (detailsRef.current) {
        detailsRef.current.removeEventListener(
          "transitionend",
          handleCloseDetails
        );
      }
    };
  }, [showDetails]);

  return (
    <div className={styles.projectContainer}>
      <img
        src={project.image}
        alt='it represent a glance on the project main page'
        className={styles.projectImage}
        onClick={handleProjectClick}
      />
      <h2 className={styles.projectTitle}>{project.title}</h2>
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className={styles.projectDetails}
          >
            <button className={styles.closeButton} onClick={handleProjectClick}>
              x
            </button>
            <p className={styles.projectDescription}>{project.description}</p>
            <ul className={styles.projectTech}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <div className={styles.projectLinks}>
              <a
                href={project.demoLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                Demo
              </a>
              <a
                href={project.codeLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                Code
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
