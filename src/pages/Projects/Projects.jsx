import Project from '../../components/project/Project';
import { projectList } from '../../data/projectList';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import styles from './Projects.module.scss';

const Projects = () => {
  useScrollRestoration();
  return (
    <div className={styles.projectsPage}>
      <div className={styles.portfolioCodeContainer}>
        <a href="https://github.com/hanifb1360/portfolio-react">
          Discover the code behind this website
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
