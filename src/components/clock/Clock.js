import React from "react";
import styles from './Clock.module.scss';

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <>
        <div className={styles.clock__timer}>
            <div className={styles.clock__top}>
                <div className={styles.clock__date}>
                    <div className={styles.clock__period}>{timerDays}</div>
                </div>
                <div className={styles.clock__subtitle}>Days</div>
            </div>
            <div className={styles.clock__top}>
                <div className={styles.clock__date}>
                    <div className={styles.clock__period}>{timerHours}</div>
                </div>
                <div className={styles.clock__subtitle}>Hours</div>
            </div>
            <div className={styles.clock__top}>
                <div className={styles.clock__date}>
                    <div className={styles.clock__period}>{timerMinutes}</div>
                </div>
                <div className={styles.clock__subtitle}>Minutes</div>
            </div>
            <div className={styles.clock__top}>
                <div className={styles.clock__date}>
                    <div className={styles.clock__period}>{timerSeconds}</div>
                </div>
                <div className={styles.clock__subtitle}>Seconds</div>
            </div>
        </div>
    </>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;