import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = () => ({
  GridItem: {
    padding: "1.5rem"
  },
  Button: {
    margin: "1rem 0.5rem 0 0"
  },
  TextField: {
    margin: "0.5rem 0 0 0"
  }
});

export class SetTargetStrength extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, classes } = this.props;
    return (
      <>
        <Grid item xs={6} className={classes.GridItem}>
          <Typography variant="body2" align="left" paragraph>
            <strong>Target Strength</strong> refers to the nicotine strength (in mg) that you
            would like your eLiquid to be.
          </Typography>
          <Typography variant="body2" align="left" paragraph>
            Enter your target nicotine strength in mg per mL.
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.GridItem}>
          <TextField
            className={classes.TextField}
            label="Target Strength"
            onChange={handleChange("targetStrength")}
            type="number"
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">mg</InputAdornment>
            }}
            defaultValue={values.targetStrength}
            fullWidth
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.back}
            className={classes.Button}
          >
            back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.continue}
            className={classes.Button}
          >
            continue
          </Button>
        </Grid>
      </>
    );
  }
}

SetTargetStrength.propTypes = {
  classes: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};

export default withStyles(styles)(SetTargetStrength);
