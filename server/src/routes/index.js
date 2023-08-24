const express = require('express');
const booksRoute = require('./books.route');
const docsRoute = require('./docs.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/api',
    route: booksRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

devRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
