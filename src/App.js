/* eslint-disable react/react-in-jsx-scope */
import { Grid } from '@mui/material';
import Feed from './components/feed/Feed';
import Leftbar from './components/Leftbar';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/system';
import Add from './components/Add';

const themes = createTheme();
const useStyles = makeStyles(() => ({
  right: {
    alignItems: 'center',
    [themes.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
