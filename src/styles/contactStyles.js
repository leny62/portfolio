import { makeStyles } from '@material-ui/core';
import bg from '../assets/images/bg.png';

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        width: '95%',
        // marginTop: 20,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'regular',
    
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
    
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
        '@media (max-width:935px)': {
            width: '90%',
            marginTop: 18
        },
        '@media (max-width:650px)': {
            width: '100%',
        },
    },
    pos:{
        width: 500,
        height: 540,
        boxShadow:'0px 4px 20px rgba(0, 0, 0, 0.07)',
        borderRadius: 5,
        margin: 'auto',
    
        [theme.breakpoints.up('md')]: {
            padding: '10px 20px 30px 57px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '20px 20px 20px 50px',
        },
        '@media (max-width:935px)': {
            width: '90% !important',
            padding: '10px 0px 30px 130px',

        },
        '@media (max-width:850px)': {
            width: 500,
            padding: '10px 0px 30px 100px',
        },
        '@media (max-width:650px)': {
            width: 400,
            padding: '10px 20px 30px 30px',
        },
        '@media (max-width:470px)': {
            width: 250,
            padding: '10px 20px 30px 30px',
        },
        '@media (max-width:375px)': {
            width: '100%',
            margin: 0,
        }
    },
    span:{
        alignSelf: 'center',
        width: 300,
        fontFamily: 'Poppins, sans-serif',
        textTransform: 'capitalize',
        color: '#5E5E5E',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        },
    },
    paper: {
        margin: 'auto',
        padding: '5rem 15rem',
        backgroundColor: '#F4F4F4',
        width: '100%',
        maxWidth: '80rem',
        '@media (max-width:1024px)': {
            width: '85%',
            margin: '70px 0',
        },
        '@media (max-width:357px)': {
            width: '100%',
            margin: 0
        },
    },
      
    img:{
        width: 30,
        height: 30,
    },
    action:{
        width: '100%',
        margin: 'auto',
        marginTop: 15,
        marginBottom: 30,
        height: 50,
        fontFamily: 'Poppins, sans-serif',
        textTransform: 'capitalize',
        fontWeight: 200,
        fontSize: '1.3rem',
        background: '#42645A',
        '&:hover':{backgroundColor:'#384340',}
    },
    h1:{
        textAlign: 'center',
        color: '#000000',
        paddingRight: 60,
        fontFamily: 'Poppins, sans-serif',
        '@media (max-width:350px)': {
            fontSize: '20px'
        },
    },
    contactContainer:{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        width: '70%',
        '@media (max-width:935px)': {
        width: '100%'
        },
    },
    pageContainer: {
        width: '100%',
        color: 'white',
        height: '100vh',
        display: 'flex',
        marginTop: '4rem',
        justifyContent: 'center',
        alignItems: 'center',
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
        // marginTop: '30%',
        },
        '@media(max-width: 1024px)': {
        marginTop: '0rem',
    },
    '@media(max-width: 375px)': {
        margin: 0,
        width: '100%'
    },
    },
    input: {
        '&:visited':{background:'#384340',}
    },
}));