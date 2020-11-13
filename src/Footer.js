import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
const useStyles = makeStyles((theme) => ({
  footerGrid: {
    marginTop: 50,
  },
  
}));

function Footer() {
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
        xs={10}
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Button> Leave Feedback! </Button>
      </Grid>
    </Grid>
  );
}

export default Footer;
