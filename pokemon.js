const pokemon = {
	bulbasaur: {
		name: "bulbasaur", id: "0001", frontFrames: "41", backFrames: "45", type: [types.grass, types.poison], 
		hp: 45, attack: 49, defense: 49, spatck: 65, spdef: 65, speed: 45,
		moves: [{level: 1, move: moves.growl}, {level: 1, move: moves.tackle}, {level: 3, move: moves.vinewhip}, {level: 6, move: moves.growth}],
	},
	steelix: {
		name: "steelix", id: "0208", frontFrames: "79", backFrames: "83", type: [types.steel, types.ground], 
		hp: 75, attack: 85, defense: 200, spatck: 55, spdef: 65, speed: 30,
		moves: [{level: 1, move: moves.crunch}, {level: 1, move: moves.harden}, {level: 1, move: moves.rockthrow}, {level: 1, move: moves.tackle}],
	},
	tyranitar: {
		name: "tyranitar", id: "0248", frontFrames: "60", backFrames: "59", type: [types.rock, types.dark], 
		hp: 100, attack: 134, defense: 110, spatck: 95, spdef: 100, speed: 61,
		moves: [{level: 1, move: moves.leer}, {level: 1, move: moves.tackle}, {level: 3, move: moves.rockthrow}, {level: 9, move: moves.bite}],
	},
};