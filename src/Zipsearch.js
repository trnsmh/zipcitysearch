import React from "react";

function Zipsearch(props) {
  const getInfoZip = (event) => {
    event.preventDefault();

    fetch(`http://ctp-zip-api.herokuapp.com/zip/${event.target.zip.value}`)
      .then((response) => response.json())
      .then((json) => {
        
         console.log(json.length)
        let arr =[]
        for(let j=0; j<json.length;j++){
 
          arr.push(Object.values(json[j]))
        }
        // for(let i=0;i<json.length;i++){
          props.getZipData(arr);
          
          //}
        
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

// json.forEach(element =>{console.log(element["City"])})

// arr.push({
//   "City": json[0]["City"]
// })