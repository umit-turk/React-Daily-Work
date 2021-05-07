import './App.css';
import React, { useState, useMemo, useCallback } from "react";
import Button from './Button';

// Pure Components, shouldComponentUpdate => Class
//React.memo  useMemo, useCallback => Functional Components

// ihtiyaç duyulan bir değerin sürekli olarak hesaplanması
//yerine bir kere hesaplanıp ihtiyaç duyulduğunda
// bu değerin yeniden kullanılmasına verilen addır.


const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [tik, setTik] = useState(0);

  const duplicatedCount = useMemo( () => {
      [...new Array(10000000)].forEach((item) => { });//10 milyonluk array'in her bir item'ını dolaşan
      return count * 2; //useMemo bize sonuç değerini döndürüyor.Biz useMemoyu her çağırdığımızda bize direk sonucu dönüyor.
  }, [count]);//useMemo bir fonksiyon ve bir dependancy alıyor.useMemo dependancy değiştiği zaman hesaplama yapıyor.Count değeri değiştiği zaman bize sonuç döndür.

  const increment = useCallback(() => { //useCall back döndürülecek fonksiyonu döndürüyor, dependancy içindeki değerler değiştiği zaman fonksiyonu döndürüyor.
    setTik((prevtik)=> prevtik +1); // useCallback bir kere hesaplanıyor
  }, []);
  
return (
  <div>
    <p>{count}</p>
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      sayacı arttır
      </button>
    <p>{duplicatedCount}</p>

    <input type="text" onChange={(e) => setText(e.target.value)} />
    <p>{text}</p>
    <br />
    <p>{tik}</p>
    <Button handleClick={increment} ></Button>
  </div>
)
}

export default App

