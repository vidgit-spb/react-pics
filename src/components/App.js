import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit = (term) => {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID D8q0gNwjBbqfQekyR4gBbJH-geW70jOxTKI9cslraoU",
      },
    });
    console.log('FUNCTION INVOKED')
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit2={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
