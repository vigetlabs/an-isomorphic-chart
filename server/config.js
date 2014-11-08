var swig        = require('swig');
var path        = require('path');
var express     = require('express');
var compression = require('compression');

// Quick references to paths to clean up configuration
var assetsPath = path.resolve(__dirname, '..', 'assets');
var viewsPath = path.resolve(__dirname, '..', 'views');

// Alloted time for static caching
var hourly = 1000 * 60 * 60

module.exports = function(app) {
  // Add gzip compression. In an ideal world, this would be
  // handled by Apache or Nginx, however we don't have that luxury
  // on Heroku.
  app.use(compression());

  // Configure where static assets, such as the client-side
  // javascript payload lives.
  app.use(express.static(assetsPath, { maxAge: hourly }));

  // Configure views
  //
  // The swig templating engine is used on this project,
  // see ../views/index.html
  app.set('views', viewsPath);
  app.set('view engine', 'html');
  app.engine('html', swig.renderFile);
};
