import CardMedia from "@material-ui/core/CardMedia";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({


  large: {
    height: 300,
    width: 300
  }
}));

function ImageHolder({imageURL}) {
  const classes = useStyles();
  return (
    <Avatar
    variant="circle"
    src={imageURL}
    alt="plant_image"
    className={classes.large}


    >
    </Avatar>
      
  );
}

export default ImageHolder;
