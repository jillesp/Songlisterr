angular.module('songApp.controllers', [])

.controller('BrowseCtrl', function($scope, Songs, $location, $stateParams, sharedProperties) {
   $scope.songs = Songs.active();
   $scope.go = function(id) {
        sharedProperties.setProperty(id);
        $location.path('song/' + id + '/info');
   };

})

.controller('SongInfoCtrl', function($scope, $stateParams, Songs) {
  $scope.song = Songs.get($stateParams.songId);
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
  });

  $scope.editSong = function(id) {
      $location.path('song/' + id + '/edit');
  };
})

.controller('SongActionCtrl', function($scope, $stateParams, Songs, sharedProperties) {
  $scope.song = Songs.get(sharedProperties.getProperty());
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
  });
  $scope.delete = function (id) {
    deleteItem(id);
  };
})

.controller('SongCtrl', function($scope, sharedProperties) {
  $scope.sharedProperty = sharedProperties.getProperty();
  $scope.setProperty = sharedProperties.setProperty;
})

.controller('SongEditCtrl', function($scope, sharedProperties, Songs, $parse) {
  $scope.song = Songs.get(sharedProperties.getProperty());
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
  });

  $scope.sharedProperty = sharedProperties.getProperty();
  $scope.setProperty = sharedProperties.setProperty;

  $scope.saveEditSong = function() {
      var info = {
        title: $eval($scope.sTitle),
        artist: "LALALA"
      };

      saveEditSong(sharedProperties.getProperty(), info);
  };
})


