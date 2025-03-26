let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1

// Update host name.
hostName = document.getElementById("host-name");
hostName.innerHTML = "Tristan";

// Update collaborator names.
collab1Name = document.getElementById("collaborator-name");
hostName.innerHTML = "Qingpeng";

collab2Name = document.getElementById("collaborator-2-name");
hostName.innerHTML = "test";

// Question 2
instructionButton = document.getElementById("instruction_button");

instructionButton.addEventListener("click", function() {
    questions = document.querySelectorAll("question");

    // Turn off display for all questions.
    for (let question of questions) {
        question.style.display = "none";
    }
});

// Question 3
firstNameBox = document.getElementById("first_name");
lastNameBox = document.getElementById("last_name");

// If input is John, autofill Doe.
firstNameBox.addEventListener("input", function(event) {
    if (firstNameBox.value === "John") {
        lastNameBox.value = "Doe";
    }
});

// Question 4
usernameBox = document.getElementById("user_name");
usernameAlert = document.getElementById("username-alert");

usernameBox.addEventListener("input", function(event) {

    // For each pokemon, check if the username is already taken.
    for (let pokemon of pokemonList) { 
        if (usernameBox.value === pokemon) {
            usernameAlert.innerHTML = "Username already exists";
            break;
        } else {
            usernameAlert.innerHTML = "Unique username created";
        }
    }
});

// Question 5
passwordBox = document.getElementById("password");
confirmPasswordBox = document.getElementById("confirm_password");
passwordAlert = document.getElementById("password-alert");
hidePasswordButton = document.getElementById("hide-password");
let showPassword = true;

passwordBox.addEventListener("input", function(event) {

    // Check to see if passwords match.
    if (passwordBox.value != confirmPasswordBox.value) {
        passwordAlert.innerHTML = "Passwords does not match";
    } else {
        passwordAlert.innerHTML = "Passwords Matches";
    }
});

hidePasswordButton.addEventListener("click", function() {
    if (showPassword) {
        showPassword = false;
        passwordBox.type = "password";
        confirmPasswordBox.type = "password";
    }
    else {
        showPassword = true;
        passwordBox.type = "password";
        confirmPasswordBox.type = "password";
    }
});


// Question 6


// Question 7


// Question 8


// Extra challenge: reset button

