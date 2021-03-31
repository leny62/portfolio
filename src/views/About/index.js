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

    const projects = [{
      title: 'Introducing Acta!',
      subheader: 'January 2021',
      avatar: 'A',
      image: 'https://media.giphy.com/media/UOLONN3GYFN97qi30T/giphy.gif',
      description: 'Acta is a mobile and web platform that helps to display more diverse views on the social media platform for all to see and discuss.',
      overview: 'overview:',
      body: 'Traditional news and social media applications profit through ad revenue and clicks this means that their suggestion algorithms are wired to be based on the consumers previous choices, inadvertently causing polarisation on any and every topic as people are fed a stream of information agreeing to their views, no matter how misinformed or illogical these views are. Our social and educational platform bridges this divide by suggesting sources with varied perceptions, in order to broaden perspectives and encourage discussion between those who may hold polarised opinions.'
    },
    {
      title: 'Introducing Barefoot Nomad!',
      subheader: 'April 2021',
      avatar: 'B',
      image: 'https://media.giphy.com/media/8HvKKrbNtlMOAde6YC/giphy.gif',
      description: 'Barefoot is a mobile and web platform that helps to display more diverse views on the social media platform for all to see and discuss.',
      overview: 'overview:',
      body: 'Traditional news and social media applications profit through ad revenue and clicks this means that their suggestion algorithms are wired to be based on the consumers previous choices, inadvertently causing polarisation on any and every topic as people are fed a stream of information agreeing to their views, no matter how misinformed or illogical these views are. Our social and educational platform bridges this divide by suggesting sources with varied perceptions, in order to broaden perspectives and encourage discussion between those who may hold polarised opinions.'
    },
    {
      title: 'YELLS',
      subheader: 'February 2021',
      avatar: 'Y',
      image: 'https://media.giphy.com/media/UENluevfip28cv01sD/giphy.gif',
      description: 'YELLS is a mobile and web platform that helps to display more diverse views on the social media platform for all to see and discuss.',
      overview: 'overview:',
      body: 'Traditional news and social media applications profit through ad revenue and clicks this means that their suggestion algorithms are wired to be based on the consumers previous choices, inadvertently causing polarisation on any and every topic as people are fed a stream of information agreeing to their views, no matter how misinformed or illogical these views are. Our social and educational platform bridges this divide by suggesting sources with varied perceptions, in order to broaden perspectives and encourage discussion between those who may hold polarised opinions.'
    }
  ];
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
        <Grid container spacing={3} className={classes.grid} my={100}>
        <Grid item xs={4} sm={12} md={4}>
          <h1 style= {{color: '#42645A'}}>WHERE I HAVE BEEN</h1>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eget in lectus dui risus, facilisi sagittis. Justo, eget velit in in nunc pharetra, porttitor morbi viverra. Ullamcorper urna, feugiat quam morbi quam amet, quisque adipiscing. Enim tortor vel tellus commodo libero, enim sagittis sed. Pharetra felis eget nulla est diam duis non.
          </Typography>
        </Grid>
        <Grid item xs={4} sm={6} md={4}>
              <h1 style= {{color: '#42645A'}}>WHAT AM DOING</h1>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eget in lectus dui risus, facilisi sagittis. Justo, eget velit in in nunc pharetra, porttitor morbi viverra. Ullamcorper urna, feugiat quam morbi quam amet, quisque adipiscing. Enim tortor vel tellus commodo libero, enim sagittis sed. Pharetra felis eget nulla est diam duis non.
              </Typography>
        </Grid>
        <Grid item xs={4} sm={6} md={4}>
              <h1 style= {{color: '#42645A'}}>WHAT I HOPE TO DO</h1>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo eget in lectus dui risus, facilisi sagittis. Justo, eget velit in in nunc pharetra, porttitor morbi viverra. Ullamcorper urna, feugiat quam morbi quam amet, quisque adipiscing. Enim tortor vel tellus commodo libero, enim sagittis sed. Pharetra felis eget nulla est diam duis non.
              </Typography>
        </Grid>
      </Grid>
        </div>
        </div>
        <Skills />
        <div style= {{color: '#42645A', fontSize: '2rem', alignItems: 'center', marginLeft: '530px', marginBottom: '-20px'}}>
        <h1>
                PORTFOLIO
        </h1>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'space-between',
        }}>
        {
          projects.map(project => {
            return( <Portfolio projects={project} /> )
          })
        }
        </div>
        <Footer />
        </>
    )
}

export default About;
