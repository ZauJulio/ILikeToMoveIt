import { useState, useEffect, useContext } from "react";
import styles from "../styles/components/Countdown.module.scss";
import { ChallengesContext } from "../contexts/ChallengesContext";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge, activeChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteDec, minuteUni] = String(minutes).padStart(2, "0").split("");
  const [secondDec, secondUni] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      startNewChallenge();
      resetCountdown()
    }
  }, [isActive, time]);

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