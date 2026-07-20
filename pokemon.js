const pokemon = {
	bulbasaur: {
		name: "Bulbasaur", id: "0001", frontFrames: "41", backFrames: "45", type: [types.grass, types.poison], 
		hp: 45, attack: 49, defense: 49, spatck: 65, spdef: 65, speed: 45,
		moveList: [{level: 1, move: moves.growl}, {level: 1, move: moves.tackle}, {level: 3, move: moves.vinewhip}, {level: 6, move: moves.growth}, {level: 9, move: moves.leechseed}, {level: 12, move: moves.razorleaf}, {level: 15, move: moves.poisonpowder}, {level: 15, move: moves.sleeppowder}, {level: 25, move: moves.takedown}, {level: 30, move: moves.magicalleaf}, {level: 35, move: moves.synthesis}, {level: 40, move: moves.amnesia}, {level: 42, move: moves.sludgewave}, {level: 45, move: moves.doubleedge}, {level: 55, move: moves.solarbeam}],
	},
	ivysaur: {
		name: "Ivysaur", id: "0002", frontFrames: "49", backFrames: "53", type: [types.grass, types.poison], 
		hp: 60, attack: 62, defense: 63, spatck: 80, spdef: 80, speed: 60,
		moveList: [{level: 1, move: moves.growl}, {level: 1, move: moves.tackle}, {level: 3, move: moves.vinewhip}, {level: 6, move: moves.growth}, {level: 9, move: moves.leechseed}, {level: 12, move: moves.razorleaf}, {level: 15, move: moves.poisonpowder}, {level: 15, move: moves.sleeppowder}, {level: 25, move: moves.takedown}, {level: 30, move: moves.magicalleaf}, {level: 35, move: moves.synthesis}, {level: 40, move: moves.amnesia}, {level: 42, move: moves.sludgewave}, {level: 45, move: moves.doubleedge}, {level: 55, move: moves.solarbeam}],
	},
	venusaur: {
		name: "Venusaur", id: "0003", frontFrames: "59", backFrames: "63", type: [types.grass, types.poison], 
		hp: 80, attack: 82, defense: 83, spatck: 100, spdef: 100, speed: 80,
		moveList: [{level: 0, move: moves.powerwhip}, {level: 1, move: moves.growl}, {level: 1, move: moves.tackle}, {level: 3, move: moves.vinewhip}, {level: 6, move: moves.growth}, {level: 9, move: moves.leechseed}, {level: 12, move: moves.razorleaf}, {level: 15, move: moves.poisonpowder}, {level: 15, move: moves.sleeppowder}, {level: 25, move: moves.takedown}, {level: 30, move: moves.magicalleaf}, {level: 35, move: moves.synthesis}, {level: 40, move: moves.amnesia}, {level: 42, move: moves.sludgewave}, {level: 45, move: moves.doubleedge}, {level: 55, move: moves.solarbeam}],
	},
	charizard: {
		name: "Charizard", id: "0006", frontFrames: "47", backFrames: "51", type: [types.fire, types.flying], 
		hp: 78, attack: 84, defense: 78, spatck: 109, spdef: 85, speed: 100,
		moveList: [{level: 1, move: moves.dragonclaw}, {level: 1, move: moves.growl}, {level: 1, move: moves.tackle}, {level: 4, move: moves.ember}],
	},
	blastoise: {
		name: "Blastoise", id: "0009", frontFrames: "79", backFrames: "83", type: [types.water], 
		hp: 79, attack: 83, defense: 100, spatck: 85, spdef: 105, speed: 78,
		moveList: [{level: 1, move: moves.tackle}, {level: 1, move: moves.tailwhip}, {level: 3, move: moves.watergun}, {level: 12, move: moves.bite}, {level: 15, move: moves.bubblebeam}],
	},
	steelix: {
		name: "Steelix", id: "0208", frontFrames: "79", backFrames: "83", type: [types.steel, types.ground], 
		hp: 75, attack: 85, defense: 200, spatck: 55, spdef: 65, speed: 30,
		moveList: [{level: 1, move: moves.crunch}, {level: 1, move: moves.harden}, {level: 1, move: moves.rockthrow}, {level: 1, move: moves.tackle}],
	},
	tyranitar: {
		name: "Tyranitar", id: "0248", frontFrames: "60", backFrames: "59", type: [types.rock, types.dark], 
		hp: 100, attack: 134, defense: 110, spatck: 95, spdef: 100, speed: 61,
		moveList: [{level: 1, move: moves.leer}, {level: 1, move: moves.tackle}, {level: 3, move: moves.rockthrow}, {level: 9, move: moves.bite}, {level: 27, move: moves.crunch}, {level: 33, move: moves.earthquake}],
	},
	deoxys: {
		name: "Deoxys", id: "0386", frontFrames: "59", backFrames: "59", type: [types.psychic], 
		hp: 50, attack: 150, defense: 50, spatck: 150, spdef: 50, speed: 150,
		moveList: [{level: 1, move: moves.leer}, {level: 31, move: moves.psychic}],
	},
	zygarde: {
		name: "Zygarde", id: "0718", frontFrames: "75", backFrames: "74", type: [types.dragon, types.ground], 
		hp: 216, attack: 100, defense: 121, spatck: 91, spdef: 95, speed: 85,
		moveList: [{level: 1, move: moves.bite}],
	},
};