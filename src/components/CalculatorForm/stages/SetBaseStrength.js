import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const styledGridItem = {
  padding: "1.5rem"
}
const styledButton = {
  margin: "1rem 0.5rem 0 0"
}
const styledTextField = {
  margin: "0.5rem 0 0 0"
}

export class SetBaseStrength extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Grid item xs={6} style={styledGridItem}>
          <Typography
            variant="body2"
            align="left"
            paragraph
          >
            <strong>Nicotine Base Strength</strong> refers to the high-strength nicotine base that you&apos;ll be mixing into your eliquid.
          </Typography>
          <Typography
            variant="body2"
            align="left"
            paragraph
          >
            Enter the strength of your nicotine liquid in mg per mL.
          </Typography>
        </Grid>
        <Grid item xs={6} style={styledGridItem}>
          <TextField
            style={styledTextField}
            label='Nicotine Base Strength'
            onChange={handleChange("baseStrength")}
            type="number"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: <InputAdornment position="end">mg</InputAdornment>,
            }}
            defaultValue={values.baseStrength}
            fullWidth
          />
          <Button variant="contained" color="secondary" onClick={this.back} style={styledButton}>
            back
          </Button>
          <Button variant="contained" color="primary" onClick={this.continue} style={styledButton}>
            continue
          </Button>
        </Grid>
      </>
    );
  }
}

SetBaseStrength.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
}

export default SetBaseStrength;