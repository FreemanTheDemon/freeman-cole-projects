import React from 'react';
import Header from './header';
import Projects from './projects';
import Footer from './footer';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  main: {
    textAlign: 'center'
  },
}))

const App = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Header />
      <body>
        <Projects />
      </body>
      <Footer />
    </main>
  );
}

export default App;
