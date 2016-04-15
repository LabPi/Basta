// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.constant('LOGGED', {b:false})

.config(function($compileProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider, LOGGED) {

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(http|https?|ftp|mailto|file|tel|ms-appdata|data):/);

    $ionicConfigProvider.views.swipeBackEnabled(false);

    $ionicConfigProvider.views.maxCache(0);

    $ionicConfigProvider.backButton.previousTitleText(false);

    //$ionicConfigProvider.backButton.text('Voltar').icon('ion-ios-arrow-left');
    $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-left');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.mapa', {
    url: '/mapa',
    views: {
      'tab-mapa': {
        templateUrl: 'templates/tab-mapa.html',
        controller: 'MapaCtrl'
      }
    }
  })

/*  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })*/

  .state('tab.grupos', {
      url: '/grupos',
      views: {
        'tab-grupos': {
          templateUrl: 'templates/tab-grupos.html',
          controller: 'GruposCtrl'
        }
      }
    })
    .state('tab.grupo-detail', {
      url: '/grupos/:grupoId',
      views: {
        'tab-grupos': {
          templateUrl: 'templates/grupo-detail.html',
          controller: 'GrupoDetailCtrl'
        }
      }
    })

  .state('tab.perfil', {
    url: '/perfil',
    views: {
      'tab-perfil': {
        templateUrl: function() {
          return LOGGED.b ? 'templates/tab-perfil.html' : 'templates/tab-login.html';
        },
        controller: 'PerfilCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
