import React from 'react';
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(() => ({
  projectWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '200px',
    border: '1px solid black',
    oveflow: 'scroll',
    justifyContent: 'center'
  },
  projectTitle: {
    flex: '1',
    border: '5px solid blue',
  },
  imgWrapper: {
   flex: '2',
  border: '1px solid grey',

  },
  projectImg: {
   width: '100px',
   height: '50px',
  //  flex: '1',
   border: '1px solid red',
  },

}))


interface IProps {
  title: string;
  image: string;
  url: string;
}



const Project = ({title, image, url}: IProps) => {
  const classes = useStyles()

  // onclick, go to the project

  return (
    <div className={classes.projectWrapper}>
      <p className={classes.projectTitle}>{title}</p>
      <div className={classes.imgWrapper}>
        <a href={url}>
          <img className={classes.projectImg} src={image} alt={`PROJECT_IMAGE_${image}`} />
        </a>
      </div>
    </div>
  )
}

export default Project;