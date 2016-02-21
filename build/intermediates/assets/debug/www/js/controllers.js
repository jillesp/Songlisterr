angular.module('songApp.controllers', [])

.controller('BrowseCtrl', function($scope, Songs, $location, $stateParams, sharedProperties) {

   $scope.songs = Songs.active();
   $scope.go = function(id) {
        sharedProperties.setProperty(id);
        $location.path('song/' + id + '/info');
   };

   $scope.addNewSong = function() {
        $location.path('/tab/browse/new');
   }
})

.controller('SetlistsCtrl', function($scope, Setlists, $location, $stateParams, sharedProperties2) {
   $scope.setlists = Setlists.active();
   $scope.addSetlist = function() {
        $location.path('/tab/setlists/new');
   };
    $scope.go = function(id) {
        sharedProperties2.setProperty(id);
        $location.path('/setlist/setlists/' + id);
    }
})

.controller('AddSetlistCtrl', function($scope, Setlists, $location, $stateParams, $state, Users) {
   $scope.setlists = Setlists.active();
   $scope.vocals = Users.roles("isVocals");
   var count = Setlists.count();

          $scope.model = { name: '' };
          $scope.form = {};

     $scope.verify = function() {

         $scope.req = $scope.form.newSetlist.$invalid;
         if($scope.form.newSetlist.$valid == true) {
             var info = new Object();

               if(!angular.isUndefinedOrNull($scope.model.name)) {
                 info.name = $scope.model.name;
               } else {
                 info.name = "";
               }

               if(!angular.isUndefinedOrNull($scope.model.vocals1)) {
                 info.vocals1 = $scope.model.vocals1;
               } else {
                 info.vocals1 = "Unassigned";
               }

               if(!angular.isUndefinedOrNull($scope.model.vocals2)) {
                 info.vocals2 = $scope.model.vocals2;
               } else {
                 info.vocals2 = "Unassigned";
               }

               if(!angular.isUndefinedOrNull($scope.model.guitar1)) {
                 info.guitar1 = $scope.model.guitar1;
               } else {
                 info.guitar1 = "Unassigned";
               }

               if(!angular.isUndefinedOrNull($scope.model.guitar2)) {
                 info.guitar2 = $scope.model.guitar2;
               } else {
                 info.guitar2 = "Unassigned";
               }

               if(!angular.isUndefinedOrNull($scope.model.bass)) {
                 info.bass = $scope.model.bass;
               } else {
                 info.bass = "Unassigned";
               }

               if(!angular.isUndefinedOrNull($scope.model.keyboard)) {
                 info.keyboard = $scope.model.keyboard;
               } else {
                 info.keyboard = "Unassigned";
               }

               if(!angular.isUndefinedOrNull($scope.model.drums)) {
                 info.drums = $scope.model.drums;
               } else {
                 info.drums = "Unassigned";
               }

               if(!angular.isUndefinedOrNull($scope.model.notes)) {
                 info.notes = $scope.model.notes;
               } else {
                 info.notes = "";
               }

               info.count = count++;

              saveNewSetlist(info);
              $state.go('tab.setlists', {}, {cache: false});
         }
     }
})

.controller('SetlistItemsCtrl', function($scope, Setlists, Songs, $location, $stateParams, sharedProperties) {
   $scope.title = getSetlist($stateParams.setlistId).setlistName;

   var objectId = getSetlist($stateParams.setlistId).objectId;
   $scope.songs = Setlists.listed(objectId);

   $scope.go = function(id) {
       sharedProperties.setProperty(id);
       $location.path('song/' + id + '/info');
   };

   var id = getSetlist($stateParams.setlistId).setlistId;
   $scope.editSetlist = function(id){
        $location.path('setlist/setlists/' + id + '/edit')
   }
})

.controller('AddSongCtrl', function($scope, Songs, $location, $stateParams, $state) {
   $scope.songs = Songs.all();

   var count = Songs.count();

       $scope.model = { title: '' };
       $scope.form = {};

       $scope.verify = function() {
//            console.log($scope.form.newSong.$invalid);
            $scope.req = $scope.form.newSong.$invalid;

            if($scope.form.newSong.$valid == true) {
                var  info = new Object();
                     info.title = $scope.model.songtitle;
                     info.artist = $scope.model.artist;
                     info.albumName = $scope.model.albumName;
                     info.key = $scope.model.key;

                     if(!angular.isUndefinedOrNull($scope.model.albumArt)){
                         info.albumArt = $scope.model.albumArt;
                     } else {
                         info.albumArt = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
                     }

                     info.youtube = $scope.model.youtube;
                     info.spotify = $scope.model.spotify;
                     info.count = count++;

                saveNewSong(info);
                $state.go('tab.songs', {}, {cache: false});
            }
       }
})

