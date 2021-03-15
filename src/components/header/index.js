import React from 'react';
import Typography  from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import LenyCodeLogo from '../../assets/icons/LenycodeLogo1.png';







const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:'100%',
        height: 70,
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
    body: {
        fontFamily: 'Poppins, sans-serif',
        color: '#42645A',
        '@media(max-width: 400px)': {
            paddingTop: 20,
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



const Header = () => {
    const classes = useStyles();
    return ( 
        <>
            <CssBaseline />
            <header className={classes.root}>
            <div>
            <a href="/" target="_blank" rel="noopener noreferrer" className={classes.anchor1}>
                <img src={LenyCodeLogo} alt="Lenycode" className={classes.icon1}/>
            </a>
            </div>
                <div>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={classes.pageLinks}>
                        Home
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={classes.pageLinks}>
                        About  
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={classes.pageLinks}>
                        Contact
                    </a>
                </div>
            </header>
        </>
    );
}

export default Header;