/* eslint-disable react/react-in-jsx-scope */
import {
    AppBar,
    Menu,
    Avatar,
    Badge,
    InputBase,
    Toolbar,
    Typography,

} from '@mui/material';
import { Cancel, Mail, Search } from '@mui/icons-material';
import { useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import { ListItem } from '@mui/material';
import { List } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useStyles } from '../style/styles';
// import { useTheme } from '@emotion/react';


const Navbar = () => {
    // const theme = useTheme();

    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dropDownData = [
        { label: 'Alex', desc: 'likes your feds ...' },
        { label: 'Frexa', desc: 'likes your feds ...' },
        { label: 'Dazer', desc: 'likes your feds ...' },
        { label: 'Lobie', desc: 'likes your feds ...' },
    ];
    return (

        <div className={classes.bar}>

            <AppBar style={{ position: 'static', }}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.logoLg}>
                        MUI React
                    </Typography>
                    <Typography variant="h6" className={classes.logoSm}>
                        MUI        </Typography>
                    <div className={classes.search}>
                        <Search />
                        <InputBase placeholder="Search..." className={classes.input} />
                        <div className={classes.cancel} onClick={() => setOpen(false)}>

                            <Cancel />
                        </div>
                    </div>
                    <div className={classes.icons}>
                        <Search
                            className={classes.searchButton}
                            onClick={() => setOpen(true)}
                        />
                        <IconButton
                            aria-controls='Notification'
                            aria-haspopup='true'
                            onClick={handleClick}
                            color='inherit'>    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                                <Mail />
                            </Badge>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsActiveIcon />
                            </Badge>
                        </IconButton>
                        <Menu
                            id='Notification'
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}>
                            <List className={classes.navlist}>
                                {dropDownData.map((item, i) => (
                                    <ListItem key={i} onClick={handleClose}>
                                        <ListItemIcon>
                                            <Avatar className={classes.ulAvater}>
                                                {item.label[0].toUpperCase()}
                                            </Avatar>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.label}
                                            secondary={item.desc}></ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Menu>
                        <Avatar className={classes.avatar}
                            alt="Remy Sharp"
                            src="https://www.cystinet-africa.net/wp-content/uploads/2021/03/avatar1.jpg"

                        />
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    );
};

export default Navbar;