.controller('SongInfoCtrl', function($scope, $stateParams, Songs, $location, $state, sharedProperties) {
  $scope.song = Songs.get(sharedProperties.getProperty());
  $scope.editSong = function(id) {
      sharedProperties.setProperty(id);
      $location.path('song/' + id + '/edit');
  };
})

.controller('SongActionCtrl', function($scope, $stateParams, Songs, sharedProperties, $location) {
  $scope.song = Songs.get(sharedProperties.getProperty());
  $scope.delete = function (id) {
    deleteItem(id);
  };

  $scope.addToSetlist = function(id) {
    $location.path('song/' + id + '/add');
  };
})

.controller('SongCtrl', function($scope, sharedProperties) {
  $scope.sharedProperty = sharedProperties.getProperty();
  console.log(sharedProperties.getProperty());
})

.controller('SetlistCtrl', function($scope, sharedProperties2) {
  $scope.sharedProperty = sharedProperties2.getProperty();
  $scope.setProperty = sharedProperties2.setProperty;
})

.controller('SongEditCtrl', function($scope, sharedProperties, Songs, $location, $state) {
  $scope.song = Songs.get(sharedProperties.getProperty());

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
      $location.path('song/' + sharedProperties.getProperty() + '/info');
  };
})

.controller('SongAddToSetlistCtrl', function($scope, sharedProperties, Setlists, $location) {
  $scope.setlists = Setlists.active();
  $scope.go = function(id) {
      var update = addSongToSetlist(sharedProperties.getProperty(), id);
      $location.path('song/' + sharedProperties.getProperty() + '/action');
  }
})

.controller('SetlistActionCtrl', function($scope, $stateParams, Setlists, sharedProperties2, $location) {
  $scope.title = getSetlist(sharedProperties2.getProperty()).setlistName;
  $scope.song = Setlists.get(sharedProperties2.getProperty());

  var id = getSetlist(sharedProperties2.getProperty()).setlistId;
  $scope.viewDetails = function() {
     $location.path('setlist/setlists/' + sharedProperties2.getProperty() + '/info');
  }
  $scope.deleteItem = function() {
    deleteSetlist(id);
    $location.path('tab/setlists');
  }
})

.controller('SetlistDetailsCtrl', function($scope, $stateParams, Setlists, $location, $state, sharedProperties2) {
  console.log(sharedProperties2.getProperty());
  $scope.setlist = Setlists.get( sharedProperties2.getProperty() );

  $scope.editBandRoles = function(id) {
        $location.path('setlist/setlists/'+ id + '/roles');
  }
})

.controller('EditSetlistDetailsCtrl', function($scope, Setlists, $location, $stateParams, $state, sharedProperties2) {
   $scope.setlists = Setlists.get( sharedProperties2.getProperty() );

   var id = Setlists.get(sharedProperties2.getProperty()).setlistId;

          $scope.model = { name: '' };
          $scope.form = {};

     $scope.verify = function() {
         $scope.req = $scope.form.newSetlist.$invalid;
         if($scope.form.newSetlist.$valid == true) {
             var info = new Object();
                 info.name = $scope.model.name;

               if(!angular.isUndefinedOrNull($scope.model.notes)) {
                 info.notes = $scope.model.notes;
               } else {
                 info.notes = "";
               }
              saveEditedSetlist(info, id);
              $location.path('setlist/setlists/' + id + '/info');
         }
     }
})

.controller('EditSetlistRolesCtrl', function($scope, Setlists, $location, $stateParams, $state, sharedProperties2) {
   $scope.setlists = Setlists.get( sharedProperties2.getProperty() );

   var id = Setlists.get(sharedProperties2.getProperty()).setlistId;

          $scope.model = { name: '' };
          $scope.form = {};

     $scope.verify = function() {
         $scope.req = $scope.form.newSetlist.$invalid;
         if($scope.form.newSetlist.$valid == true) {
             var info = new Object();
                 info.name = $scope.model.name;

               if(!angular.isUndefinedOrNull($scope.model.notes)) {
                 info.notes = $scope.model.notes;
               } else {
                 info.notes = "";
               }
              saveEditedSetlist(info, id);
              $location.path('setlist/setlists/' + id + '/info');
         }
     }
})