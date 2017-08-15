var player = {
	// visible stats
	health: 1,
	stamina: 1,
	attack: 1,
	defence: 1,

	// hidden stats
	parryChance: 1,
	staminaRegen: 1,
	healthRegen: 1,
	weapons: 1,

}

var computer = {
	// visible stats
	health: 1,
	stamina: 1,
	attack: 1,
	defence: 1,

	// hidden stats
	parryChance: 1,
	staminaRegen: 1,
	healthRegen: 1,
	weapons: 1,

}

//document.ready(); reset all html


// on playerPick button # press
// create new player with stats of selection
// set player picked to yes switch panel color to red and button to compueter
// on compPick button #
// create new computer with stats of selection

// if player.health <= 0
// Game over loser!

// else if computer.health <=0
// You win!

// else;

// on attack if parry > computer.parryChance then player.health --
// else computer.health -- (player.attack - computer.defence)

// on block if parry > player.parryChance then computer.health--
// else player.health -- (computer.attack - player.defence)