class enemy {
  // stats array
  // attack, speed, endurance

  ////////////////////////////
  //  CONSTRUCTOR FUNCTION  //
  ////////////////////////////

  constructor(id, gameObj, type, lvl) {
    this.id = id;
    this._id = id;
    this.gameObj = gameObj;
    this.gameObj.id = id;
    this._type = type;
    this._lvl = lvl;
    this._maxHealth = round(10 + lvl * 1.5, 1);
    this._health = this.maxHealth;
    this._stats = GLOBALS.ENEMY_DATA[GLOBALS.ENEMY_TYPES[this._type]].stats;
    this._initials = GLOBALS.ENEMY_TYPES[this._type].getInitials();
    this._speed = this._stats.speed;
    this._lastDir = "up";
    this._dirTime = 5;
    this._dirCurrentTime = 0;
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

  //////////////////////////
  //  TYPE GETTER/SETTER  //
  //////////////////////////

  get typeNum() {
    return this._type;
  }

  set typeNum(value) {
    this._type = value;
    return this._type;
  }

  get type() {
    try {
      return GLOBALS.ENEMY_TYPES[this._type];
    } catch (err) {
      if (err.name == "RangeError") {
        console.error(
          `ERROR: The "${this._type}" type Number has not been assigned a type`
        );
      } else {
        console.error(err.message);
      }
    }
  }

  set type(value) {
    if (GLOBALS.ENEMY_TYPES.indexOf(value) == -1) {
      console.error(`ERROR: "${value}" is not a type`);
    } else {
      this._type = GLOBALS.ENEMY_TYPES.indexOf(value);
      return this._type;
    }
  }
  ///////////////////////////
  //  LEVEL GETTER/SETTER  //
  ///////////////////////////

  get lvl() {
    return this._lvl;
  }
  set lvl(value) {
    this._lvl = value;
    this._maxHealth = 10 + this._lvl * 1.5;
    return this._lvl;
  }

  ////////////////////////////
  //  HEALTH GETTER/SETTER  //
  ////////////////////////////

  get health() {
    return this._health;
  }
  set health(value) {
    this._health = Math.max(value, 0);
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

  /////////////////////////////
  //  LASTDIR GETTER/SETTER  //
  /////////////////////////////

  get lastDir() {
    return this._lastDir;
  }
  set lastDir(value) {
    this._lastDir = value;
    return this._lastDir;
  }
  get dirTime() {
    return this._dirTime;
  }
  set dirTime(value) {
    this._dirTime = value;
    return this._dirTime;
  }
  get dirCurrentTime() {
    return this._dirCurrentTime;
  }
  set dirCurrentTime(value) {
    this._dirCurrentTime = value;
    return this._dirCurrentTime;
  }

  get speed() {
    return this._speed;
  }
  set speed(value) {
    this._speed = value;
    return this._speed;
  }

  kill() {
    this.gameObj.destroy();
    delete enemies[this.id];
  }
}

function spawnEnemies(_game, enemyCount) {
  for (var i = 0; i < enemyCount; i++) {
    var spawnTile = pickSpawnTile();
    var type = Phaser.Math.Between(0, GLOBALS.ENEMY_TYPES.length - 1);
    var lvl = Phaser.Math.Between(1, 10);
    // enemies.push(new enemy(i, _game.physics.add.sprite(spawnTile.x, spawnTile.y, 'walker'), type, lvl));
    enemies[i] = new enemy(
      i,
      _game.physics.add.sprite(
        spawnTile.x,
        spawnTile.y,
        GLOBALS.ENEMY_DATA[GLOBALS.ENEMY_TYPES[type]].frame
      ),
      type,
      lvl
    );
  }

  for (var eIndex in enemies) {
    if (enemies.hasOwnProperty(eIndex)) {
      e = enemies[eIndex];
      e.gameObj.setScale(0.75);
      e.gameObj.setOrigin(0.5, 0.75);
      e.gameObj.setCollideWorldBounds(true);
      _game.physics.add.collider(e.gameObj, _game.groundLayer);
      // _game.physics.add.collider(e.gameObj, p);
      // _game.physics.add.overlap(e.gameObj, p, combat, null, _game);
    }
  }
}

function enemyAi() {
  for (var eIndex in enemies) {
    if (enemies.hasOwnProperty(eIndex)) {
      e = enemies[eIndex];
      var movementChosen = false;

      // if the player is close enough to the enemy then the enemy will chase the player
      if (!playerDead) {
        db = Math.abs(distBetween(e.GameObj.x, e.GameObj.y, p.x, p.y));
        if (db < 8) {
          enemyMove(e, "stop");
          movementChosen = true;

          if (!currentEnemy) {
            combat(e);
          }
        } else if (db < e.stats.sight * 16) {
          var dirTo = roundTo(
            angleTo(
              e.GameObj.x,
              e.GameObj.y - 10,
              p.x,
              p.y,
              e.GameObj.x,
              e.GameObj.y
            ),
            45.0
          );
          if (dirTo < 0) {
            dirTo += 360;
          }
          movementChosen = true;
          switch (Number(dirTo)) {
            case 0:
              enemyMove(e, "up");
              break;

            case 360:
              enemyMove(e, "up");
              break;

            case 45:
              enemyMove(e, "upLeft");
              break;

            case 90:
              enemyMove(e, "left");
              break;

            case 135:
              enemyMove(e, "downLeft");
              break;

            case 180:
              enemyMove(e, "down");
              break;

            case 225:
              enemyMove(e, "downRight");
              break;

            case 270:
              enemyMove(e, "right");
              break;

            case 315:
              enemyMove(e, "upRight");
              break;

            default:
              console.error(`ERROR: ${dirTo} is an invalid direction`);
              break;
          }
        }
      }
      // otherwise it will wander around randomly
      if (!movementChosen || playerDead) {
        var directions = [
          "up",
          "down",
          "left",
          "right",
          "upLeft",
          "upRight",
          "downLeft",
          "downRight"
        ];

        var theDir = null;

        if (e.dirCurrentTime >= e.dirTime) {
          e.dirTime = Phaser.Math.Between(3, 10) * 10;
          e.dirCurrentTime = 0;

          var valid = false;
          while (!valid) {
            theDir = directions[randNum(0, 7)];
            if (theDir != e.lastDir) {
              valid = true;
            }
          }
        } else {
          e.dirCurrentTime += 1;
          theDir = e.lastDir;
        }
        enemyMove(e, theDir);
      }
    }
  }
}

function enemyMove(enemy, dir) {
  enemy.gameObj.setVelocity(0, 0);
  s = enemy.speed || CONST.ENEMY_SPEED;
  switch (dir) {
    case "stop":
      enemy.gameObj.setVelocity(0, 0);
      return true;

    case "up":
      enemy.gameObj.setVelocity(0, -s);
      enemy.lastDir = "up";
      return true;

    case "down":
      enemy.gameObj.setVelocity(0, s);
      enemy.lastDir = "down";
      return true;

    case "left":
      enemy.gameObj.setVelocity(-s, 0);
      enemy.lastDir = "left";
      return true;

    case "right":
      enemy.gameObj.setVelocity(s, 0);
      enemy.lastDir = "right";
      return true;

    case "upLeft":
      enemy.gameObj.setVelocity(-s, -s);
      enemy.lastDir = "upLeft";
      return true;

    case "upRight":
      enemy.gameObj.setVelocity(s, -s);
      enemy.lastDir = "upRight";
      return true;

    case "downLeft":
      enemy.gameObj.setVelocity(-s, s);
      enemy.lastDir = "downLeft";
      return true;

    case "downRight":
      enemy.gameObj.setVelocity(s, s);
      enemy.lastDir = "downRight";
      return true;

    default:
      console.error(`ERROR: ${dir} is an invalid direction`);
      return false;
  }
}
