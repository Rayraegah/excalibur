// Define globals
var cam;
var cameraDolly;
var enemies = {};
var m;
var player;
var p;
var layerDict;
var lastUpdate = 0;
var removedLoad = false;
var lastDir = "down";
var inCombat = false;
var characterId = "walker";
var playerDead = false;
var attacker = 0;

// Define debug globals
var showTiles = false;
var showFaces = false;
var showCollidingTiles = false;

// Phaser config script
var config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  pixelArt: true,
  antialias: false,
  physics: {
    default: "arcade"
    // arcade: {
    //   debug: true
    // }
  },
  scene: [MainMap]
};
var game = new Phaser.Game(config);

//
// Camera update
//
function updateCamera() {
  // Camera drag function

  // cameraDolly is used for the camera to follow
  if (
    this.game.input.activePointer.isDown &&
    (GLOBALS.PLAYER_ENABLED || GLOBALS.DEBUG_ENABLED)
  ) {
    if (this.game.origDragPoint) {
      // move the camera by the amount the mouse has moved since last update
      cameraDolly.x +=
        (this.game.origDragPoint.x - this.game.input.activePointer.position.x) *
        2;
      cameraDolly.y +=
        (this.game.origDragPoint.y - this.game.input.activePointer.position.y) *
        2;

      cameraDolly.x = limit(
        cameraDolly.x,
        p.x - CONST.CAM_LIMIT,
        p.x + CONST.CAM_LIMIT
      );
      cameraDolly.y = limit(
        cameraDolly.y,
        p.y - CONST.CAM_LIMIT,
        p.y + CONST.CAM_LIMIT
      );
    } // set new drag origin to current position
    this.game.origDragPoint = this.game.input.activePointer.position.clone();
  } else {
    this.game.origDragPoint = null;
    if (CONST.CAM_MODE == "screen") {
      blocksX = Math.floor(
        (document.documentElement.clientWidth / 16) * cam.zoom
      );
      blocksY = Math.floor(
        (document.documentElement.clientHeight / 16) * cam.zoom
      );

      cameraDolly.x = round(p.x, blocksX);
      cameraDolly.y = round(p.y, blocksY);
    } else {
      cameraDolly.x = p.x;
      cameraDolly.y = p.y;
    }
  }
}

//
// Collider Debug draw
//
function drawDebug() {
  var tileColor = showTiles
    ? new Phaser.Display.Color(105, 210, 231, 100)
    : null;
  var colldingTileColor = showCollidingTiles
    ? new Phaser.Display.Color(243, 134, 48, 100)
    : null;
  var faceColor = showFaces ? new Phaser.Display.Color(40, 39, 37, 255) : null;

  debugGraphics.clear();

  // Pass in null for any of the style options to disable drawing that component
  m.renderDebug(debugGraphics, {
    tileColor: tileColor, // Non-colliding tiles
    collidingTileColor: colldingTileColor, // Colliding tiles
    faceColor: faceColor // Interesting faces, i.e. colliding edges
  });

  // helpText.setText(getHelpMessage());
}

//
// Assign Key Press handlers
//
function assignKeyPresses(_game) {
  for (var key in keyPressDict) {
    if (keyPressDict.hasOwnProperty(key)) {
      _game.input.keyboard.on("keydown_" + key, handleKeyPresses);
    }
  }
}

function handleKeyPresses(event) {
  var kp = event.key.toUpperCase();
  eval(keyPressDict[kp]);
}

