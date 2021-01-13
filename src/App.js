import React, { useEffect, useState } from "react";
import City from "./City";
import "./App.css";

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    let zipCode = document.getElementById("textBar").value;
    const response = await fetch(
      `http://ctp-zip-api.herokuapp.com/zip/${zipCode}`
    );
    const data = await response.json();
    console.log(data);
    setInfo(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input id="textBar" className="search-bar" type="text" />
        <button
          id="submit"
          type="submit"
          onClick={() => {
            getInfo();
          }}>Submit</button>
      </form>
    </div>
  );
}
export default App;
