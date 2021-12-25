import "./styles.css";
import { useState, useEffect, useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen(); //전체화면으로 변화
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    const checkFullscr = document.fullscreenElement;
    if (checkFullscr !== null) {
      //전체화면 풀사이즈인 경우 체크안하면 오류뜸
      document.exitFullscreen(); //풀사이즈 해제
      if (callback && typeof callback === "function") {
        callback(false);
      }
    }
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const [openExitBtn, SetOpenExitBtn] = useState(false);
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
    SetOpenExitBtn(isFull); //전체화면일때만 버튼 보이게 함
  }; //callback 함수 적용
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625_960_720.jpg" />
        {openExitBtn && <button onClick={exitFull}>Exit fullscreen</button>}
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}
