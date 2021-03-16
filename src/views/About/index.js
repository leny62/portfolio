import React from 'react'
import Footer from '../../components/footer';
import Header from '../../components/header/';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Skills from './Skills';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '4.2rem',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:'100%',
        height: '100%',
        background: '#FFFFFF',
        opacity: 0.8,
        alignItems: 'center',
        zIndex: 5,
        borderTop: '2px solid #E0E0E0',
        '@media(max-width: 610px)': {
            flexDirection: 'column',
            paddingTop: theme.spacing(1)
        },
        '@media(max-width: 405px)': {
            justifyContent: 'unset',
            // height: '100px'
        }
    },
    pageContainer: {
        marginTop: '4.48rem',
        width: '100%',
        color: 'white',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        
        // backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        '@media(max-width: 664px)': {
            padding: theme.spacing(0),
            marginLeft: '5%',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30%',
        },
        '@media(max-width: 604px)': {
            padding: theme.spacing(0),
            marginLeft: '5%',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30%',
        },
        '@media(max-width: 1281px)': {
            marginLeft: '5%',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%',
        },
    },
    icon: {
        width: 100,
        height: 100,
        padding: theme.spacing(1),
        "&:hover": {
            transform: 'scale(1.2)',
            opacity: 0.7
        }    
    },
    icon1: {
        width: 100,
        height: 100,
        paddingLeft: '2',
        marginLeft: '2',
        padding: theme.spacing(1),
        "&:hover": {
            transform: 'scale(1.2)',
            opacity: 0.7
        }    
    },
    anchor: {
        padding: theme.spacing(1),
        textDecoration: 'none',
        color: '#42645A',
        '@media(max-width: 400px)': {
            padding: theme.spacing(0),
        }
    },
    anchor1: {
        padding: theme.spacing(1),
        paddingLeft: 3,
        color: '#42645A',
        '@media(max-width: 400px)': {
            padding: theme.spacing(0),
        }
    },
    pageLinks: {
        fontSize: 22, 
        padding: theme.spacing(1),
        textDecoration: 'none',
        color: '#42645A',
        "&:hover": {
            transform: 'scale(1.4)',
            opacity: 0.7
        },
        '@media(max-width: 400px)': {
            padding: theme.spacing(0),
        }  
    },
    grid: {
        color: '#000000',
        '@media(max-width: 710px)': {
            padding: theme.spacing(3),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10rem'
        }  
    },
    h1: {
        color: '#42645A',
    },
    about: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        '@media(max-width: 1010px)': {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column'
        }  
    },

    body: {
        fontFamily: 'Poppins, sans-serif',
        color: '#42645A',
        '@media(max-width: 400px)': {
            paddingTop: 0,
            marginLeft: 25,
            color: 357676
        },
        '@media(max-width: 230px)': {
            paddingTop: 0,
            marginLeft: 3,
            color: 357676
        }
    }
}));


const About = () => {
    const classes = useStyles();
    return (
        <>
        <Header />
        <div className={classes.pageContainer}>
        <div className={classes.about}>
            <h1 style= {{color: '#42645A', fontSize: '4rem'}}>
                I'M AN
                <br />
                INNOVATOR

            </h1>
        <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={4}>
          <h1 style= {{color: '#42645A'}}>WHERE I HAVE BEEN</h1>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eget in lectus dui risus, facilisi sagittis. Justo, eget velit in in nunc pharetra, porttitor morbi viverra. Ullamcorper urna, feugiat quam morbi quam amet, quisque adipiscing. Enim tortor vel tellus commodo libero, enim sagittis sed. Pharetra felis eget nulla est diam duis non.
          </Typography>
        </Grid>
        <Grid item xs={4}>
              <h1 style= {{color: '#42645A'}}>WHAT AM DOING</h1>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eget in lectus dui risus, facilisi sagittis. Justo, eget velit in in nunc pharetra, porttitor morbi viverra. Ullamcorper urna, feugiat quam morbi quam amet, quisque adipiscing. Enim tortor vel tellus commodo libero, enim sagittis sed. Pharetra felis eget nulla est diam duis non.
              </Typography>
        </Grid>
        <Grid item xs={4}>
              <h1 style= {{color: '#42645A'}}>WHAT I HOPE TO DO</h1>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eget in lectus dui risus, facilisi sagittis. Justo, eget velit in in nunc pharetra, porttitor morbi viverra. Ullamcorper urna, feugiat quam morbi quam amet, quisque adipiscing. Enim tortor vel tellus commodo libero, enim sagittis sed. Pharetra felis eget nulla est diam duis non.
              </Typography>
        </Grid>
      </Grid>
        </div>
        </div>
        <Skills />
        <Footer />
        </>
    )
}

export default About;
