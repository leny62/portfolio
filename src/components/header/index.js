import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import { NavLink } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import LenyCodeLogo from '../../assets/icons/LenycodeLogo1.png';

const LinksFnc = () => { 
    return [
    {
      url: "/",
      text: 'Home',
      isActive: false,
    },
    {
      url: "/about",
      text: 'About',
      isActive: false,
    },
    {
      url: "/blogs",
      text: 'Blogs',
      isActive: false,
    },
    {
      url: "/contact",
      text: 'Contact',
      isActive: false,
    }
  ];}





const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        background: theme.palette.common.white,
        color: theme.palette.common.black,
        justifyContent: 'space-around',
        width:'100%',
        height: 70,
        opacity: 1,
        alignItems: 'center',
        zIndex: 5,
        borderTop: '2px solid #E0E0E0',
        textDecoration: 'none',
        '@media(max-width: 1336px)': {
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'left',
          width: '100%',
          height: 70,
          position: 'relative'
      },
      '@media(max-width: 1305px) and (max-width: 664px)': {
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'left',
          width: '85%',
          height: 70,
          position: 'relative'

      },
      '@media(max-width: 1024px)  and (max-width: 664px)': {
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        width: '100%',
        height: 90,
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
      '@media(max-width: 600px)': {
          width: '100.3%', 
          justifyContent: 'space-between',
          flexDirection: 'row',
          position: 'relative'
      },
      '@media(max-width: 414px)': {
        width: '100%', 
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative'
    },
      '@media(max-width: 411px)': {
        width: '99.9%', 
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative'
    },
      '@media(max-width: 375px)': {
          width: '149.8%',
          justifyContent: 'space-between',
          flexDirection: 'row',
    },
    '@media(max-width: 360px)': {
      width: '154.7%',
    },
    '@media(max-width: 280px)': {
      width: '128%',
      justifyContent: 'space-between',
      flexDirection: 'row',
}
    },
    logo: {
      width: "10%",
      margin: 0,
      padding: 2,
      '@media(max-width: 1355px)': {
        justifyContent: 'center',
        height: '100px',
        paddingLeft: 10,
    },
    '@media(max-width: 375px)': {
      justifyContent: 'center',
      height: '100px',
      paddingLeft: '6px',
      paddingTop: '2px',
      paddingBottom: '8px'
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
        paddingLeft: 2,
        marginLeft: 2,
        color: '#42645A',
        '@media(max-width: 400px)': {
            padding: theme.spacing(0),
        }
    },
    pageLinks: {
        padding: theme.spacing(1),
        textDecoration: 'none',
        color: '#42645A',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'between-around',
        "&:hover": {
            transform: 'scale(1.4)',
            opacity: 0.7,
        },
        '@media(max-width: 400px)': {
            padding: theme.spacing(1),
        },
        '@media(max-width: 375px)': {
          padding: theme.spacing(1),
      }    
    },
    container: {
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        display: 'flex',
        justifyContent: 'space-between',
        margin: 40,
        color: '#42645A',
        textDecoration: 'none'
      },
      activeLink: {
        background: "#2196F3",
        color: theme.palette.common.white,
        width: 90,
        textAlign: "center",
        borderRadius: 4,
        textDecoration: 'none'
      },
    container1: {
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
    const links = LinksFnc();
    return ( 
        <AppBar
        style={{ height: "70px", boxShadow: "0 3px 6px rgba(0,0,0,0.1)" }}
        component="nav"
        className={classes.root}
      >
        <div
          className={classes.logo}
        >
          <img
            style={{
              margin: 0,
              padding: 0,
              width: "88px",
              height: "98%",
              cursor: "pointer"
            }}
            src={LenyCodeLogo}
            alt="Lenycode Logo"
          />
        </div>
          <List className={classes.container}>
            {links.map((link, index) => (
              <NavLink style = { {textDecoration: 'none', fontSize: '9rem'} }
                to={link.url}
                key={index}
                activeClassName="is-active"
                id="navlink"
                data-testid="navlink"
              >
                <ListItemText className={link.isActive ? classes.activeLink : classes.pageLinks} >
                  {link.text}
                </ListItemText>
              </NavLink>
            ))}
          </List>
      </AppBar>
    );
} 

export default Header;
