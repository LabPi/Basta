angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MapaCtrl', function($scope) {})

.controller('GruposCtrl', function($scope, Grupos, Usuarios) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.grupos = Grupos.all();
  $scope.usuario = Usuarios.get(-1);

  $scope.inscrever = function(grupo) {
    Grupos.inscrever(grupo.id, Usuarios.get(-1));
  };
})

.controller('GrupoDetailCtrl', function($scope, $stateParams, Grupos) {
  $scope.grupo = Grupos.get($stateParams.grupoId);
})

.controller('PerfilCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
