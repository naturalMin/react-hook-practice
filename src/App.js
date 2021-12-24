import "./styles.css";
import { useState, useEffect, useRef } from "react";

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return; //callback이 함수가 아니라면 그냥 리턴.
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      //confirm window창이 browser에 message를 가지고 있다면\
      //window 추가안하면 Unexpected use of 'confirm' no-restricted-globals 에러
      callback(); //callback 함수를 실행하라
    } else {
      rejection(); //그렇지 않다면 rejection을 실행하라.
      //cancel 누르는 순간 TypeError rejection is not a function 에러발생
    }
  };
  return confirmAction; //confirmAction 함수값을 리턴하라.
};

export default function App() {
  const deleteWorld = () => console.log("Deleting the world.");
  const abort = console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
