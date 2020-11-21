import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
import Footer from "./Footer";
import MidGrid from "./MidGrid";
import TopGrid from "./TopGrid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

function Main({ isFeedbackFormOpen }) {
  const classes = useStyles();

  return (
    <Grid container>
      <MidGrid />
    </Grid>
  );
}

export default Main;
