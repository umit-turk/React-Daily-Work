import React, { useState } from "react";
import { connect } from "react-redux";
import { listeyeEkle, isaretle, temizle } from "./actions";
import "./styles.css";

const App = (props) => {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          placeholer="listeye ekle"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText("");
            props.listeyeEkle(text);
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {props.liste.map((item) => (
          <div
            onClick={() => props.isaretle(item.id)}
            key={item.id}
            className={item.tamamlandi ? "yapildi" : ""}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button
        className="temizle"
        onClick={() => {
          props.temizle();
        }}
      >
        Tamamlananları Temizle
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    liste: state.liste
  };
};

export default connect(mapStateToProps, { listeyeEkle, isaretle, temizle })(
  App
); /* ilk connect fonksiyonu bir fonk döndürüyor ve döndürdüğü fonk bizim componenti parametre alıyor. */
