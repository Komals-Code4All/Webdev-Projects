/* Dad Jokes */

/* define the jokes in 2 parts : the setup and the punchline */

/* array of emojies of smiling faces */
let emojies = [
	"&#128512;",
	"&#128513;",
	"&#128514;",
	"&#128515;",
	"&#128516;",
	"&#128517;",
	"LOL!",
];

dadJokes = [
	[
		"Two trees got arrested in my town today",
		"I heard they've been up to some shady business",
	],
	["What's the scariest type of plant", "bamBOO!"],
	["I'm writing a book aimed at kids", "Hopefully I'll hit a few of them"],
	[
		"My cloning experiment has finally paid off!",
		"I'm so excited, I'm beside myself",
	],

	["I asked my dog, 'Whats 2 minus two?", "He said nothing"],
	[
		"I took my wife to the orchard and we stood for an hour looking at the trees.",
		"It's not the type of apple watch she was expecting.",
	],
	["The cyclops stopped teaching at the school, ", "he only had one pupil. "],
	["Why do they say, 'be there or be square'?", "Cos you're not a-round."],
	[
		"I got fired from the keyboard factory",
		"They said I wasn't putting in enough shifts.",
	],
	[
		"I'm opening a chain of Elvis-themed steak restaurants.",
		"It's for people who love meat tender.",
	],
	[
		"I'd like to have kids one day.",
		"I don't think I could stand them longer than that.",
	],
	["With great power,", "comes great electricity bills."],
	["I once dated a magazine collector.", "Let's just say he had issues. "],
	[
		"I just broke up with my mathematician girlfriend.",
		"She was obsessed with her x.",
	],

	["Where do you find crabs with no legs?", "Exactly where you left them."],
	["What is a lawyer's favourite drink?", "Subpena colada."],
	[
		"I asked my boss when her birthday was. She said, 'March 1st'.",
		"So I walked around the room and asked her again.",
	],
	[
		"Apparantly, 30% of pet owners let their pet sleep in their bed.",
		"I tried it but my goldfish died.",
	],
];

function showNextJoke() {
	/* Use a random number to pick an emoji smiling face  */
	document.getElementById("emoji").innerHTML =
		emojies[Math.floor(Math.random() * emojies.length)];

	/* get a random number to pick a joke from the array */
	let joke = Math.floor(Math.random() * dadJokes.length);

	/* Display the setup part and then the punchline */
	document.getElementById("setup").innerHTML = dadJokes[joke][0];
	document.getElementById("punchline").innerHTML = dadJokes[joke][1];
}

function noMoreJokes() {
	clearInterval(timer);
	document.getElementById("setup").innerHTML = "Thanks !";
	document.getElementById("punchline").innerHTML = "See You Again Soon";
	document.getElementById("stopButton").style.display = "none";
}

/* timer to auto-refresh the page */
let timer = setInterval(showNextJoke, 5000);
