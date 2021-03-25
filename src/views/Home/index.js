import React from 'react'
import Footer from '../../components/footer';
import Header from '../../components/header/';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import bg from '../../assets/images/bg.png'
import LenyImage1 from '../../assets/images/Lenyim1.png';

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
        paddingTop: '30rem',
        zIndex: 5,
        borderTop: '2px solid #E0E0E0',
        '@media(max-width: 610px)': {
            flexDirection: 'column',
            paddingTop: theme.spacing(1)
        },
        '@media(max-width: 405px)': {
            justifyContent: 'unset',
        }
    },
    pageContainer: {
        width: '100%',
        color: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '4.3rem',
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        '@media(max-width: 665px)': {
            padding: theme.spacing(0),
            marginLeft: '0',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30%',
            backgroundRepeat: 'no-repeat'
        },
        '@media(max-width: 980px)': {
            padding: theme.spacing(50),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },    
        '@media(max-width: 554px)': {
            marginLeft: '0',
            width: '100%',
            height: '100vh',
            padding: theme.spacing(50),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0',
            backgroundRepeat: 'no-repeat',
        },
        '@media(max-width: 605px)': {
            width: '100%',
            height: '100vh',
            padding: theme.spacing(50),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '0',
            margingLeft: '0'
        },
        '@media(max-width: 1281px)': {
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '0',
        },
        '@media(max-width: 450px)': {
            padding: theme.spacing(50),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            width: '10%',
            height: '100vh',
            paddingRight: '3.5%',
            marginLeft: 0,
            marginRight: 0
        }, 
        '@media(max-width: 380px)': {
            padding: theme.spacing(50),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh'
        },   
    },
    icon: {
        width: 100,
        height: 100,
        padding: theme.spacing(1),
        "&:hover": {
            transform: 'scale(1.2)',
            opacity: 0.7
        },
        "&:active": {
            transform: 'scale(1.2)',
            opacity: 0.7,
            backgroundColor: 'red'
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
        padding: theme.spacing(1),
        '@media(max-width: 1159px)': {
            padding: theme.spacing(0),
            paddingRight: 0,
        },
        '@media(max-width: 450px)': {
            left: '30%',
            width: '300px',
            height: '300px',
            marginLeft: '0%',
            paddingLeft: '80%',
            paddingRight: '0%'
        },    
        '@media(max-width: 380px)': {
            left: '30%',
            width: '200px',
            height: '200px',
            marginRight: 0
        },    
    },
    image2: {
        width: 400,
        height: 400,
        paddingLeft: '2',
        scrollPaddingRight: '2',
        marginLeft: '2',
        transform: 'rotate(-10deg)',
        marginTop: '-90%',
        zIndex: -5,
        '@media(max-width: 450px)': {
            left: '30%',
            width: '300px',
            height: '300px',
            marginRight: '40%',
            // paddingLeft: '80%',
            paddingRight: '0%'
        },
        '@media(max-width: 380px)': {
            left: '30%',
            width: '200px',
            height: '200px',
            marginRight: '40%'
        },    
    },
    anchor: {
        padding: theme.spacing(1),
        textDecoration: 'none',
        color: '#42645A',
        '@media(max-width: 400px)': {
            padding: theme.spacing(0),
        }
    },
    intro: {
        position: 'absolute',
        height: '5px',
        marginTop: '4rem',
        marginLeft: '5rem',
        padding: '5rem',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '35px',
        lineHeight: '20px',
        display: 'flex',
        flexDirection: 'column',
        color: '#FFFFFF',
        '@media(max-width: 400px)': {
            padding: theme.spacing(0),
        },
        '@media(max-width: 420px)': {
            left: '30%',
            height: '3vh',
            fontSize: '15px',
            lineHeight: '45%',
            display: 'flex',
            marginTop: '1%',
            flexDirection: 'column',
            marginLeft: '-10%'
        }, 
        '@media(max-width: 380px)': {
            left: '30%',
            height: '3vh',
            fontSize: '15px',
            lineHeight: '45%',
            display: 'flex',
            marginTop: '1%',
            flexDirection: 'column',
            marginLeft: '-10%'
        },  
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
    avatar: {
        position: 'absolute',
        width: '500px',
        height: '500px',
        left: '58rem',
        top: '200px',
        '@media(max-width: 1220px)': {
            padding: theme.spacing(0),
            left: '60%',
    },
    '@media(max-width: 1157px)': {
        padding: theme.spacing(0),
        left: '58%',
},
    '@media(max-width: 400px)': {
        padding: theme.spacing(0),
        left: '40%'
    },
    '@media(max-width: 980px)': {
        padding: theme.spacing(0),
        left: '30%',
    },
    '@media(max-width: 450px)': {
        left: '30%',
        width: '400px',
        height: '400px',
        margingLeft: '1%',
        paddingLeft: '1%',
        marginRight: 0
    },  
    '@media(max-width: 380px)': {
        left: '30%',
        width: '400px',
        height: '400px',
        marginRight: 0
    },     
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
        <Typography className={classes.intro}>
          <h1>Hello,</h1> 
          <br />
          <h1>Welcome to Lenycode:</h1>
          <h3>I develop software products...</h3>
        </Typography>
        <div className = {classes.avatar}>
        <img src={LenyImage1} alt="LenyImage" className={classes.image1}/>
        <img src={LenyImage1} alt="LenyImage" className={classes.image2}/>
        {/* <div className={classes.image2}>Hello</div> */}
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Landing;
