import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header/';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './LandingStyle';
// import LenyImage1 from '../../assets/images/Lenyim1.png';
import './style.css';
import MyImage from './Image';
import Typical from 'react-typical';


const Landing = () => {
    const classes = useStyles();
    return (
        <>
        <Header />
        <div className={classes.pageContainer}>
        <Typography className={classes.intro}>
        <Typical
        steps={['Hello', 2000,"I'm Leny", 2000]}
        loop= {Infinity}
        wrapper="h1"
      />
      <Typical
        steps={['Discover me,', 2000, 'Welcome to Lenycode:', 2000]}
        loop= {Infinity}
        wrapper="h2"
      />
           {/* <h1>Hello,</h1> 
          <br />
          <h1>Welcome to Lenycode:</h1>
          <h3>I develop software products...</h3> */}
        </Typography>
        <div className = {classes.avatar}>
        <MyImage />
        {/* <img src={LenyImage1} alt="LenyImage" className={classes.image1} effect='blur'/> */}
        {/* <img src={LenyImage1} alt="LenyImage" className={classes.image2}/> */}
        {/* <div className={classes.image2}>Hello</div> */}
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Landing;
