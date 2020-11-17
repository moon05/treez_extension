import { ClickAwayListener } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import "./App.css";
import FeedbackForm from "./FeedbackForm";
const useStyles = makeStyles((theme) => ({
  footerGrid: {
    marginTop: 5,
  },
  feedbackGrid: {},
}));

function FooterWithFeedback({ isFeedbackFormOpen }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  function feedBackStateChange(e) {
    setOpen(!open);
  }

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
        xs={12}
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <Grid
            container
            item
            xs={2}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.feedbackGrid}
          >
            {open ? (
              <FeedbackForm />
            ) : (
              <Grid
                container
                spacing={2}
                item
                xs={12}
                justify="flex-end"
                style={{ marginBottom: 3, height: 100, width: 250 }}
              ></Grid>
            )}

            <Button
              onClick={feedBackStateChange}
              style={{ textTransform: "none" }}
            >
              Leave Feedback!
            </Button>
          </Grid>
        </ClickAwayListener>
      </Grid>
    </Grid>
  );
}

export default FooterWithFeedback;
