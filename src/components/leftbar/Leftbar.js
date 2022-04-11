import {
  Bookmark,
  ExitToApp,
  Home,
  List,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { createTheme } from "@mui/system";
import { theme } from "../../themes/theme";
const themes = createTheme();
const useStyles = makeStyles(() => ({
  container: {
    height: "70%",
    paddingTop: themes.spacing(2),
    color: "white",
    position: "relative ",
    // top: 0,
    backgroundColor: theme.palette.primary.main,
    [themes.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#5555",
      border: "1px solid lightgray",
    },
  },
  icon: {
    marginRight: themes.spacing(1),
    [themes.breakpoints.down("sm")]: {
      display: "flex",
      color: "white",
    },
  },
  item: {
    color: "#555 ",
    display: "flex",
    alignItems: "center",
    marginBottom: themes.spacing(3),
    [themes.breakpoints.up("sm")]: {
      marginBottom: themes.spacing(2),
      cursor: "pointer",
    },
  },
  text: {
    fontSize: "18px",
    fontWeight: 700,
    [themes.breakpoints.down("sm")]: {
      display: "none",
      cursor: "pointer",
    },
  },
}));
const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} sx={{ mt: "50px" }}>
      <Box className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}> Homee</Typography>
      </Box>
      <Box className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}> Friends</Typography>
      </Box>
      <Box className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}> List</Typography>
      </Box>
      <Box className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}> Camera</Typography>
      </Box>
      <Box className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}> Videos</Typography>
      </Box>
      <Box className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}> Apps</Typography>
      </Box>
      <Box className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}> Bookmark</Typography>
      </Box>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}> Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}> Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}> Signout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
