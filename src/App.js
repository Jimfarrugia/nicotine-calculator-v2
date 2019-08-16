import React from "react";
import Container from "@material-ui/core/Container";
import { Paper, Grid } from "@material-ui/core";
import PageTitle from "./components/PageTitle";
import CalculatorForm from "./components/CalculatorForm/";

function App() {
  return (
    <div className="App">
      <PageTitle />
      <Container maxWidth="sm">
        <Paper>
          <Grid container xs={12}>
            <CalculatorForm />
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
