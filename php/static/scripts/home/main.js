require.config({
  baseUrl: './static',
  paths: {
    ractive : 'node_modules/ractive/ractive',
    rvc: 'node_modules/rvc/rvc',
    leaflet: 'node_modules/leaflet/dist/leaflet',
    validate: 'node_modules/validate.js/validate',
  },
  waitSeconds: 60,
});

require([
  'rvc!components/app'
],function(TreeApp){

  new TreeApp({
    el: '.content'
  });

});
