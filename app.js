const gameWindow = document.getElementById("gameWindow");
const canvas = gameWindow.getContext("2d");

gameWindow.width = window.innerWidth;
gameWindow.height = window.innerHeight - 200;

canvas.fillStyle = "red";

const playerMonAnim = new Image();
const opposingMonAnim = new Image();

const randomPokemon = eval("pokemon." + Object.keys(pokemon)[Math.floor(Math.random() * (Object.keys(pokemon).length - 0) + 0)]);
const randomLevel = Math.floor((Math.random() * 101 - 1) + 1);

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
		canvas.drawImage(this.sprite, (this.currentFrame * this.sprite.width / this.maxFrame), 0, this.sprite.width / this.maxFrame, this.sprite.height, Math.floor(this.x - (this.sprite.width / this.maxFrame) / 2), Math.floor(this.y - this.sprite.height), (this.sprite.width / this.maxFrame) * 1.5, this.sprite.height * 1.5);
		if(this.frameCount == 3){
			this.frameCount = 0;
			this.currentFrame++;
		};
		if(this.currentFrame == this.maxFrame - 1){
			this.currentFrame = 0;
		};
	};
};

console.log(trainers.trainer1.name);
console.log(trainers.trainer1.team);

playerTeam.slot1 = {level: 62, pokemon: pokemon.tyranitar};
playerTeam.slot2 = {level: 41, pokemon: pokemon.venusaur};
console.log(playerTeam);

var playerMonAnimate;
var opposingMonAnimate;

function startSinglesBattle(playerPokemon, opposingPokemon){
	if(inBattle == false){
		inBattle = true;
		playerMonAnimate = new animatePokemon(0, playerPokemon.pokemon.backFrames, 200, 500, playerMonAnim, "AssetsPNG/Back/" + playerPokemon.pokemon.id + ".png");
		opposingMonAnimate = new animatePokemon(0, opposingPokemon.frontFrames, 600, 300, opposingMonAnim, "AssetsPNG/Front/" + opposingPokemon.id + ".png");
		
		printPokemonData(playerPokemon.pokemon, playerPokemon.level);
		printPokemonData(opposingPokemon, randomLevel);

		calculatePokemonStats(playerPokemon.pokemon, playerPokemon.level);
	};
};

function checkForBattle(){
	if(inBattle == true && playerMonAnimate && opposingMonAnimate){
		playerMonAnimate.animate();
		opposingMonAnimate.animate();
	};
};

function animate(){
	window.requestAnimationFrame(animate);
	canvas.fillRect(0, 0, gameWindow.width, gameWindow.height);
	
	startSinglesBattle(playerTeam.slot1, randomPokemon);
	
	checkForBattle();
};
animate();