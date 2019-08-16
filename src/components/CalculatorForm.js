import React, { Component } from 'react';
import Introduction from './Introduction';

export class CalculatorForm extends Component {
  state = {
    step: 0,
    baseStrength: 100,
    targetStrength: 6,
    batchSize: 30
  }

  // next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // handle field change

  render() {
    const {
      step,
      baseStrength,
      targetStrength,
      batchSize
    } = this.state;

    const values = {
      baseStrength,
      targetStrength,
      batchSize
    }

    switch (step) {
      case 0:
        return (
          <Introduction
            nextStep={this.nextStep}
            values={values}
          />
        )
      default:
        return <p>Step: {step}</p>
    }
  }
}

export default CalculatorForm;