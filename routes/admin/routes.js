import Site from './Site.jsx';
import Main from './Main.jsx';

const routes = [
  {
    name: 'admin',
    url: '/admin/',
    pageTitle: 'Управление сайтом',
    pageLink: 'Управление',
    component: Site,
    indexComponent: Main,
    children: [
      {
        name: 'about',
        url: 'about/',
        component: Main,
        pageTitle: 'О депутате',
        pageLink: 'О депутате',
      },
      {
        name: 'todo',
        url: 'todo/',
        component: Main,
        pageTitle: 'Наказы',
        pageLink: 'Наказы',
      },
      {
        name: 'news',
        url: 'news/',
        component: Main,
        pageTitle: 'Новости',
        pageLink: 'Новости',
      },
    ],
  },
];

var routeNames = [];
constructFullUrlsAndRootChain(routes);

module.exports = {
  routes: routes,
  getPage: getPage,
  getSubroutes: getSubroutes,
};

function getPage(codename) {
  return findElement(codename);
}

function findElement(name, _routes = routes) {
  var result;

  for (let route of _routes) {
    if (route.name === name) {
      result = route;
      break;
    }

    if (route.children) {
      result = findElement(name, route.children);
      if (result) break;
    }
  }

  return result;
}

function constructFullUrlsAndRootChain(routes, constructedUrl = '',
    rootChain = []) {
  for (let route in routes) {
    let currentRoute = routes[route];
    if (routeNames.indexOf(currentRoute.name) !== -1) {
      throw 'Route names must be unique! Duplicated name is "' +
        currentRoute.name + '".';
    }

    currentRoute.fullUrl = constructedUrl + currentRoute.url;
    currentRoute.pathToPage = rootChain;

    if (currentRoute.children) {
      constructFullUrlsAndRootChain(currentRoute.children, currentRoute.fullUrl,
        currentRoute.pathToPage.concat(currentRoute.name));
    }
  }
}

function getSubroutes(routeName) {
  const route = getPage(routeName);
  return route ? route.children : undefined;
}
