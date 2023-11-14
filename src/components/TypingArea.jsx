// TypingArea.js
import React, { useEffect, useState } from "react";
import Input from "./Input";
import styles from "./TypingArea.module.css";

export default function TypingArea(props) {
  const [correct, setCorrect] = useState(false);
  const [currentSentence, setCurrentSentence] = useState(
    props.sentences[Math.floor(Math.random() * props.sentences.length)]
  );

  const changeCurrentSentence = () => {
    setCurrentSentence(
      props.sentences[Math.floor(Math.random() * props.sentences.length)]
    );
    setCorrect(false);
  };

  useEffect(changeCurrentSentence, [props.language, props.sentences]);

  return (
    <div className={styles.container}>
      <h3 className={`${styles.sentence} ${correct ? styles.correct : ""}`}>
        {currentSentence}
      </h3>
      <Input
        currentSentence={currentSentence}
        changeCurrentSentence={changeCurrentSentence}
        correct={correct}
        setCorrect={setCorrect}
        setTimerRunning={props.setTimerRunning}
        setTotalTyping={props.setTotalTyping}
        setAccuracy={props.setAccuracy}
        setCounter={props.setCounter}
      />
    </div>
  );
}
