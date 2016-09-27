const Router = window.ReactRouter.Router;
const Route = window.ReactRouter.Route;
const IndexRoute = window.ReactRouter.IndexRoute;
const browserHistory = window.ReactRouter.browserHistory;

import Site from './Site.jsx';
import Error404 from '../errors/404.jsx';
import Main from './Main.jsx';
// import Second from './Second.jsx';
// import Third from './Third.jsx';

import routesModule from './routes.js';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path={routesModule.getPage('admin').fullUrl} component={Site} routesModule={routesModule}>
        <IndexRoute component={Main} routesModule={routesModule} />
        {/* <Route path={routesModule.getPage('second').url} component={Second} routesModule={routesModule} /> */}
        {/* <Route path={routesModule.getPage('third').url} component={Third} routesModule={routesModule} /> */}
        <Route path='*' component={Error404} routesModule={routesModule} />
      </Route>
    </Router>
  ),
  document.getElementById('site_container')
);
