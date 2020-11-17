import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    lineHeight: 1.7,
    fontSize: "1.12em"

}
}));

function MiniDetail({ constantText, resValue }) {
  const classes = useStyles();

  return (

    <Grid item container xs={12} className={classes.text}>
      <Grid item container xs={3} justify="flex-start">
        {constantText}
      </Grid>
      <Grid item container xs={1} justify="flex-start" style={{marginLeft:5}}>
        :
      </Grid>
      <Grid item container xs={6} justify="flex-start" style={{marginLeft:-25}}>
        {resValue}
      </Grid>
    </Grid>
  );
}

export default MiniDetail;
