import DesignProject from '../../components/project/DesignProject';
import { designProjectList } from '../../data/designProjectList';
import styles from './Design.module.scss';

const Design = () => {
  return (
    <div className={styles.designPage}>
      <div className={styles.designContainer}>
        {designProjectList.map((designProject) => (
          <DesignProject key={designProject.id} designProject={designProject} />
        ))}
      </div>
    </div>
  );
};

export default Design;
