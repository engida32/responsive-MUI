import React from 'react';
import { createTheme } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
const themes = createTheme({
    spacing: 2,
});
const useStyles = makeStyles(() => ({
    container: {
        paddingTop: themes.spacing(10)
    },
    media: {
        height: 250,
        [themes.breakpoints.down('sm')]: {
            height: 150
        }

    },
    card: {
        marginBottom: themes.spacing(5)
    }
}));
const Post = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                    titles='lorem Ipsum, Lorem Ips'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5'>
                        lorem Ipsum loremd desc
                    </Typography>
                    <Typography variant='body2'>
                        lorem Ipsum lore desc et met     nulla et tellus mag     nunc sed diam non   proident     et euismod er el
                        lorem Ipsum lore desc et met     nulla et tellus mag     nunc sed diam non   proident     et euismod er el
                        lorem Ipsum lore desc et met     nulla et tellus mag     nunc sed diam non   proident     et euismod er el
                        lorem Ipsum lore desc et met     nulla et tellus mag     nunc sed diam non   proident     et euismod er el
                        lorem Ipsum lore desc et met     nulla et tellus mag     nunc sed diam non   proident     et euismod er el

                        lorem Ipsum lore desc et met     nulla et tellus mag     nunc sed diam non   proident     et euismod er el
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'> Share</Button>
                <Button size='small' color='primary'> Share</Button>

            </CardActions>
        </Card>
    );
};

export default Post;