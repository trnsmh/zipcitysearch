import React from "react";
import Zipsearch from "./Zipsearch";
import Citysearch from "./Citysearch";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = { dataList: [], dataList2: [] };
    this.changeData = this.changeDataList.bind(this);
    this.exportData = this.changeDataList2.bind(this);
  }

  changeDataList(value) {
    this.setState({ dataList: value });
  }

  changeDataList2(v) {
    this.setState({ dataList2: v });
  }

  render() {
    let displayArray = [];
    if (this.state.dataList.length >= 1) {
      for (let i = 0; i < this.state.dataList.length; i++) {
        displayArray.push(<div>{this.state.dataList[i]}</div>);
      }
    } else {
      displayArray = <div></div>;
    }

    let displayArray2;
    if (this.state.dataList2.length >= 1) {
      displayArray2 = [];
      for (let i = 0; i < this.state.dataList2.length; i++) {
        for (let j = 0; j < 5; j++) {
          displayArray2.push(<div>{this.state.dataList2[i][j]}</div>);
        }
      }
    } else {
      displayArray2 = <div></div>;
    }

    return (
      <div className="App">
        <div className = "headCZ">
          <h1 id="head"> City-to-ZipSearch</h1>
        </div>
        <div className= "array">
          <Citysearch getCityData={this.changeData} />
            {displayArray}
        </div>
        <div>
          <h1 id="head"> Zip-to-CitySearch</h1>
        </div>
        <div className= "array">
          <Zipsearch getZipData={this.exportData} />
          {displayArray2}
        </div>
      </div>
    );
  }
}
export default App;
