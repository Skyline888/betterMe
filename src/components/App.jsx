import React from 'react';
import styles from './app.scss'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Main from "./main/Main";
import Error from "./main/Error";

export const App = React.memo(() => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/error" component={Error}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
});

export default App;
