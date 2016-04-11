angular.module('songDroid.controllers', [])

.controller('BrowseCtrl', function($scope, Songs, $location, $stateParams, sharedProperties, $ionicSideMenuDelegate, $filter, $state) {

    $scope.songs = Songs.active();
    $scope.isActiveOne = true;
    
          $scope.model = { sortie: '' };
          $scope.form = {};
          $scope.sortReverse  = false;
          $scope.sortType = 'songId';

     $scope.verify = function() {
        if($scope.model.sortie == "title"){
          $scope.sortType = 'songTitle';
        }else if($scope.model.sortie == "artist"){
          $scope.sortType = 'songArtist';
        }else if($scope.model.sortie == "album"){
          $scope.sortType = 'songAlbum';
        }else if($scope.model.sortie == "created"){
          $scope.sortType = 'songId';
        }
        $state.reload();
     }

    $scope.addNewSong = function() {
      $state.go('addSong');
    }

    $scope.delete = function(id) {
        deleteItem(id);
        $state.reload();
    }

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.edit = function(id) {
       sharedProperties.setProperty(id);
       $location.path('/editSong/' + id);
    };

    $scope.goSongs = function() {
      $state.go('browse');
    }

    $scope.goSetlists = function() {
      $state.go('setlists');
    }
})

.controller('SetlistsCtrl', function($scope, Setlists, $location, $stateParams, sharedProperties2, $ionicSideMenuDelegate, $state) {
   $scope.setlists = Setlists.active();
   $scope.title = Setlists.get(sharedProperties2.getProperty().setlistName);

    $scope.goSongs = function() {
      $state.go('browse');
    }

    $scope.edit = function(id) {
      sharedProperties2.setProperty(id);
      $location.path('/editSetlist/' + id)
    }

    $scope.goSetlists = function() {
      $state.go('setlists');
    }

    $scope.toggleLeft = function() {  
      $ionicSideMenuDelegate.toggleLeft();
    };
          $scope.model = { sortie: '' };
          $scope.form = {};
          $scope.sortReverse  = false;
          $scope.sortType = 'setlistName';

     $scope.verify = function() {
        if($scope.model.sortie == "title"){
          $scope.sortType = 'setlistName';
          $scope.sortReverse  = false;
        }else if($scope.model.sortie == "size"){
          $scope.sortType = 'setlistSongs.length';
          $scope.sortReverse  = false;
        }else if($scope.model.sortie == "created"){
          $scope.sortType = 'setlistId';
          $scope.sortReverse  = true;
        }
        $location.path('tab/setlists');
     }

   $scope.addSetlist = function() {
        $state.go('addSetlist');
   };

    $scope.go = function(id) {
        sharedProperties2.setProperty(id);
        $location.path('/tab/setlists/' + id +'/items');
    }

    $scope.view = function(id) {
        sharedProperties2.setProperty(id);
        $location.path('/viewSetlist/' + id);
    }

    $scope.practice = function(){
        var pin = pinSetlist(sharedProperties2.getProperty());
        $location.path('tab/practice');
    }

    $scope.delete = function(id) {
        deleteSetlist(id);
        $state.reload();
    }

})

.controller('AddSetlistCtrl', function($scope, Setlists, $location, $stateParams, $state, Users) {
   $scope.setlists = Setlists.active();

   var count = Setlists.count();

          $scope.model = { name: '' };
          $scope.form = {};

     $scope.verify = function() {
         $scope.req = $scope.form.newSetlist.$invalid;
         if($scope.form.newSetlist.$valid == true) {
             var info = new Object();
               
              info.name = $scope.model.name;
              info.youtube = $scope.model.youtube;
              info.spotify = $scope.model.spotify;
              info.others = $scope.model.others;

               if(!angular.isUndefinedOrNull($scope.model.notes)) {
                 info.notes = $scope.model.notes;
               } else {
                 info.notes = "";
               }

               info.count = count++;

              saveNewSetlist(info);
              $state.go('setlists', {}, {cache: false});
         }
     }
})

