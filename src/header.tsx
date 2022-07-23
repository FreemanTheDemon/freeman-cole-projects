import React, { useRef, useState } from 'react';
import bon from './assets/bon.wav';
import playImg from './assets/play.png';
import pauseImg from './assets/pause.png';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#282c34',
    minHeight: '15vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  logo: {
    marginLeft: '10vh',
    height: '10vmin',
    pointerEvents: 'none',
    animation: '$rotate infinite 20s linear',
  },
  '@keyframes rotate': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  },
  title: {
    color: 'goldenrod',
    fontSize: '5vh',
  },
  button: {
    marginRight: '10vh',
    width: '10vh',
    height: '10vh',
    borderRadius: '100%',
    borderWidth: '0',
  },
  playPause: {
    width: '10vh',
    height: '10vh',
  },
}))


const Header = () => {
  const classes = useStyles();
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(new Audio(bon));

  const play = () => {
    setPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };
  return (
    <div className={classes.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Buddhist_Swastika_with_24_Beads.svg/2048px-Buddhist_Swastika_with_24_Beads.svg.png' className={classes.logo} alt="logo" />
      <p className={classes.title}>
        Freeman and Cole's Website!
      </p>
      <button className={classes.button} onClick={() =>
        playing ? pause() : play()
      }>
        <img className={classes.playPause} src={playing ? pauseImg : playImg} />
      </button>
    </div>
  )
}

export default Header;