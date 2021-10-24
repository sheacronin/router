import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Messages from './Messages';
import Profile from './Profile';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/messages" component={Messages} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
