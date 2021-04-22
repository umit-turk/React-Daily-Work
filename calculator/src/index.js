import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  /* eslint no-eval: 0 */

  const [data, setData] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setData(data + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="wrapper">
      {" "}
      <div className="show-input">{data}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        {/* clear button */}

        <button onClick={() => setData(data.substr(0, data.length - 1))}>
          Clear
        </button>

        {/* clear all */}
        <button onClick={() => setData("")} value="">
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {/* add button */}
        <button onClick={(e) => setData(data + e.target.value)} value="+">
          +
        </button>

        {/* minus btn */}
        <button onClick={(e) => setData(data + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        <button onClick={(e) => setData(data + e.target.value)} value="*">
          {" "}
          *
        </button>

        <button onClick={(e) => setData(data + e.target.value)} value="/">
          {" "}
          /
        </button>
        {/* "=" btn */}
        <button
          onClick={(e) => {
            try {
              setData(
                String(eval(data)).length > 3 &&
                  String(eval(data)).includes(".")
                  ? String(eval(data).toFixed(4))
                  : String(eval(data))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
