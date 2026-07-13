const gameWindow = document.getElementById("gameWindow");
const canvas = gameWindow.getContext("2d");

canvas.fillStyle = "white";

const playerMonAnim = new Image();
const opposingMonAnim = new Image();

const playerPokemon = pokemon.bulbasaur;
const playerLevel = 6;
const opposingPokemon = pokemon.tyranitar;
const opposingLevel = 7;

class animatePokemon{
	constructor(currentFrame, maxFrame, x, y, sprite, spriteID){
		this.currentFrame = currentFrame;
		this.maxFrame = maxFrame;
		this.x = x;
		this.y = y;
		this.sprite = sprite;
		this.spriteID = spriteID;
		this.frameCount = 0;
	};
	
	animate(){
		this.frameCount++;
		this.sprite.src = this.spriteID;
		canvas.drawImage(this.sprite, this.currentFrame * this.sprite.width / this.maxFrame, 0, this.sprite.width / this.maxFrame, this.sprite.height, this.x, this.y, this.sprite.width / this.maxFrame, this.sprite.height);
		if(this.frameCount == 4){
			this.frameCount = 0;
			this.currentFrame++;
		};
		if(this.currentFrame == this.maxFrame - 1){
			this.currentFrame = 0;
		};
	};
};

const playerMonAnimate = new animatePokemon(0, playerPokemon.backFrames, 200, 200, playerMonAnim, "AssetsPNG/Back/" + playerPokemon.id + ".png");
const opposingMonAnimate = new animatePokemon(0, opposingPokemon.frontFrames, 500, 100, opposingMonAnim, "AssetsPNG/Front/" + opposingPokemon.id + ".png");

console.log(playerPokemon.name);
console.log(playerPokemon.type);
console.log(playerPokemon.hp);
console.log(playerPokemon.attack);
console.log(playerPokemon.defense);
console.log(playerPokemon.spatck);
console.log(playerPokemon.spdef);
console.log(playerPokemon.speed);

for(var i = 0; i < playerPokemon.moves.length; i++){
	if(playerPokemon.moves[i].level <= playerLevel){
		console.log(playerPokemon.moves[i].move);
	};
};

console.log(opposingPokemon.name);
console.log(opposingPokemon.type);
console.log(opposingPokemon.hp);
console.log(opposingPokemon.attack);
console.log(opposingPokemon.defense);
console.log(opposingPokemon.spatck);
console.log(opposingPokemon.spdef);
console.log(opposingPokemon.speed);

for(var i = 0; i < opposingPokemon.moves.length; i++){
	if(opposingPokemon.moves[i].level <= opposingLevel){
		console.log(opposingPokemon.moves[i].move);
	};
};

function animate(){
	window.requestAnimationFrame(animate);
	canvas.fillRect(0, 0, gameWindow.width, gameWindow.height);
	
	playerMonAnimate.animate();
	opposingMonAnimate.animate();
};
animate();