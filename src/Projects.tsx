import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  projectWrapper: {
    display: 'flex',
    backgroundColor: 'purple',
    height: '70vh',
  },
  projectHeader: {
    fontSize: '20px',
  },
  projectColumn: {
    flex: '1',
  },
}))

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.projectWrapper}>
      <div className={classes.projectColumn}>
        <p className={classes.projectHeader}>
          Cole's Projects
        </p>
      </div>
      <div className={classes.projectColumn}>
        <p className={classes.projectHeader}>
          Collaborative Projects
        </p>
      </div>
      <div className={classes.projectColumn}>
        <p className={classes.projectHeader}>
          Freeman's Projects
        </p>
      </div>
    </div>
  )
}

export default Projects;