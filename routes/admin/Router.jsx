const Router = window.ReactRouter.Router;
const Route = window.ReactRouter.Route;
const IndexRoute = window.ReactRouter.IndexRoute;
const browserHistory = window.ReactRouter.browserHistory;

import Error404 from '../errors/404.jsx';

import routesModule from './routes.js';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      {getAppRoutes()}
    </Router>
  ),
  document.getElementById('site_container')
);

function getAppRoutes() {
  var appRoutes = constructRoutes(routesModule.routes);

  appRoutes.push(<Route path='*' component={Error404} key={'error404'}
    routesModule={routesModule} />);

  return appRoutes;
}

function constructRoutes(routes) {
  var constructedRoutes = [];

  routes.forEach(route => {
    let routeChildren = route.children ? constructRoutes(route.children) : [];

    constructedRoutes.push(<Route path={route.fullUrl} key={route.name}
      component={route.component} routesModule={routesModule}>
        {route.indexComponent ?
          <IndexRoute component={route.indexComponent}
            routesModule={routesModule} /> :
          null}
        {routeChildren}
      </Route>);
  });

  return constructedRoutes;
}
