/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {About} from "./components/About";


export const Routes = ({props}) => {
    return (
        <Switch>
            <Route path={"/about"} component={About}/>
        </Switch>
    );
};


