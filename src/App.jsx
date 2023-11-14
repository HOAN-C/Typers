import React, { useEffect } from "react";
import { useState } from "react";
import Navigation from "./components/Navigation";
import TypingArea from "./components/TypingArea";
import Result from "./components/Result";
import ResultModal from "./components/ResultModal";

const KOR_WiseSaying = [
  "하루하루를 마지막이라고 생각하라. 그러면 예측할 수 없는 시간은 그대에게 더 많은 시간을 줄 것이다.",
  "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
  "내일이란 오늘의 다른 이름일 뿐이다.",
  "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아붓는 사랑의 정도이다.",
  "마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다.",
  "건강에 대한 지나친 걱정만큼 건강에 치명적인 것은 없다.",
  "아침에 상쾌한 기분으로 일찍 일어나는 사람은 드물다. 대부분의 사람들은 그냥 일찍 일어날 뿐이다.",
  "나는 매일 저녁 모든 근심 걱정을 하나님께 넘겨 드린다. 어차피 하나님은 밤에도 안 주무실 테니까.",
  "오늘이란 신어야 할 신발과 같은 것이다.",
  "오늘 일어나는 것이 무엇이든 간에 참고 견디라. 이것이 내일을 찬미케 하는 유일한 길이다.",
  "오늘을 붙들어라. 되도록 이면 내일에 의지하지 말라. 그날 그날이 일 년 중에서 최선의 날이다.",
  "오늘이라는 날은 두 번 다시 오지 않는다는 것을 잊지 말라.",
  "계획이란 미래에 대한 현재의 결정이다.",
  "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
  "고통이 남기고 간 뒤를 보라. 고난이 지나면 반드시 기쁨이 스며든다.",
  "시간은 말로써 나타낼 수 없을 만큼 멋진 만물의 소재이다.",
  "시간을 선택하는 것은 시간을 절약하는 것이다.",
  "눈물과 더불어 빵을 먹어 보지 않은 자는 인생의 참다운 맛을 모른다.",
  "시간이 덜어주거나 부드럽게 해주지 않는 슬픔이란 하나도 없다.",
  "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
  "시간이 말하는 것을 잘 들어라. 시간은 가장 현명한 법률고문이다.",
  "가라, 달려라, 그리고 세계가 6일 동안에 만들어졌음을 잊지 말라. 시간을 잘 붙잡는 사람은 모든 것을 얻을 수 있다.",
  "미래를 신뢰하지 마라, 죽은 과거는 묻어버려라, 그리고 살아있는 현재에 행동하라.",
  "그대는 그대가 원하는 것은 무엇이든지 나에게 청구할 수 있지만 시간만은 안된다.",
  "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리 자신에 깜짝 놀랄 것이다.",
  "가장 바쁜 사람이 가장 많은 시간을 갖는다. 부지런히 노력하는 사람이 결국 많은 대가를 얻는다.",
  "그대의 하루하루를 그대의 마지막 날이라고 생각하라.",
  "내가 헛되이 보낸 오늘 하루는 어제 죽어간 이들이 그토록 바라던 하루이다.",
  "단 하루면 인간적인 모든 것을 멸망시킬 수 있고 다시 소생시킬 수도 있다.",
  "내일은 시련에 대응하는 새로운 힘을 가져다줄 것이다.",
  "행복은 결코 많고 큰 데만 있는 것이 아니다. 작은 것을 가지고도 고마워하고 만족할 줄 안다면 그는 행복한 사람이다.",
  "때가 오면 모든 것이 분명해진다. 시간은 진리의 아버지이다.",
  "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다.",
  "변명 중에서도 가장 어리석고 못난 변명은 '시간이 없어서' 라는 변명이다.",
  "사람은 금전을 시간보다 중히 여기지만, 그로 인해 잃어버린 시간은 금전으론 살 수 없다.",
  "삼십 분이란 티끌과 같은 시간이라고 말하지 말고, 그동안이라도 티끌과 같은 일을 처리하는 것이 현명한 방법이다.",
  "새해는 묵은 욕망들을 소생시키고, 고독하고 사려 깊은 영혼이 물러가는 해.",
  "선천적으로 현명한 사람은 없다. 시간이 모든 것을 완성한다.",
  "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
  "세월은 누구에게나 공평하게 주어진 자본금이다. 이 자본을 잘 이용한 사람에겐 승리가 있다.",
  "승자는 시간을 관리하며 살고, 패자는 시간에 끌려 산다.",
  "시간 엄수는 군주의 예절이다.",
  "인간은 항상 시간이 모자란다고 불평을 하면서 마치 시간이 무한정 있는 것처럼 행동한다.",
];
const ENG_WiseSaying = [
  "When you have faults, do not fear to abandon them.",
  "They must often change who would be constant in happiness or wisdom.",
  "Age is no guarantee of maturity.",
  "Youth isn’t always all it’s touted to be.",
  "You will face many defeats in life, but never let yourself be defeated.",
  "Life is either a daring adventure or nothing at all.",
  "The goal of life is living in agreement with nature.",
  "This too shall pass.",
  "The die is cast.",
  "Only I can change my life, no one can do it for me.",
  "When in doubt, choose change.",
  "Life is unfair, get used to it.",
  "Being happy never goes out of style.",
  "All you need in this life is ignorance and confidence, then success is sure.",
  "Life is a mountain. Your goal is to find your path, not to reach the top.",
  "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
  "Life can only be understood backward; but it must be lived forwards.",
  "Despite the forecast, live like it’s spring.",
  "Nothing is more despicable than respect based on fear.",
  "Turn your wounds into wisdom.",
  "Change the world by being yourself.",
  "Great minds have purposes, others have wishes.",
  "Be gentle first with yourself.",
  "All we have is now.",
  "Believe in yourself.",
  "If you are not willing to risk the usual, you will have to settle for the ordinary.",
  "No great man ever complains of the lack of opportunity.",
  "A day without laughter is a day wasted.",
  "Love what you have.",
  "It ain’t over till it’s over.",
  "No pain, no gain.",
  "Rome is not built in a day.",
  "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  "Success usually comes to those who are too busy to be looking for it.",
  "If you really look closely, most overnight successes took a long time.",
  "The secret of success is to do the common thing uncommonly well.",
  "Don’t be afraid to give up the good to go for the great.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "If you are not willing to risk the usual, you will have to settle for the ordinary.",
  "The ones who are crazy enough to think they can change the world are the ones that do.",
  "All progress takes place outside the comfort zone.",
  "It is kind of fun to do the impossible.",
  "But I know, somehow, that only when it is dark enough can you see the stars.",
  "I didn’t get there by wishing for it or hoping for it, but by working for it.",
  "The less their ability, the more their conceit.",
  "Live life to the fullest.",
  "Fall seven times, stand up eight.",
  "No one is you, and that is your power.",
  "Sometimes the right path is not the easiest one.",
  "A mind troubled by doubt cannot focus on the course of victory.",
  "Try not to become a man of success. Rather become a man of value.",
  "The way to get started is to quit talking and begin doing.",
  "I find that the harder I work, the more luck I seem to have.",
  "It’s never too late.",
  "Habit is second nature.",
  "Study without desire spoils the memory, and it retains nothing that it takes in.",
  "The merit of an action lies in finishing it to the end.",
  "Education is what survives when what has been learned has been forgotten.",
  "Learning is not compulsory… neither is survival.",
  "Isn’t it a pleasure to study, and to practice what you have learned?",
  "Courage is being scared to death… and saddling up anyway.",
  "I rise like the break of dawn.",
  "Push yourself, because no one else is going to do it for you.",
  "He that can have patience can have what he will.",
];

