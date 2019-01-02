import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";

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
    const columns = [
      {
        Header: "User ID",
        accessor: "userId"
      },
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Content",
        accessor: "body"
      }
    ];
    return (
      <div className="App">
        <h1>React Table Test</h1>
        <ReactTable columns={columns} data={this.state.posts} />
      </div>
    );
  }
}

export default App;
