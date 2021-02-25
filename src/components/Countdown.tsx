import { useContext } from "react";
import styles from "../styles/components/Countdown.module.scss";
import { CountdownContext } from "../contexts/CountdownContext";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function Countdown() {
  const { activeChallenge } = useContext(ChallengesContext);
  const {
    minutes,
    seconds,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteDec, minuteUni] = String(minutes).padStart(2, "0").split("");
  const [secondDec, secondUni] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteDec}</span>
          <span>{minuteUni}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondDec}</span>
          <span>{secondUni}</span>
        </div>
      </div>

      {activeChallenge ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
