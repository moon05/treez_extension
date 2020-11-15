
import { makeStyles } from "@material-ui/core/styles";
import React, {useEffect} from "react";
import "./App.css";
import Main from "./Main"


const useStyles = makeStyles((theme) => ({
  root: {
		flexGrow: 1,
		backgroundColor: "#ffffff",
		overflow: "hidden",
  },
}));

function App() {
	const classes = useStyles()

  return (

   <div className={classes.root}>
      <Main/>
		</div>
  );
}

export default App;