//
// Create a dialog box
//
function generateDialogBox(scene) {
  scene.dialogBox = {};
  var db = scene.dialogBox;

  db.boxGraphics = scene.add.graphics();

  // Define some shorthand constants
  var w = Math.min(CONST.FIGHT_BOX_WIDTH, game.config.width / CONST.CAM_ZOOM);
  var h = Math.min(CONST.FIGHT_BOX_HEIGHT, game.config.height / CONST.CAM_ZOOM);
  var cz = CONST.CAM_ZOOM;
  var fbm = CONST.FIGHT_BOX_MARGIN;

  // Draw outer boxes
  db.boxes = [
    db.boxGraphics.fillStyle(0xb3b3b3, 1).fillRect(0, 0, w, h),
    db.boxGraphics.fillStyle(0xd9d9d9, 1).fillRect(2, 2, w - 4, h - 4)
  ];
  // Make them all hidden
  for (var x = 0; x < db.boxes.length; x++) {
    db.boxes[x].setVisible(false);
  }

  // Put box data into game element
  db.elements = DIALOG_ELEMENTS;

  // Add text elements
  db.text = {};
  text = db.elements.text;
  for (var element in text) {
    if (text.hasOwnProperty(element)) {
      db.text[element] = createText(
        scene,
        text[element].x,
        text[element].y,
        text[element].d,
        eval(text[element].ac) || doNothing,
        text[element].s || 15,
        text[element].c
      );
      db.text[element].setVisible(false);
    }
  }
}

//
//  Toggles view of fight box
//
function toggleDialogBox(state) {
  var db = game.scene.scenes[0].dialogBox;

  if (state == undefined) {
    if (db.boxes[0].visible) state = false;
    if (!db.boxes[0].visible) state = true;
  }

  if (!state) {
    // Hide boxes
    for (var i = 0; i < db.boxes.length; i++) {
      db.boxes[i].setVisible(false);
    }
    // Hide Text
    for (var tName in db.text) {
      if (db.text.hasOwnProperty(tName)) {
        db.text[tName].setVisible(false);
      }
    }

    GLOBALS.PLAYER_ENABLED = true;

    return state;
  } else {
    // Formula for box coords/width/height
    // p.x - (sw / (2 * cz)) + fbm, p.y - (sh / (2 * cz)) + fbm, sw/cz - fbm*2, sh/cz - fbm*2

    // var sw = game.config.width;
    // var sh = game.config.height;
    var w = Math.min(CONST.FIGHT_BOX_WIDTH, game.config.width / CONST.CAM_ZOOM);
    var h = Math.min(
      CONST.FIGHT_BOX_HEIGHT,
      game.config.height / CONST.CAM_ZOOM
    );
    var cz = CONST.CAM_ZOOM;
    var fbm = CONST.FIGHT_BOX_MARGIN;

    // Determine box position constants
    var boxTopLeft = {
      x: p.x - w / 2 + fbm,
      y: p.y - h / 2 + fbm
    };

    // Update box position
    for (var x = 0; x < db.boxes.length; x++) {
      db.boxes[x].setPosition(boxTopLeft.x, boxTopLeft.y);
      db.boxes[x].setVisible(true);
    }

    // Update text position
    for (var textName in db.text) {
      if (db.text.hasOwnProperty(textName)) {
        var textPos;

        // Determine alignment
        // x specifies where supllied coordinates will lie
        if (db.elements.text[textName].a == "center") {
          // Set coords to backwards halfway of displayWidth
          // |---------|
          // |    x    |
          // |---------|
          textPos = {
            x:
              boxTopLeft.x +
              db.elements.text[textName].x -
              db.text[textName].displayWidth / 2,
            y:
              boxTopLeft.y +
              db.elements.text[textName].y -
              db.text[textName].displayHeight / 2
          };
        } else if (db.elements.text[textName].a == "right") {
          // Set coords to negative whatever displayed
          // |---------x
          // |         |
          // |---------|
          textPos = {
            x:
              boxTopLeft.x +
              db.elements.text[textName].x -
              db.text[textName].displayWidth,
            y: boxTopLeft.y + db.elements.text[textName].y
          };
        } else {
          // Default to top left
          // x---------|
          // |         |
          // |---------|
          textPos = {
            x: boxTopLeft.x + db.elements.text[textName].x,
            y: boxTopLeft.y + db.elements.text[textName].y
          };
        }

        db.text[textName].setPosition(textPos.x, textPos.y).setVisible(true);
      }
    }

    GLOBALS.PLAYER_ENABLED = false;
    return state;
  }
}

