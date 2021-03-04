import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../homepage/Homepage';

const HomepageRoutes = () => {
    return (
        <section className="section">
            <Switch>
                <Route path="/" component={Homepage} />
            </Switch>
        </section>
    );
};

export default HomepageRoutes;
