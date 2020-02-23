import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 16
  },
  content: {
    backgroundColor: theme.palette.primary.light
  },
  Typography: {
    color: "white"
  },
  img: {
    height: 25
  },
  socials: {
    backgroundColor: theme.palette.grey[100],
    marginTop: 50,

    "& img": {
      margin: 15
    }
  }
}));

function NavFooter(props) {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.root}>
      <Box py={2} className={classes.socials}>
        <Container>
          <Box display="flex" alignItems="center">
            <Typography variant="h6">Follow us : </Typography>
            <Link href="https://www.meetup.com/GDG-Chlef/" target="_blank">
            <img
              className={classes.img}
              alt="meetup"
              src="/assets/social-meida-icons/png/002-meetup.png"
            />
            </Link>
            <Link href="https://twitter.com/GDG_Chlef" target="_blank">
            <img
              className={classes.img}
              alt="meetup"
              src="/assets/social-meida-icons/png/003-twitter.png"
            />
            </Link>
            <Link href="https://www.linkedin.com/company/gdg-chlef" target="_blank">
            <img
              className={classes.img}
              alt="meetup"
              src="/assets/social-meida-icons/png/004-linkedin.png"
            />
            </Link>
            <Link href="https://www.facebook.com/pg/GDG.Chlef/" target="_blank">
            <img
              className={classes.img}
              alt="meetup"
              src="/assets/social-meida-icons/png/005-facebook.png"
            />
            </Link>
            <Link href="https://www.instagram.com/gdgchlef/" target="_blank">
            <img
              className={classes.img}
              alt="meetup"
              src="/assets/social-meida-icons/png/006-instagram.png"
            />
            </Link>
          </Box>
        </Container>
      </Box>
      <Box className={classes.content} py={8}>
        <Container>
          <Grid container>
            <Grid item xs={12} md="3">
              <Typography
                className={classes.Typography}
                variant="h5"
                component="p"
                style={{ marginBottom: "16px" }}
              >
                About
              </Typography>

              <Typography className={classes.Typography} component="p">
                <Link
                  href="https://gdgchlef.com/"
                  target="_blank"
                  color="inherit"
                >
                  {"GDG Chlef"}
                </Link>
              </Typography>
              <Typography className={classes.Typography} component="p">
                <Link
                  href="https://developers.google.com/programs/community/gdg/"
                  target="_blank"
                  color="inherit"
                >
                  {"Google Developers Groups"}
                </Link>
              </Typography>
              <Typography className={classes.Typography} component="p">
                <Link
                  href="https://www.womentechmakers.com/"
                  target="_blank"
                  color="inherit"
                >
                  {"Women Tech makers"}
                </Link>
              </Typography>
              <Typography className={classes.Typography} component="p">
                <Link
                  href="https://www.meetup.com/GDG-Chlef/"
                  target="_blank"
                  color="inherit"
                >
                  {"Become a Member"}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md="3">
              <Typography
                className={classes.Typography}
                variant="h5"
                component="p"
                style={{ marginBottom: "16px" }}
              >
                Resources
              </Typography>

              <Typography className={classes.Typography} component="p">
                <Link href="#" target="_blank" color="inherit">
                  {"Resources Become a Sponsor"}
                </Link>
              </Typography>
              <Typography className={classes.Typography} component="p">
                <Link href="#" target="_blank" color="inherit">
                  {"Call for Speaker"}
                </Link>
              </Typography>
              <Typography className={classes.Typography} component="p">
                <Link href="#" target="_blank" color="inherit">
                  {"Media Kit"}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md="3">
              <Typography
                className={classes.Typography}
                variant="h5"
                component="p"
                style={{ marginBottom: "16px" }}
              >
                Developer Console
              </Typography>

              <Typography className={classes.Typography} component="p">
                <Link
                  href="https://console.developers.google.com/"
                  target="_blank"
                  color="inherit"
                >
                  {"Google API Console"}
                </Link>
              </Typography>
              <Typography className={classes.Typography} component="p">
                <Link
                  href="https://console.cloud.google.com/"
                  target="_blank"
                  color="inherit"
                >
                  {"GCP Console"}
                </Link>
              </Typography>
              <Typography className={classes.Typography} component="p">
                <Link
                  href="https://console.cloud.google.com/"
                  target="_blank"
                  color="inherit"
                >
                  {"Google Play Console"}
                </Link>
              </Typography>
              <Typography className={classes.Typography} component="p">
                <Link
                  href="https://console.firebase.google.com/"
                  target="_blank"
                  color="inherit"
                >
                  {"Firebase Console"}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default NavFooter;
