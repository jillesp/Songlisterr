angular.module('songDroid.services', [])

.service('Songs', function() {
      var songs;
      var dataStore;
      return {
        all: function() {
          songs = Backendless.Persistence.of(Songs).find();
          return songs.data;
        },
        active: function() {
          songs = Backendless.Persistence.of(Songs).find();
          dataStore = Backendless.Persistence.of(Songs);
          var foundActive = dataStore.find({condition: "isActive = 1"});
          return foundActive.data;
          return songs.data;
        },
        get: function(songId) {
          songs = Backendless.Persistence.of(Songs).find();
          for (var i = 0; i < songs.data.length; i++) {
            if (songs.data[i].songId === parseInt(songId)) {
              return songs.data[i];
            }
          }
          return null;
        },
        count: function() {
          songs = Backendless.Persistence.of(Songs).find();
            var ctr = 1;
            for (var i = 0; i < songs.data.length; i++) {
                ctr++;
            }
            return ctr;
        },
        search: function(type, string) {
          songs = Backendless.Persistence.of(Songs).find();
          dataStore = Backendless.Persistence.of(Songs);

            var query = {condition:  type + " LIKE '%" + string + "%' and isActive = 1" };
            var foundItems = dataStore.find(query);
            return foundItems.data;
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

.service ('sharedProperties2', function () {
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

.service('Setlists', function() {
    var songs;
    var setlists;
    var dataStore;    
    return {
      all: function() {
        setlists = Backendless.Persistence.of(Setlists).find();
        return setlists.data;
      },
      count: function() {
        setlists = Backendless.Persistence.of(Setlists).find();
        var ctr = 1;
        for (var i = 0; i < setlists.data.length; i++) {
            ctr++;
        }
        return ctr;
      },
      listed: function(setlistObjId) {
        setlists = Backendless.Persistence.of(Setlists).find();
        dataStore = Backendless.Persistence.of(Songs);
          var findItems = {condition: "Setlists[setlistSongs].objectId='" + setlistObjId + "'"};
          var foundItems = dataStore.find( findItems );
//          console.log(JSON.stringify(foundItems.data));
          return foundItems.data;
      },
      get: function(setlistId) {
        setlists = Backendless.Persistence.of(Setlists).find();
          for (var i = 0; i < setlists.data.length; i++) {
            if (setlists.data[i].setlistId === parseInt(setlistId)) {
              return setlists.data[i];
            }
          }
          return null;
      },
      active: function() {
        setlists = Backendless.Persistence.of(Setlists).find();
        var findActive = {condition: "isActive = 1"};
        var foundActive = Backendless.Persistence.of(Setlists).find(findActive);
        return foundActive.data;
      },
      search: function(type, string) {
        setlists = Backendless.Persistence.of(Setlists).find();
          var query = {condition:  type + " LIKE '%" + string + "%' and isActive = 1 and isPrivate = false" };
          var foundItems = Backendless.Persistence.of(Setlists).find(query);
          return foundItems.data;
      },
      pinned: function(user) {
        setlists = Backendless.Persistence.of(Setlists).find();
        dataStore = Backendless.Persistence.of(Setlists);
          var findItems = {condition: "Users[setlists].objectId='" + user + "'"};
          var foundItems = dataStore.find( findItems );
          return foundItems.data;
          console.log(foundItems.data);
      }
    }
})

.service('Users', function() {

    return {
      all: function() {
        users = Backendless.Persistence.of(Backendless.User).find();
        return users.data;
      },
      count: function() {
        users = Backendless.Persistence.of(Backendless.User).find();
        var ctr = 1;
        for (var i = 0; i < users.data.length; i++) {
            ctr++;
        }
        return ctr;
      },
      get: function(userId) {
        users = Backendless.Persistence.of(Backendless.User).find();
          for (var i = 0; i < users.data.length; i++) {
            if (users.data[i].userId === parseInt(userId)) {
              return users.data[i];
            }
          }
          return null;
      },
      active: function() {
        users = Backendless.Persistence.of(Backendless.User).find();
        var findActive = {condition: "isActive = 1"};
        var foundActive = Backendless.Persistence.of(Backendless.User).find(findActive);
        return foundActive.data;
      },
      roles: function(role) {
        users = Backendless.Persistence.of(Backendless.User).find();
        var findActive = {condition: role + " = true and isActive = 1"};
        console.log("Queried: " + findActive);
        var foundActive = Backendless.Persistence.of(Backendless.User).find(findActive);
        return foundActive.data;
      },
      data: function() {
        users = Backendless.Persistence.of(Backendless.User).find();
        var objectid = 'F2AC443E-7F6D-4D8E-FFD1-5BEA2E195300';
        var objectdata = Backendless.Persistence.of(Backendless.User).findById(objectid);
        return objectdata;
      }
    }
})
