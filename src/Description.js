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

  const [native_places, setNativePlaces] = useState("");
  const [fam_com, setFamCom] = useState("");
  const [ann, setAnn] = useState("");
  const [main_com_name, setMainComName] = useState("");
  const [com_names, setComNames] = useState("");
  const [sci_name, setSciName] = useState("");
  const [auth_name, setAuthName] = useState("");
  useEffect(() => {
      console.log("Inside Useeffect");
      console.log(common_name, common_names, fam_common_name, scientific_name, author, ann_per, native_to, max_height)
    if (native_to !== undefined) {
      setNativePlaces(native_to.join(", ").toLowerCase());
    }
    if (fam_common_name !== undefined) {
        setFamCom(fam_common_name.toLowerCase());
      }
      if (ann_per !== undefined) {
        console.log(ann_per[0].toLowerCase())
        setAnn(ann_per[0].toLowerCase());
      }
      if (common_name !== undefined) {
        setMainComName(common_name.toLowerCase());
      }
      if (common_names !== undefined) {
        setComNames(common_names[0].toLowerCase());
      }
      if (scientific_name !== undefined) {
        setSciName(scientific_name.toLowerCase());
      }
      if (author !== undefined) {
        setAuthName(author.toLowerCase());
      }

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
            {main_com_name}
          </Typography>
          <Divider variant="fullWidth" />
        </Grid>
        <Divider variant="middle" />
        <Grid item xs={7}>
          <Typography className={classes.spFont}>
            also known as <span style={{fontWeight: "bold"}}>{com_names}</span>
          </Typography>
        </Grid>
        <Grid item container xs={7} justify="flex-start">
          <Typography className={classes.spFont}>
            can be found in {native_places}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.spFont}>
            {ann}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.spFont}>
            under {fam_com}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.spFont} style={{fontStyle: "italic"}}>
            {sci_name}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.spFont}>
            grows up to {max_height} cm or {(max_height*1.0)/30.48} ft
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.spFont}>
            discovered by {auth_name} on {year}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Description;
