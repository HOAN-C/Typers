// Navigation.js
import React, { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Navigation(props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(time);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  function languageHandler() {
    props.setLanguage(props.language === "KOR" ? "ENG" : "KOR");
  }

  function limitHandler() {
    if (props.limit > 10) {
      return props.setLimit(0);
    }
    return props.setLimit(props.limit + 5);
  }

  return (
    <div className={styles.container}>
      <div className={styles.rightSide}>
        <h1 className={styles.title}>Typers</h1>
      </div>
      <div className={styles.leftSide}>
        <div className={styles.roundedBox}>
          <div className={styles.time}>{formattedTime}</div>
        </div>
        <div className={styles.roundedBox}>
          <div className={styles.languageLimit} onClick={languageHandler}>
            <div className={styles.language}>{props.language}</div>
          </div>
        </div>
        <div className={styles.roundedBox}>
          <div className={styles.languageLimit} onClick={limitHandler}>
            <div className={styles.limit}>Limit: {props.limit ? props.limit : "∞"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
