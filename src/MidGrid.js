import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import "./App.css";

import MidComponent from "./MidComponent";

const useStyles = makeStyles((theme) => ({
  midGrid: {
    marginTop: 100,
  },
  refreshButton: {
    borderRadius: 400,
  },
}));

function NewMidGrid() {
  const classes = useStyles();

  const [entered, setEntered] = useState(false);
  useEffect(() => {
    setEntered(true);
  }, []);
  //SLUG SPECIFIC STUFF
  const [firstSlug, setFirstSlug] = useState([]);

  //UI SPECIFIC STUFF
  const [isLoading, setIsLoading] = useState(true);

  //PLANT DATA SPECIFC STUFF
  const [randomPlantData, setRandomPlantData] = useState({});
  const [image_URL, setImage_URL] = useState("");

  useEffect(() => {
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

  }, []);

  useEffect(() => {

    fetch(
      `http://167.99.150.45:3035/getSpecificSpecies?slug=${encodeURIComponent(firstSlug)}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data !== undefined) {
          setRandomPlantData(data);
          setImage_URL(data.image_url);
          setIsLoading(false);
        }
        
      })
      .catch((e) => {
        //not printing error atm
      }
      );
  }, [firstSlug]);


  return (
    <Grid
      item
      container
      xs={12}
      direction="row"
      justify="center"
      alignItems="center"
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <MidComponent
          firstSlug={firstSlug}
          setFirstSlug={setFirstSlug}
          randomPlantData={randomPlantData}
          setRandomPlantData={setRandomPlantData}
          image_URL={image_URL} setImage_URL={setImage_URL}
        />
      )}
    </Grid>
  );
}

export default NewMidGrid;
