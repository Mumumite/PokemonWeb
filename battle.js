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

