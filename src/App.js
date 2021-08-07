import React, { useState } from "react";

function App() {
  const [display, setDisplay] = useState("Please press button");

  function updateDisplay(token) {
    if (display == "Please press button") {
      setDisplay(token);
    } else {
      setDisplay(display + token);
    }
  }

  return (
    <div className="App bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-5 m-10 bg-gradient-to-t">
      <h1 className="text-2xl font-bold">Calculator</h1>
      <div className="bg-gray-300 p-2 my-2">{display}</div>
      <div className="mb-1">
        <button
          onClick={() => updateDisplay("7")}
          className="p-2 bg-yellow-200 w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          7
        </button>
        <button
          onClick={() => updateDisplay("8")}
          className="p-2 bg-yellow-200 w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          8
        </button>
        <button
          onClick={() => updateDisplay("9")}
          className="p-2 bg-yellow-200 w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          9
        </button>
        <button
          onClick={() => updateDisplay("/")}
          className="p-2 bg-blue-300 font-bold w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          ÷
        </button>
      </div>
      <div className="mb-1">
        <button
          onClick={() => updateDisplay("4")}
          className="p-2 bg-yellow-200 w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          4
        </button>
        <button
          onClick={() => updateDisplay("5")}
          className="p-2 bg-yellow-200 w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          5
        </button>
        <button
          onClick={() => updateDisplay("6")}
          className="p-2 bg-yellow-200 w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          6
        </button>
        <button
          onClick={() => updateDisplay("*")}
          className="p-2 bg-blue-300 font-bold w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          ×
        </button>
      </div>
      <div className="mb-1">
        <button
          onClick={() => updateDisplay("1")}
          className="p-2 bg-yellow-200 w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          1
        </button>
        <button
          onClick={() => updateDisplay("2")}
          className="p-2 bg-yellow-200 w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          2
        </button>
        <button
          onClick={() => updateDisplay("3")}
          className="p-2 bg-yellow-200 w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          3
        </button>
        <button
          onClick={() => updateDisplay("-")}
          className="p-2 bg-blue-300 font-bold w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          -
        </button>
      </div>
      <div className="mb-1">
        <button
          onClick={() => updateDisplay("0")}
          className="p-2 bg-yellow-200 w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          0
        </button>
        <button
          onClick={() => setDisplay("Please press button")}
          className="p-2 bg-red-500 w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md text-white"
        >
          C
        </button>
        <button className="p-2 bg-green-200 w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md">
          =
        </button>
        <button
          onClick={() => updateDisplay("+")}
          className="p-2 bg-blue-300 font-bold w-20 rounded-xl border-2 border-gray-500 mx-3 shadow-md"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
