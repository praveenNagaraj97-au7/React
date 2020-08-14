import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

import { fetchReciepes } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "20vw",
  },

  media: {
    height: 140,
  },
}));

const ReciepeList = (props) => {
  const { fetchReciepes, reciepes } = props;
  useEffect(() => {
    fetchReciepes();
  }, [fetchReciepes]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {reciepes.map(({ title, thumbnail, ingredients }, index) => (
        <Card className={classes.root} key={index}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={thumbnail}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {ingredients}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

const mapStateToProps = ({ reciepe: { reciepes } }) => {
  return { reciepes };
};

export default connect(mapStateToProps, {
  fetchReciepes,
})(ReciepeList);
