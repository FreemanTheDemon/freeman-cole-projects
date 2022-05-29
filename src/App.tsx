import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  main: {
    textAlign: 'center'
  },
}))

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Header />
      <body>
        <Projects />
      </body>
      <Footer />
    </div>
  );
}

export default App;
