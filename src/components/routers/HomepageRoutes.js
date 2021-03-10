import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../homepage/Homepage';

const HomepageRoutes = () => {
    return (
        <Switch>
            <Route path="/" component={Homepage} />
        </Switch>
    );
};

export default HomepageRoutes;
