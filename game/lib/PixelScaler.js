game.PixelScaler = function(game, parent) {
    game.call(this, game, parent);
};

game.PixelScaler.prototype = Object.create(game.prototype);

game.PixelScaler.prototype.init = function(scale) {
    this.scale = scale;

    this.originalWidth = this.game.width;
    this.originalHeight = this.game.height;

    this.scaledWidth = this.originalWidth * this.scale;
    this.scaledHeight = this.originalHeight * this.scale;

    // create a new scaled canvas to draw to
    this.scaledCanvas = Phaser.Canvas.create(
        null,
        this.scaledWidth,
        this.scaledHeight,
        null,
        true
    );
    this.context = this.scaledCanvas.getContext("2d");

    Phaser.Canvas.addToDOM(this.scaledCanvas, this.game.parent);
    Phaser.Canvas.setSmoothingEnabled(this.context, false);

    this.originalCanvas = this.game.canvas;

    this.originalCanvas.style["display"] = "none";
};

/**
 * cop the original canvas to the new canvas
 */
game.PixelScaler.prototype.postRender = function() {
    this.context.drawImage(
        this.originalCanvas,
        0,
        0,
        this.originalWidth,
        this.originalHeight,
        0,
        0,
        this.scaledWidth,
        this.scaledHeight
    );
};
