import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { createTheme } from '@mui/system';
import { theme } from '../../themes/theme';
const themes = createTheme();
const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    paddingTop: themes.spacing(2),
    color: 'white',
    position: 'sticky',
    top: 0,
    backgroundColor: theme.palette.primary.main,
    [themes.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#5555',
      border: '1px solid #eca',
    }
  },
  icon: {
    marginRight: themes.spacing(1),
    [themes.breakpoints.down('sm')]: {
      display: 'flex',
      color: 'white'

    }
  },
  item: {
    color: '#555 ',
    display: 'flex',
    alignItems: 'center',
    marginBottom: themes.spacing(4),
    [themes.breakpoints.up('sm')]: {
      marginBottom: themes.spacing(3),
      cursor: 'pointer'
    }
  },
  text: {
    fontSize: '18px',
    fontWeight: 500,
    [themes.breakpoints.down('sm')]: {
      display: 'none',
      cursor: 'pointer',
    },
  }
}
));
const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} >
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}> Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}> Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}> List</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}> Camera</Typography>
      </div><div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}> Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}> Apps</Typography>
      </div><div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}> Bookmark</Typography>
      </div><div className={classes.item}>
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