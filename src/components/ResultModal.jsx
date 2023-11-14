import React from "react";
import styles from "./ResultModal.module.css";

export default function ResultModal(props) {
  const minutes = Math.floor(props.timer / 60);
  const seconds = props.timer % 60;

  return (
    <div className={styles.modalOverlay} onClick={props.resetHandler}>
      <div className={styles.modalContent} onClick={props.resetHandler}>
        <h1>Result</h1>
        <p>
          Time:{" "}
          {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
            2,
            "0"
          )}`}
        </p>
        <p>
          CPM:{" "}
          {props.totalTyping === 0 ||
          props.totalTyping / props.timer === Infinity
            ? 0
            : Math.floor((props.totalTyping / props.timer) * 60)}
        </p>
        <p>
          Accuracy:{" "}
          {(props.accuracy / props.limit === Infinity ||
          isNaN(props.accuracy / props.limit)
            ? 0
            : (props.accuracy / props.limit) * 100) + "%"}
        </p>
        <p>Total typed: {props.totalTyping}</p>
      </div>
    </div>
  );
}
