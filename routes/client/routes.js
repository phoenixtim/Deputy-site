const routes = [
  {
    name: 'main',
    url: '/',
    pageTitle: 'Новости',
    pageLink: 'Главная',
    component: 'Site',
    indexComponent: 'Main',
    children: [
      {
        name: 'second',
        url: 'about/',
        pageTitle: 'О депутате',
        pageLink: 'О депутате',
        component: 'Second',
      },
      {
        name: 'third',
        url: 'todo/',
        pageTitle: 'Наказы',
        pageLink: 'Наказы',
        component: 'Third',
      },
    ],
  },
];
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
