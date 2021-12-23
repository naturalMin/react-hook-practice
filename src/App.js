import "./styles.css";
import { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]); //title이 업데이트되면 updateTitle호출
  return setTitle;
};

export default function App() {
  const titleUpdater = useTitle("Loading..."); //브라우저 타이틀 Loading..으로 변경됨.
  setTimeout(() => titleUpdater("Home"), 5000); //5초후 브라우저 타이틀 Home으로 변경
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}
