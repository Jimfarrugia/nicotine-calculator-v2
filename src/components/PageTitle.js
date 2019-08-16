import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  pageTitle: {
    padding: theme.spacing(2),
    lineHeight: 1.5
  }
}));

export default function PageTitle() {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.pageTitle}
        component="h1"
        variant="h3"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Easy Nicotine Calculator
      </Typography>
    </>
  );
}
