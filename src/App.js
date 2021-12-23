import "./styles.css";
import { useState } from "react";

//content api 예시
const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab); //최상위에서 hook호출 => 안그럼 에러뜸.
  if (!allTabs || !Array.isArray(allTabs)) {
    //필수적인 매개변수가 빠질때 에러 검출 (2번째조건: allTabs의 배열이 false이거나)
    //여기서 Array잎에 !를 빼먹는 실수를 해서 typeError가 떴다. 꼼꼼히 코딩하자!
    return; //문제없으면 조용.
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex //버튼을 클릭하면 index를 바꿔줌.
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {/* key값은 반드시 넣어줘야한다. 안넣으면 경고함 */}
          {section.tab}
        </button>
      ))}
      {/* onClick = {changeItem}으로 사용하면 자동으로 함수 호출 -> Too many re-renders라는 무한루프 에러가 뜬다. */}
      <div>{currentItem.content}</div>
    </div>
  );
}