.controller('SetlistItemsCtrl', function($scope, Songs, Setlists, $location, $stateParams, sharedProperties, sharedProperties2, $ionicSideMenuDelegate, $filter, $state, $uibModal) {
   $scope.title = getSetlist(sharedProperties2.getProperty()).setlistName;
   var objectId = getSetlist(sharedProperties2.getProperty()).objectId;
   var id = getSetlist(sharedProperties2.getProperty()).setlistId;

   $scope.songs = Setlists.listed(objectId);

          $scope.model = { sortie: '' };
          $scope.form = {};
          $scope.sortReverse  = false;
          $scope.sortType = 'songId';

   $scope.delete = function(songId) {
      spliceFromSetlist(id, songId);
      $state.reload();
   }

    $scope.addSong = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl'
      });

      modalInstance.result.then(function(songId) {
          var setlistId = Setlists.get(sharedProperties2.getProperty()).setlistId;
          addSongToSetlist(songId, setlistId)
          $state.reload();
      })
    }

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.goSongs = function() {
      $state.go('browse');
    }

    $scope.goSetlists = function() {
      $state.go('setlists');
    }

    $scope.edit = function(song) {
       sharedProperties.setProperty(song);
       $location.path('/editSong/' + song);
    };
})

.controller('AddSongCtrl', function($scope, Songs, $location, $stateParams, $state, $ionicSideMenuDelegate) {
   $scope.songs = Songs.all();
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.goSongs = function() {
      $state.go('browse');
    }

    $scope.goSetlists = function() {
      $state.go('setlists');
    }
   var count = Songs.count();

       $scope.model = { title: '' };
       $scope.form = {};

       $scope.verify = function() {
            $scope.req = $scope.form.newSong.$invalid;

            if($scope.form.newSong.$valid == true) {
                var  info = new Object();
                     info.title = $scope.model.songtitle;
                     info.artist = $scope.model.artist;

                     if(!angular.isUndefinedOrNull($scope.model.albumName)){
                         info.albumName = $scope.model.albumName;
                     } else {
                         info.albumName = "Unknown";
                     }

                     info.key = $scope.model.key;

                     if(!angular.isUndefinedOrNull($scope.model.albumArt)){
                         info.albumArt = $scope.model.albumArt;
                     } else {
                         info.albumArt = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
                     }

                     info.youtube = $scope.model.youtube;
                     info.spotify = $scope.model.spotify;
                     info.others = $scope.model.others;
                     info.sheet = $scope.model.sheet;
                     info.count = count++;

                saveNewSong(info); 
                $state.go('browse');
            }
       }
})

.controller('SongInfoCtrl', function($scope, $stateParams, Songs, $location, $state, sharedProperties) {
  $scope.song = Songs.get(sharedProperties.getProperty());

  songs = Songs.get(sharedProperties.getProperty());
  $scope.editSong = function(id) {
      $location.path('song-edit/' + id + '/edit-info');
  };
  $scope.back = function() {
    $location.path('tab/'+sharedProperties.getProperty()+'/landing');
  }
})

.controller('SongLandingCtrl', function($scope, $stateParams, Songs, $location, $state, sharedProperties, $window, $sanitize, $sce, $ionicScrollDelegate, $ionicLoading, $timeout, $anchorScroll, $ionicPopover) {

  $scope.song = Songs.get(sharedProperties.getProperty());
  $scope.go = function(id) {
      $location.path('song/' + id + '/info');
  };

  $scope.back = function() {
    $location.path('tab/browse');
  }
  $scope.goSpotify = function() {
    var url = Songs.get(sharedProperties.getProperty()).songSpotify;
    console.log(url);
    $window.open(url);
  };

  $scope.transposeUp = function(id) {
    transposeUp(id);
    $state.reload();
  }

  $scope.transposeDown = function(id) {
    transposeDown(id);
    $state.reload();
  }

  var sections = Songs.get(sharedProperties.getProperty()).songSections;

  try {
     sections = JSON.parse(sections);
  } catch(e) {
    console.log("Warning: This song has no music sheet.");
  };

  $scope.sections = sections;
  $scope.doJump = false;
  $scope.jump = function() {
    if($scope.doJump == false){
     $scope.doJump = true;
    } else {
     $scope.doJump = false;
    }
  };

  $scope.to_trusted = function(html_code) {
    return $sce.trustAsHtml(html_code);
  };


  $scope.model = { section: '' };
  $scope.form = {};
  $scope.model.chordsVisible = true;

 $scope.toggleChords = function() {
    if($scope.model.chordsVisible == true){
      $scope.model.chordsVisible = false;
    } else {
      $scope.model.chordsVisible = true;
    }
 }
 $scope.jumpTo = function() {
    var loc = $scope.model.section;
    $location.hash(loc);
    $ionicScrollDelegate.scrollBy(0, -60, true);

    $scope.doJump = false;
 };

   $scope.prevSong= function() {
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0,
      duration: 800
    });

    var storage = [];
    var songs = Songs.active();
    angular.forEach(songs, function(song){
        storage.push(song.songId);
    });
    console.log(JSON.stringify(storage));
      var current = Songs.get(sharedProperties.getProperty()).songId;
      var index = storage.indexOf(current);
          index = index + 1;
      console.log("Next index:" + index);

      if(index < storage.length && index >= 0){   
        var nextSong = storage[index];
        sharedProperties.setProperty(nextSong);
        $location.path('tab/' + nextSong + '/landing');
      } else {
        var nextSong = storage[0];
        sharedProperties.setProperty(nextSong);
        $location.path('tab/' + nextSong + '/landing');
        console.log("Index defaulted to " + storage.length - 1);
      }
   };  

   $scope.nextSong = function() {
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0,
      duration: 800
    });
    var storage = [];
    var songs = Songs.active();
    angular.forEach(songs, function(song){
        storage.push(song.songId);
    });    
      var current = Songs.get(sharedProperties.getProperty()).songId;
      var index = storage.indexOf(current);
          index = index - 1;
      console.log("Next index:" + index);

      if(index >= 0 && index < storage.length){   
        var nextSong = storage[index];
        sharedProperties.setProperty(nextSong);
        $location.path('tab/' + nextSong + '/landing');
      } else {
        var nextSong = storage[storage.length - 1];
        sharedProperties.setProperty(nextSong);
        $location.path('tab/' + nextSong + '/landing');
        console.log("Index defaulted to 0.");
      }
   };  


})

