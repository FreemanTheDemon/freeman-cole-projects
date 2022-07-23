import React from 'react';
import clsx from 'clsx';
import jesusImg from './assets/o_jerusalem.png'
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: "fixed",
    left: "0",
    bottom: "0",
    width: '100%',
    height: '20vh',
  },
  footerItem: {
    flex: '1'
  },
  flipImage: {
    transform: 'scaleX(-1)'
  },
  footerImage: {
    maxWidth: '100px',
    height: '100px'
  }
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <img className={clsx(classes.footerItem, classes.footerImage)} src={jesusImg} />
      <p>
        ©2022 All rights and privileges belong exclusively to Freeman and Cole.
      </p>
      <img className={clsx(classes.footerItem, classes.flipImage, classes.footerImage)} src={jesusImg} />
    </div>
  )
}

export default Footer;