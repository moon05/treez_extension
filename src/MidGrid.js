import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import "./App.css";
import CustomCard from "./CustomCard";
const useStyles = makeStyles((theme) => ({
  midGrid: {
    marginTop: 40,
  },
}));

function MidGrid() {
  const classes = useStyles();

  const [entered, setEntered] = useState(false);
  useEffect(() => {
    setEntered(true);
  }, []);
  const [randomPlantData, setRandomPlantData] = useState({});
  const [c_name, setCName] = useState("");
  const [image_URL, setImage_URL] = useState("");
  const [dist_Sorted_Arr, setDistSortedArr] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getCountrySpecificPlant")
      .then((res) => res.json())
      .then((data) => {
        console.log("Made Fetch Request");
        console.log(data);
        if (data !== undefined) setRandomPlantData(data);
        setImage_URL(data.image_url);
        

        

        console.log(randomPlantData.distribution, "Printing sorted distrib array");
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
      })
      .catch((e) => console.log(e, "Error"));
  }, [entered]);

  useEffect(() => {
    console.log("Setting Has been Done");
  }, [randomPlantData, image_URL]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleAnotherOne(e) {
    fetch("http://localhost:5000/testAnotherButton")
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
        console.log(randomPlantData.distribution, "Printing sorted distrib array");

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
      });
  }

  useEffect(() => {
    let temp;
    if (randomPlantData.distribution !== undefined) 
    temp = randomPlantData.distribution.sort(function (a, b) {
      var textA = a.toUpperCase();
      var textB = b.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    })
    setDistSortedArr(temp);
    console.log(temp, "Printing Inside Sorting UseEffect");

  }, [entered, randomPlantData])


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
      <Grid item container xs={12} direction="row" justify="center" alignItems="center">
        
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
                ? dist_Sorted_Arr
                    .slice(0, 6)
                    .join(", ")
                    .toLowerCase()
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
            <Button onClick={handleAnotherOne}> Try Another One!</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MidGrid;
