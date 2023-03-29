import { motion, AnimatePresence } from 'framer-motion';
import styles from './Project.module.scss';
import { useProjectDetails } from '../../hooks/useProjectDetails';
import { useCloseButtonAnimation } from '../../hooks/useCloseButton';
import { useEffect, useRef, useState } from 'react';

const DesignProject = ({ designProject }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { closeButtonAnimation, setCloseButtonAnimation } =
    useCloseButtonAnimation();
  const detailsRef = useRef(null);

  useProjectDetails(showDetails, setShowDetails);

  const handleProjectClick = () => {
    if (showDetails) {
      setShowDetails(false);
    } else {
      setShowDetails(true);
    }
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.projectContainer}>
      <img
        src={designProject.image}
        alt="it represent a glance on the project main page"
        className={styles.projectImage}
        onClick={handleProjectClick}
      />

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
            }}
            className={styles.projectDetails}
            ref={detailsRef}
          >
            <motion.button
              className={styles.closeButton}
              onClick={() => setShowDetails(false)}
              onMouseEnter={() => setCloseButtonAnimation('hover')}
              onMouseLeave={() => setCloseButtonAnimation('initial')}
              animate={closeButtonAnimation}
            >
              <svg width="23" height="23" viewBox="0 0 23 23">
                <path
                  d="M1.26339 1.24282C1.68522 0.821002 2.37802 0.821002 2.79983 1.24282L11.0236 9.46658L19.2474 1.24282C19.6692 0.821002 20.362 0.821002 20.7838 1.24282C21.2057 1.66463 21.2057 2.35742 20.7838 2.77924L12.56 11.003L20.7838 19.2268C21.2057 19.6486 21.2057 20.3414 20.7838 20.7632C20.362 21.185 19.6692 21.185 19.2474 20.7632L11.0236 12.5394L2.79983 20.7632C2.37802 21.185 1.68522 21.185 1.26339 20.7632C0.841573 20.3414 0.841573 19.6486 1.26339 19.2268L9.48715 11.003L1.26339 2.77924C0.841573 2.35742 0.841573 1.66463 1.26339 1.24282Z"
                  fill="#fff"
                />
              </svg>
            </motion.button>

            <div
              className={styles.projectDescription}
              dangerouslySetInnerHTML={{ __html: designProject.description }}
            />

            {designProject && designProject.technologies && (
              <ul className={styles.projectTech}>
                {designProject.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            )}
            <div className={styles.projectLinks}>
              <a
                target={isMobile ? null : '_blank'}
                href={designProject.demoLink}
                rel="noopener noreferrer"
              >
                Discover the Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesignProject;
