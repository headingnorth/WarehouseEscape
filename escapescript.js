document.write('<scr'+'ipt type="text/javascript" src="bones.js" ></scr'+'ipt>');
//Where we're trying to get the input to go


// --Okay, this is the parser. I need to make the lines do things in the code now! I have the privilage of figuring this out! I'll set some variables.
var warehouseRoom = "beginning"; //(I'll be getting rid of this eventually, but that'll take a tad bitt'a work.)
var heavyPulley = "up";
var boxes = "stacked";
var wallStrength = 0;
//if this variable reaches...20? You die. A horrible sudden death.

function processLine(inputThing){
	var command = inputThing.toLowerCase();
	var story = document.getElementById("storybox");

	player.turnCount += 1;

	if(player.turnCount > 50){
		//todo make different losing sequences with different pages, gack
		alert("you have lost the game");
		window.open("lose.html", '_self', false);
	}

	if (command.search("take") > -1){
		//make inventory work, taking things out and putting them in

	}else if (command.search("discard") > -1){

	}else if (command.search("wear") > -1){

	}else if (command.search("use") > -1){
		if (command.search("self") > -1){
			if (command.search("wall") > -1){
				if (wallStrength === 0){
					printStoryText("An idea dawns. You flex your arms, convincing yourself that you are possessed of a feline strength. You take a deep breath, and...run.", "p");
					printStoryText("Your head hurts, but the visceral pain subsides some when you see a hairline crack in the musty wood.","p");
					batteredness = batteredness + 1;
					wallStrength = wallStrength +1;
				}else if(wallStrength === 1){
					printStoryText("Picking yourself back up, you tuck your arms into your armpits for a more areodynamic sprint. And to, you know, keep your survival instinct from trying to brace yourself against the rapidly approaching wall--", "p");
					printStoryText("You try to stand, but it feels as though your right wrist may be broken.","p");
					batteredness = batteredness + 1;
					wallStrength = wallStrength + 1;
				}else if(wallStrength === 2){
					printStoryText("You need to escape. You NEED TO ESCAPE, you remind yourself. That life outside is the one that matters, none of these boxes and irradiated barrels and alarming pactches of tar...","p");
					batteredness = batteredness + 1;
					wallStrength = wallStrength +1;
				}else if(wallStrength === 3){
					printStoryText("You tried to hold that in your mind. Your ragged breathing sound somehow pulpy to your ears. You grasp your stomach and swing yourself feebly at the wall once again.","p");
					printStoryText("You notice, with your dim peripheral vision, that the wall has almost given.","p");
					batteredness = batteredness + 1;
					wallStrength = wallStrength +1;
				}else if(wallStrength === 4){
					printStoryText("Too exhausted to run, you claw at the crumbling boards. So close...","p");
					batteredness = batteredness + 1;
					wallStrength = wallStrength +1;
				}else{
					window.open("wallescape.html", '_self', false);

				}
			}else{}
		}else{}
		//figure out how to put thing into inventory

	}else if (command.search("look") > -1){
		if (warehouseRoom === "beginning"){
			if (command.search("boxes") > -1){
				if(boxes === "stacked"){
					printStoryText("In front of you, there are stacks of boxes piled dangerously high. Motes of dust float gently down onto them.", "p");
				}else{
					printStoryText("A half-fallen stack of boxes lies at your feet. The closest one is covered in dark oily slick. You hesitate to move forwards.", "p");
				}
			}else if (command.search("crates") > -1){
				printStoryText("There are no crates in this room. There are old melted plastic boxes. You see no crates. Did someone tell you tell you there were crates? Who was it. Who would spread such slander?", "p");
			}else if (command.search("pulley") > -1){

			}else if (command.search("boards") > -1){

			}else if (command.search("tarp") > -1){

			}else if (command.search("nuclear") > -1){

			}else if(command.search("Jed") > -1){
				//add a randomized thing that says what jed is doing.
				printStoryText("Jed's just a really cool guy, y'know? You don't really want to bother Jed do you? He's just sitting around, fiddling with his headphones, but he's doing it amazingly and you probably shouldn't stop him.", "p");

			}else{
				printStoryText("Not focusing on anything in particular, you take in the room.", "p");
			}

		}else if (warehouseRoom === "middle"){

		}else if (warehouseRoom === "end"){

		}else{
			alert("holy crap you've broken the game. Dead now.");
			window.open("lose.html", '_self', false);
		}

	}else if (command.search("inventory") > -1){
		if (player.inventory.length > 0){
			story.appendChild(document.createTextNode("You have:"));
			story.appendChild(document.createElement("br"));
			var iList = document.createElement("ul");
			for(var i = 0; i<inventory.length; i++){
				var item = document.createElement("li");
				item.appendChild(document.createTextNode(inventory[i].Name));
				iList.appendChild(item);
			}
			story.appendChild(iList);
		}else{
			story.appendChild(document.createTextNode("you carry nothing"));
			story.appendChild(document.createElement("br"));
		}

		if(wearing.length > 0){
			//fix this one. For some reason it can't print what you're currently wearing, even though it's the same exact code as the inventory uses yaaaaay
			story.appendChild(document.createTextNode("You are wearing:"));
			story.appendChild(document.createElement("br"));
			var iList = document.createElement("ul");
			for(var i = 0; i<wearing.length; i++){
				var item = document.createElement("li");
				item.appendChild(document.createTextNode(wearing[i].Name));
				iList.appendChild(item);
			}
			story.appendChild(iList);
		}else{
			printStoryText("You are buck naked, and not a little embarrassed.")
		}

	}else if (command.search("north") >-1){
		if(warehouseRoom === "beginning"){
			if(boxes === "stacked"){
				printStoryText("You take a tentetive step forwards. The shifting of your weight causes the teetering pile of boxes to tumble in slow motion towards you, end over end. They land with a hideous thud.", "p");
				boxes = "fallen";
			}else{
				printStoryText("You eye the fallen boxes with a particular trepidation. You decide you like your ankles in the condition that they're in.", "p");
			}

		}else if (warehouseRoom=== "middle"){

		}else if (warehouseRoom === "end"){

		}else{
			alert("Well, you must have escaped somehow. Or you died.");
			window.open("lose.html", '_self', false);
		}


	}else if (command.search("south") > -1){
		if(warehouseRoom === "beginning"){
			if(heavyPulley === "up"){
				printStoryText("You step back to controls of the tall pulley and crunch a lever. The concrete barrel falls with a sickening thud onto the old tarp.", "p");
				heavyPulley = "down";

			}else{
				printStoryText("Back at the pulley controls, you slowly move the nuclear containment barrel back into position, high above the tarp.","p");
				heavyPulley = "up";
			}
			
		}else if (warehouseRoom=== "middle"){

		}else if (warehouseRoom === "end"){

		}else{
			alert("Are you...hacking? Are you trying to tear apart my beautiful, simple game? Die.");
			window.open("lose.html", '_self', false);
		}

	}else if (command.search("east") > -1){
		if(warehouseRoom === "beginning"){
			
		}else if (warehouseRoom=== "middle"){

		}else if (warehouseRoom === "end"){

		}else{
			alert("Not to say that hacking is bad, it's just that right here I don't really NEed anyone poking around in my scripts. Execute.");
			window.open("lose.html", '_self', false);
		}

	}else if (command.search("west") > -1){
		if(warehouseRoom === "beginning"){
			
		}else if (warehouseRoom=== "middle"){

		}else if (warehouseRoom === "end"){

		}else{
			alert("You suck darlin. See you on the flipside.");
			window.open("lose.html", '_self', false);
		}
	//The place to put the random things that are really annoying ways to die, etc....
	}else if(command.search("yodel") >-1){
		printStoryText("Your plaintive sounds echo across the metal barrel. It sounds like someone killing a cat. Well, if you really need help this bad... stop yodeling. Stop. Look, your ears are bleeding. Soft sticky ooze that rolls down the sides of your cheeks like tears, landing on the ground and soaking through, further and further, deep into the ground...","p");
		printStoryText("Okay. Just look down BELOW the ground, okay? Below them dusty boards.", "p");
		batteredness = batteredness + 1;

	}else if(command.search("rock") > -1){
		jedRocks = jedRocks + 1;
		if(jedRocks === 1){
			printStoryText("You walk to Jed. He raises his eyebrows. \"Have I got the music for you, man,\" he says. \"Have I got the music for you.\" He pulls one of his earbuds out, passes it towards you...","p");
			printStoryText("Dazed, you wake from a musical stupor. Golly, you think. Perhaps I shouldn't do that again.","p");
			batteredness = batteredness + 1;
		}else if(jedRocks === 2){
			printStoryText("It's just so... smooth... like him, you think. Them tunes tho. You sit on the grungy ground and contemplate your shoes like you've never before.","p");
			printStoryText("Your headache burns like the fires of...","p");
			batteredness = batteredness + 1;
		}else if(jedRocks === 3){
			printStoryText("The charisma...the beat. Who cares about escape when you have these soft soulful twangs, heavy breathing... ","p");
			batteredness = batteredness + 1;
		}else if(jedRocks === 4){
			printStoryText("YOU NEED TO STOP","p");
			batteredness = batteredness + 1;
		}else if(jedRocks === 5){
			printStoryText("The ground is your pillow, the dust if your food, the music is water, Jed is a god.", "p");
			batteredness = batteredness + 1;
		}else{
			window.open("jedRocks.html", '_self', false);
		}

	}else{ //another todo make this a simple function, and a list of randomness that can easily be appended to. 
		var randomError = Math.floor((Math.random() * 10) + 1);
		if(randomError === 1){
			printStoryText("You cough in the dust.", "p");
		}else if(randomError === 2){
			printStoryText("Your old army surplus backpack breaks a strap. Your entire inventory scatters over the rutted floor. The next five minutes are spent on a tedious clean up.", "p");
		}else if(randomError === 3){
			printStoryText("You wonder for a moment what everyone else in your life is doing. Someone's probably making toast. What kind of toast is it? Will they burn it? You sincerely hope not. You're kind of hungry.","p");
		}else if(randomError === 4){
			printStoryText("As you idly swing your arms, your thumb brushes up against some rotting wood. You pretend that you don't care about splinters.","p");

		}else if(randomError === 5){
			printStoryText("You just stand there, blank faced, like a fool. Foooooool you think you hear the wind say.","p");

		}else if(randomError === 6){
			printStoryText("You decide you want to look at the grime. It's nice grime, you think. Really spectacular.","P");

		}else if(randomError === 7){
			printStoryText("You wonder why you can't just beat at the wall until it breaks. It's pretty flimsy, you think. I could probably do this really easy. Just use self on wall. But...nah. It would never work.", "p");

		}else if(randomError === 8){
			printStoryText("You have the sudden urge to yodel for help", "p");

		}else if(randomError === 9){
			printStoryText("You feel a strange heat creep up your fingers. Probably just a placebo, trick of the mind, you think.","p");

		}else if(randomError === 10){
			printStoryText("Why am I in here, you wonder. Why did I have the stupid idea to just walk into a obviously marked radiation storage building, all alone-- \"Hey man!\" says your friend Jed who's been sitting in the corner quietly all along. \"Wanna rock out to some tunes?\"", "p");

		}else{
			printStoryText("Ded.", "p");
			//howto delay a function: window.setTimeout("javascript function", milliseconds);
		}
	}
	if(batteredness === 5){

	}else if(batteredness === 3){

	}else if(batteredness === 10){

	}else if(batteredness === 15){

	}else if(batteredness === 18){

	}else if(batteredness === 19){

	}else if(batteredness === 20){
		window.open("battereddeath.html", '_self', false);
	}else{}
	story.scrollTop = story.scrollHeight;
}