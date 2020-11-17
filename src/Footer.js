import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
const useStyles = makeStyles((theme) => ({
  footerGrid: {
    marginTop: 5,
  },
  feedbackGrid: {},
}));

function Footer({ isFeedbackFormOpen }) {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      xs={12}
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.footerGrid}
    >
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="flex-end"
        alignItems="center"
      ></Grid>
    </Grid>
  );
}

export default Footer;
