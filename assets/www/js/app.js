
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  Parse.initialize("asitsg0cnXyDIqALjdGH4cfa94kUCHndl8vJSBFO", "L4o4ppzBe6jPMmygvi6HulGllREuTwwklXRvWWXV");
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
  .state('tab.songs', {
      url: '/browse',
      views: {
        'browse-songs': {
          templateUrl: 'templates/browse.html',
          controller: 'BrowseCtrl'
        }
      }
   })
   .state('tab.song-info', {
      url: '/browse/:songId',
      views: {
        'browse-songs': {
          templateUrl: 'templates/song-info.html',
          controller: 'SongInfoCtrl'
        }
      }
   })
   .state('tab.search', {
      url: '/search',
      views: {
        'search-songs': {
          templateUrl: 'templates/search.html',
          controller: 'SearchCtrl'
        }
      }
    })

    .state('tab.search-info', {
      url: '/search/:songId',
      views: {
        'search-songs': {
          templateUrl: 'templates/search-info.html',
          controller: 'SearchInfoCtrl'
        }
      }
    })

    .state('tab.song-edit', {
      url: '/edit/:songId',
      views: {
        'edit-song': {
          templateUrl:'templates/edit-info.html',
          controller: 'EditSongCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/browse');
  //$urlRouterProvider.otherwise('/tab/edit/2');
});
