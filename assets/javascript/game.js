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
	stamDeplete: 1,

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
	stamDeplete: 1,

}

var characterStats ={
	knight_stats_array: [200,100,20,10,2,10,1,1,5],
	cleric_stats_array: [150,120,10,8,4,12,10,1,6],
	rogue_stats_array: [150,110,8,5,6,14,1,2,7],
	pyro_stats_array: [100,80,25,4,3,14,1,1,10],
}
var imageChoice = "";
var playerPick = [];
var comPick = [];

var statAssignP = function(){
	$("#player-fighter").html("<img class=\"fPic\" src=\"assets/images/"+imageChoice+".png\">");
	$("#pHP").text(playerPick[0]);
	$("#pSt").text(playerPick[1]);
	$("#pAt").text(playerPick[2]);
	$("#pDf").text(playerPick[3]);
}

var statAssignC = function(){
	$("#computer-fighter").html("<img class=\"fPic\" src=\"assets/images/"+imageChoice+".png\">");
	$("#cHP").text(comPick[0]);
	$("#cSt").text(comPick[1]);
	$("#cAt").text(comPick[2]);
	$("#cDf").text(comPick[3]);
}

$("body").on("click", "#resetBtn", function(){
	$("#pVis").css("visibility", "hidden");
	$("#cVis").css("visibility", "hidden");
	$(".selectFighter").css("float", "left");
	$(".pickPlayer").css("display", "block");
	$(".pickComputer").css("display", "none");
	$(".fighterProfile").css("display", "block");

	playerPick = [];
	comPick = [];
	imageChoice = "";
}); //Reset Button


$("body").on("click", ".pickPlayer", function(){
	$(".pickPlayer").css("display", "none");
	$(".pickComputer").css("display", "block");
	$(".selectFighter").css("float", "right");
	$("#pVis").css("visibility", "visible");
}); //When you pick a player

$("body").on("click", ".pickComputer", function(){
	$(".pickComputer").css("display", "none");
	$("#cVis").css("visibility", "visible");
}); //when you pick a computer

$("body").on("click", "#pickPlayerK", function(){
	playerPick = characterStats.knight_stats_array;
	imageChoice = "black-knight";
	statAssignP();
	$("#fpK").css("display", "none");
}); //player picks knight

$("body").on("click", "#pickPlayerC", function(){
	playerPick = characterStats.cleric_stats_array;
	imageChoice = "cleric";
	statAssignP();
	$("#fpC").css("display", "none");

});//player picks cleric

$("body").on("click", "#pickPlayerR", function(){
	playerPick = characterStats.rogue_stats_array;
	imageChoice = "rogue";
	statAssignP();
	$("#fpR").css("display", "none");

});//player picks rogue

$("body").on("click", "#pickPlayerP", function(){
	playerPick = characterStats.pyro_stats_array;
	imageChoice = "wizard";
	statAssignP();
	$("#fpP").css("display", "none");

});//player picks pyro


$("body").on("click", "#pickComputerK", function(){
	imageChoice = "black-knight";
	comPick = characterStats.knight_stats_array;
	statAssignC();
	$("#fpK").css("display", "none");
});

$("body").on("click", "#pickComputerC", function(){
	imageChoice = "cleric";
	comPick = characterStats.cleric_stats_array;
	statAssignC();
	$("#fpC").css("display", "none");

});

$("body").on("click", "#pickComputerR", function(){
	imageChoice = "rogue";
	comPick = characterStats.rogue_stats_array;
	statAssignC();
	$("#fpR").css("display", "none");

});

$("body").on("click", "#pickComputerP", function(){
	imageChoice = "wizard";
	comPick = characterStats.pyro_stats_array;
	statAssignC();
	$("#fpP").css("display", "none");

});


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

// on attack if parry <= computer.parryChance then player.health --
// else computer.health -- (player.attack - computer.defence)

// on block if parry <= player.parryChance then computer.health--
// else player.health -- (computer.attack - player.defence)