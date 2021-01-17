import React from "react";

function Zipsearch(props) {
  const getInfoZip = (event) => {
    event.preventDefault();

    fetch(`http://ctp-zip-api.herokuapp.com/zip/${event.target.zip.value}`)
      .then((response) => response.json())
      .then((json) => {
        let arr = [];
        for (let j = 0; j < json.length; j++) {
          arr.push([
            json[j]["City"],
            json[j]["State"],
            json[j]["Lat"] + json[j]["Long"],
            json[j]["EstimatedPopulation"],
            json[j]["TotalWages"],
          ]);
        }
        props.getZipData(arr);
      });
  };

  return (
    <div>
      <form className="search-form" onSubmit={(e) => getInfoZip(e)}>
        <input name="zip" id="text-bar" className="search-bar" type="text" />
        <input id="submit" type="submit" />
      </form>
    </div>
  );
}

export default Zipsearch;
