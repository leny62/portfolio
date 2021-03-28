import React from 'react'
import Footer from '../../components/footer';
import Header from '../../components/header/';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './AboutStyle';
import Grid from '@material-ui/core/Grid';
import Skills from '../Skills';
import Portfolio from '../Portfolio/Portfolio';


const About = () => {
    const classes = useStyles();
    return (
        <>
        <Header />
        <div className={classes.pageContainer}>
        <div className={classes.about}>
            <h1 style= {{color: '#42645A', fontSize: '4rem'}}>
                I'M AN
                <br />
                INNOVATOR

            </h1>
        <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={4}>
          <h1 style= {{color: '#42645A'}}>WHERE I HAVE BEEN</h1>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eget in lectus dui risus, facilisi sagittis. Justo, eget velit in in nunc pharetra, porttitor morbi viverra. Ullamcorper urna, feugiat quam morbi quam amet, quisque adipiscing. Enim tortor vel tellus commodo libero, enim sagittis sed. Pharetra felis eget nulla est diam duis non.
          </Typography>
        </Grid>
        <Grid item xs={4}>
              <h1 style= {{color: '#42645A'}}>WHAT AM DOING</h1>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eget in lectus dui risus, facilisi sagittis. Justo, eget velit in in nunc pharetra, porttitor morbi viverra. Ullamcorper urna, feugiat quam morbi quam amet, quisque adipiscing. Enim tortor vel tellus commodo libero, enim sagittis sed. Pharetra felis eget nulla est diam duis non.
              </Typography>
        </Grid>
        <Grid item xs={4}>
              <h1 style= {{color: '#42645A'}}>WHAT I HOPE TO DO</h1>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eget in lectus dui risus, facilisi sagittis. Justo, eget velit in in nunc pharetra, porttitor morbi viverra. Ullamcorper urna, feugiat quam morbi quam amet, quisque adipiscing. Enim tortor vel tellus commodo libero, enim sagittis sed. Pharetra felis eget nulla est diam duis non.
              </Typography>
        </Grid>
      </Grid>
        </div>
        </div>
        <Skills />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'space-between',
        }}>
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
        </div>
        <Footer />
        </>
    )
}

export default About;
