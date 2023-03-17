import React, { useRef } from "react";
import { useIntersection } from "react-use";
import classNames from "classnames";
import styles from "./Skillbar.module.scss";

const SkillBar = ({ skill, percentage }) => {
  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const width =
    intersection && intersection.intersectionRatio >= 0.5
      ? `${percentage}%`
      : "0";

  const barClasses = classNames(styles.bar, {
    [styles.barTransition]:
      intersection && intersection.intersectionRatio >= 0.5,
  });

  return (
    <div className={styles.container}>
      <div className={styles.skill}>{skill}</div>
      <div className={styles.barContainer}>
        <div className={styles.progressBar} ref={ref}>
          <div className={barClasses} style={{ width }}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
