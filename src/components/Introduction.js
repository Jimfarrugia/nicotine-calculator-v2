import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styledGridItem = {
  padding: "1.5rem"
}

export default class Introduction extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Grid item xs={5} style={styledGridItem}>
          <img src="/molecule.svg" alt="nicotine molecule" />
        </Grid>
        <Grid item xs={7} style={styledGridItem}>
          <Typography
            variant="body1"
            align="left"
            paragraph
          >
            This is a simple tool which calculates how much liquid nicotine to
            add to your eLiquid in order to reach your desired nicotine strength.
          </Typography>
          <Button variant="contained" color="primary" onClick={this.continue}>
            begin
          </Button>
        </Grid>
      </>
    );
  }
}
