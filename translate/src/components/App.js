import React from "react";
import UserCrerate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
class App extends React.Component {

  state = {language : 'english'};
  onLanguageChange = language => {
    this.setState({language});
  }
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag bd"
            onClick={() => this.onLanguageChange("bangla")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language} >
          <UserCrerate />
        </LanguageContext.Provider>
        <LanguageContext.Provider value="english" >
          <UserCrerate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
