import Grid from "@material-ui/core/Grid";
import CachedIcon from "@material-ui/icons/Cached";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CustomCard from "./CustomCard";
import React from "react";
import "./App.css";
const useStyles = makeStyles((theme) => ({

}));

function MidComponent({
  setFirstSlug,
  randomPlantData,
  image_URL,
}) {
  const classes = useStyles();
  function handleAnotherOne(e) {
    fetch(`http://167.99.150.45:3035/getTreeSlug`)
      .then((res) => res.json())
      .then((data) => {
        if (data === undefined) {
          //In case fetching slug fails
          setFirstSlug("juniperus-communis-var-communis");
        } else {
          setFirstSlug(data.slug);
        }
      });
  }

  return (
    <Grid
      item
      container
      xs={12}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <CustomCard
        imageURL={image_URL}
        author={
          randomPlantData.author
            ? randomPlantData.author.toLowerCase()
            : undefined
        }
        common_name={
          randomPlantData.common_name
            ? randomPlantData.common_name.toLowerCase()
            : undefined
        }
        //interesting way to check if array is empty!
        common_names={
          randomPlantData.common_names?.length
            ? randomPlantData.common_names[0].toLowerCase()
            : undefined
        }
        native_to={
          randomPlantData.distribution?.length
            ? randomPlantData.distribution.slice(0, 6).join(", ").toLowerCase()
            : undefined
        }
        ann_per={
          randomPlantData.duration
            ? randomPlantData.duration[0].toLowerCase()
            : undefined
        }
        fam_common_name={
          randomPlantData.family_common_name
            ? randomPlantData.family_common_name.toLowerCase()
            : undefined
        }
        scientific_name={
          randomPlantData.scientific_name
            ? randomPlantData.scientific_name.toLowerCase()
            : undefined
        }
        year={randomPlantData.year}
        max_height={randomPlantData.max_height}
      />
      <Grid item container justify="center" xs={5}>
        <Grid
          item
          container
          xs={4}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ marginTop: 15 }}
        >
          <Button
            onClick={handleAnotherOne}
            className={classes.refreshButton}
            size="large"
          >
            <CachedIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MidComponent;
