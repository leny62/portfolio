import React from 'react'
import Footer from '../../components/footer';
import Header from '../../components/header/';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import { MainContainer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../../assets/images/cool-background.png';
import bg from '../../assets/images/bg.png'
import { red } from '@material-ui/core/colors';
import Skills from '../About/Skills';
import LenyImage1 from '../../assets/images/Lenyim1.png';
import LenyImage2 from '../../assets/images/lenyIm2.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:'100%',
        height: '100%',
        background: '#FFFDFD',
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
        width: '100%',
        color: 'white',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        
        backgroundImage: `url(${bg})`,
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
    image1: {
        width: 400,
        height: 400,
        paddingLeft: '2',
        marginLeft: '2',
        padding: theme.spacing(1)
    },
    image2: {
        width: 400,
        height: 400,
        paddingLeft: '2',
        marginLeft: '2',
        padding: theme.spacing(1)
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


const Landing = () => {
    const classes = useStyles();
    return (
        <>
        <Header />
        <div className={classes.pageContainer}>
        <Typography>
          <h1>Hello, Welcome</h1>
          <h1>Welcome to Lenycode:</h1>
          <h3>I develop software products...</h3>
        </Typography>
        <div>
        <img src={LenyImage1} alt="LenyImage" className={classes.image1}/>
        <img src={LenyImage2} alt="LenyImage" className={classes.image2}/>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Landing;
