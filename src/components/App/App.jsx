import React from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");
// Class Based Component
class App extends React.Component {
  state = {
    headerText: ` The Oracle!`,
    headerExpanded: true,
    suggestedNames: [],
  };

  // this is called whenevr something is typed
  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText,
      suggestedNames: inputText ? name(inputText) : [],
    });
  };

  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

// Functional Component
// function App (){
//     return <h1> This is my functional component </h1>
// }

export default App;
