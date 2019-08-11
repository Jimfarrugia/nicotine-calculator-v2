import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}));

export function HeroBanner() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* Hero Unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Nicotine Calculator
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            This is a simple tool which calculates how much liquid nicotine to
            add to your eLiquid in order to reach your target nicotine strength.
          </Typography>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default HeroBanner;
