import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import MoleculeImg from "./MoleculeImg";

export class CalculatorForm extends Component {
  state = {
    step: 0,
    baseStrength: 100,
    targetStrength: 4,
    batchSize: 30
  }
  render() {
    const { step } = this.state;
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <Container maxWidth="sm" align="center">
              <MoleculeImg />
              <Button variant="contained" color="primary" size="large" style={{ marginTop: "2.5rem" }}>Begin</Button>
            </Container>
          </React.Fragment>
        );
      default:
        return (
          <div>
            *shrug*
          </div>
        );
    }
  }
}

export default CalculatorForm
