const routes = [
  // {
  //   name: 'main',
  //   url: '/',
  //   pageTitle: 'Сайт',
  //   pageLink: 'Главная',
  //   children: [
  //   ],
  // },
  {
    name: 'admin',
    url: '/admin/',
    pageTitle: 'Управление сайтом',
    pageLink: 'Управление',
    component: 'Site',
    indexComponent: 'Main',
    children: [
      {
        name: 'about',
        url: 'about/',
        component: 'Site',
        pageTitle: 'О депутате',
        pageLink: 'О депутате',
      },
      {
        name: 'todo',
        url: 'todo/',
        component: 'Site',
        pageTitle: 'Наказы',
        pageLink: 'Наказы',
      },
      {
        name: 'news',
        url: 'news/',
        component: 'Site',
        pageTitle: 'Новости',
        pageLink: 'Новости',
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

// function findElement(codename, rootElem, rootChain) {
//   var result = undefined;
//
//   const props = Object.keys(rootElem);
//   for (let propName of props) {
//     if (typeof(rootElem[propName]) !== 'object') {
//       continue;
//     }
//
//     if (propName === codename) {
//       result = Object.assign({}, rootElem[propName], {pathToPage: rootChain});
//     } else if (Object.prototype.toString(rootElem[propName]) ===
//         '[object Object]') {
//
//       result = findElement(codename, rootElem[propName],
//         [...rootChain, propName]);
//     }
//
//     if (result) {
//       return result;
//     }
//   }
//
//   return result;
// }

function findElement(name, routes = routes) {
  var result;

  for (let route of routes) {
    if (route.name === name) {
      result = route;
      break;
    }

    if (route.children) {
      result = findElement(name, route.children);
      if (result) break;
    }
  });

  return result;
}

// function constructFullUrls(routes, constructedUrl) {
//   for (var route in routes) {
//     if (typeof(routes[route]) !== 'object' || !routes[route].url) {
//       continue;
//     }
//
//     routes[route].fullUrl = constructedUrl + routes[route].url;
//     constructFullUrls(routes[route], routes[route].fullUrl);
//   }
// }

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

// function getSubroutes(codename) {
//   var route = getPage(codename);
//   var subroutes = [];
//
//   const props = Object.keys(route);
//   for (let propName of props) {
//     let prop = route[propName];
//     if (typeof(prop) !== 'object' ||
//         Object.prototype.toString.call(prop) === '[object Array]') {
//       continue;
//     }
//
//     subroutes.push(prop);
//   }
//
//   return subroutes;
// }

function getSubroutes(routeName) {
  const route = getPage(routeName);
  return route ? route.children : undefined;
}
