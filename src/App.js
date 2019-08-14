import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import PageTitle from "./components/PageTitle";
import StepForm from "./components/StepForm";

class App extends Component {
  state = {
    step: 0
  };

  render() {
    return (
      <div className="App">
        <PageTitle />
        <Container maxWidth="sm">
          <Paper>
            <StepForm step={this.state.step} />
          </Paper>
        </Container>
      </div>
    );
  }
}

export default App;
