import React, { useState, useEffect } from "react";
import styles from "./Input.module.css";

export default function Input(props) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    //사용자 입력 시작 시
    e.preventDefault();
    setInput(e.target.value);
    props.setTimerRunning(true); //타이머 시작
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      props.setTimerRunning(false); //타이머 중지
      props.setCounter((prevCounter) => prevCounter + 1); //사용자 입력 문장 카운터 +1
      console.log("prevCounter++");
      if (input !== "") {
        //사용자 입력칸이 빈칸이 아닐경우
        props.setTotalTyping((prevTotalTying) => prevTotalTying + input.length); //사용자가 입력한 문장 길이 추가 저장
        if (props.correct) {
          //사용자가 정확하게 입력했을 경우
          console.log("correct: " + props.correct);
          console.log("Accuracy++");
          props.setAccuracy((prevAcc) => prevAcc + 1); //정확도 1 증가
        }
      }
      props.changeCurrentSentence(); //문장 변경
      setInput("");
    }
  };

  useEffect(() => {
    const checkInput = () => {
      if (input === props.currentSentence) {
        props.setCorrect(true);
      } else {
        props.setCorrect(false);
      }
    };
    checkInput();
  }, [input, props]);

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        onChange={handleInputChange}
        onKeyDown={handleEnterKeyPress}
        value={input}
        placeholder="Typing..."
      />
    </div>
  );
}
