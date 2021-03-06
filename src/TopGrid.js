import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
const useStyles = makeStyles((theme) => ({
  topGrid: {
    marginTop: 70,
  },
}));

function TopGrid() {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      xs={12}
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.topGrid}
    >
    </Grid>
  );
}

export default TopGrid;
