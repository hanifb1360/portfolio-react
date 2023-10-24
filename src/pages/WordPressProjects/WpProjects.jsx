import WordPressProject from '../../components/project/WpProject';
import { wordPressProjectList } from '../../data/wordPress-projectList';
import useScrollPosition from '../../hooks/useScrollPosition';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import styles from './WpProjects.module.scss';
import 'animate.css';

const WpProjects = () => {
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
      className={`${styles.wordpressPage} animate__animated animate__fadeIn animate__slow`}
    >
      <div className={styles.wordpressContainer}>
        {wordPressProjectList.map((wordpressProject) => (
          <WordPressProject
            key={wordpressProject.id}
            wordPressProject={wordpressProject}
          />
        ))}
      </div>
    </div>
  );
};

export default WpProjects;
