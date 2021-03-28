import React, { useState } from 'react'
import Footer from '../../components/footer';
import Header from '../../components/header/';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import axios from 'axios';
import {useStyles} from '../../styles/contactStyles';
// import { createMuiTheme } from '@material-ui/core';
import toaster from '../../helpers/toasts';
import personnal_vector from "../../assets/images/Personnal_Vector.svg";
import subject_vector from "../../assets/images/Subject_Vector.svg";
// import config from '../../config/config';

// const { REACT_APP_BACKEND_URL } = config;

const Contact = () => {
  const classes = useStyles();
//   const theme = createMuiTheme();
  let history = useHistory();
  
//   const matches = useMediaQuery(theme.breakpoints.up('md'));
  
  const [values, setValues] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
  });
  
  const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const { name, email, subject, message } = values;
          
          if (name === '') {
              toaster('Name is required!', 'warn');
              return false;
          } else if (email === '') {
              toaster('Email is required!', 'warn');
              return false;
          } else if (subject === '') {
              toaster('Subject is required!', 'warn');
              return false;
          } else if (message === '') {
              toaster('Message is required!', 'warn');
              return false;
          } else {
              await axios.post(`${''}/inquiry`, {
                  name,
                  email,
                  subject,
                  message
              });
              toaster('Question submitted successfully!', 'success')
          setTimeout(() => {
              history.push(`/home`);
          }, 3000);    
          }
      } catch (error) {
          toaster(error, 'Internal server error');
      }
  }

    return (
        <>
        <Header />
        <div className={classes.pageContainer}>
        <Paper className={classes.paper}>
        <Card className={classes.pos}>
                        <h1 className={classes.h1}>Contact Me</h1>
                        <FormControl fullWidth className={classes.root} variant="outlined">
                            <InputLabel htmlFor="outlined-name" data-testid="name-label">Your Name</InputLabel>
                            <OutlinedInput className={classes.input}
                            id="outlined-name"
                            type='text'
                            value={values.name}
                            onChange={handleChange('name')}
                            inputProps={{'data-testid':"name-value"}} 
                            endAdornment={<InputAdornment position="end">
                        <img src={personnal_vector} alt="profile" style={{ width: '15px' }}/>
                            </InputAdornment>}
                            labelWidth={80}
                            />
                        </FormControl>
                        <FormControl fullWidth className={classes.root} variant="outlined">
                            <InputLabel htmlFor="outlined-email" data-testid="email-label">Your Email</InputLabel>
                            <OutlinedInput
                            id="outlined-email"
                            type='text'
                            value={values.email}
                            onChange={handleChange('email')}
                            inputProps={{'data-testid':"email-value"}} 
                            endAdornment={<InputAdornment position="end">@</InputAdornment>}
                            labelWidth={80}
                            />
                        </FormControl>
                        <FormControl fullWidth className={classes.root} variant="outlined">
                            <InputLabel htmlFor="outlined-subject" data-testid="subject-label">Subject</InputLabel>
                            <OutlinedInput
                            id="outlined-subject"
                            type='text'
                            value={values.subject}
                            onChange={handleChange('subject')}
                            inputProps={{'data-testid':"subject-value"}} 
                            endAdornment={<InputAdornment position="end">
                        <img src={subject_vector} alt="profile" style={{ width: '15px' }}/>
                            </InputAdornment>}
                            labelWidth={60}
                            />
                        </FormControl>
                        <FormControl  className={classes.root} variant="outlined">
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            className={classes.textField}
                            value={values.message}
                            onChange={handleChange('message')}
                        />
                        </FormControl>
                        <FormControl  className={classes.root} variant="outlined">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className={classes.action} 
                            value={values.name}
                            onClick={handleSubmit} 
                            data-testid="submit"
                        >Submit
                        </Button>
                        </FormControl>
                    </Card>
        </Paper>
        </div>
        <Footer />
        </>
    )
}

export default Contact;
