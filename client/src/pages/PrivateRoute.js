import React from 'react';
import { Route, Redirect} from "react-router-dom";

export default function PrivateRoute({component: Component, ...rest}){
    const a = true;
    return(
        <Route
            {...rest}
            render={props => (
                a ? 
                    <Component {...props} /> :
                    <Redirect to="/login" />
            )}
        />
    )
}