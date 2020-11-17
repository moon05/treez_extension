/*global chrome*/
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CachedIcon from "@material-ui/icons/Cached";
import React, { useEffect, useState } from "react";
import "./App.css";
import CustomCard from "./CustomCard";
import {
  getSlugsFromSessionStorage,
  isSlugListEmpty,
  popSlugFromSessionStorage,
  slugLoad
} from "./helpers";

const useStyles = makeStyles((theme) => ({
  midGrid: {
    marginTop: 40,
  },
  refreshButton: {
    borderRadius: 400,
  },
}));

function MidGrid() {
  const classes = useStyles();

  const [entered, setEntered] = useState(false);
  useEffect(() => {
    console.log("First Time Load: Did Slug Load");
    slugLoad();
    setEntered(true);
  }, []);
  //SLUG SPECIFIC STUFF
  const [firstSlug, setFirstSlug] = useState([]);
  const [laterSlug, setLaterSlug] = useState("");

  //UI SPECIFIC STUFF
  const [isLoading, setIsLoading] = useState(false);

  //PLANT DATA SPECIFC STUFF
  const [randomPlantData, setRandomPlantData] = useState({});
  const [c_name, setCName] = useState("");
  const [image_URL, setImage_URL] = useState("");
  const [dist_Sorted_Arr, setDistSortedArr] = useState([]);

  useEffect(() => {
    let s;
    console.log("First Time Doing Slug Setting");
    s = getSlugsFromSessionStorage();
    console.log("First time Session Storage got:", s);
    s[0] = s[0].trim();
    setFirstSlug(s[0]);
  }, [entered]);

  useEffect(() => {
    console.log("Got into Main useEffect");
    console.log("First Slug is: ", firstSlug);
    fetch(
      `http://localhost:5000/getSpecificSpecies?slug=${encodeURIComponent(
        firstSlug
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Made Fetch Request");
        console.log(data);
        if (data !== undefined) {
          setRandomPlantData(data);
        }
        setImage_URL(data.image_url);

        console.log(
          randomPlantData.distribution,
          "Printing sorted distrib array"
        );
        const firstCommonName = data.common_names[0]
          .toLowerCase()
          .replace(/\s/g, "");
        const secondCommonName = data.common_names[1]
          .toLowerCase()
          .replace(/\s/g, "");
        if (firstCommonName.includes(secondCommonName)) {
          setCName(data.common_names[2]);
        } else {
          setCName(data.common_names[1]);
        }

        console.log(data.duration, "Ann_per");

        console.log("new image url: ", data.image_url);
        console.log("set image url to:", image_URL);

        console.log("Done with First Load");
      })
      .catch((e) => console.log(e, "Error"));
  }, [firstSlug]);

  useEffect(() => {
    console.log(randomPlantData);
    console.log(image_URL);
    console.log("Setting Has been Done");
  }, [randomPlantData, image_URL]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleAnotherOne(e) {
    console.log("Gotten inside Try Another");

    if (isSlugListEmpty) {
      console.log("Slug FList Found Empty");
      slugLoad();
      sessionStorage.setItem("getSlugsAgain", true);
    } else {
      popSlugFromSessionStorage();
    }
    let s;
    s = getSlugsFromSessionStorage();
    console.log("Another time Session Storage got:", s);
    console.log("Another time, This is the first element:", s[0]);
    s[0] = s[0].trim();
    setLaterSlug(s[0]);
    console.log("Slug is instance of: ", typeof laterSlug);
    console.log("Set slug to: ", laterSlug);

    setLaterSlug(s[0]);

    fetch(
      `http://localhost:5000/getSpecificSpecies?slug=${encodeURIComponent(
        laterSlug
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Got into Testing Another Button");
        console.log(data);
        setRandomPlantData(data);
        setImage_URL(data.image_url);
        console.log("new image url: ", data.image_url);
        console.log("set image url to:", image_URL);
        console.log("Done setting for Another Button");
        console.log(data.duration, "Ann_per");
        console.log(
          randomPlantData.distribution,
          "Printing sorted distrib array"
        );

        const firstCommonName = data.common_name
          .toLowerCase()
          .replace(/\s/g, "");
        const secondCommonName = data.common_names[1]
          .toLowerCase()
          .replace(/\s/g, "");
        if (firstCommonName.includes(secondCommonName)) {
          setCName(data.common_names[2]);
        } else {
          setCName(data.common_names[1]);
        }
      });
  }

  useEffect(() => {
    console.log("RANDOM PLANT DATA: ", randomPlantData);
    console.log("Gotten inside Sorting UseEffect");
    let temp;
    if (randomPlantData.distribution !== undefined)
      temp = randomPlantData.distribution.sort(function (a, b) {
        var textA = a.toUpperCase();
        var textB = b.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    setDistSortedArr(temp);
    console.log(temp, "Printing Inside Sorting UseEffect");
  }, [randomPlantData]);

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
    {isLoading ? (<CircularProgress />) :
    
    (<Grid
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
          common_names={randomPlantData.common_names ? c_name : undefined}
          native_to={
            dist_Sorted_Arr
              ? dist_Sorted_Arr.slice(0, 6).join(", ").toLowerCase()
              : undefined
          }
          ann_per={
            randomPlantData.duration
              ? randomPlantData.duration[0].toLowerCase()
              : "unknown"
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
              {" "}
              <CachedIcon />
            </Button>
          </Grid>
        </Grid>
        </Grid>

    )}
    </Grid>
  );
}

export default MidGrid;
