import "./styles.css";
import { useState, useEffect, useRef } from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ""; //요즘은 Deprecated
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  // 정말로 이 사이트를 나갈꺼냐? 재확인 질문해줌. 보호역할
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}
