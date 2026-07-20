const fightbutton = document.getElementById("fight");
const bagbutton = document.getElementById("bag");
const pokemonbutton = document.getElementById("pokemon");
const runbutton = document.getElementById("run");

const move1button = document.getElementById("move1");
const move2button = document.getElementById("move2");
const move3button = document.getElementById("move3");
const move4button = document.getElementById("move4");
const backbutton = document.getElementById("back");

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

backbutton.addEventListener("click", back => {
	move1button.style.display = "none";
	move2button.style.display = "none";
	move3button.style.display = "none";
	move4button.style.display = "none";
	backbutton.style.display = "none";
	
	fightbutton.style.display = "inline-block";
	bagbutton.style.display = "inline-block";
	pokemonbutton.style.display = "inline-block";
	runbutton.style.display = "inline-block";
});
