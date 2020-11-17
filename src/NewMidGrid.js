import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import "./App.css";

import TempMidComp from "./TempMidComp";

const useStyles = makeStyles((theme) => ({
  midGrid: {
    marginTop: 40,
  },
  refreshButton: {
    borderRadius: 400,
  },
}));

function NewMidGrid() {
  const classes = useStyles();

  const [entered, setEntered] = useState(false);
  useEffect(() => {
    console.log("First Time Load: Did Slug Load");
    setEntered(true);
  }, []);
  //SLUG SPECIFIC STUFF
  const [firstSlug, setFirstSlug] = useState([]);

  //UI SPECIFIC STUFF
  const [isLoading, setIsLoading] = useState(false);

  //PLANT DATA SPECIFC STUFF
  const [randomPlantData, setRandomPlantData] = useState({});
  const [c_name, setCName] = useState("");
  const [image_URL, setImage_URL] = useState("");

  useEffect(() => {
    console.log("About to fetch first time")
    fetch(`http://167.99.150.45:3035/getTreeSlug`)
      .then((res) => res.json())
      .then((data) => {
        if (data === undefined) {
          console.log("OOPS Got Nothing From Fetching");
          //In case fetching slug fails
          setFirstSlug("juniperus-communis-var-communis");
        } else {
            console.log("Got first Slug here: ", data.slug)
          setFirstSlug(data.slug);
        }
      });
      setTimeout(function(){}, 1000);

  }, [entered]);

  useEffect(() => {
    console.log("Got into Main useEffect");


    console.log("ABOUT TO FETCH")

    fetch(
      `http://167.99.150.45:3035/getSpecificSpecies?slug=${encodeURIComponent(firstSlug)}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data !== undefined) {
          setRandomPlantData(data);
        }
        setImage_URL(data.image_url);

        console.log("Done with Fetch Part");
      })
      .catch((e) => console.log(e, "Error"));
  }, [firstSlug, entered]);

  useEffect(() => {
    console.log(randomPlantData);
    console.log("Setting Has been Done");
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
      {isLoading ? (
        <CircularProgress />
      ) : (
        <TempMidComp
          firstSlug={firstSlug}
          setFirstSlug={setFirstSlug}
          c_name={c_name}
          setCName={setCName}
          randomPlantData={randomPlantData}
          setRandomPlantData={setRandomPlantData}
          image_URL={image_URL} setImage_URL={setImage_URL}
        />
      )}
    </Grid>
  );
}

export default NewMidGrid;
