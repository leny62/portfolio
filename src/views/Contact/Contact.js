import React from 'react'
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
import {useStyles} from '../../styles/contactStyles';
import personnal_vector from "../../assets/images/Personnal_Vector.svg";
import subject_vector from "../../assets/images/Subject_Vector.svg";


const Contact = () => {
  const classes = useStyles();

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
                            // value={values.message}
                            // onChange={handleChange('message')}
                        />
                        </FormControl>
                        <FormControl  className={classes.root} variant="outlined">
                        <Button variant="contained" color="primary" className={classes.action} data-testid="submit">Submit</Button>
                        </FormControl>
                    </Card>
        </Paper>
        </div>
        <Footer />
        </>
    )
}

export default Contact;
