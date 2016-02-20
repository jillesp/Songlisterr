angular.module('songApp.controllers', [])

.controller('BrowseCtrl', function($scope, Songs, $location, $stateParams, sharedProperties) {
   $scope.songs = Songs.active();
   $scope.go = function(id) {
        sharedProperties.setProperty(id);
        $location.path('song/' + id + '/info');
   };
<<<<<<< HEAD

=======
>>>>>>> jilles-stable
})

.controller('SongInfoCtrl', function($scope, $stateParams, Songs, $location, $state) {
  $scope.song = Songs.get($stateParams.songId);
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
  });

  $scope.editSong = function(id) {
      $location.path('song/' + id + '/edit');
  };
<<<<<<< HEAD
})

.controller('SongActionCtrl', function($scope, $stateParams, Songs, sharedProperties) {
=======

  //console.log(Songs.get($stateParams.songId).setlistId[0].setlistName);
})

.controller('SongActionCtrl', function($scope, $stateParams, Songs, sharedProperties, $location) {
>>>>>>> jilles-stable
  $scope.song = Songs.get(sharedProperties.getProperty());
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
  });
  $scope.delete = function (id) {
    deleteItem(id);
  };
<<<<<<< HEAD
=======

  $scope.addToSetlist = function (id) {
    $location.path('song/' + sharedProperties.getProperty() + '/setlist');
  };
>>>>>>> jilles-stable
})

.controller('SongCtrl', function($scope, sharedProperties) {
  $scope.sharedProperty = sharedProperties.getProperty();
  $scope.setProperty = sharedProperties.setProperty;
<<<<<<< HEAD
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


=======
})

.controller('SongEditCtrl', function($scope, sharedProperties, Songs, $location, $state) {
  $scope.song = Songs.get(sharedProperties.getProperty());
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
  });

  $scope.sharedProperty = sharedProperties.getProperty();
  $scope.setProperty = sharedProperties.setProperty;

       $scope.model = { title: '' };
       $scope.form = {};

  $scope.saveEditSong = function() {
      var  info = new Object();
           info.title = $scope.model.title;
           info.artist = $scope.model.artist;
           info.albumName = $scope.model.albumName;
           info.key = $scope.model.key;
           info.albumArt = $scope.model.albumArt;
           info.youtube = $scope.model.youtube;
           info.spotify = $scope.model.spotify;

      saveEditSong(sharedProperties.getProperty(), info);

//    $state.reload();
//    $location.path('song/' + sharedProperties.getProperty() + '/info');
  };
})

.controller('SongAddToSetlistCtrl', function($scope, sharedProperties, Setlists, $location) {
  $scope.setlists = Setlists.all();
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
  });

  $scope.go = function(id) {
      addSongToSetlist(sharedProperties.getProperty(), id);
  }
//  $location.path('song/' + sharedProperties.getProperty() + '/action');
})

>>>>>>> jilles-stable
