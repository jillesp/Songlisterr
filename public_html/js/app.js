angular.module('songDroid', ['ionic', 'ngSanitize', 'songDroid.controllers', 'songDroid.services', 'ngAnimate', 'ui.bootstrap'])

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.navBar.alignTitle('center');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('browse', {
        url: "/browse",
        templateUrl: "templates/browse.html",
        controller: "BrowseCtrl"
    })

    .state('editSong', {
        url: "/editSong/:songId",
        templateUrl: "templates/editSong.html",
        controller: "SongEditCtrl"
    })

    .state('addSong', {
        url: "/addSong",
        templateUrl: "templates/addSong.html",
        controller: "AddSongCtrl"
    })

    .state('setlists', {
        url: "/setlists",
        templateUrl: "templates/setlists.html",
        controller: "SetlistsCtrl"
    })

    .state('viewSetlist', {
        url: "/viewSetlist/:setlistId",
        templateUrl: "templates/viewSetlist.html",
        controller: "SetlistItemsCtrl"
    })

    .state('addSetlist', {
        url: "/addSetlist",
        templateUrl: "templates/addSetlist.html",
        controller: "AddSetlistCtrl"
    })

    .state('editSetlist', {
        url: "/editSetlist/:setlistId",
        templateUrl: "templates/editSetlist.html",
        controller: "EditSetlistCtrl"
    })

  $urlRouterProvider.otherwise('setlists');
})

