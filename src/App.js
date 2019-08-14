import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import StepForm from "./components/StepForm";

const useStyles = makeStyles(theme => ({
  pageTitle: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    lineHeight: 1.5
  }
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
        <Paper>
          <StepForm />
        </Paper>
      </Container>
    </div >
  );
}

export default App;
