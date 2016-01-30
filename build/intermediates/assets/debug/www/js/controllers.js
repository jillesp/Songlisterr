angular.module('starter.controllers', [])

.controller('BrowseCtrl', function($scope, Songs, $location, $stateParams) {
   $scope.songs = Songs.all();
   $scope.go = function(id) {
        $location.path('tab/browse/' + id);
   };

   $scope.edit = function(id) {
        $location.path('/tab/edit/' + id);
   };
})

.controller('SongInfoCtrl', function($scope, $stateParams, Songs) {
  $scope.song = Songs.get($stateParams.songId);
})

.controller('SearchCtrl', function($scope, Songs, $ionicScrollDelegate, $ionicHistory) {
  $scope.songs = Songs.all();
})

.controller('SearchInfoCtrl', function($scope, $stateParams, Songs) {
  $scope.song = Songs.get($stateParams.songId);
})

.controller('SearchInfoCtrl', function($scope, $stateParams, Songs) {
  $scope.song = Songs.get($stateParams.songId);
})