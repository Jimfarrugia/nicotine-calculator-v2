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

export class SetBatchSize extends Component {
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
            <strong>Batch size</strong> refers to the amount of eLiquid (in mL) you will be mixing. If you are mixing a full bottle, enter the bottle size.
          </Typography>
          <Typography variant="body2" align="left" paragraph>
            Enter your batch size in mL.
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.GridItem}>
          <TextField
            className={classes.TextField}
            label="Batch Size"
            onChange={handleChange("batchSize")}
            type="number"
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">mL</InputAdornment>
            }}
            defaultValue={values.batchSize}
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

SetBatchSize.propTypes = {
  classes: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};

export default withStyles(styles)(SetBatchSize);