//
// Setup dialog box
//
function updateDialogBox(title, data1, data2, act1, act2) {
  GLOBALS.ACTIONS[0] = act1;
  GLOBALS.ACTIONS[1] = act2;

  var texts = game.scene.scenes[0].dialogBox.text;

  texts.option1.setText(data1);
  texts.option2.setText(data2);

  texts.title.setText(title);

  toggleDialogBox(true);
}

//
// Actions for
//
function action1() {
  GLOBALS.ACTIONS[0]();
  toggleDialogBox(false);
}

function action2() {
  GLOBALS.ACTIONS[1]();
  toggleDialogBox(false);
}

//
// Create our fight box
//
function generateFightBox(scene) {
  scene.fightBoxGroup = {};
  var fg = scene.fightBoxGroup;

  fg.boxGraphics = scene.add.graphics();

  // Define some shorthand constants
  var w = Math.min(CONST.FIGHT_BOX_WIDTH, game.config.width / CONST.CAM_ZOOM);
  var h = Math.min(CONST.FIGHT_BOX_HEIGHT, game.config.height / CONST.CAM_ZOOM);
  var cz = CONST.CAM_ZOOM;
  var fbm = CONST.FIGHT_BOX_MARGIN;

  // Draw outer boxes
  fg.boxes = [
    fg.boxGraphics.fillStyle(0xb3b3b3, 1).fillRect(0, 0, w, h),
    fg.boxGraphics.fillStyle(0xd9d9d9, 1).fillRect(2, 2, w - 4, h - 4)
  ];
  // Make them all hidden
  for (var x = 0; x < fg.boxes.length; x++) {
    fg.boxes[x].setVisible(false);
  }

  // Put Fight box data into game element
  fg.elements = FIGHT_ELEMENTS;

  // Add text elements
  fg.text = {};
  text = fg.elements.text;
  for (var element in text) {
    if (text.hasOwnProperty(element)) {
      fg.text[element] = createText(
        scene,
        text[element].x,
        text[element].y,
        text[element].d,
        eval(text[element].ac) || doNothing,
        text[element].s || 15,
        text[element].c
      );
      fg.text[element].setVisible(false);
    }
  }
}

//
//  Toggles view of fight box
//
function toggleFightBox(state) {
  var fg = game.scene.scenes[0].fightBoxGroup;

  if (state == undefined) {
    if (fg.boxes[0].visible) state = false;
    if (!fg.boxes[0].visible) state = true;
  }

  if (!state) {
    // Hide boxes
    for (var i = 0; i < fg.boxes.length; i++) {
      fg.boxes[i].setVisible(false);
    }
    // Hide Text
    for (var tName in fg.text) {
      if (fg.text.hasOwnProperty(tName)) {
        fg.text[tName].setVisible(false);
      }
    }

    GLOBALS.PLAYER_ENABLED = true;

    return state;
  } else {
    // Formula for box coords/width/height
    // p.x - (sw / (2 * cz)) + fbm, p.y - (sh / (2 * cz)) + fbm, sw/cz - fbm*2, sh/cz - fbm*2

    // var sw = game.config.width;
    // var sh = game.config.height;
    var w = Math.min(CONST.FIGHT_BOX_WIDTH, game.config.width / CONST.CAM_ZOOM);
    var h = Math.min(
      CONST.FIGHT_BOX_HEIGHT,
      game.config.height / CONST.CAM_ZOOM
    );
    var cz = CONST.CAM_ZOOM;
    var fbm = CONST.FIGHT_BOX_MARGIN;

    // Determine box position constants
    var boxTopLeft = {
      x: p.x - w / 2 + fbm,
      y: p.y - h / 2 + fbm
    };

    // Update box position
    for (var x = 0; x < fg.boxes.length; x++) {
      fg.boxes[x].setPosition(boxTopLeft.x, boxTopLeft.y);
      fg.boxes[x].setVisible(true);
    }

    // Update text position
    for (var textName in fg.text) {
      if (fg.text.hasOwnProperty(textName)) {
        var textPos;

        // Determine alignment
        // x specifies where supllied coordinates will lie
        if (fg.elements.text[textName].a == "center") {
          // Set coords to backwards halfway of displayWidth
          // |---------|
          // |    x    |
          // |---------|
          textPos = {
            x:
              boxTopLeft.x +
              fg.elements.text[textName].x -
              fg.text[textName].displayWidth / 2,
            y:
              boxTopLeft.y +
              fg.elements.text[textName].y -
              fg.text[textName].displayHeight / 2
          };
        } else if (fg.elements.text[textName].a == "right") {
          // Set coords to negative whatever displayed
          // |---------x
          // |         |
          // |---------|
          textPos = {
            x:
              boxTopLeft.x +
              fg.elements.text[textName].x -
              fg.text[textName].displayWidth,
            y: boxTopLeft.y + fg.elements.text[textName].y
          };
        } else {
          // Default to top left
          // x---------|
          // |         |
          // |---------|
          textPos = {
            x: boxTopLeft.x + fg.elements.text[textName].x,
            y: boxTopLeft.y + fg.elements.text[textName].y
          };
        }

        fg.text[textName].setPosition(textPos.x, textPos.y).setVisible(true);
      }
    }

    GLOBALS.PLAYER_ENABLED = false;
    return state;
  }
}

