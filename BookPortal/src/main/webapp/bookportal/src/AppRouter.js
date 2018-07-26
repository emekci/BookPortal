import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Word from "./Word";
import Links from "./Links";
import App from "./App";
import SearchBooks from "./SearchBooks";
const AppRouter = ()=>(
<Switch>
    <Route exact path="/" render={() => <Redirect replace to="links" />} />
    <Route path="/links" component={Links}/>
    <Route path="/word" component={Word}/>
    <Route path="/searchbooks" component={SearchBooks}/>
  
    </Switch>
);
export default AppRouter;