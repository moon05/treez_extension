import { Divider, Grid, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import MiniDetail from "./MiniDetail";
import MiniDetailNumber from "./MiniDetailNumber";
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
</style>

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    justify: "center",
    alignItems: "center",
    height: 350,
    display: "flex",
    flexDirection: "row",
    paddingBottom: 2,
    backgroundColor: "#2d4638",
    borderRadius: 3,
    fontFamily: "'Open Sans', sans-serif",
  },
  detailHolder: {
    width: 525,
  },

  circleDimensions: {
    height: 400,
    width: 400,
    border: "6px solid white",
    // all in positive
    // first: moves down, second: right margin increases
    // third: moves up: left margin increases
    margin: "0 14px 0 10px",
  },

  divider: {
    height: 4,
    backgroundColor: "white",
    position: "relative",
    right: "6%",
    width: 550,
    borderRadius: 4,
    marginTop: -30,
  },
  outerCircle: {
    marginLeft: 10,
  },
  heading: {
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
}));

function CustomCard({
  imageURL,
  author,
  common_name,
  common_names,
  native_to,
  ann_per,
  fam_common_name,
  scientific_name,
  max_height,
  year,
}) {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <div className={classes.outerCircle}>
        <Avatar
          variant="circle"
          src={imageURL}
          alt="plant_image"
          className={classes.circleDimensions}
        >
          P
        </Avatar>
      </div>

      <Grid
        item
        container
        xs={12}
        className={classes.detailHolder}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          container
          xs={12}
          justify="flex-start"
          className={classes.heading}
        >
          <h2>{common_name}</h2>
        </Grid>
        <Grid item container xs={12} alignItems="center">
          <Divider className={classes.divider} />
        </Grid>
        <MiniDetail constantText={"Also known as"} resValue={common_names} />
        <MiniDetail constantText={"Can be found in"} resValue={native_to} />
        <MiniDetail constantText={"Duration"} resValue={ann_per} />
        <MiniDetail constantText={"Under"} resValue={fam_common_name} />
        <MiniDetail
          constantText={"Scientific Name"}
          resValue={<Typography style={{fontStyle:"italic"}}>{scientific_name}</Typography>}
        />
        <MiniDetailNumber
          constantText={"Grows up to"}
          resValue={`${
            (Math.round(max_height / 30.48 + Number.EPSILON) * 100) / 100
          } ft (${max_height} cm)`}
        />
        <MiniDetail
          constantText={"Discovered by"}
          resValue={`${author} on ${year}`}
        />
      </Grid>
    </Grid>
  );
}

export default CustomCard;