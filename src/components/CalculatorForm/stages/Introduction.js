import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  GridItem: {
    padding: "1.5rem"
  },
});

export class Introduction extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid item xs={5} className={classes.GridItem}>
          <img src="/molecule.svg" alt="nicotine molecule" />
        </Grid>
        <Grid item xs={7} className={classes.GridItem}>
          <Typography variant="body1" align="left" paragraph>
            Easy Nicotine Calculator is a simple tool which calculates how much liquid nicotine to
            add to your eLiquid in order to reach your desired nicotine
            strength.
          </Typography>
          <Button variant="contained" color="primary" onClick={this.continue}>
            begin
          </Button>
        </Grid>
      </>
    );
  }
}

Introduction.propTypes = {
  classes: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired
};

export default withStyles(styles)(Introduction);
