import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  HomePage  from "./components/homePage/HomePage";

const Routing = () => {
    return <div>
        <Router>
          <Switch>
            <Route exact path="/home" component={HomePage} />
         
            </Switch>
        </Router>
    </div>;
}



export default Routing;