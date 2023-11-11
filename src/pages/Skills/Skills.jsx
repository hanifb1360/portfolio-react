import SkillBar from '../../components/skillbar/Skillbar';
import styles from './Skills.module.scss';
import useScrollPosition from '../../hooks/useScrollPosition';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import 'animate.css';

const Skills = () => {
  const scrollPosition = useScrollPosition();
  useScrollRestoration();
  const backgroundColor =
    scrollPosition > 0 ? 'rgb(20, 27, 32)' : 'rgb(40, 66, 85)';

  return (
    <main
      style={{
        backgroundColor,
        transition: 'background-color 0.6s ease-out',
      }}
      className={`${styles.main} animate__animated animate__fadeIn animate`}
    >
      <h2 className={`${styles.title}`}>SKILLS</h2>
      <div className={styles.skillsContainer}>
        <SkillBar skill="JavaScript" percentage={70} />
        <SkillBar skill="React" percentage={70} />
        <SkillBar skill="Node.js" percentage={60} />
        <SkillBar skill="GraphQL" percentage={80} />
        <SkillBar skill="TypeScript" percentage={50} />
        <SkillBar skill="TailwindCSS" percentage={90} />
        <SkillBar skill="Firebase" percentage={70} />
        <SkillBar skill="GitHub" percentage={70} />
        <SkillBar skill="JEST" percentage={60} />
        <SkillBar skill="Gatsby JS" percentage={60} />
        <SkillBar skill="Next JS" percentage={70} />
        <SkillBar skill="StoryBook" percentage={80} />
        <SkillBar skill="Chakra UI" percentage={90} />
        <SkillBar skill="Bootstrap" percentage={90} />
        <SkillBar skill="Headless CMS" percentage={90} />
        <SkillBar skill="Mongo DB" percentage={90} />
        <SkillBar skill="WordPress" percentage={90} />
        <SkillBar skill="Elementor" percentage={90} />
      </div>
    </main>
  );
};
export default Skills;
