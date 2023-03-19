import Project from "../../components/project/Project";
import { projectList } from "./projectList.js";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.projectsPage}>
      <div className={styles.portfolioCodeContainer}>
        <a href='https://github.com/hanifb1360/portfolio-react'>
          The code behind this website
        </a>
      </div>

      <div className={styles.projectsContainer}>
        {projectList.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