.controller('SongActionCtrl', function($scope, $stateParams, Songs, sharedProperties, $location, $window) {
  $scope.song = Songs.get(sharedProperties.getProperty());
  $scope.delete = function (id) {
    deleteItem(id);
  };

  $scope.addToSetlist = function(id) {
    $location.path('song/' + id + '/add');
  };
  $scope.goYoutube = function() {
    var url = Songs.get(sharedProperties.getProperty()).songYoutube;
    console.log(url);
    $window.open(url);
  };
  $scope.goSpotify = function() {
    var url = Songs.get(sharedProperties.getProperty()).songSpotify;
    console.log(url);
    $window.open(url);
  };

  $scope.goOthers = function() {
    var url = Songs.get(sharedProperties.getProperty()).songOthers;
    console.log(url);
    $window.open(url);
  };  
  $scope.back = function() {
    $location.path('tab/'+sharedProperties.getProperty()+'/landing');
  }

})

.controller('SongEditActionCtrl', function($scope, $stateParams, Songs, sharedProperties, $location) {
  $scope.song = Songs.get(sharedProperties.getProperty());

  $scope.go = function(id) {
    $location.path('song-edit/' + id + '/sheet-music');
  }
})

.controller('SongCtrl', function($scope, sharedProperties) {
  $scope.sharedProperty = sharedProperties.getProperty();
  console.log(sharedProperties.getProperty());
})

.controller('SetlistCtrl', function($scope, sharedProperties2) {
  $scope.sharedProperty = sharedProperties2.getProperty();
  $scope.setProperty = sharedProperties2.setProperty;
})

.controller('SongEditCtrl', function($scope, sharedProperties, Songs, $location, $state, $ionicSideMenuDelegate) {
  $scope.song = Songs.get(sharedProperties.getProperty());
  var song = Songs.get(sharedProperties.getProperty());
  $scope.title = song.songTitle;

    $scope.goSongs = function() {
      $state.go('browse');
    }

    $scope.goSetlists = function() {
      $state.go('setlists');
    }
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };


       $scope.model = { title: '' };
       $scope.form = {};

       $scope.model.title = song.songTitle;
       $scope.model.artist = song.songArtist;
       $scope.model.albumName = song.songAlbumName;
       $scope.model.key = song.songKey;
       $scope.model.albumArt = song.songAlbum;
       $scope.model.youtube = song.songYoutube;
       $scope.model.spotify = song.songSpotify;
       $scope.model.others = song.songOthers;
       $scope.model.sheet = song.songSheet;

  $scope.saveEditSong = function() {
      var  info = new Object();
           info.title = $scope.model.title;
           info.artist = $scope.model.artist;
           info.albumName = $scope.model.albumName;
           info.key = $scope.model.key;
           info.albumArt = $scope.model.albumArt;
           info.youtube = $scope.model.youtube;
           info.spotify = $scope.model.spotify;
           info.others = $scope.model.others;
           info.sheet = $scope.model.sheet;

      saveEditSong(sharedProperties.getProperty(), info);
      $state.go('browse');
  };

})

