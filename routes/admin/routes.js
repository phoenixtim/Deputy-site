const routes = {
  getPage: getPage,
  getSubroutes: getSubroutes,
  main: {
    name: 'main',
    url: '/',
    pageTitle: 'Сайт',
    pageLink: 'Главная',
    admin: {
      name: 'admin',
      url: 'admin/',
      pageTitle: 'Управление сайтом',
      pageLink: 'Управление',
      second: {
        name: 'second',
        url: 'about/',
        pageTitle: 'О депутате',
        pageLink: 'О депутате',
      },
      third: {
        name: 'third',
        url: 'todo/',
        pageTitle: 'Наказы',
        pageLink: 'Наказы',
      },
    },
  },
};
constructFullUrls(routes, '');

module.exports = routes;

function getPage(codename) {
  return findElement(codename, routes, []);
}

function findElement(codename, rootElem, rootChain) {
  var result = undefined;

  const props = Object.keys(rootElem);
  for (let propName of props) {
    if (typeof(rootElem[propName]) !== 'object') {
      continue;
    }

    if (propName === codename) {
      result = Object.assign({}, rootElem[propName], {pathToPage: rootChain});
    } else if (Object.prototype.toString(rootElem[propName]) ===
        '[object Object]') {

      result = findElement(codename, rootElem[propName],
        [...rootChain, propName]);
    }

    if (result) {
      return result;
    }
  }

  return result;
}

function constructFullUrls(routes, constructedUrl) {
  for (var route in routes) {
    if (typeof(routes[route]) !== 'object' || !routes[route].url) {
      continue;
    }

    routes[route].fullUrl = constructedUrl + routes[route].url;
    constructFullUrls(routes[route], routes[route].fullUrl);
  }
}

function getSubroutes(codename) {
  var route = getPage(codename);
  var subroutes = [];

  const props = Object.keys(route);
  for (let propName of props) {
    if (typeof(route[propName]) !== 'object') {
      continue;
    }

    subroutes.push(route[propName]);
  }

  return subroutes;
}
