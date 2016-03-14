angular.module('songDroid.services', ['LocalStorageModule'])

.service('Connect', function(localStorageService) {

  var APPLICATION_ID = '48F7E0A1-E799-EE7C-FF56-D3687FF1BF00',
      SECRET_KEY = 'B68610CE-62FD-34D1-FFD2-EF348786DD00',
      VERSION = 'v1';

  function doConnectFunction() {
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    localStorageService.set('localSongs', Backendless.Persistence.of(Songs).find());
    localStorageService.set('localSetlists', Backendless.Persistence.of(Setlists).find());
    console.log("Connection sucess.");
  }
  function doNotConnectFunction() {
      console.log("Connection failed.");
  }

  var i = new Image();
  i.onload = doConnectFunction;
  i.onerror = doNotConnectFunction;
  i.src = 'http://gfx2.hotmail.com/mail/uxp/w4/m4/pr014/h/s7.png?d=' + escape(Date());

})

.service('Songs', function(localStorageService, Connect) {

      var songs;
      var dataStore;


      return {
        all: function() {
          songs = localStorageService.get('localSongs').data;
          return songs;
        },
        active: function() {
          songs = localStorageService.get('localSongs').data;
          console.log(songs);
          songs = songs.filter(
              function(songs){
                return songs.isActive == 1
              }
          );
          return songs;
        },
        get: function(songId) {
          songs = localStorageService.get('localSongs');
          for (var i = 0; i < songs.data.length; i++) {
            if (songs.data[i].songId === parseInt(songId)) {
              return songs.data[i];
            }
          }
          return null;
        },
        count: function() {
          songs = localStorageService.get('localSongs');
            var ctr = 1;
            for (var i = 0; i < songs.data.length; i++) {
                ctr++;
            }
            return ctr;
        },
        search: function(type, string) {
          songs = localStorageService.get('localSongs');
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

.service('Setlists', function(localStorageService, Connect) {
    var songs;
    var setlists;
    var dataStore;    

    return {
      all: function() {
        setlists = localStorageService.get('localSetlists').data;
        return setlists.data;
      },
      count: function() {
        setlists = localStorageService.get('localSetlists').data;
        var ctr = 1;
        for (var i = 0; i < setlists.data.length; i++) {
            ctr++;
        }
        return ctr;
      },/******!!******/
      listed: function(setlistObjId) {
        setlists = localStorageService.get('localSetlists').data;
        dataStore = Backendless.Persistence.of(Songs);
          var findItems = {condition: "Setlists[setlistSongs].objectId='" + setlistObjId + "'"}; 
          var foundItems = dataStore.find( findItems );
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
