import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorScreen from "./ErrorScreen";
import header from "./header.js";
import footer from "./footer.js";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Context from "./Context.js";
import LandingPage from "./landing-page.js";
import InputPageMain from "./Input-Page-Main.js";

const URL = "http://localhost:8000/";

class App extends React.Component {
  state = {
    newScriptName: "placeholder",
    newScriptId: 1,
  };

  handleDisplayScript = () => {
    fetch(`${URL}hello`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(JSON.stringify(data));
      });
  };

  renderMainRoutes() {
    const contextValue = {
      context: true,
    };

    return (
      <Context.Provider value={contextValue}>
        <Route
          exact
          path="/"
          render={() => {
            return <LandingPage />;
          }}
        />
        <Route
          path="/input"
          render={(rProps) => {
            return (
              <InputPageMain
                {...rProps}
                scriptTitle={this.state.newScriptTitle}
                scriptId={this.state.newScriptId}
              />
            );
          }}
        />
      </Context.Provider>
    );
  }

  render() {
    return (
      <ErrorScreen>
        <BrowserRouter>
          <header className="header">{header()}</header>
          <main>
            {this.renderMainRoutes()}
            <div className="App">
              <button onClick={this.handleDisplayScript}> test </button>
            </div>
          </main>
          <footer>{footer()}</footer>
        </BrowserRouter>
      </ErrorScreen>
    );
  }
}

export default App;