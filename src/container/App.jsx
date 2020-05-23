import React, { Component } from "react";

import "./App.css";
import Cardlist from "../Components/Cardlist";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <h1 className="main-heading">ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <hr />
        <Scroll>
          <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
