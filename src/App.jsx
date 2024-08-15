import { useEffect, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const calculate = () => {
    setInputValue(eval(inputValue));
  };

  const clear = () => {
    setInputValue("");
  };
  return (
    <>
      <h1>Calculator</h1>
      <div className="display">
        <input
          type="text"
          value={inputValue}
          className="input-value"
          readOnly
        />
      </div>
      <div className="button-container">
        <span className="buttons orange-bg" onClick={() => clear()}>
          AC
        </span>
        <span className="buttons orange-bg" onClick={() => display("+")}>
          +
        </span>
        <span className="buttons orange-bg" onClick={() => display("-")}>
          -
        </span>
        <span className="buttons orange-bg" onClick={() => display("/")}>
          /
        </span>
        <span className="buttons orange-bg" onClick={() => display("*")}>
          *
        </span>
        <span className="buttons" onClick={() => display("1")}>
          1
        </span>
        <span className="buttons" onClick={() => display("2")}>
          2
        </span>
        <span className="buttons" onClick={() => display("3")}>
          3
        </span>
        <span className="buttons" onClick={() => display("4")}>
          4
        </span>
        <span className="buttons" onClick={() => display("5")}>
          5
        </span>
        <span className="buttons" onClick={() => display("6")}>
          6
        </span>
        <span className="buttons" onClick={() => display("7")}>
          7
        </span>
        <span className="buttons" onClick={() => display("8")}>
          8
        </span>
        <span className="buttons" onClick={() => display("9")}>
          9
        </span>
        <span className="buttons" onClick={() => display("0")}>
          0
        </span>
        <span className="buttons orange-bg" onClick={() => calculate()}>
          =
        </span>
      </div>
    </>
  );
}

export default App;
