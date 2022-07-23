import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Project from './project';

const useStyles = makeStyles(() => ({
  projectsWrapper: {
    display: 'flex',
    backgroundColor: 'purple',
    height: '70vh',
  },
  projectHeader: {
    fontSize: '20px',
  },
  projectColumn: {
    display: 'flex',
    flex: '1',
    border: '1px solid yellow',
    flexFlow: 'column',
    overflowY: 'scroll',
  },
}))

const coleProjects = [
  {
    title: 'testProject',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
    url: 'test'
  },
  {
    title: 'testProject',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
    url: 'test'
  },
  {
    title: 'testProject',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
    url: 'test'
  },
  // {
  //   title: 'testProject',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
  //   url: 'test'
  // }
]

const collabProjects = [
{
  title: 'testProject',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
  url: 'test'
},
{
  title: 'testProject',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
  url: 'test'
},
{
  title: 'testProject',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
  url: 'test'
},
{
  title: 'testProject',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
  url: 'test'
},
{
  title: 'testProject',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
  url: 'test'
},
{
  title: 'testProject',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
  url: 'test'
},
{
  title: 'testProject',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
  url: 'test'
},
{
  title: 'testProject',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
  url: 'test'
},
]

const freemanProjects = [
  {
    title: 'Freeman\'s Seleucus Game',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
    url: 'seleucus'
  },
  {
    title: 'testProject',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
    url: 'test'
  },
  {
    title: 'testProject',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
    url: 'test'
  },
  {
    title: 'testProject',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Seleuco_I_2.JPG',
    url: 'test'
  }
]

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.projectsWrapper}>
      <div className={classes.projectColumn}>
        <p className={classes.projectHeader}>
          Cole's Projects
        </p>
        {coleProjects.map((project) => {
          return (
             <Project title={project.title} image={project.image} url= {project.url}/>
          )
        })}
      </div>
      <div className={classes.projectColumn}>
        <p className={classes.projectHeader}>
          Collaborative Projects
        </p>
        {collabProjects.map((project) => {
          return <Project title={project.title} image={project.image} url={project.url} />
        })}
      </div>
      <div className={classes.projectColumn}>
        <p className={classes.projectHeader}>
          Freeman's Projects
        </p>
        {freemanProjects.map((project) => {
          return <Project title={project.title} image={project.image} url={project.url} />
        })}

      </div>
    </div>
  )
}

export default Projects;