.controller('SongAddToSetlistCtrl', function($scope, sharedProperties, Setlists, $location) {
  $scope.setlists = Setlists.active();
  $scope.back = function() {
    $location.path('song/' + sharedProperties.getProperty() + '/action');
  }
  $scope.go = function(id) {
      var update = addSongToSetlist(sharedProperties.getProperty(), id);
      $location.path('tab/browse');
  }
})

.controller('SetlistActionCtrl', function($scope, $stateParams, Setlists, sharedProperties2, $location) {
  $scope.title = getSetlist(sharedProperties2.getProperty()).setlistName;
  $scope.setlists = Setlists.get(sharedProperties2.getProperty());

  var id = getSetlist(sharedProperties2.getProperty()).setlistId;
  $scope.viewDetails = function() {
     $location.path('setlist/setlists/' + sharedProperties2.getProperty() + '/roles');
  }
  $scope.deleteItem = function() {
    deleteSetlist(id);
    $location.path('tab/setlists');
  }

  $scope.practice = function(){
    var pin = pinSetlist(sharedProperties2.getProperty());
    $location.path('tab/practice');
  }

  $scope.editRoles = function() {
   $location.path('setlist/setlists/' + id + '/edit')
  }

  $scope.back = function() {
    $location.path('tab/setlists');
  };  
  $scope.sendEmail = function() {
    var subject = "";
    var content = "";
    var recipients = [];

    sendEmail();
  };  
})

.controller('SetlistDetailsCtrl', function($scope, $stateParams, Setlists, $location, $state, sharedProperties2) {
  var id = sharedProperties2.getProperty();
  $scope.setlist = Setlists.get( sharedProperties2.getProperty() );
  $scope.back = function() {
    $location.path('tab/setlists');
  };
  $scope.editBandRoles = function(id) {
      $location.path('setlist-edit/setlists/'+ sharedProperties2.getProperty() +'/edit-setlist');
  }
})

.controller('EditSetlistDetailsCtrl', function($scope, Setlists, $location, $stateParams, $state, sharedProperties2, Users) {
   $scope.setlists = Setlists.get( sharedProperties2.getProperty() );
   $scope.back = function() {
    $location.path('setlist/setlists/' + sharedProperties2.getProperty() +'/info');
   };
   var setlist = Setlists.get( sharedProperties2.getProperty() );
   var id = Setlists.get(sharedProperties2.getProperty()).setlistId;

          $scope.model = { name: '' };
          $scope.form = {};

          $scope.model.name = setlist.setlistName;
          $scope.model.spotify = setlist.setlistSpotify;
          $scope.model.notes = setlist.setlistNotes;

     $scope.verify = function() {
         $scope.req = $scope.form.newSetlist.$invalid;
         if($scope.form.newSetlist.$valid == true) {
             var info = new Object();
                 info.name = $scope.model.name;

                 if(!angular.isUndefinedOrNull($scope.model.spotify)) {
                   info.spotify = $scope.model.spotify;
                 } else {
                   info.spotify = "";
                 }
                 if(!angular.isUndefinedOrNull($scope.model.notes)) {
                   info.notes = $scope.model.notes;
                 } else {
                   info.notes = "";
                 }
                 
              saveEditedSetlist(info, id);
              $location.path('setlist/setlists/' + id + '/info');
         } else if ($scope.form.newSetlist.$pristine == true) {
            $location.path('tab/setlists');
         }
     }
})

.controller('EditRolesCtrl', function($scope, Setlists, $location, $stateParams, $state, sharedProperties2, Users, Roles) {
   $scope.setlists = Setlists.get( sharedProperties2.getProperty() );
   var id = Setlists.get(sharedProperties2.getProperty()).setlistId;

          $scope.model = { roleName: '' };
          $scope.form = {};

           $scope.users = Users.all();
           $scope.roles = Roles.all();

     $scope.verify = function() {
         $scope.req = $scope.form.newSetlist.$invalid;
         if($scope.form.newSetlist.$valid == true) {
             var info = new Object();
                info.roleName = $scope.model.roleName;
                info.roleUser = $scope.model.roleUser;

              saveEditedRoles(info, id);
              $location.path('setlist/setlists/' + id + '/info');
         }
     }

    $scope.back = function() {
      $location.path('setlist/setlists/' + sharedProperties2.getProperty() + '/info');
    };

    $scope.addAssignment = function() {
      $location.path('setlist-edit/setlists/'+sharedProperties2.getProperty()+'/roles/add');
    }
})

