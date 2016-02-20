angular.module('songApp.services', [])

.service('Songs', function() {

      var songs = Backendless.Persistence.of(Songs).find();
<<<<<<< HEAD

=======
      var dataStore = Backendless.Persistence.of(Songs);
>>>>>>> jilles-stable
      var findActive = {condition: "isActive = 1"};
      var foundActive = Backendless.Persistence.of(Songs).find(findActive);

      return {
        all: function() {
          return songs.data;
        },
        active: function() {
          return foundActive.data;
        },
        get: function(songId) {
          for (var i = 0; i < songs.data.length; i++) {
            if (songs.data[i].songId === parseInt(songId)) {
              return songs.data[i];
            }
          }
          return null;
        }
      }
})

.service ('sharedProperties', function () {
    var property = 1;
    return {
        getProperty:function () {
            return property;
        },
        setProperty:function (value) {
            property = value;
        }
    };
})

<<<<<<< HEAD


=======
.service('Setlists', function() {

    var setlists = Backendless.Persistence.of(Setlists).find();
    var dataStore = Backendless.Persistence.of(Setlists);

    return {
      all: function() {
        return setlists.data;
      }
    }
})


>>>>>>> jilles-stable
