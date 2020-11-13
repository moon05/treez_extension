import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import "./App.css";
import TopGrid from "./TopGrid";
import MidGrid from "./MidGrid"
import Footer from "./Footer";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F0F3BD"
  },

}));

function Main() {
  const classes = useStyles();

  const [entered, setEntered] = useState(false);
  useEffect(() => {
    setEntered(true);
  }, []);

  return (
    <Grid
      container
      spacing={2}
      className={classes.root}
    >
      <TopGrid />
      <MidGrid />
      <Footer />
    </Grid>
  );
}

export default Main;
