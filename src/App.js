import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
import Main from "./Main";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },

  
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Main />
    </div>
  );
}

export default App;
