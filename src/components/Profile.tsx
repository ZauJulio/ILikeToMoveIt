import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.scss";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/zaujulio.png" alt="Zaú Júlio"></img>
      <div>
        <strong>Zaú Júlio</strong>
        <p>
          <img src="icons/level.svg" alt="level"></img>
          Nível {level}
        </p>
      </div>
    </div>
  );
}
