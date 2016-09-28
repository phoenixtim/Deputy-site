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
      about: {
        name: 'about',
        url: 'about/',
        pageTitle: 'О депутате',
        pageLink: 'О депутате',
      },
      todo: {
        name: 'todo',
        url: 'todo/',
        pageTitle: 'Наказы',
        pageLink: 'Наказы',
      },
      news: {
        name: 'news',
        url: 'news/',
        pageTitle: 'Новости',
        pageLink: 'Новости',
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
    let prop = route[propName];
    if (typeof(prop) !== 'object' ||
        Object.prototype.toString.call(prop) === '[object Array]') {
      continue;
    }

    subroutes.push(prop);
  }

  return subroutes;
}
