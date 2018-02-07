var MainMap = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function MainMap() {
    Phaser.Scene.call(this, {
      key: "mainMap"
    });
  },

  preload: function() {
    this.load.image("tileset-main", "images/tileset-main.gif");
    this.load.image("tileset-alt", "images/tileset-alt.png");

    this.load.image("skeleton", "images/sprites/skeleton.png");
    this.load.image("slime", "images/sprites/slime.png");
    this.load.image("ghost", "images/sprites/ghost.png");
    this.load.image("bat", "images/sprites/bat.png");
    this.load.image("spider", "images/sprites/spider.png");

    this.load.tilemapTiledJSON("level0", "levels/level0.json");
    this.load.spritesheet("walker", "images/sprites/dude.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("walker2", "images/sprites/dudette.png", {
      frameWidth: 16,
      frameHeight: 16
    });
  },

  create: function() {
    var map = this.make.tilemap({
      key: "level0"
    });
    m = map;
    m.setCollisionByProperty(
      {
        block: true
      },
      true
    );

    // The first parameter is the name of the tileset in Tiled and the second parameter is the key of the tileset image used when loading the file in preload.
    var tiles = m.addTilesetImage("main", "tileset-main");

    // You can load a layer from the map using the layer name from Tiled, or by using the layer index
    // layerDict = [];
    for (var i = 0; i < map.layers.length; i++) {
      // map.layers[i]
      this.groundLayer = m.createStaticLayer(i, tiles, 0, 0);
    }

    createCharacter(this, "Steve", 1, 10, 10);

    // Spawn our enemies in
    spawnEnemies(this, CONST.ENEMY_COUNT);

    generateFightBox(this);
    generateDialogBox(this);

    cursors = this.input.keyboard.createCursorKeys();
    wasd = {
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    };

    this.physics.world.setBounds(124, 124, 1352, 1352);

    createAnims(this.anims);

    cam = this.cameras.main;
    cameraDolly = new Phaser.Geom.Point(p.x, p.y);
    cam.zoom = CONST.CAM_ZOOM;
    cam.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    cam.startFollow(cameraDolly);
    this.events.on("resize", resize, this);

    // Collision debug
    debugGraphics = this.add.graphics();

    assignKeyPresses(this);

    if (!loadUserData()) {
      updateDialogBox(
        "Choose a character:",
        "Jeff",
        "美雪",
        function() {
          characterId = "walker";
        },
        function() {
          characterId = "walker2";
        }
      );
    }
  },

  update: function(time) {
    if (!removedLoad) {
      var elem = document.querySelector("#loader");
      elem.parentNode.removeChild(elem);
      removedLoad = true;
    }
    updateCamera();
    updatePlayer();
    enemyAi();

    // Save data every 5 seconds
    if (time > lastUpdate + 5000) {
      lastUpdate = time;
      saveUserData(this);
    }
  }
});
