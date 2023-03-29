import Project from '../../components/project/Project';
import { projectList } from '../../data/projectList';
import useScrollPosition from '../../hooks/useScrollPosition';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import styles from './Projects.module.scss';

const Projects = () => {
  useScrollRestoration();
  const scrollPosition = useScrollPosition();
  useScrollRestoration();
  const backgroundColor =
    scrollPosition > 0 ? 'rgb(20, 27, 32)' : 'rgb(40, 66, 85)';
  return (
    <div
      style={{
        backgroundColor,
        transition: 'background-color 0.6s ease-out',
      }}
      className={styles.projectsPage}
    >
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
