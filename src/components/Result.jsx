import React from "react";
import styles from "./Result.module.css";

export default function Result(props) {
  const minutes = Math.floor(props.timer / 60);
  const seconds = props.timer % 60;

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.text}>
          Time{" "}
          {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
            2,
            "0"
          )}`}
        </p>
        <p className={styles.text}>
          CPM:{" "}
          {props.totalTyping === 0 ||
          props.totalTyping / props.timer === Infinity
            ? 0
            : Math.floor((props.totalTyping / props.timer) * 60)}
        </p>
        <p className={styles.text}>
          Accuracy:{" "}
          {(props.accuracy / props.limit === Infinity ||
          isNaN(props.accuracy / props.limit)
            ? 0
            : (props.accuracy / props.limit) * 100) + "%"}
        </p>
      </div>
    </div>
  );
}
