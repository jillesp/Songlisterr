angular.module('starter.services', [])

.factory('Songs', function() {
  var songs = [{
    id: 0,
    title: 'Me And My Broken Heart',
    artist: 'Rixton',
    album: 'http://static.idolator.com/uploads/2014/09/RIXTON_LET-THE-ROAD.jpg',
    albumName: 'Let the Road',
    year: '2015',
    genre: 'Pop',
    key: 'A',
    bpm:'200',
    tempo: 'Presto',
    chords: 'F#m F#m F#m F#m',
    lyrics: "[Chorus:]"
                         + "\nAll I need's a little love in my life"
                         + "\nAll I need's a little love in the dark"
                         + "\nA little but I'm hoping it might kick start"
                         + "\nMe and my broken heart"
                         + "\nI need a little loving tonight"
                         + "\nHold me so I'm not falling apart"
                         + "\nA little but I'm hoping it might kick start"
                         + "\nMe and my broken heart\n"

                         + "\nYeah...\n"

                         + "\n[Verse 1:]"
                         + "\nShot gun, aimed at my heart, you got one"
                         + "\nTear me apart and then some"
                         + "\nHow do we call this love (whoa oh oh oh)"
                         + "\nI try to run away but your eyes"
                         + "\nTell me to stay, oh why,"
                         + "\nWhy do we call this love (whoa oh oh oh)\n"

                         + "\n[Pre-Chorus:]"
                         + "\nIt seems like we've been losing control"
                         + "\nSomebody tell me I'm not alone"
                         + "\nWhen I said\n"

                         + "\n[Chorus:]"
                         + "\nAll I need's a little love in my life"
                         + "\nAll I need's a little love in the dark"
                         + "\nA little but I'm hoping it might kick start"
                         + "\nMe and my broken heart"
                         + "\nI need a little loving tonight"
                         + "\nHold me so I'm not falling apart"
                         + "\nA little but I'm hoping it might kick start"
                         + "\nMe and my broken heart\n"

                         + "\n[Verse 2:]"
                         + "\nMaybe some part of you just hates me"
                         + "\nYou pick me up and play me"
                         + "\nHow do we call this love? (whoa oh oh oh)"
                         + "\nOne time tell me you need me tonight"
                         + "\nTo make it easy, you lie"
                         + "\nAnd say it's all for love (whoa oh oh oh)\n"

                         + "\n[Pre-Chorus:]"
                         + "\nIt seems like we've been losing control"
                         + "\nSomebody tell me I'm not alone"
                         + "\nWhen I say\n"

                         + "\n[Chorus:]"
                         + "\nAll I need's a little love in my life"
                         + "\nAll I need's a little love in the dark"
                         + "\nA little but I'm hoping it might kick start"
                         + "\nMe and my broken heart"
                         + "\nI need a little loving tonight"
                         + "\nHold me so I'm not falling apart"
                         + "\nA little but I'm hoping it might kick start"
                         + "\nMe and my broken heart\n"

                         + "\n[Bridge:]"
                         + "\nWhoa oh, whoa oh"
                         + "\nMe and my broken heart"
                         + "\nWhoa oh, whoa oh"
                         + "\nMe and my broken"
                         + "\nYeah, yeah, yeah"
                         + "\n(Me and my broken, broken heart)"
                         + "\nYeah, yeah, yeah"
                         + "\nHow do we call this?\n"

                         + "\nIt's just me"
                         + "\nIt's just me"
                         + "\nIt's just me"
                         + "\nMe and my broken heart\n"

                         + "\n[Chorus:]"
                         + "\nAll I need's a little love in my life"
                         + "\nAll I need's a little love in the dark"
                         + "\nA little but I'm hoping it might kick start"
                         + "\nMe and my broken heart"
                         + "\nI need a little loving tonight"
                         + "\nHold me so I'm not falling apart"
                         + "\nA little but I'm hoping it might kick start"
                         + "\nMe and my broken heart\n"
  }, {
    id: 1,
    title: 'Lost Stars',
    artist: 'Adam Levine',
    album: 'http://static.idolator.com/uploads/2014/06/30/adam-levine.jpg',
    albumName: 'V',
    year: '2014',
    genre: 'Pop',
    key: 'B',
    bpm: '25',
    tempo: 'Grave',
    chords: 'F#m F#m F#m F#m',
    lyrics: "Please don't see just a boy caught up in dreams and fantasies"
            + "\nPlease see me reaching out for someone I can't see"
            + "\nTake my hand let's see where we wake up tomorrow"
            + "\nBest laid plans sometimes are just a one night stand"
            + "\nI'd be damned Cupid's demanding back his arrow"
            + "\nSo let's get drunk on our tears and\n"

            + "\nGod, tell us the reason youth is wasted on the young"
            + "\nIt's hunting season and the lambs are on the run"
            + "\nSearching for meaning"
            + "\nBut are we all lost stars, trying to light up the dark?\n"

            + "\nWho are we? Just a speck of dust within the galaxy?"
            + "\nWoe is me, if we're not careful turns into reality"
            + "\nDon't you dare let our best memories bring you sorrow"
            + "\nYesterday I saw a lion kiss a deer"
            + "\nTurn the page maybe we'll find a brand new ending"
            + "\nWhere we're dancing in our tears and\n"

            + "\nGod, tell us the reason youth is wasted on the young"
            + "\nIt's hunting season and the lambs are on the run"
            + "\nSearching for meaning"
            + "\nBut are we all lost stars, trying to light up the dark?\n"

            + "\nI thought I saw you out there crying"
            + "\nI thought I heard you call my name"
            + "\nI thought I heard you out there crying"
            + "\nJust the same\n"

            + "\nGod, give us the reason youth is wasted on the young"
            + "\nIt's hunting season and this lamb is on the run"
            + "\nSearching for meaning"
            + "\nBut are we all lost stars, trying to light up the dark?\n"

            + "\nI thought I saw you out there crying"
            + "\nI thought I heard you call my name"
            + "\nI thought I heard you out there crying\n"

            + "\nBut are we all lost stars, trying to light up the dark?"
            + "\nBut are we all lost stars, trying to light up the dark?\n"

  }, {
    id: 2,
    title: 'Kiss Me Slowly',
    artist: 'Parachute',
    album: 'https://s-media-cache-ak0.pinimg.com/236x/ea/f4/00/eaf40093ddcdaf5849ecb4cf597bdc19.jpg',
    albumName: 'The Way It Was',
    year: '2011',
    genre: 'Pop',
    key: 'Z',
    bpm: '168',
    tempo: 'Vivace',
    chords: 'A C A G',
    lyrics:       "Stay with me, baby stay with me,"
                  + "\nTonight don't leave me alone."
                  + "\nWalk with me, come and walk with me,"
                  + "\nTo the edge of all we've ever known.\n"

                  + "\nI can see you there with the city lights,"
                  + "\nFourteenth floor, pale blue eyes."
                  + "\nI can breathe you in."
                  + "\nTwo shadows standing by the bedroom door,"
                  + "\nNo, I could not want you more than I did right then,"
                  + "\nAs our heads leaned in.\n"

                  + "\nWell, I'm not sure what this is gonna be,"
                  + "\nBut with my eyes closed all I see"
                  + "\nIs the skyline, through the window,"
                  + "\nThe moon above you and the streets below."
                  + "\nHold my breath as you're moving in,"
                  + "\nTaste your lips and feel your skin."
                  + "\nWhen the time comes, baby don't run, just kiss me slowly.\n"

                  + "\nStay with me, baby stay with me,"
                  + "\nTonight don't leave me alone."
                  + "\nShe shows me everything she used to know,"
                  + "\nPicture frames and country roads,"
                  + "\nWhen the days were long and the world was small.\n"

                  + "\nShe stood by as it fell apart,"
                  + "\nSeparate rooms and broken hearts,"
                  + "\nBut I won't be the one to let you go.\n"

                  + "\nOh, I'm not sure what this is gonna be,"
                  + "\nBut with my eyes closed all I see"
                  + "\nIs the skyline, through the window,"
                  + "\nThe moon above you and the streets below.\n"

                  + "\nHold my breath as you're moving in,"
                  + "\nTaste your lips and feel your skin."
                  + "\nWhen the time comes, baby don't run, just kiss me slowly.\n"

                  + "\nDon't run away..."
                  + "\nAnd it's hard to love again,"
                  + "\nWhen the only way it's been,"
                  + "\nWhen the only love you knew,"
                  + "\nJust walked away..."
                  + "\nIf it's something that you want,"
                  + "\nDarling you don't have to run,"
                  + "\nYou don't have to go ...\n"

                  + "\nJust stay with me, baby stay with me,\n"

                  + "\nWell, I'm not sure what this is gonna be,"
                  + "\nBut with my eyes closed all I see"
                  + "\nIs the skyline, through the window,"
                  + "\nThe moon above you and the streets below. (Don't let go)"
                  + "\nHold my breath as you're moving in,"
                  + "\nTaste your lips and feel your skin."
                  + "\nWhen the time comes, baby don't run, just kiss me slowly.\n"

                  + "\nOh, I'm not sure where this is gonna go,"
                  + "\nBut in this moment all I know"
                  + "\nIs the skyline, through the window,"
                  + "\nThe moon above you and the streets below. (Baby, don't let go)"
                  + "\nHold my breath as you're moving in,"
                  + "\nTaste your lips and feel your skin."
                  + "\nWhen the time comes, baby don't run, just kiss me slowly.\n"

  }, {
      id: 3,
      title: "The Man Who Can't Be Moved",
      artist: 'The Script',
      album: "https://upload.wikimedia.org/wikipedia/en/6/67/The_Man_Who_Can't_Be_Moved.png",
      albumName: 'The Script',
      year: '2008',
      genre: 'Alternative Rock',
      key: 'G',
      bpm: '143',
      tempo: 'Minuet',
      chords: 'B A B A',
      lyrics:       "Going back to the corner where I first saw you,"
                    + "\nGonna camp in my sleeping bag I'm not gonna move,"
                    + "\nGot some words on cardboard got your picture in my hand,"
                    + "\nSaying if you see this girl can you tell her where I am,"
                    + "\nSome try to hand me money they don't understand,"
                    + "\nI'm not, broke I'm just a broken hearted man,"
                    + "\nI know it makes no sense, but what else can I do,"
                    + "\nHow can I move on when I'm still in love with you\n"

                    + "\n'Cause if one day you wake up and find that you're missing me,"
                    + "\nAnd your heart starts to wonder where on this earth I can be,"
                    + "\nThinking maybe you'll come back here to the place that we'd meet,"
                    + "\nAnd you'd see me waiting for you on the corner of the street.\n"

                    + "\nSo I'm not moving"
                    + "\nI'm not moving\n"

                    + "\nPoliceman says son you can't stay here,"
                    + "\nI said there's someone I'm waiting for if it's a day, a month, a year,"
                    + "\nGotta stand my ground even if it rains or snows,"
                    + "\nIf she changes her mind this is the first place she will go.\n"

                    + "\n'Cause if one day you wake up and find that you're missing me,"
                    + "\nAnd your heart starts to wonder where on this earth I can be,"
                    + "\nThinking maybe you'll come back here to the place that we'd meet,"
                    + "\nAnd you'd see me waiting for you on the corner of the street.\n"

                    + "\nSo I'm not moving"
                    + "\nI'm not moving\n"

                    + "\nI'm not moving"
                    + "\nI'm not moving\n"

                    + "\nPeople talk about the guy"
                    + "\nWho's waiting on a girl\n"

                    + "\nThere are no holes in his shoes"
                    + "\nBut a big hole in his world\n"

                    + "\nAnd maybe I'll get famous as man who can't be moved,"
                    + "\nAnd maybe you won't mean to but you'll see me on the news,"
                    + "\nAnd you'll come running to the corner"
                    + "\n'Cause you'll know it's just for you\n"

                    + "\nI'm the man who can't be moved"
                    + "\nI'm the man who can't be moved\n"

                    + "\n'Cause if one day you wake up and find that you're missing me,"
                    + "\nAnd your heart starts to wonder where on this earth I can be,"
                    + "\nThinking maybe you'll come back here to the place that we'd meet,"
                    + "\nAnd you'd see me waiting for you on the corner of the street.\n"

                    + "\nSo I'm not moving"
                    + "\nI'm not moving\n"

                    + "\nI'm not moving"
                    + "\nI'm not moving\n"
    }];

  return {
    all: function() {
      return songs;
    },
    get: function(songId) {
      for (var i = 0; i < songs.length; i++) {
        if (songs[i].id === parseInt(songId)) {
          return songs[i];
        }
      }
      return null;
    }
  }
});
