import "./styles.css";
import { useState, useEffect, useRef } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  //navigator.onLine = 웹사이트 온라인인지 여부(true or false)
  const handleChange = () => {
    if (typeof onChange === "function") {
      setStatus(navigator.onLine); //온,오프라인 상태 변화
    }
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }; //clean up
  }, []);
  return status;
};

export default function App() {
  const handleNetworkChange = (online) => {
    console.log(online ? "we just went online" : "we are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "OnLine" : "OffLine"}</h1>
    </div>
  );
}
