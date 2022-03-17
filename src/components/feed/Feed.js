import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/system';
import Post from './Post';
const themes = createTheme({
  spacing: 1,
});
const useStyles = makeStyles(() => ({
  container: {
    paddingTop: themes.spacing(10)
  }
}));
const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />

    </Container>
  );
};

export default Feed;