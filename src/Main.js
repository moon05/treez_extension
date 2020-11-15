import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
import TopGrid from "./TopGrid";
import MidGrid from "./MidGrid"
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

function Main({isFeedbackFormOpen}) {
  const classes = useStyles();
  


  return (
    <Grid
      container
      spacing={2}
      className={classes.root}
    >
      <TopGrid />
      <MidGrid />
      
      <Footer isFeedbackFormOpen={isFeedbackFormOpen}/>
    </Grid>
  );
}

export default Main;
