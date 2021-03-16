import React from 'react';
import Typography  from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import linkedIn from '../../assets/icons/LinkedIn.png';
import twitter from '../../assets/icons/TwitterIcon.png';
import gitHubIcon from '../../assets/icons/github.png';







const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:'100%',
        height: 60,
        background: '#C7C3C3',
        opacity: 0.8,
        alignItems: 'center',
        zIndex: 5,
        borderTop: '0.001px solid #E0E0E0',
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
        width: 40,
        height: 40,
        padding: theme.spacing(1),
        "&:hover": {
            transform: 'scale(1.2)',
            opacity: 0.7
        }    
    },
    anchor: {
        padding: theme.spacing(1),
        '@media(max-width: 400px)': {
            padding: theme.spacing(0),
        }
    },
    body: {
        fontFamily: 'Poppins, sans-serif',
        color: 357676,
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



const Footer = () => {
    const classes = useStyles();
    return ( 
        <>
            <CssBaseline />
            <footer className={classes.root}>
                <div>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={classes.anchor}>
                        <img src={gitHubIcon} alt="instagram link icon" className={classes.icon}/>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={classes.anchor}>
                        <img src={linkedIn} alt="linkedin link icon" className={classes.icon}/>   
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={classes.anchor}>
                        <img src={twitter} alt="twitter link icon" className={classes.icon}/>
                    </a>
                </div>
                <Typography variant="body1" className={classes.body} data-testid="typography">
                    {`© ${new Date().getFullYear()} | Lenycode  | All Rights Reserved`}
                </Typography>
            </footer>
        </>
    );
}

export default Footer;