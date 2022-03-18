/* eslint-disable no-unused-vars */
import { Fab, Radio, Alert, Modal, Tooltip, Container, Button, Snackbar, TextField, MenuItem, FormLabel, RadioGroup, FormControlLabel, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { AddCircleRounded } from '@mui/icons-material';
import { createTheme } from '@mui/system';
const themes = createTheme({
    spacing: 2
});
const useStyles = makeStyles(() => ({
    fab: {
    },
    container: {
        width: 800,
        height: 650,
        backgroundColor: 'white',
        [themes.breakpoints.down('sm')]: {
            width: '100vw',
            height: '100vh'
        }

    },
    form: {
        padding: themes.spacing(3)
    }
    , item: {
        marginRight: themes.spacing(3)
    }
}));

const Add = () => {
    const [open, setOpen] = useState(false);
    const [OpenAlert, setOpenAlert] = useState(false);

    const classes = useStyles();
    const handleOpen = () => setOpen(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickAway') {
            return;
        }
        setOpenAlert(false);
    };

    return (
        <>
            <Tooltip title='Add' aria-label='Add' onClick={handleOpen}>
                <Fab color='primary' className={classes.fab} >
                    <AddCircleRounded />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                            <TextField
                                id="standard-basic"
                                label="Title"
                                size="small"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                defaultValue="Tell your story..."
                                variant="outlined"
                                label="Description"
                                size="small"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="Visibility" value="Public">
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component='legend'> who can comment ? </FormLabel>
                            <RadioGroup>
                                <FormControlLabel
                                    value='publics'
                                    control={<Radio size='small' />}
                                    label='publics'
                                />
                                <FormControlLabel
                                    value='friends'
                                    control={<Radio size='small' />}
                                    label='friends '
                                />
                                <FormControlLabel
                                    value="no one"
                                    control={<Radio size='small' />}
                                    label="No one"
                                />
                                <FormControlLabel
                                    value="disable" disabled control={<Radio size='small' />} label="Custom"
                                />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{ marginRight: 20 }}
                                onClick={() => setOpenAlert(true)}
                            >
                                Create
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                        </div>

                    </form>
                </Container>
            </Modal>
            <Snackbar open={OpenAlert}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity='success' elevation={6} variant="filled" sx={{ width: '100%' }}>
                    This Success Message
                </Alert>
            </Snackbar>
        </>
    );
};

export default Add;