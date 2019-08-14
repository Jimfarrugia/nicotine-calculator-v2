import React from 'react';
import PropTypes from 'prop-types'
import { Grid, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {},
  GridItem: {
    padding: "1.5rem"
  }
};

function StepForm(props) {
  const { classes, step } = props;
  switch (step) {
    case 0:
      return (
        <>
          <Grid container xs={12}>
            <Grid item xs={5} className={classes.GridItem}>
              <img src="/molecule.svg" alt="nicotine molecule" />
            </Grid>
            <Grid item xs={7} className={classes.GridItem}>
              <Typography
                variant="body1"
                align="left"
                paragraph
              >
                This is a simple tool which calculates how much liquid nicotine to
                add to your eLiquid in order to reach your target nicotine strength.
              </Typography>
              <Button variant="contained" color="primary">
                begin
              </Button>
            </Grid>
          </Grid>
        </>
      )
    default:
      return <p>Step: {step}</p>
  }
}

StepForm.propTypes = {
  classes: PropTypes.object.isRequired,
  step: PropTypes.number.isRequired
};

export default withStyles(styles)(StepForm);