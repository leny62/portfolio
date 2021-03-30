import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme/theme';
import Header from '../../components/header';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import { Typography } from '@material-ui/core';
import { useStyles } from './Style';

function Blog() {
    const classes = useStyles();
    return(
      <ThemeProvider theme={theme}>
        <Header />
        <Box className={classes.hero}>
           Lenycode Blog
        </Box>
        <Container maxWidth="lg" className={classes.blogsContainer}>
                <Typography variant="h4" className={classes.blogTitle}>
                    Blogs
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://images.unsplash.com/photo-1616789682173-1f1700675453?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Leny codeApi
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar 
                                src="https://images.unsplash.com/photo-1616797147704-7df2e256d397?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=931&q=80" 
                                />
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    Leny62
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    March 30, 2021
                                </Typography>
                            </Box>   
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://images.unsplash.com/photo-1610366398516-46da9dec5931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2030&q=80"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Leny codeApi
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar 
                                src="https://images.unsplash.com/photo-1616797147704-7df2e256d397?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=931&q=80" 
                                />
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    Leny62
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    March 30, 2021
                                </Typography>
                            </Box>   
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://images.unsplash.com/photo-1575930641943-5b78a863dd9c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Leny codeApi
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar 
                                src="https://images.unsplash.com/photo-1616797147704-7df2e256d397?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=931&q=80" 
                                />
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    Leny62
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    March 30, 2021
                                </Typography>
                            </Box>   
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                        </Card> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://images.unsplash.com/photo-1613945764611-cdb643c2ee3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Leny codeApi
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar 
                                src="https://images.unsplash.com/photo-1589626959273-8958e8828c9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" 
                                />
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    Leny62
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    March 30, 2021
                                </Typography>
                            </Box>   
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                        </Card>
                    </Grid>
                </Grid>
        </Container>
        <Box my={4} className={classes.paginationContainer}>
            <Pagination count={10}/>
        </Box>
      </ThemeProvider>
    )
}

export default Blog;