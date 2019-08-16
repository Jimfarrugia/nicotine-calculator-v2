import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styledGridItem = {
  padding: "1.5rem"
};
const styledButton = {
  margin: "1rem 0.5rem 0 0"
};

export class Results extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  reset = e => {
    e.preventDefault();
    this.props.resetStep();
  }

  render() {
    const {
      values: { baseStrength, batchSize, targetStrength }
    } = this.props;

    const resultVolume = ((targetStrength / baseStrength) * batchSize).toFixed(2);
    const resultWeight = (resultVolume * 1.038).toFixed(2);

    return (
      <>
        <Grid item xs={6} style={styledGridItem}>
          <Typography variant="body2" align="left" paragraph>
            Your {batchSize}mL batch should contain {resultVolume}mL of your nicotine base in order to achieve your target strength of {targetStrength}mg.
          </Typography>
          <Typography variant="body2" align="left" paragraph>
            {resultVolume}mL of nicotine liquid weighs approximately {resultWeight} grams.
          </Typography>
        </Grid>
        <Grid item xs={6} style={styledGridItem}>
          <Typography variant="h4" align="left" paragraph>
            {resultVolume}mL
          </Typography>
          <Typography variant="h4" align="left" paragraph>
            {resultWeight}g
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.back}
            style={styledButton}
          >
            back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.reset}
            style={styledButton}
          >
            reset
          </Button>
        </Grid>
      </>
    );
  }
}

Results.propTypes = {
  prevStep: PropTypes.func.isRequired,
  resetStep: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};

export default Results;