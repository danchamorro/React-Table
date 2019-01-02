import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res.data);
      this.setState({ posts: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React Table</h1>
      </div>
    );
  }
}

export default App;
