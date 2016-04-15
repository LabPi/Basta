angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Emendas) {

  $scope.all = Emendas.all();
  $scope.last = Emendas.last(10);

})

.controller('MapaCtrl', function($scope) {

})

.controller('GruposCtrl', function($scope, $ionicListDelegate, Grupos, Usuarios) {
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
    $ionicListDelegate.closeOptionButtons();
    Grupos.inscrever(grupo.id, Usuarios.get(-1));
  };

  $scope.notIn = function(grupo) {
    return $scope.usuario.id != 0 && !Grupos.contain($scope.usuario.id, grupo);
  };

})

.controller('GrupoDetailCtrl', function($scope, $stateParams, Grupos, Usuarios) {

  $scope.usuario = Usuarios.get(-1);

  $scope.grupo = Grupos.get($stateParams.grupoId);

  $scope.notIn = function() {
    return $scope.usuario.id != 0 && !Grupos.contain($scope.usuario.id, $scope.grupo);
  };

  $scope.inscrever = function(grupo) {
    Grupos.inscrever(grupo.id, Usuarios.get(-1));
  };
})

.controller('PerfilCtrl', function($scope, $state, Usuarios, LOGGED) {

  $scope.login = {email: '', senha: ''};

  $scope.usuario = Usuarios.get(-1);

  $scope.doLogin = function() {

    Usuarios.get(-1).id = 1;
    Usuarios.get(-1).nome = 'Fulano de Tal';
    Usuarios.get(-1).email = $scope.login.email;
    Usuarios.get(-1).cidade = 'Brasília';
    Usuarios.get(-1).uf = 'DF';

    LOGGED.b = true;

    $state.go('tab.dash');

  };

  $scope.doSave = function(frm) {

    Usuarios.get(-1).id = 1;
    Usuarios.get(-1).nome = $scope.usuario.nome;
    Usuarios.get(-1).email = $scope.usuario.email;
    Usuarios.get(-1).cidade = $scope.usuario.cidade;
    Usuarios.get(-1).uf = $scope.usuario.uf;

    LOGGED.b = true;

    $state.go('tab.dash');

  };

  $scope.settings = {
    enableFriends: true
  };

});
