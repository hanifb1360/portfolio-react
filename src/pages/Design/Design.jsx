import DesignProject from '../../components/project/DesignProject';
import { designProjectList } from '../../data/designProjectList';
import useScrollPosition from '../../hooks/useScrollPosition';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import styles from './Design.module.scss';
import 'animate.css';

const Design = () => {
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
      className={`${styles.designPage} animate__animated animate__fadeIn animate__slow`}
    >
      <div className={styles.designContainer}>
        {designProjectList.map((designProject) => (
          <DesignProject key={designProject.id} designProject={designProject} />
        ))}
      </div>
    </div>
  );
};

export default Design;
