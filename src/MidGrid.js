import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Description from "./Description";
import ImageHolder from "./ImageHolder";
import "./App.css";
const useStyles = makeStyles((theme) => ({

  midGrid: {
    marginTop: 50,
  }

}));

function MidGrid() {
  const classes = useStyles();

  const [entered, setEntered] = useState(false);
  useEffect(() => {
    setEntered(true);
  }, []);
  const [randomPlantData, setRandomPlantData] = useState({});
  const [image_URL, setImage_URL] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/getCountrySpecificPlant")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRandomPlantData(data);
        setImage_URL(data.image_url);
      });
  }, []);

  useEffect(() => {
    console.log(randomPlantData);
    console.log(image_URL);
  }, [randomPlantData, image_URL]);

  return (
    <Grid
      item
      container
      xs={12}
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.midGrid}
    >
      <Grid item container xs={12} direction="row" justify="center">
        <Grid
          item
          container
          xs={4}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ backgroundColor: "red" }}
        >
          <Grid item xs={6} direction="row" justify="flex-end">
            <ImageHolder imageURL={image_URL} />
          </Grid>
        </Grid>
        <Grid item container xs={6}>
          <Description
            author={randomPlantData.author}
            common_name={randomPlantData.common_name}
            common_names={randomPlantData.common_names}
            native_to={randomPlantData.distribution}
            ann_per={randomPlantData.duration}
            fam_common_name={randomPlantData.family_common_name}
            scientific_name={randomPlantData.scientific_name}
            year={randomPlantData.year}
            max_height={randomPlantData.max_height}
          />
        </Grid>
      </Grid>
      <Grid item container justify="center" xs={5}>
        <Grid
          item
          xs={4}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ marginTop: 15, backgroundColor: "red" }}
        >
          <Button> Try Another One!</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MidGrid;
