angular.module('songApp', ['ionic', 'songApp.controllers', 'songApp.services'])

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.navBar.alignTitle('center');
    $ionicConfigProvider.views.maxCache(0);
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})

.config(function($provide) {
    $provide.decorator('$state', function($delegate, $stateParams) {
        $delegate.forceReload = function() {
            return $delegate.go($delegate.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        };
        return $delegate;
    });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab', {
    url: "/tab",
    abstract: true,
    cache: false,
    templateUrl: "templates/tabs.html"
  })

      .state('tab.songs', {
          url: '/browse',
          cache: false,
          views: {
            'browse-songs': {
              templateUrl: 'templates/browse.html',
              controller: 'BrowseCtrl'
            }
          }
       })

      .state('tab.song-new', {
          url: '/browse/new',
          cache: false,
          views: {
            'browse-songs': {
              templateUrl: 'templates/new-song.html',
              controller: 'AddSongCtrl'
            }
          }
       })

      .state('song', {
           url: "/song",
           cache: false,
           abstract: true,
           templateUrl: "templates/song.html"
      })

          .state('song.song-info', {
              url: '/:songId/info',
              cache: false,
              views: {
                'song-info': {
                  templateUrl: 'templates/song-info.html',
                  controller: 'SongInfoCtrl'
                }
              }
          })
          .state('song.song-action', {
             url: '/:songId/action',
             cache: false,
             views: {
               'song-action': {
                 templateUrl: 'templates/song-action.html',
                 controller: 'SongActionCtrl'
               }
            }
          })
              .state('song.song-edit', {
                 url: '/:songId/edit',
                 cache: false,
                 views: {
                   'song-action': {
                     templateUrl: 'templates/edit-song.html',
                     controller: 'SongEditCtrl'
                   }
                 }
              })

              .state('song.song-setlist', {
                 url: '/:songId/add',
                 cache: false,
                 views: {
                   'song-action': {
                     templateUrl: 'templates/add-to-setlist.html',
                     controller: 'SongAddToSetlistCtrl'
                   }
                 }
              })

      .state('tab.setlists', {
          url: '/setlists',
          cache: false,
          views: {
            'setlists': {
              templateUrl: 'templates/setlists.html',
              controller: 'SetlistsCtrl'
            }
          }
      })

          .state('tab.setlist-new', {
              url: '/setlists/new',
              cache: false,
              views: {
                'setlists': {
                  templateUrl: 'templates/new-setlist.html',
                  controller: 'AddSetlistCtrl'
                }
              }
           })

          .state('setlist', {
               url: "/setlist",
               cache: false,
               abstract: true,
               templateUrl: "templates/setlist.html"
          })

              .state('setlist.setlists-items', {
                  url: '/setlists/:setlistId',
                  cache: false,
                  views: {
                    'setlist-info': {
                      templateUrl: 'templates/setlist-items.html',
                      controller: 'SetlistItemsCtrl'
                    }
                  }
              })

                  .state('setlist.setlists-actions', {
                      url: '/setlists/:setlistId/action',
                      cache: false,
                      views: {
                        'setlist-action': {
                          templateUrl: 'templates/setlist-action.html',
                          controller: 'SetlistActionCtrl'
                        }
                      }
                  })

                      .state('setlist.setlists-details', {
                          url: '/setlists/:setlistId/info',
                          cache: false,
                          views: {
                            'setlist-action': {
                              templateUrl: 'templates/setlist-details.html',
                              controller: 'SetlistDetailsCtrl'
                            }
                          }
                      })

                      .state('setlist.setlists-details-edit', {
                          url: '/setlists/:setlistId/edit',
                          cache: false,
                          views: {
                            'setlist-action': {
                              templateUrl: 'templates/edit-setlist.html',
                              controller: 'EditSetlistDetailsCtrl'
                            }
                          }
                      })

                      .state('setlist.setlists-roles-edit', {
                          url: '/setlists/:setlistId/roles',
                          cache: false,
                          views: {
                            'setlist-action': {
                              templateUrl: 'templates/edit-setlist.html',
                              controller: 'EditSetlistRolesCtrl'
                            }
                          }
                      })

  $urlRouterProvider.otherwise('tab/setlists');
});
