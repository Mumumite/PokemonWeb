const gameWindow = document.getElementById("gameWindow");
const canvas = gameWindow.getContext("2d");

gameWindow.width = window.innerWidth;
gameWindow.height = window.innerHeight;

canvas.fillStyle = "clear";

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
		canvas.drawImage(this.sprite, this.currentFrame * this.sprite.width / this.maxFrame, 0, this.sprite.width / this.maxFrame, this.sprite.height, this.x, this.y, this.sprite.width / this.maxFrame, this.sprite.height);
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

function startSinglesBattle(playerPokemon, opposingPokemon, battleState){
	const playerMonAnimate = new animatePokemon(0, playerPokemon.pokemon.backFrames, 200, 200, playerMonAnim, "AssetsPNG/Back/" + playerPokemon.pokemon.id + ".png");
	const opposingMonAnimate = new animatePokemon(0, opposingPokemon.frontFrames, 500, 100, opposingMonAnim, "AssetsPNG/Front/" + opposingPokemon.id + ".png");
	
	printPokemonData(playerPokemon.pokemon, playerPokemon.level);
	printPokemonData(opposingPokemon, randomLevel);

	calculatePokemonStats(playerPokemon.pokemon, playerPokemon.level);
	
	return[playerMonAnimate, opposingMonAnimate];
};

let battleAnimate = startSinglesBattle(playerTeam.slot2, randomPokemon);

var inBattle = false;
var frameCount = 0;

function animate(){
	window.requestAnimationFrame(animate);
	canvas.fillRect(0, 0, gameWindow.width, gameWindow.height);
	
	frameCount++;
	
	if(inBattle == false && frameCount > 500){
		battleAnimate = startSinglesBattle(playerTeam.slot1, randomPokemon);
		inBattle = true;
	};
	
	battleAnimate[0].animate();
	battleAnimate[1].animate();
};
animate();