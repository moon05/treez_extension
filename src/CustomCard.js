import { Divider, Grid, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import MiniDetail from "./MiniDetail";
import MiniDetailNumber from "./MiniDetailNumber";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
</style>;

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
    height: 420,
    width: 420,
    backgroundColor: "white",
    border: "7px solid white",
    // all in positive
    // first: moves down, second: right margin increases
    // third: moves up: left margin increases
    margin: "0 14px 0 10px",
  },

  dividerBig: {
    height: 4,
    backgroundColor: "white",
    position: "relative",
    right: "4.8%",
    width: 535,
    borderRadius: 4,
    marginTop: -30,
  },

  dividerSmall: {
    height: 4,
    backgroundColor: "white",
    position: "relative",
    right: "4%",
    width: 535,
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
          {imageURL ? "P" : "Sorry currently this image is unavailable!"}
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
          <Divider className={ (common_names && fam_common_name && ann_per) ? classes.dividerBig : classes.dividerSmall} />
        </Grid>
        {common_names ? (
          <MiniDetail constantText={"Also known as"} resValue={common_names} />
        ) : null}
        {native_to ? (
          <MiniDetail constantText={"Can be found in"} resValue={native_to} />
        ) : null}
        {ann_per ? (
          <MiniDetail constantText={"Duration"} resValue={ann_per} />
        ) : null}

        {fam_common_name ? (
          <MiniDetail constantText={"Under"} resValue={fam_common_name} />
        ) : null}
        <MiniDetail
          constantText={"Scientific Name"}
          resValue={
            <Typography style={{ fontStyle: "italic", fontWeight: "bold", fontSize: "1.12em"}}>
              {scientific_name}
            </Typography>
          }
        />
        {max_height ? (
          <MiniDetailNumber
            constantText={"Grows up to"}
            resValue={`${
              (Math.round(max_height / 30.48 + Number.EPSILON) * 100) / 100
            } ft (${max_height} cm)`}
          />
        ) : null}
        <MiniDetail
          constantText={"Discovered by"}
          resValue={`${author} on ${year}`}
        />
      </Grid>
    </Grid>
  );
}

export default CustomCard;
