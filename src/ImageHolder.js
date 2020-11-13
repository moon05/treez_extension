import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 300,
    width: 300,
    opacity: 0.9

  },
}));

function ImageHolder({imageURL}) {
  const classes = useStyles();
  return (
      <CardMedia
        className={classes.cardMedia}
        component="img"
        src="https://bs.floristic.org/image/o/d073c0ecfeb2f69248e9102eb6ec10f8ccc628cb"
        title={"plant_image"}
      ></CardMedia>
  );
}

export default ImageHolder;
