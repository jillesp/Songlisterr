angular.module('songDroid.services', [])

.service('Songs', function() {

      var songs = Backendless.Persistence.of(Songs).find();
      var dataStore = Backendless.Persistence.of(Songs);

      return {
        all: function() {
          return songs.data;
        },
        active: function() {
          var findActive = {condition: "isActive = 1"};
          var foundActive = Backendless.Persistence.of(Songs).find(findActive);
          return foundActive.data;
        },
        get: function(songId) {
          for (var i = 0; i < songs.data.length; i++) {
            if (songs.data[i].songId === parseInt(songId)) {
              return songs.data[i];
            }
          }
          return null;
        },
        count: function() {
            var ctr = 1;
            for (var i = 0; i < songs.data.length; i++) {
                ctr++;
            }
            return ctr;
        },
        search: function(type, string) {
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

    var setlists = Backendless.Persistence.of(Setlists).find();

    var dataStore = Backendless.Persistence.of(Songs);
    var dataStore2 = Backendless.Persistence.of(Setlists);

    return {
      all: function() {
        return setlists.data;
      },
      count: function() {
        var ctr = 1;
        for (var i = 0; i < setlists.data.length; i++) {
            ctr++;
        }
        return ctr;
      },
      listed: function(setlistObjId) {
          var findItems = {condition: "Setlists[setlistSongs].objectId='" + setlistObjId + "'"};
          var foundItems = dataStore.find( findItems );
//          console.log(JSON.stringify(foundItems.data));
          return foundItems.data;
      },
      get: function(setlistId) {
          for (var i = 0; i < setlists.data.length; i++) {
            if (setlists.data[i].setlistId === parseInt(setlistId)) {
              return setlists.data[i];
            }
          }
          return null;
      },
      active: function() {
        var findActive = {condition: "isActive = 1"};
        var foundActive = Backendless.Persistence.of(Setlists).find(findActive);
        return foundActive.data;
      },
      search: function(type, string) {
          var query = {condition:  type + " LIKE '%" + string + "%' and isActive = 1" };
          var foundItems = Backendless.Persistence.of(Setlists).find(query);
          return foundItems.data;
      },
      pinned: function(user) {
          var findItems = {condition: "Users[setlists].objectId='" + user + "'"};
          var foundItems = dataStore2.find( findItems );
          return foundItems.data;
      }
    }
})

.service('Users', function() {

    var users = Backendless.Persistence.of(Backendless.User).find();
    var dataStore = Backendless.Persistence.of(Songs);

    return {
      all: function() {
        return users.data;
      },
      count: function() {
        var ctr = 1;
        for (var i = 0; i < users.data.length; i++) {
            ctr++;
        }
        return ctr;
      },
      get: function(userId) {
          for (var i = 0; i < users.data.length; i++) {
            if (users.data[i].userId === parseInt(userId)) {
              return users.data[i];
            }
          }
          return null;
      },
      active: function() {
        var findActive = {condition: "isActive = 1"};
        var foundActive = Backendless.Persistence.of(Backendless.User).find(findActive);
        return foundActive.data;
      },
      roles: function(role) {
        var findActive = {condition: role + " = true and isActive = 1"};
        console.log("Queried: " + findActive);
        var foundActive = Backendless.Persistence.of(Backendless.User).find(findActive);
        return foundActive.data;
      }
    }
})

.service('Tags', function() {

    return {
      all: function() {
        return tags.data;
      },
      search: function(type, string) {
          var query = {condition:  type + " LIKE '%" + string + "%'"};
          var foundItems = Backendless.Persistence.of(Tags).find(query);
          return foundItems.data;
      }
    }
})