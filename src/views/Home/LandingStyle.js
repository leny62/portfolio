import { makeStyles } from '@material-ui/core/styles';
import bg from '../../assets/images/bg.png'
import LenyImage1 from '../../assets/images/Lenyim1.png';

export const useStyles = makeStyles((theme) => ({

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
        '@media(max-width: 1338px)': {
            display: 'flex',
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
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        },
        '@media(max-width: 1438px)': {
            width: '90%',
            display: 'flex',
            flexDirection: 'row'
        },
        '@media(max-width: 1410px)': {
            width: '92.58%',
        },
        '@media(max-width: 1334px) and (max-width: 1330px)': {
            width: '92.6%',
            height: '100vh',
            marginTop: 0,
            display: 'flex',
            flexDirection: 'row'
        },
        '@media(max-width: 1062px)': {
            display: 'flex',
            flexDirection: 'column'
        },
        '@media(max-width: 1050px)': {
            width: '99.89%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: "relative",
            alignItems: "center"
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
        marginBottom: '20rem',
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
        '@media(max-width: 1334px)': {
            fontSize: '27px',
            marginLeft: '2rem',
        },
        '@media(max-width: 1306px)': {
            fontSize: '22px',
            marginLeft: '1rem',
        },
        '@media(max-width: 1062px)': {
           position: 'relative'
        },
        '@media(max-width: 1050px)': {
            position: 'absolute',
            marginTop: '50rem',

        },
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
        backgroundImage: `url(${LenyImage1})`,
        height: '500px',
        width: '500px',
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        marginLeft: "56rem",
        marginBottom: '1rem',
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        },
        '@media(max-width: 1438px)': {
            width: '90%',
            marginLeft: "50rem",
        },
        '@media(max-width: 1334px)': {
            width: '90%',
            marginLeft: "50%",
        },
        '@media(max-width: 1062px)': {
            position: 'absolute'
         },
         '@media(max-width: 1050px)': {
            position: 'absolute',
            marginTop: '15rem',
            marginLeft: "5rem"
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