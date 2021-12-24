import "./styles.css";
import { useState, useEffect, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event; //clientY: 마우스 위치 위아래 체크
    if (clientY <= 0) {
      //마우스 위로 벗어날 때마다 경고표시
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};

export default function App() {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
