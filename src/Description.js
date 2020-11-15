import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
<style>
  @import
  url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap")
</style>;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spFont: {
    fontFamily: "Source Code Pro",
  },
}));

function Description({
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

  const [entered, setEntered] = useState(false);
  useEffect(() => {
    setEntered(true);
  }, []);

  useEffect(() => {
      console.log("Inside Useeffect in Description");
      console.log(common_name, common_names, fam_common_name, scientific_name, author, ann_per, native_to, max_height)
  }, [entered]);


  
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      <Grid
        item
        container
        xs={10}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={7}>
          <Typography className={classes.spFont} variant="h5">
            {common_name}
          </Typography>
          <Divider variant="fullWidth" />
        </Grid>
        <Divider variant="middle" />
        <Grid item xs={7}>
          <Typography className={classes.spFont}>
            also known as: <span style={{fontWeight: "bold"}}>{common_names}</span>
          </Typography>
        </Grid>
        <Grid item container xs={7} justify="flex-start">
          <Typography className={classes.spFont}>
            can be found in: {native_to}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.spFont}>
            duration: {ann_per}
          </Typography>
        </Grid>

        <Grid item xs={7}>
          <Typography className={classes.spFont}>
            under: {fam_common_name}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.spFont} style={{fontStyle: "italic"}}>
            scientific name: {scientific_name}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.spFont}>
            grows up to: {Math.round((((max_height*1.0)/30.48)+Number.EPSILON)*100)/100} ft ({max_height} cm )
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.spFont}>
            discovered by: {author} on {year}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}


export default Description;
