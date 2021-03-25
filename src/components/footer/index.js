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
        '@media(max-width: 1024px)': {
            width: '99.9%',
            height: 60,
            zIndex: 5,
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative'
  
        },
          '@media(max-width: 920px)': {
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingTop: theme.spacing(2),
              position: 'relative'
          },
          '@media(max-width: 805px)': {
              justifyContent: 'space-between',
              flexDirection: 'row',
              position: 'relative'
          },
          '@media(max-width: 655px)': {
            justifyContent: 'space-between',
            flexDirection: 'row',
            position: 'relative'
          },
          '@media(max-width: 375px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
          },
    },
    icon: {
        width: 52,
        height: 42,
        padding: theme.spacing(1),
        "&:hover": {
            transform: 'scale(1.2)',
            opacity: 0.7
        },
        '@media(max-width: 375px)': {
            width: 35,
            height: 30,
            padding: theme.spacing(1),
            display: 'flex',
            flexDirection: 'row'

        },    
    },
    anchor: {
        padding: theme.spacing(1),
        '@media(max-width: 400px)': {
            padding: theme.spacing(0),
        },
        '@media(max-width: 375px)': {
            width: 35,
            height: 30,
            padding: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column'
        },    
    },
    body: {
        fontFamily: 'Poppins, sans-serif',
        color: 357676,
        alignItems: 'center',
        paddingRight: '25rem',
        '@media(max-width: 400px)': {
            justifyContent: 'space-around',
            paddingTop: 20,
            marginLeft: 25,
            color: 357676
        },
        '@media(max-width: 375px)': {
            fontSize: '12px',
            paddingRight: 0,
            paddingTop: 0,
            marginLeft: 0,
            marginRight: '1rem',
            marginBottom: '1rem',
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