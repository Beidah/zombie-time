import './style.css';
import { Player } from './classes/Player';
import { Projectile } from './classes/Projectile';
import { GameManager } from './classes/GameManager';

const viewport = document.getElementById("viewport");
const ctx = viewport.getContext("2d");

const viewportWidth = viewport.width;
const viewportHeight = viewport.height;

const viewportScale = window.devicePixelRatio || 1;

viewport.width = viewportWidth * viewportScale;
viewport.height = viewportHeight * viewportScale;

viewport.style.width = viewportWidth + 'px';
viewport.style.height = viewportHeight + 'px';

ctx.scale(viewportScale, viewportScale);

const game = new GameManager(viewport, ctx);

// Need to realise function that deletes projectiles that fly out of the field
// function clearProjectilesArray() {}

viewport.addEventListener('click', (event) => {
  game.shoot(event);
});

// Canvas refresher (please rewrite this comment, I don't know how to call this function 😅)
function drawFrame() {
    game.update();
    game.draw();
    requestAnimationFrame(drawFrame);
}

drawFrame();


