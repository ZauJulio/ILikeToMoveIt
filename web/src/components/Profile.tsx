import styles from "../styles/components/Profile.module.scss";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/zaujulio.png" alt="Zaú Júlio"></img>
      <div>
        <strong>Zaú Júlio</strong>
        <p>
          <img src="icons/level.svg" alt="level"></img>
          Level 1
        </p>
      </div>
    </div>
  );
}
