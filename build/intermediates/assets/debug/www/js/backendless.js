var APPLICATION_ID = '48F7E0A1-E799-EE7C-FF56-D3687FF1BF00',
    SECRET_KEY = 'B68610CE-62FD-34D1-FFD2-EF348786DD00',
    VERSION = 'v1';

Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

function Songs(args) {
    args = args || {};
    this.songId = args.songId || "";
    this.songTitle = args.songTitle || "";
    this.songArtist = args.songArtist || "";
    this.songAlbum = args.songAlbum || "";
    this.songAlbumName = args.songAlbumName || "";
    this.songKey = args.songKey || "";
    this.songYoutube = args.songYoutube || "";
    this.songSpotify = args.songSpotify || "";
    this.isActive = args.isActive || "";
<<<<<<< HEAD
=======
    this.setlistId = args.setlistId || "";
}

function Setlists(args) {
    args = args || {};
    this.setlistId = args.setlistId || "";
    this.setlistName = args.setlistName || "";
    this.setlistGuitar1 = args.setlistGuitar1 || "";
    this.setlistGuitar2 = args.setlistGuitar2|| "";
    this.setlistBass = args.setlistBass || "";
    this.setlistDrums = args.setlistDrums || "";
    this.setlistKeyboard = args.setlistKeyboard || "";
    this.setlistVocals1 = args.setlistVocals1 || "";
    this.setlistVocals2 = args.setlistVocals2 || "";
    this.setlistSongs = args.setlistSongs || "";
>>>>>>> jilles-stable
}

function saveEditSong(id, info) {
    var objectId = getObject(id).objectId;
    var update = Backendless.Persistence.of(Songs).findById(objectId);

<<<<<<< HEAD
    if(info["title"] != null) {
        update["songTitle"] = info["title"];
    }
    var updated = Backendless.Persistence.of(Songs).save(update);
}

function Setlist(args) {
    args = args || {};
    this.setId = args.setId || "";

    var objectId = getObject(id).objectId;
    var update = Backendless.Persistence.of(Songs).findById(objectId);
    update["isActive"] = 0;
=======
    if(info.title != null) {
        update["songTitle"] = String(info.title);
    }
    if(info.artist != null) {
        update["songArtist"] = String(info.artist);
    }
    if(info.albumName != null) {
        update["songAlbumName"] = String(info.albumName);
    }
    if(info.key != null) {
        update["songKey"] = String(info.key);
    }
    if(info.albumArt != null) {
        update["songAlbum"] = String(info.albumArt);
    }
    if(info.youtube != null) {
        update["songYoutube"] = String(info.youtube);
    }
    if(info.spotify != null) {
        update["songSpotify"] = String(info.spotify);
    }

>>>>>>> jilles-stable
    var updated = Backendless.Persistence.of(Songs).save(update);
}

function deleteItem(id) {
    var objectId = getObject(id).objectId;
    var update = Backendless.Persistence.of(Songs).findById(objectId);
    update["isActive"] = 0;
    var updated = Backendless.Persistence.of(Songs).save(update);
}

function getObject(songId) {
    var songs = Backendless.Persistence.of(Songs).find();
     for (var i = 0; i < songs.data.length; i++) {
        if (songs.data[i].songId === parseInt(songId)) {
          return (songs.data[i]);
        }
<<<<<<< HEAD
    }
};
=======
     }
}

function getSetlist(setlistId) {
    var setlists = Backendless.Persistence.of(Setlists).find();
     for (var i = 0; i < setlists.data.length; i++) {
        if (setlists.data[i].setlistId === parseInt(setlistId)) {
          return (setlists.data[i]);
        }
     }
}

function addSongToSetlist(songId, setlistId) {
     var setlistId = getSetlist(setlistId).objectId;
     var songId = getObject(songId).objectId;

     var songObject = Backendless.Persistence.of(Songs).findById(songId);
     var setlistObject = Backendless.Persistence.of(Setlists).findById(setlistId);

     var stupidArray = songObject["setlistId"];

     var newObject = new Setlists({
        setlistId: 5,
        setlistName: "BADADADAD"
     });

     var update = stupidArray.push(newObject);

     console.log(stupidArray.length);
     console.log(JSON.stringify(setlistObject));
     console.log(JSON.stringify(stupidArray));

     var updated = Backendless.Persistence.of(Setlists).save(setlistObject);
         updated = Backendless.Persistence.of(Songs).save(songObject);
}
>>>>>>> jilles-stable
