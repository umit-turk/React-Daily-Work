import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [isim, setIsim] = useState("Ümit");

  useEffect(() => {
    console.log("hi from useEffect");
  }, [isim]);

  return (
    <div className="App">
      <h1>Merhaba {isim}</h1>
      <button onClick={() => setIsim("Yasar")}>İsmi Değiştir</button>
      <MesajGoster />
    </div>
  );
}
function MesajGoster() {
  const [birinciyiGoster, setBirinciyiGoster] = useState(true);

  useEffect(() => {
    console.log("mesajgoster UseEffect");
  }, [birinciyiGoster]);

  return (
    <div>
      {birinciyiGoster ? (
        <h3>Hayatta En Hakiki Mürşit İlimdir</h3>
      ) : (
        <h3>Beni Türk Hekimlerine Emanet Ediniz</h3>
      )}
      <button onClick={() => setBirinciyiGoster(!setBirinciyiGoster)}>
        Mesajı Değiştir
      </button>
    </div>
  );
}
