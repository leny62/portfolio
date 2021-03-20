import React from 'react'
import Paper from '@material-ui/core/Paper';
import { useStyles } from './skillStyle';
import JavascriptLogo from '../../assets/images/javascriptLogo.png';
import angularJsLogo from '../../assets/images/angularJsLogo.png';
import reactJsLogo from '../../assets/images/reactJsLogo.png';
import nodeJsLogo from '../../assets/images/nodejsLogo.png';
import javaLogo from '../../assets/images/javaLogo.png';
import Active from '../Skills/progress/Active';
import NotActive from '../Skills/progress/NotActive'
import './progress/style.css';


const Skills = () => {
  const classes = useStyles();

    return (
        <>
        <div className={classes.pageContainer}>
        <Paper className={classes.paper}>
         <div className='main'>
         <img className='logo' src={JavascriptLogo} alt='Javascript'/>
         <Active />
         <Active />
         <Active />
         <Active /> <Active />
         <NotActive />
         <NotActive />
         <NotActive />
         <NotActive /> <NotActive />
         </div>
         <div className='main'>
         <img className='logo' src={angularJsLogo} alt='Javascript'/>
         <Active />
         <Active />
         <Active />
         <Active /> <Active />
         <NotActive />
         <NotActive />
         <NotActive />
         <NotActive /> <NotActive />
         </div>
         <div className='main'>
         <img className='logo' src={reactJsLogo} alt='Javascript'/>
         <Active />
         <Active />
         <Active />
         <Active /> <Active />
         <NotActive />
         <NotActive />
         <NotActive />
         <NotActive /> <NotActive />
         </div>
         <div className='main'>
         <img className='logo' src={nodeJsLogo} alt='Javascript'/>
         <Active />
         <Active />
         <Active />
         <Active /> <Active />
         <NotActive />
         <NotActive />
         <NotActive />
         <NotActive /> <NotActive />
         </div>
         <div className='main'>
         <img className='logo'  src={javaLogo} alt='Javascript'/>
         <Active />
         <Active />
         <Active />
         <Active /> <Active />
         <NotActive />
         <NotActive />
         <NotActive />
         <NotActive /> <NotActive />
         </div>
        </Paper>
        </div>
        </>
    )
}

export default Skills;
