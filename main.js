var outcome; 

var scenarios = ["Your ship is caught in a tractor beam! You see that it's heading right towards the Death Star!", "You need to get into the cantina to negotiate a flight out of Tatooine, but stormtroopers are blocking your path.", "You've crash landed on a desert planet and see those nasty sand people approaching."];


while(playAgain = true) {

function randomNumber(range){
	return Math.round(Math.random() * range );
}

window.alert("A long time ago, in a galaxy far, far away....the empire is threatening to take over the galaxy. We are the rebels, fighting their reign. It will be tough, and you will have to be willing to risk your life. All of it will be worth it though, since it is for the greater good of the galaxy. Are you in? "); 


var character = {
	
	force: 0, 
	flying: 0, 
	charm: 0, 
	name: window.prompt("Alright, don't get cocky kid. What's your name anyways?"),
	characterClass: window.prompt("Well, you're a rebel now. What were you before? A jedi, a pilot, or a princess?").toLowerCase()
};


if (!character.name){
	character.name = window.prompt("Mysterious "+ character.characterClass + ", are you? We've all got our secrets, but this rebellion is built on trust. Give me your name.")

		if (!character.name){

			var badNames = ["fuzzball", "flyboy", "scruffy-looking nerf hearder", "walking carpet"];

			var newName = badNames[randomNumber(badNames.length - 1)]; 

			window.alert("Fine, be that way. I guess I'll just call you " + newName + "."); 

			character.name = newName; 
		}
}

if (character.characterClass === "jedi"){
	character.force = 5; 
}

if (character.characterClass === "pilot"){
	character.flying = 5; 
}

if (character.characterClass === "princess"){
	character.charm = 5; 
}


var scenario = scenarios[randomNumber(scenarios.length - 1)]; 

//var scenario = scenarios[1]; 

window.alert(scenario); 

if (scenario === scenarios[0]){

	var choice = window.prompt("Now is your time to act! What do you do? Trust the force, hide in the ship, or talk your way out of it?").toLowerCase(); 

	if (choice === "trust" || choice === "trust the force"){

		if (character.force === 5){

			window.alert("The force is strong with this one. You somehow are able to escape the tractor beam's pull and escape.");
			outcome = "win"; 

		} else {

			window.alert("That's not how the force works! You are captured. Hopefully a rescue team comes eventually.");
			outcome = "lose"

		}

	} else if (choice === "hide" || choice === "hide in the ship") {

		if (character.flying === 5){

			window.alert("Those stupid bucketheads didn't even check under the floor boards. You're in!"); 
			outcome = "win"; 

		} else {

			window.alert("Nice try flyboy. The stupid droids wouldn't pipe down. They found you and now you're a prisoner.");
			outcome = "lose"

		}
	} else if (choice === "talk" || choice == "talk your way out of it") {

		if (character.charm === 5) {

			window.alert("Good work. You were able to charm your way past the gaurds."); 
			outcome = "win";

		} else {

			window.alert("Nice try, but they didn't buy your act for a second. Hopefully you'll have a cell mate to talk to in their prison."); 
			outcome = "lose"; 

		}

	}

	
} else if (scenario === scenarios[1]) {
	var choice = window.prompt("What do we do now? Do you use the force, speed past them, or talk your way out of it?").toLowerCase(); 

	if (choice === "use the force" || choice === "force"){

		if (character.force === 5){

			window.alert("These were not the droids they were looking for. You're able to get past with no problems."); 
			outcome = "win"; 

		} else {

			window.alert("That's not how the force works! You are captured and they take your droids.");
			outcome = "lose"

		}

	} else if (choice === "speed" || choice === "speed past" || choice === "speed past them") {

		if (character.flying === 5){

			window.alert("They barely even saw you with your excellent flying skills. Good work!"); 
			outcome = "win"; 

		} else {

			window.alert("Nice try flyboy. There was no way you were making it past those troops. You're captured and they get the droids.");
			outcome = "lose"

		}
	} else if (choice === "talk" || choice == "talk your way out of it") {

		if (character.charm === 5) {

			window.alert("Good work. They totally bought your story, those stupid bucketheads."); 
			outcome = "win";

		} else {

			window.alert("Nice try, but they didn't buy your act for a second. Hopefully you'll have a cell mate to talk to in their prison."); 
			outcome = "lose"; 

		}

	}

	
} else if (scenario === scenarios [2]) {
	var choice = window.prompt("It's getting hot out here, so we better decide quick. What should you do?  Do you use the use the force, fight them, or negotiate with them?").toLowerCase(); 

	if (choice === "use the force" || choice === "force"){

		if (character.force === 5){

			window.alert("You were able to use the force to create a terrifying scream. You scared them off!"); 
			outcome = "win"; 

		} else {

			window.alert("That's not how the force works! They capture you.");
			outcome = "lose"

		}

	} else if (choice === "fight" || choice === "fight them") {

		if (character.flying === 5){

			window.alert("Your quick skills with a blaster cleared them out really quick. Better get going before someone discovers."); 
			outcome = "win"; 

		} else {

			window.alert("Should've shot first. They beat and capture you.");
			outcome = "lose"

		}
	} else if (choice === "negotiate" || choice == "negotiate with them") {

		if (character.charm === 5) {

			window.alert("You are able to cut a deal with them, and they leave you alone. Good work!"); 
			outcome = "win";

		} else {

			window.alert("They don't have time for your jibber jabber. They kidnap you anyways."); 
			outcome = "lose"; 

		}

	}

	
} 




	if (outcome === "win") {
		
		window.alert("You win!"); 
	} else if (outcome === "lose"){
		
		window.alert("You lose."); 
	}

	var playAgain = window.confirm("Would you like to play again?"); 

	if (playAgain === false ) {

		window.alert("Thanks for playing! May the force be with you.")
		break; 
	}
}

