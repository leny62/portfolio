import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header/';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './LandingStyle';
// import LenyImage1 from '../../assets/images/Lenyim1.png';
import './style.css';
import MyImage from './Image';
import Box from '@material-ui/core/Box';
import Typical from 'react-typical';


const Landing = () => {
    const classes = useStyles();
    return (
        <>
        <Header />
        <div className={classes.pageContainer}>
        <Box className={classes.avatar}>
           <MyImage 
          //  className="image"
           className={classes.imagery}
            />
        </Box>
        <Typography className={classes.intro}>
        <h1>Hello,</h1>
        <Typical
        steps={["I'm Leny", 3000,"Welcome to lenycode", 3000]}
        loop= {Infinity}
        wrapper="h1"
      />
      <Typical
        steps={['I develop Software products,', 3000, 'I design creative arts!', 3000]}
        loop= {Infinity}
        wrapper="h2"
      />
        </Typography>
        </div>
        <Footer />
        </>
    )
}

export default Landing;
