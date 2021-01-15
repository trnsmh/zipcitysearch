import React from "react";

//Citysearch Component function has (properties = > event)
function Citysearch(props) {
  //getInfoCity called onSubmit
  const getInfoCity = (event) => {
    event.preventDefault(); //stops preload on before fetch returns !!!

    

    fetch(
      `http://ctp-zip-api.herokuapp.com/City/${event.target.city.value.toUpperCase()}`
    )
      .then((response) => response.json())
      .then((json) => {
        props.getCityData(json); //promise returns a property(prop) to be used in child (App.js)
      });
  };

  return (
    <div>
      <form className="search-form" onSubmit={(e) => getInfoCity(e)}>
        <input name="city" id="text-bar" className="search-bar" type="text" />
        <input id="submit" type="submit" />
      </form>
    </div>
  );
}

export default Citysearch;
