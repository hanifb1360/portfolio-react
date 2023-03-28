import SkillBar from '../../components/skillbar/Skillbar';
import styles from './Skills.module.scss';
import useScrollPosition from '../../hooks/useScrollPosition';

const Skills = () => {
  const scrollPosition = useScrollPosition();

  const backgroundColor =
    scrollPosition > 0 ? 'rgb(20, 27, 32)' : 'rgb(40, 66, 85)';

  return (
    <main
      style={{
        backgroundColor,
        transition: 'background-color 0.6s ease-out',
      }}
      className={styles.main}
    >
      <h2 className={`${styles.title}`}>SKILLS</h2>
      <div className={styles.skillsContainer}>
        <SkillBar skill="JavaScript" percentage={70} />
        <SkillBar skill="React" percentage={70} />
        <SkillBar skill="Node.js" percentage={60} />
        <SkillBar skill="TypeScript" percentage={50} />
        <SkillBar skill="TailwindCSS" percentage={90} />
        <SkillBar skill="Firebase" percentage={70} />
        <SkillBar skill="GitHub" percentage={70} />
        <SkillBar skill="JEST" percentage={60} />
        <SkillBar skill="Gatsby JS" percentage={60} />
        <SkillBar skill="Next JS" percentage={70} />
        <SkillBar skill="StoryBook" percentage={80} />
        <SkillBar skill="Chakra UI" percentage={90} />
        <SkillBar skill="Strapi" percentage={90} />
        <SkillBar skill="Mango DB" percentage={90} />
      </div>
    </main>
  );
};
export default Skills;
