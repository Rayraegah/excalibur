var currentEnemy = null;
var allowPlayerTurn = false;
var enemyDead = false;

function combat(enemyGameObject) {
  // initialisation of the combat
  inCombat = true;
  enemyDead = false;
  if (enemyGameObject.hasOwnProperty("gameObj")) {
    currentEnemy = enemies[enemyGameObject.id];
  } else {
    currentEnemy = enemyGameObject;
  }

  updateFightBox(currentEnemy, p);

  enemyTurn(currentEnemy, p);
}

function playerHeal() {
  playerTurn("heal");
}

function playerHit() {
  playerTurn("hit");
}

function playerTurn(action) {
  // console.log("Hit!", action);
  if (!allowPlayerTurn) {
    console.log("action blocked, slow down.");
    return;
  }
  allowPlayerTurn = false;
  // Called by button press
  if (inCombat && !enemyDead) {
    var result = 0;
    var player = p;

    // Player action will be decided by passed variable
    // below line is temporary
    if (action == "hit") {
      dmg = round(calcDamage(player.weapon.stats), 1);
      currentEnemy.health -= dmg;
      actionDesc = `${currentEnemy._initials} took ${dmg} damage.`;
    } else if (action == "heal") {
      p.health += p.stats.heal;
      p.health = Math.min(p.health, p.maxHealth);
      actionDesc = `P healed, gaining ${p.stats.heal}hp.`;
    }

    attacker = 1;
    updateFightBox(currentEnemy, player, "", actionDesc);

    if (player.health <= 0) {
      // case for if the player loses
      endCombat(0);
    } else if (currentEnemy.health <= 0) {
      // case for if the player wins
      endCombat(1);
      result = 1;
    }

    setTimeout(function() {
      if (!enemyDead) {
        enemyTurn(currentEnemy, player);
      }
    }, Phaser.Math.Between(1000, 1200));
  }
}

function enemyTurn(enemy, player) {
  if (inCombat) {
    setTimeout(function() {
      allowPlayerTurn = true;
    }, 200);
    var result = 0;

    // insert enemy attacking stuff here
    // below line is temporary
    // console.log(enemy);
    dmg = round(calcDamage(enemy.stats), 1);
    player.health -= dmg;
    player.health = Math.max(player.health, 0);

    actionDesc = `P took ${dmg} damage.`;

    attacker = 0;
    updateFightBox(enemy, player, "", actionDesc);

    if (player.health <= 0) {
      // case for if the player loses
      endCombat(0);
    } else if (enemy.health <= 0) {
      // case for if the player wins
      endCombat(1);
    }
  }
}

function calcDamage(o) {
  return o.attack * randDec(0.8, 1.2);
}

function endCombat(finishCase) {
  switch (finishCase) {
    case 1:
      enemyDead = true;
      p.lvl += 1;
      var msg = `Level up! (${p.lvl - 1} → ${p.lvl})`;
      if (p.newWeapon) {
        msg = `New Weapon: ${p.weapon.name}! ` + msg;
      }
      updateFightBox(currentEnemy, p, msg);
      currentEnemy.kill();

      setTimeout(function() {
        currentEnemy = null;
        inCombat = false;
        if (!currentEnemy) {
          toggleFightBox(false);
        }
      }, 2500);

      break;
    case 0:
      document.addEventListener("click", function(evnt) {
        localStorage.removeItem("userData");
        location.reload();
      });

      updateFightBox(currentEnemy, p, "You died! Click anywhere to restart.");
      playerDead = true;
      currentEnemy = null;
      inCombat = false;
      p.gameObj.play(characterId + "-dead");
      // p.setVisible(false);

      setTimeout(function() {
        toggleFightBox(false);
        GLOBALS.PLAYER_ENABLED = false;
        alert(
          `Game over man, game over.\n\nYou finished with a level of ${p.lvl}. Nice!`
        );
      }, 3000);

      break;
  }
}
