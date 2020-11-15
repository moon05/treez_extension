import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import "./App.css";
const useStyles = makeStyles((theme) => ({
  entireGrid: {
    marginBottom: 3,
    marginRight: 20,
  },
  formPaper: {
    height: 100,
    width: 250,
    backgroundColor: "#BFFF00",
  },

  textfield: {
    paddingLeft: 10,
  },

  submitButton: {
    marginTop: 10,
    backgroundColor: "#50C878",
    "&:hover": {
      backgroundColor: "#013220",
    },
  },
}));

function FeedbackForm() {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      spacing={2}
      xs={12}
      justify="flex-end"
      className={classes.entireGrid}
    >
      <Paper className={classes.formPaper}>
        <Grid
          item
          container
          xs={11}
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.textfield}
        >
          <TextField label="Tell us what you think!" fullWidth></TextField>
        </Grid>
        <Grid item container xs={10} direction="row" justify="flex-end">
          <Button className={classes.submitButton}>
            {" "}
            <Typography style={{color: "white"}}>Submit </Typography>
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default FeedbackForm;
