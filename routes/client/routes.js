const routes = {
  getPage: getPage,
  main: {
    url: '/',
    pageTitle: 'Новости',
    pageLink: 'Главная',
    second: {
      url: 'about/',
      pageTitle: 'О депутате',
      pageLink: 'О депутате',
    },
    third: {
      url: 'todo/',
      pageTitle: 'Наказы',
      pageLink: 'Наказы',
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
      result = Object.assign({}, rootElem[propName]);
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