//
// Setup fight box
//
function updateFightBox(enemy, player_i, message_i, actionDesc_i) {
  var texts = game.scene.scenes[0].fightBoxGroup.text;
  var player = p;
  var message = message_i || "";
  var actionDesc = actionDesc_i || "";

  if (enemy !== Object(enemy)) {
    console.warn("No enemy object passed to startFight()");
  }

  texts.enemyName.setText(enemy.type + " - Level " + enemy.lvl);
  texts.playerName.setText("You - Level " + p.lvl);
  texts.desc.setText("You must fight the " + enemy.type + " to the death!");

  texts.playerHP.setText(player.health + "/" + player.maxHealth);
  texts.enemyHP.setText(enemy.health + "/" + enemy.maxHealth);

  // Show who's attacking and who's defending
  // attacker is set in combat.js
  if (attacker == 0 || enemyDead) {
    p_icon = "🗡 ";
    e_icon = "🛡 ";
  } else {
    e_icon = "🗡 ";
    p_icon = "🛡 ";
  }

  texts.playerInitial.setText(p_icon + "P"); //player.name[0].toUpperCase());
  texts.enemyInitial.setText(e_icon + enemy.type.getInitials());

  texts.message.setText(message);
  texts.combatDesc.setText(actionDesc);
  texts.weapon.setText(`Weapon: ${p.weapon.name} (${p.weapon.stats.attack})`);

  toggleFightBox(true);
}

//
// Create a text object
//
function createText(
  ctx,
  x,
  y,
  string,
  callback_import,
  size_import,
  colour_import
) {
  var text;

  var font = "Arial";
  var size = size_import || 50;
  var colour = colour_import || "#1e1e1e";
  var callback = callback_import || function() {};

  // Text
  text = ctx.add.text(x, y, string, {
    fontFamily: font,
    fontSize: size,
    fill: colour
  });

  text.setInteractive().on("pointerdown", callback);
  text.setScale(1 / CONST.CAM_ZOOM);

  // Return
  return text;
}

//
// A very useful function
//
function doNothing() {
  /* Nice! */
}

//
// Resize stuff
//
function resize(width, height) {
  if (width === undefined) {
    width = this.sys.game.config.width;
  }
  if (height === undefined) {
    height = this.sys.game.config.height;
  }

  this.cameras.resize(width, height);
}

window.addEventListener(
  "resize",
  function(event) {
    game.resize(window.innerWidth, window.innerHeight);
  },
  false
);
