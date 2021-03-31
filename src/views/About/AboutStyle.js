import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
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
        }
    },
    pageContainer: {
        marginTop: '4.48rem',
        width: '100%',
        color: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        '@media(max-width: 1024px)': {
            width: '44.6%',
            marginLeft: 3,
            color: 357676
        },
        '@media(max-width: 230px)': {
            width: '50%',
            marginLeft: 3,
            color: 357676
        },
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
            // width: '100%',
            // height: '100vh',
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
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        },
        '@media(max-width: 10240px)': {
            width: '100%',
            heigh: '100vh',
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'left',
            marginTop: '1rem',
            marginBottom: '3rem',
            paddingBottom: '1rem',
        },  
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
        '@media(max-width: 1024px)': {
            padding: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '1rem'
        }  
    },
    about: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        '@media(max-width: 1024px)': {
            width: '100%',
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
        },  
        '@media(max-width: 1010px)': {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column'
        }  
    },

    body: {
        fontFamily: 'Poppins, sans-serif',
        color: '#42645A',
        '@media(max-width: 1024px)': {
            width: '100%',
            backgroundColor: 'red',
            paddingTop: 0,
            marginLeft: 25,
            color: 357676
        },
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