import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../app/App';
import HomepageRoutes from './HomepageRoutes';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth/user" component={App} />
                <Route exact path="/" component={HomepageRoutes} />
                <Route exact path="*" component={HomepageRoutes} />
                {/* replace this with a not-found component */}
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;
