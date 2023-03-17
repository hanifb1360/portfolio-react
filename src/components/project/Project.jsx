import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Project.module.scss";

const Project = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleProjectClick = () => {
    setShowDetails(!showDetails);
    setClicked(!clicked);
  };

  return (
    <div className={styles.projectContainer} onClick={handleProjectClick}>
      <img
        src={project.image}
        alt='it represent a glance on the project main page'
        className={`${styles.projectImage} ${clicked ? styles.clicked : ""}`}
      />
      <h2 className={styles.projectTitle}>{project.title}</h2>
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.projectDetails}
        >
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
    </div>
  );
};

export default Project;
