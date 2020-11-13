
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
import Main from "./Main"

const useStyles = makeStyles((theme) => ({
  root: {
		flexGrow: 1,
		backgroundColor: "#02C39A"
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