.controller('SearchCtrl', function($scope, Songs, Setlists, $location, $stateParams, sharedProperties, sharedProperties2, $state, $ionicScrollDelegate ) {
    
    var type = "songs";
    var column = "songTitle";
    $scope.val = true;

    $scope.isActiveOne = true;

    $scope.activateOne = function(){
        $scope.isActiveOne = true;
        $scope.isActiveTwo = false;
        $scope.isActiveThree = false;
        $scope.isActiveFour = false;
        $scope.isActiveFive = false;

        type = "songs";
        column = "songTitle";
        $scope.val = true;
    }
    $scope.activateTwo = function(){
        $scope.isActiveOne = false;
        $scope.isActiveTwo = true;
        $scope.isActiveThree = false;
        $scope.isActiveFour = false;
        $scope.isActiveFive = false;

        type = "songs";
        column = "songArtist";   
        $scope.val = true;     
    }
    $scope.activateThree = function(){
        $scope.isActiveOne = false;
        $scope.isActiveTwo = false;
        $scope.isActiveThree = true;
        $scope.isActiveFour = false;
        $scope.isActiveFive = false;

        type = "songs";
        column = "songAlbumName";  
        $scope.val = true;      
    }
    $scope.activateFour = function(){
        $scope.isActiveOne = false;
        $scope.isActiveTwo = false;
        $scope.isActiveThree = false;
        $scope.isActiveFour = true;
        $scope.isActiveFive = false;

        type = "setlists";
        column = "setlistName"; 
        $scope.val = false;       
    }
    $scope.activateFive = function(){
        $scope.isActiveOne = false;
        $scope.isActiveTwo = false;
        $scope.isActiveThree = false;
        $scope.isActiveFour = false;
        $scope.isActiveFive = true;

        type = "songs";
        column = "songTags"; 
        $scope.val = true;      
    }                

          $scope.model = { query: '' };
          $scope.form = {};

   $scope.search = function() {
        var string = $scope.model.query;
        console.log(column +"/"+ string);

        if( type == 'songs') {
            $scope.songs = Songs.search(column, string);
        } else if ( type == 'setlists') {
            $scope.setlists = Setlists.search(column, string);
        } else if ( type == 'tags'){
            var tag = Tags.search(column, string);
        } else {
            console.log("tf u lookin' for bruh");
        }
   }

   $scope.goSong = function(id) {
        sharedProperties.setProperty(id);
        $location.path('song/' + id + '/info');
   }

   $scope.goSetlist = function(id) {
        sharedProperties2.setProperty(id);
        $location.path('tab/setlists/' + id + '/items');
   }

   $scope.delete = function(id) {
       deleteItem(id);
       $state.reload();
   }

    $scope.addToSetlist = function(id) {
        $location.path('song/' + id + '/add');
    };
})

.controller('PracticeCtrl', function($scope, Setlists, $location, $stateParams, sharedProperties, $state, $window) {

   var user = "F2AC443E-7F6D-4D8E-FFD1-5BEA2E195300";

    var pinned = Setlists.pinned(user);
    
    $scope.isPinned = true;

      if(!pinned[0].isUndefinedOrNull){
        pinned = pinned[0].objectId;
        $scope.isPinned = false;
      }

    $scope.songs = Setlists.listed(pinned);

    $scope.go = function(id) {
        sharedProperties.setProperty(id);
        $location.path('/tab/' + id +'/landing');
    }

    $scope.goSpotify = function() {
      var url = Setlists.get(sharedProperties2.getProperty()).setlistSpotify;
      console.log(url);
      $window.open(url);
    };
})

.controller('SheetMusicCtrl', function($scope, sharedProperties, Songs, $location, $state, $stateParams) {
  $scope.song = Songs.get(sharedProperties.getProperty());
  $scope.back = function() {
    $location.path('song-edit/' + sharedProperties.getProperty() + '/edit-action');
  }
  var song = Songs.get(sharedProperties.getProperty());
  var id = sharedProperties.getProperty();
       $scope.model = { sheet: '' };
       $scope.form = {};

  $scope.model.sheet = song.songSheet;
  $scope.verify = function() {
      var  info =  $scope.model.sheet;
           info = processSheetMusic(info, id);
      $location.path('tab/' + id + '/landing');
  };
})

