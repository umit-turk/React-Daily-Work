import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  //ComponentDidMount ve ComponentDidUpdate kullanımına benzer bir kullanım sunar.
  useEffect(() => {
    //Tarayıcının başlık bölümünü değiştirmemizi sağlar.
    document.title = `You clicked ${count} times`;
  });
  return (
    <div className="App">
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}
