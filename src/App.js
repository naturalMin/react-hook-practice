import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  useEffect(() => {
    sayHello(); //componentDidMount // 최초에 한 번만 작동. mount = 행위자체 보여진다.
  }, [number]); //componentDidUpdate //number가 mount될때만 호출. 한번만 호출=> []
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>add</button>
      <button onClick={() => setANumber(aNumber + 1)}>add2</button>
      <div>{number}</div>
      {/* number만 클릭할 수록 랜더링 진행 */}
      <div>{aNumber}</div>
      {/* aNumber 랜더링안됨 */}
    </div>
  );
}
