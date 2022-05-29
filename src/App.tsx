import React from 'react';
import bon from './assets/bon.wav';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  app: {
    textAlign: 'center'
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '15vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  appLogo: {
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
  wrapper: {
    display: 'flex',
    backgroundColor: 'purple',
    minHeight: '100px',
    height: '300px',
  },
  coleSide: {
   flex: '1',
  },
  freemanSide: {
   flex: '1',
  },
}))

const App = () => {
  const classes = useStyles();
  const audio = new Audio(bon);
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Buddhist_Swastika_with_24_Beads.svg/2048px-Buddhist_Swastika_with_24_Beads.svg.png'} className={classes.appLogo} alt="logo" />
        <p>
          Freeman and Cole's Website!
        </p>
        <button onClick={() => {audio.play()}}>
          Home Music
        </button>
      </header>
      <body className={classes.wrapper}>
        <div className={classes.coleSide}>
          Coles Projects:
        </div>
        <div className={classes.freemanSide}>
          Freemans Projects:
        </div>
      </body>
      <footer>
        <p>
        © All rights and privilages reserved for the exclusive use of Freeman and Cole.
        </p>
      </footer>
    </div>
  );
}

export default App;
