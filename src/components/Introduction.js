import React from "react";
import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  GridItem: {
    padding: "1.5rem"
  }
});

export default function Introduction() {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}
