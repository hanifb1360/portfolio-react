import Project from "../../components/project/Project";
import { projectList } from "./projectList.js";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      {projectList.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
