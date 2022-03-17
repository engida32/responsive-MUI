import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/system';
import { alpha } from '@mui/material/styles';
const theme = createTheme({

});
export const useStyles = makeStyles(() => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: theme.spacing(12),

    },
    logoLg: {
        display: 'none',
        margin: theme.spacing(22),
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    logoSm: {
        marginLeft: theme.spacing(22),

        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha('#C5D8E7', 0.15),
        '&:hover': {

            // backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? 'flex' : 'none'),
            width: '70%',
        },
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1),
    },
    cancel: {
        alignItems: 'end',
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    searchButton: {
        marginTop: theme.spacing(4),
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    icons: {
        alignContent: 'center',
        alignItems: 'space-between',
        padding: theme.spacing(2),
        display: (props) => (props.open ? 'none' : 'flex'),
    },
    badge: {
        marginRight: theme.spacing(5),
        marginTop: theme.spacing(0)
    },
    bar: {
        borderRadius: theme.spacing(4),
        display: 'flex',
        position: 'inherit',
    },
    avatar: {
        margin: theme.spacing(2)
    }
}));