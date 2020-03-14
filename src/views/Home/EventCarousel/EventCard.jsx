import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import EventIcon from "@material-ui/icons/Event";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import { ListItemIcon, ListItemText } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: 4,
    padding: 20,
    margin: 30
  },
  p: {
    color: "#707070"
  },
  title: {
    fontSize: 20,
    marginBottom: 20,

    color: "#4E4E4E"
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} component="h2">
          DevFest CHLEF 2020
        </Typography>

        <Typography className={classes.p} variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          provident soluta expedita perspiciatis rerum sit! Ipsam harum eum
          aperiam delectus.
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <EventIcon color="primary" />
            </ListItemIcon>
            <ListItemText>15th Jan 2025</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <QueryBuilderIcon color="primary" />
            </ListItemIcon>
            <ListItemText>9:30AM to 4:30PM</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LocationOnIcon color="primary" />
            </ListItemIcon>
            <ListItemText>CLS Chlef - ALGERIA</ListItemText>
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button fullWidth={true} size="medium">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}
