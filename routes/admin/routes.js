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
constructFullUrls(routes, '');

module.exports = {
  routes: routes,
  getPage: getPage,
  getSubroutes: getSubroutes,
};

function getPage(codename) {
  return findElement(codename, routes, []);
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

function findElement(name) {
  var result;

  routes.forEach(route => {
    if (route.name === name) {

    }
  });


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