function App() {
  const [language, setLanguage] = useState("KOR");
  const [limit, setLimit] = useState(5);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [totalTyping, setTotalTyping] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  //타이머 구동부
  useEffect(() => {
    let timerId;
    if (timerRunning) {
      timerId = setInterval(() => {
        setTimer((pervTimer) => pervTimer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [timerRunning]);

  //state 초기화
  const resetHandler = () => {
    console.log("reset");
    setCounter(0);
    setTimer(0);
    setTotalTyping(0);
    setAccuracy(0);
  };

  return (
    <>
      {limit !== 0 && limit <= counter && (
        <ResultModal
          timer={timer}
          totalTyping={totalTyping}
          accuracy={accuracy}
          limit={limit}
          resetHandler={resetHandler}
        />
      )}
      <Navigation
        language={language}
        setLanguage={setLanguage}
        limit={limit}
        setLimit={setLimit}
      />
      <TypingArea
        language={language}
        sentences={language === "KOR" ? KOR_WiseSaying : ENG_WiseSaying}
        setTimerRunning={setTimerRunning}
        setTotalTyping={setTotalTyping}
        setAccuracy={setAccuracy}
        setCounter={setCounter}
      />
      <Result
        timer={timer}
        totalTyping={totalTyping}
        accuracy={accuracy}
        limit={limit}
      />
    </>
  );
}

export default App;
