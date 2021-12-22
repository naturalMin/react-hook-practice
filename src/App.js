import "./styles.css";
import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value); //validator타입이 함수라면,
    }
    if (willUpdate) {
      setValue(value); //update가 true가 되면 값이 변화
    }
  };
  return { value, onChange };
};

export default function App() {
  //const MaxLen = (value) => value.length < 10; //10자미만까지만 입력칸 사용가능
  const maxLen = (value) => !value.includes("@"); // @를 누르면 작동안함
  const name = useInput("Mr. ", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      {/* value = {name.value} onChange = {name.onChange}  spread연산자 : 전체 props 객체 전달 */}
    </div>
  );
}
