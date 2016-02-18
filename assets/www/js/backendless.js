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
}

function saveEditSong(id, info) {
    var objectId = getObject(id).objectId;
    var update = Backendless.Persistence.of(Songs).findById(objectId);

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
    }
};