.controller('SetlistRolesCtrl', function($scope, $stateParams, Setlists, sharedProperties2, $location) {
  $scope.setlist = Setlists.get(sharedProperties2.getProperty());

  $scope.back = function() {
    $location.path('setlist/setlists/'+ sharedProperties2.getProperty() +'/action')
  };
  $scope.editRoles = function() {
    $location.path('setlist-edit/setlists/'+sharedProperties2.getProperty()+'/roles/edit');
  }

  var roles = JSON.parse($scope.setlist.setlistRoles);
  var arr = [];
  for(var x in roles){
    arr.push(roles[x]);
  }

  $scope.roles = arr;
})

.controller('SetlistEditCtrl', function($scope, sharedProperties2, Setlists) {
  $scope.sharedProperty2 = sharedProperties2.getProperty();
})

.controller('SetlistEditActionCtrl', function($scope, sharedProperties2, Setlists, $location) {
  $scope.setlist = Setlists.get(sharedProperties2.getProperty());
  $scope.go = function() {
    $location.path('setlist-edit/setlists/'+sharedProperties2.getProperty()+'/roles/edit');
  }
  $scope.back = function() {
    $location.path('setlist/setlists/' + sharedProperties2.getProperty() + 'info');
  }
})

.controller('ProfileCtrl', function($scope, sharedProperties, Users, $location, $state, $stateParams) {

  $scope.profileUser =Users.data();
  var userid= $scope.profileUser.userId

  $scope.editProfileRoles = function() {
  console.log("clicky");
     $location.path('tab/profile-edit');
  }
})

.controller('ProfileEditCtrl', function($scope, sharedProperties, Users, $location, $state, $stateParams) {
    $scope.profileUser =Users.data();
    var profileid = Users.data().objectId
  
    $scope.model = { email: '' };
    $scope.form = {};

    $scope.saveEditProfile = function() {
        var  info = new Object();
             info.email = $scope.model.email;
             info.bandrole = $scope.model.bandrole;


        editProfileRoles(profileid, info);
        $location.path('tab/profile');
    };

    $scope.back = function() {
      $location.path('tab/profile');
    };
})

.controller('AddRolesCtrl', function($scope, sharedProperties2, Roles, $location, $state, $stateParams) {
  $scope.back = function() {
    $location.path('setlist-edit/setlists/'+ sharedProperties2.getProperty() +'/roles/edit');
  }

    $scope.model = { roleName: '' };
    $scope.form = {};

  $scope.verify = function() {
     var  info =  $scope.model.roleName;
          info = addRole(info);
    $location.path('setlist-edit/setlists/'+ sharedProperties2.getProperty() +'/roles/edit');
  }

})

.controller('ModalInstanceCtrl', function($scope, $stateParams, Songs, $uibModalInstance) {
  $scope.songs = Songs.all();
    $scope.model = { song: '' };
    $scope.form = {};

  $scope.add = function(id) {
    var selected = $scope.model.song;
    $uibModalInstance.close(selected);
  }
})

.controller('EditSetlistCtrl', function($scope, Setlists, $location, $stateParams, $state, Users, sharedProperties2) {
   $scope.setlists = Setlists.active();
   var setlist = Setlists.get(sharedProperties2.getProperty());
   var count = Setlists.count();

          $scope.model = { name: '' };
          $scope.form = {};

          $scope.model.name = setlist.setlistName;

     $scope.verify = function() {
         $scope.req = $scope.form.newSetlist.$invalid;
         if($scope.form.newSetlist.$valid == true) {
             var info = new Object();
               
              if(!angular.isUndefinedOrNull($scope.model.name)) {
                info.name = $scope.model.name;
              }

              if(!angular.isUndefinedOrNull($scope.model.spotify)) {
                info.spotify = $scope.model.spotify;
              }

              if(!angular.isUndefinedOrNull($scope.model.notes)) {
               info.notes = $scope.model.notes;
              }

              info.count = count++;

              var objectId = setlist.objectId;
              saveEditedSetlist(info, objectId);
              $state.go('setlists', {}, {cache: false});
         }
     }

    $scope.goSongs = function() {
      $state.go('browse');
    }

    $scope.goSetlists = function() {
      $state.go('setlists');
    }
})