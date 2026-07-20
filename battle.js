const fightbutton = document.getElementById("fight");
const bagbutton = document.getElementById("bag");
const pokemonbutton = document.getElementById("pokemon");
const runbutton = document.getElementById("run");

const move1button = document.getElementById("move1");
const move2button = document.getElementById("move2");
const move3button = document.getElementById("move3");
const move4button = document.getElementById("move4");
const backbutton = document.getElementById("back");

const pokemon1button = document.getElementById("pokemon1");
const pokemon2button = document.getElementById("pokemon2");
const pokemon3button = document.getElementById("pokemon3");
const pokemon4button = document.getElementById("pokemon4");
const pokemon5button = document.getElementById("pokemon5");
const pokemon6button = document.getElementById("pokemon6");

const testb = document.getElementById("test");

function printPokemonData(pokemon, level){
	console.log(pokemon.name);
	console.log("lvl: " +  level);
	console.log(pokemon.type);
	console.log(pokemon.hp);
	console.log(pokemon.attack);
	console.log(pokemon.defense);
	console.log(pokemon.spatck);
	console.log(pokemon.spdef);
	console.log(pokemon.speed);

	for(var i = 0; i < pokemon.moveList.length; i++){
		if(pokemon.moveList[i].level <= level){
			console.log(pokemon.moveList[i].move.name + " - lvl: " + pokemon.moveList[i].level);
		};
	};
};

function calculatePokemonStats(pokemon, level){
	uniqueHealth = Math.floor((2 * pokemon.hp + 1 + 1) * level / 100 + level + 10);
	uniqueAttack = Math.floor(Math.floor((2 * pokemon.attack + 1 + 1) * level / 100 + 5));
	uniqueDefense = Math.floor(Math.floor((2 * pokemon.defense + 1 + 1) * level / 100 + 5));
	uniqueSpAtck = Math.floor(Math.floor((2 * pokemon.spatck + 1 + 1) * level / 100 + 5));
	uniqueSpDef = Math.floor(Math.floor((2 * pokemon.spdef + 1 + 1) * level / 100 + 5));
	uniqueSpeed = Math.floor(Math.floor((2 * pokemon.speed + 1 + 1) * level / 100 + 5));
	console.log(uniqueHealth);
	console.log(uniqueAttack);
	console.log(uniqueDefense);
	console.log(uniqueSpAtck);
	console.log(uniqueSpDef);
	console.log(uniqueSpeed);
	return [uniqueHealth, uniqueAttack, uniqueDefense, uniqueSpAtck, uniqueSpDef, uniqueSpeed];
};

fightbutton.addEventListener("click", fight => {
	fightbutton.style.display = "none";
	bagbutton.style.display = "none";
	pokemonbutton.style.display = "none";
	runbutton.style.display = "none";

	move1button.style.display = "inline-block";
	move2button.style.display = "inline-block";
	move3button.style.display = "inline-block";
	move4button.style.display = "inline-block";
	backbutton.style.display = "inline-block";
});

bagbutton.addEventListener("click", bag => {
	console.log(playerBag);
});

pokemonbutton.addEventListener("click", pokemon => {
	fightbutton.style.display = "none";
	bagbutton.style.display = "none";
	runbutton.style.display = "none";
	
	pokemonbutton.style.display = "inline-block";
	backbutton.style.display = "inline-block";
	pokemon1button.style.display = "inline-block";
	pokemon2button.style.display = "inline-block";
	pokemon3button.style.display = "inline-block";
	pokemon4button.style.display = "inline-block";
	pokemon5button.style.display = "inline-block";
	pokemon6button.style.display = "inline-block";
});

runbutton.addEventListener("click", run => {
	console.log("Cant run from battle yet");
});

backbutton.addEventListener("click", back => {
	move1button.style.display = "none";
	move2button.style.display = "none";
	move3button.style.display = "none";
	move4button.style.display = "none";
	backbutton.style.display = "none";
	
	pokemon1button.style.display = "none";
	pokemon2button.style.display = "none";
	pokemon3button.style.display = "none";
	pokemon4button.style.display = "none";
	pokemon5button.style.display = "none";
	pokemon6button.style.display = "none";
	
	fightbutton.style.display = "inline-block";
	bagbutton.style.display = "inline-block";
	pokemonbutton.style.display = "inline-block";
	runbutton.style.display = "inline-block";
});

pokemon1button.addEventListener("click", pokemon1 => {
	if(currentBattleMon != playerTeam.slot1 && playerTeam.slot1.pokemon){
		inBattle = false;
		currentBattleMon = playerTeam.slot1;
	};
});

pokemon2button.addEventListener("click", pokemon2 => {
	if(currentBattleMon != playerTeam.slot2 && playerTeam.slot2.pokemon){
		inBattle = false;
		currentBattleMon = playerTeam.slot2;
	};
});

pokemon3button.addEventListener("click", pokemon3 => {
	if(currentBattleMon != playerTeam.slot3 && playerTeam.slot3.pokemon){
		inBattle = false;
		currentBattleMon = playerTeam.slot3;
	};
});

pokemon4button.addEventListener("click", pokemon4 => {
	if(currentBattleMon != playerTeam.slot4 && playerTeam.slot4.pokemon){
		inBattle = false;
		currentBattleMon = playerTeam.slot4;
	};
});
		
move1button.addEventListener("click", move1 => {
	if(currentBattleMon.pokemon.moveList[currentBattleMon.pokemon.moveList.length - 1]){
		console.log(currentBattleMon.pokemon.moveList[currentBattleMon.pokemon.moveList.length - 1].move.name);
	};
});

move2button.addEventListener("click", move2 => {
	if(currentBattleMon.pokemon.moveList[currentBattleMon.pokemon.moveList.length - 2]){
		console.log(currentBattleMon.pokemon.moveList[currentBattleMon.pokemon.moveList.length - 2].move.name);
	};
});

move3button.addEventListener("click", move3 => {
	if(currentBattleMon.pokemon.moveList[currentBattleMon.pokemon.moveList.length - 3]){
		console.log(currentBattleMon.pokemon.moveList[currentBattleMon.pokemon.moveList.length - 3].move.name);
	};
});

move4button.addEventListener("click", move4 => {
	if(currentBattleMon.pokemon.moveList[currentBattleMon.pokemon.moveList.length - 4]){
		console.log(currentBattleMon.pokemon.moveList[currentBattleMon.pokemon.moveList.length - 4].move.name);
	};
});