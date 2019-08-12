import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  pageTitle: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    lineHeight: 1.5
  },
  gridItem: {
    padding: theme.spacing(2)
  },
  button: {}
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography
        className={classes.pageTitle}
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Easy Nicotine Calculator
      </Typography>
      <Container maxWidth="sm">
        <Paper className={classes.stepFormContainer}>
          <Grid container xs={12}>
            <Grid item xs={5} className={classes.gridItem}>
              <img className={classes.moleculeImg} src="molecule.svg" alt="nicotine molecule" />
            </Grid>
            <Grid item xs={7} className={classes.gridItem}>
              <Typography
                variant="body1"
                align="left"
                paragraph
              >
                This is a simple tool which calculates how much liquid nicotine to
                add to your eLiquid in order to reach your target nicotine strength.
              </Typography>
              <Button variant="contained" color="primary" className={classes.button}>
                let&apos;s go
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div >
  );
}

export default App;
