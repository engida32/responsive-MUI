/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Container,
  ImageList,
  ImageListItem,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import { createTheme } from "@mui/system";
import { AvatarGroup, Avatar } from "@mui/material";
import { Box } from "@mui/material";
const themes = createTheme({});
const useStyles = makeStyles(() => ({
  container: {
    paddingTop: themes.spacing(8),
    position: "relative",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: themes.spacing(6),
    color: "#555",
    fontSize: "22px",
  },
  avatarContainer: {
    mr: themes.spacing(25),
    m: themes.spacing(3),
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row-reverse",
    // justifyContent: "flex-start",
    // flexDirection: "row",
  },
  avatar: {
    padding: "0 4px 0 0",
  },
}));
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>Online friends</Typography>

      <AvatarGroup
        max={6}
        style={{ mb: 20, ml: 0 }}
        className={classes.avatarContainer}
      >
        <Avatar
          className={classes.avatar}
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          className={classes.avatar}
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          className={classes.avatar}
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar className={classes.avatar} alt="Agnes Walker" src="" />
        <Avatar
          className={classes.avatar}
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          className={classes.avatar}
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          className={classes.avatar}
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/8.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title}>Gallery</Typography>
      <ImageList style={{ mb: "20px" }} xs cols={3}>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
            alt="no image"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=248&fit=crop&auto=format"
            alt="no image"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"
            alt="no image"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
            alt="no image"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format"
            alt="no image"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1530731141654-5993c3016c77?w=161&fit=crop&auto=format"
            alt="no image"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=248&fit=crop&auto=format"
            alt="no image"
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} variant="body">
        CATEGORIES
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          justifyItems: "center",
        }}
      >
        <Link href="#" className={classes.link} variant="body">
          Sport
        </Link>
        <Divider flexItem />
        <Link href="#" className={classes.link} variant="body">
          Food
        </Link>
        <Divider flexItem />
        <Link href="#" className={classes.link} variant="body">
          Movies
        </Link>
        <Divider flexItem style={{ marginBottom: 5 }} />
        <Link href="#" underline="none" className={classes.link} variant="body">
          Books
        </Link>
        <Link href="#" className={classes.link} variant="body">
          Science
        </Link>
      </Box>
    </Container>
  );
};

export default Rightbar;
