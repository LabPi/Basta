angular.module('starter').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Brasília, Brasil",
      lat : -15.793376,
      lng : -47.884544
    },


  ];

  return locationsObj;

}]);
