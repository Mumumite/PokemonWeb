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

playerTeam.slot1 = {level: 62, pokemon: pokemon.charizard};
playerTeam.slot2 = {level: 41, pokemon: pokemon.venusaur};
playerTeam.slot3 = {level: 63, pokemon: pokemon.tyranitar};
playerTeam.slot4 = {level: 52, pokemon: pokemon.steelix};
playerTeam.slot5 = {level: 92, pokemon: pokemon.zygarde};

playerBag.push({amount: 2, item: items.potion});
playerBag.push({amount: 5, item: items.ultraball});
playerBag.push({amount: 1, item: items.masterball});

console.log(playerTeam);

var playerMonAnimate;
var opposingMonAnimate;
var currentBattleMon = playerTeam.slot1;

function startSinglesBattle(playerPokemon, opposingPokemon){
	if(inBattle == false){
		inBattle = true;
		currentBattleMon = playerPokemon;
		playerMonAnimate = new animatePokemon(0, currentBattleMon.pokemon.backFrames, 200, 500, playerMonAnim, "AssetsPNG/Back/" + currentBattleMon.pokemon.id + ".png");
		opposingMonAnimate = new animatePokemon(0, opposingPokemon.frontFrames, 600, 300, opposingMonAnim, "AssetsPNG/Front/" + opposingPokemon.id + ".png");
		
		printPokemonData(currentBattleMon.pokemon, currentBattleMon.level);
		printPokemonData(opposingPokemon, randomLevel);
		
		for(var i = 1; i < 7; i++){
			if(eval("playerTeam.slot" + i + ".pokemon")){
				eval("pokemon" + i + "button.innerText = playerTeam.slot" + i + ".pokemon.name");
			}else{
				eval("pokemon" + i + "button.innerText = '---'");
			};
		};
		
		for(var i = 1; i < 5; i++){
			if(currentBattleMon.pokemon.moveList[currentBattleMon.pokemon.moveList.length - 1 - (i - 1)]){
				eval("move" + i + "button.innerText = currentBattleMon.pokemon.moveList[currentBattleMon.pokemon.moveList.length - 1 - (" + i + "- 1)].move.name");
			}else{
				eval("move" + i + "button.innerText = '---'");
			};
		};

		calculatePokemonStats(currentBattleMon.pokemon, currentBattleMon.level);
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
	
	startSinglesBattle(currentBattleMon, randomPokemon);
	
	checkForBattle();
};
animate();