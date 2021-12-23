import "./styles.css";
import { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    } //mount
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    }; //unmount
  }, []); //단 한번만 실행
  return typeof onClick !== "function" ? element : undefined;
};
// React 16.8v 부터는 Hook 을 조건문, 반복문, 중첩함수 내에서 호출할 수 없습니다.

export default function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  //const input = useRef(); //document.getElementById()와 동일
  //setTimeout(() => input.current?.focus(), 5000); //초반에 undefined로 잡혀서 ?.처리
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      {/* <input ref={input} placeholder="hi" /> */}
    </div>
  );
}
