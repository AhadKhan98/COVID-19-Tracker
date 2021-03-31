import React from "react";

import { Card, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Covid App</h1>
        <Card data={this.state.data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
