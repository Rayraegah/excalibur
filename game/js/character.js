class Character {
  // stats array
  // attack, speed, endurance

  ////////////////////////////
  //  CONSTRUCTOR FUNCTION  //
  ////////////////////////////

  constructor(name, gameObj, lvl, stats) {
    this._name = name || "Takumi";
    this.gameObj = gameObj;
    this._lvl = lvl || 0;
    this._maxHealth = 90 + this._lvl * 10;
    this._health = this._maxHealth;
    this._stats = stats;
  }

  ///////////////////
  //  NAME GETTER  //
  ///////////////////

  get name() {
    return this._name;
  }

  /////////////////////////////
  //  gameObj GETTER/SETTER  //
  /////////////////////////////

  get GameObj() {
    return this.gameObj;
  }

  set GameObj(value) {
    this.gameObj = value;
    return this.gameObj;
  }

  get x() {
    return this.gameObj.x;
  }
  set x(value) {
    this.gameObj.x = value;
    return this.gameObj.x;
  }

  get y() {
    return this.gameObj.y;
  }
  set y(value) {
    this.gameObj.y = value;
    return this.gameObj.y;
  }

  ///////////////////////////
  //  LEVEL GETTER/SETTER  //
  ///////////////////////////

  get lvl() {
    return this._lvl;
  }
  set lvl(value) {
    this._lvl = value;
    this._maxHealth = 90 + this.lvl * 10;
    return this._lvl;
  }

  ////////////////////////////
  //  HEALTH GETTER/SETTER  //
  ////////////////////////////

  get health() {
    return this._health;
  }
  set health(value) {
    this._health = value;
    return this._health;
  }

  get maxHealth() {
    return this._maxHealth;
  }
  set maxHealth(value) {
    this._maxHealth = value;
    return this._maxHealth;
  }

  //////////////////////////
  //  STAT GETTER/SETTER  //
  //////////////////////////

  get stats() {
    return this._stats;
  }
  set stats(value) {
    this._stats = value;
    return this._stats;
  }

  /////////////////////
  //  WEAPON GETTER  //
  /////////////////////

  get weapon() {
    var wp = Math.min(
      Math.floor(this.lvl / CONST.LVL_PER_WEAPON),
      Object.keys(GLOBALS.WEAPON_DATA).length - 1
    );
    return GLOBALS.WEAPON_DATA[wp];
  }
  get newWeapon() {
    var wpCurrent = Math.min(
      Math.floor(this.lvl / CONST.LVL_PER_WEAPON),
      Object.keys(GLOBALS.WEAPON_DATA).length - 1
    );
    var wpOld = Math.min(
      Math.floor((this.lvl - 1) / CONST.LVL_PER_WEAPON),
      Object.keys(GLOBALS.WEAPON_DATA).length - 1
    );
    if (wpCurrent == wpOld) {
      return false;
    } else {
      return true;
    }
  }
}

function createCharacter(_game, name, level, atk, healing) {
  player = new Character(
    name,
    _game.physics.add.sprite(664.45, 377.1, "walker"),
    level,
    {
      attack: atk,
      heal: healing
    }
  );
  p = player;
  player.gameObj.setScale(0.75);
  player.gameObj.setOrigin(0.5, 0.75);
  player.gameObj.setCollideWorldBounds(true);
  _game.physics.add.collider(player.gameObj, _game.groundLayer);
}

//
// Player update
//
function updatePlayer() {
  var movingX = false;
  var movingY = false;

  if (GLOBALS.PLAYER_ENABLED) {
    if (cursors.left.isDown || wasd.left.isDown) {
      player.gameObj.setVelocityX(-CONST.PLAYER_SPEED);
      player.gameObj.play(characterId + "-left", true);
      lastDir = "left";
      movingX = true;
    } else if (cursors.right.isDown || wasd.right.isDown) {
      player.gameObj.setVelocityX(CONST.PLAYER_SPEED);
      player.gameObj.play(characterId + "-right", true);
      lastDir = "right";
      movingX = true;
    } else {
      player.gameObj.setVelocityX(0);
      movingX = false;
    }

    if (cursors.up.isDown || wasd.up.isDown) {
      player.gameObj.setVelocityY(-CONST.PLAYER_SPEED);
      if (!movingX) {
        player.gameObj.play(characterId + "-up", true);
      }
      lastDir = "up";
      movingY = true;
    } else if (cursors.down.isDown || wasd.down.isDown) {
      player.gameObj.setVelocityY(CONST.PLAYER_SPEED);
      if (!movingX) {
        player.gameObj.play(characterId + "-down", true);
      }
      lastDir = "down";
      movingY = true;
    } else {
      player.gameObj.setVelocityY(0);
      movingY = false;
    }
  }

  if (!movingX && !movingY) {
    player.gameObj.setVelocityX(0);
    player.gameObj.setVelocityY(0);
    if (!playerDead) {
      player.gameObj.play(characterId + "-" + lastDir + "-stop", true);
    }
  }

  if (movingX || movingY) {
    saveUserData();
  }
}

//
// Create Animations
//
function createAnims(_anims) {
  animDict = [
    ["down", [0, 2]],
    ["left", [3, 5]],
    ["right", [6, 8]],
    ["up", [9, 11]],
    ["down-stop", [1]],
    ["left-stop", [4]],
    ["right-stop", [7]],
    ["up-stop", [10]],
    ["dead", [12]]
  ];

  var keyArray = ["walker", "walker2"];

  for (var keyI = 0; keyI < keyArray.length; keyI++) {
    for (var i = 0; i < animDict.length; i++) {
      l = animDict[i];

      // console.log(l);
      // console.log(animDict);

      n = keyArray[keyI] + "-" + l[0];
      if (l[1].length == 1) {
        f = [
          {
            key: keyArray[keyI],
            frame: l[1][0]
          }
        ];
      } else {
        f = _anims.generateFrameNumbers(keyArray[keyI], {
          start: l[1][0],
          end: l[1][1]
        });
      }
      // console.log(n, f);

      _anims.create({
        key: n,
        frames: f,
        frameRate: 4,
        repeat: -1,
        yoyo: true
      });
    }
  }
}
