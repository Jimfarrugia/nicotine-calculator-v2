import React, { Component } from 'react';
import Introduction from './stages/Introduction';
import SetBaseStrength from './stages/SetBaseStrength';
import SetTargetStrength from './stages/SetTargetStrength';
import SetBatchSize from './stages/SetBatchSize';

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
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

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
          />
        )
      case 1:
        return (
          <SetBaseStrength
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <SetTargetStrength
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <SetBatchSize
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      default:
        return <p>Step: {step}</p>
    }
  }
}

export default CalculatorForm;