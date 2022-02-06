import React, { ChangeEvent, useState } from "react";
import { NumberOption, NumberMappingRadio } from "./NumberMappingRadio";
import { useNumberMapping } from "./logic";

function App() {
  const [word, setWord] = useState("");
  const [option, setOption] = useState<NumberOption>("A1");

  const numberMapping = useNumberMapping(word, option);
  const optionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOption(e.currentTarget.value as NumberOption);
  };

  const letters = word.split("");
  const letterValues = letters.map((char) => char.charCodeAt(0));

  return (
    <div className="container">
      <div className="row twelve columns">
        <h3>Buchstaben in Zahlen umwandeln</h3>

        <p>Kleines Werkzeug zum umwandeln von Buchstaben in Zahlen.</p>
      </div>
      <div className="row">
        <div className="twelve columns">
          <input
            onChange={(e) => setWord(e.target.value)}
            className="u-full-width"
            type="text"
            value={word}
            placeholder="Bitte ein Wort eingeben"
          />
        </div>
      </div>
      <div className="row">
        Optionen für A - Z:
        <div className="row">
          <NumberMappingRadio
            numberMapping="A0"
            onChange={optionChange}
            checked={option === "A0"}
          >
            0-25
          </NumberMappingRadio>
          <NumberMappingRadio
            numberMapping="A1"
            onChange={optionChange}
            checked={option === "A1"}
          >
            1-26
          </NumberMappingRadio>
          <NumberMappingRadio
            numberMapping="A26"
            onChange={optionChange}
            checked={option === "A26"}
          >
            26-1
          </NumberMappingRadio>
          <NumberMappingRadio
            numberMapping="A25"
            onChange={optionChange}
            checked={option === "A25"}
          >
            25-0
          </NumberMappingRadio>
        </div>
      </div>
      <table className="outputtable">
        <thead>
          <tr>
            {letters.map((c, idx) => (
              <th key={idx}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {letterValues.map((c, idx) => (
              <td key={idx}>{calcNumber(c)}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="row">
        <div className="two columns">Addition:</div>
        <div className="ten columns"></div>
      </div>
      <div className="row">
        <div className="two columns">Subtraktion:</div>
        <div className="ten columns"></div>
      </div>
      <div className="row">
        <div className="two columns">Multiplikation:</div>
        <div className="ten columns"></div>
      </div>
      <div className="row">
        <div className="two columns">Division:</div>
        <div className="ten columns"></div>
      </div>
    </div>
  );
}

export default App;
