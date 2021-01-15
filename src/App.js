import React from "react";
import Zipsearch from "./Zipsearch";
import Citysearch from "./Citysearch";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = { dataList: []};
    this.changeData = this.changeDataList.bind(this);
  }

  changeDataList(value) {

    this.setState({dataList: value});

    // console.log(value);
  }

  render() {

    let displayArray;
    if(this.state.dataList.length >= 1){
      displayArray=[];
      for(let i =0; i<this.state.dataList.length; i++){

        displayArray.push(<div>
          {this.state.dataList[i]}
        </div>)
      }
    }
    else{
      displayArray = <div></div>
    }


      let displayArray2;
    if(this.state.dataList.length >= 1){
      displayArray2 = [];
      for(let i=0 ;i< this.state.dataList.length; i++){
        displayArray2.push(<div>
          {this.state.dataList[i]}
        </div>)
      }
    }
    else{
      displayArray2 = <div></div>
    }



    return (
      <div className="App">
        <div>
          <h1 id="head"> Zip-to-CitySearch</h1>
        </div>
        <Zipsearch getZipData={this.changeData} />
         {displayArray2}
        <div>
          <h1 id="head"> City-to-ZipSearch</h1>
        </div>
        <Citysearch getCityData={this.changeData} />
        {displayArray}
      </div>
    );
  }
}        
export default App;
