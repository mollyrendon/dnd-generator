//modal variables
var modal = document.getElementById("name-modal");
var btn = document.getElementById("click-here");
var span = document.getElementsByClassName("close") [0];
var saveBtn = document.getElementById("save-btn");

// trait variables
let btnAlignment = document.getElementById("alignment-btn");
let btnClass = document.getElementById("class-btn");
let btnRace = document.getElementById("race-btn");

let resultAlignment = document.getElementById("align-input");
let resultClass = document.getElementById("class-input");
let resultRace = document.getElementById("race-input");

var characterContainerEl = document.querySelector("#generated-character");
var alignInputElement = document.createElement("h3");
var classInputElement = document.createElement("h3");
var raceInputElement = document.createElement("h3");
var nameInputElement = document.createElement("h3");

//Get Fetch Request
var getAlignments = function() {
    var alignmentsUrl = "https://www.dnd5eapi.co/api/alignments/";
    fetch(alignmentsUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                let alignment = [data.results[0].name, data.results[1].name, data.results[2].name, data.results[3].name, data.results[4].name, data.results[5].name, data.results[6].name, data.results[7].name, data.results[8].name]



            
                btnAlignment.addEventListener("click", function() {
                    var getRollAll = function() {
                        var diceRoll = "https://rolz.org/api/?1d9.json"
                        fetch(diceRoll).then(function(response){
                            if(response.ok) {
                                response.json().then(function(data){
                                    let allDice = data.result -1
                                    characterAlignment = alignment[allDice]; 
                                    resultAlignment.innerText = characterAlignment;
                                return characterAlignment;
                                }) 
                            }
                        });
                    }


                    getRollAll(); 

                })
            })
        }
    });

}              



var getClasses = function() {
    var classesUrl = "https://www.dnd5eapi.co/api/classes";
    fetch(classesUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                let classes = [data.results[0].name, data.results[1].name, data.results[2].name, data.results[3].name, data.results[4].name, data.results[5].name, data.results[6].name, data.results[7].name, data.results[8].name, data.results[9].name, data.results[10].name, data.results[11].name]


                btnClass.addEventListener("click", function() {
                    var getRollAll = function() {
                        var diceRoll = "https://rolz.org/api/?1d12.json"
                        fetch(diceRoll).then(function(response){
                            if(response.ok) {
                                response.json().then(function(data){
                                    let allDice = data.result -1
                                    characterClass = classes[allDice]; 
                                    resultClass.innerText = characterClass;
                                return;
                                }) 
                            }
                        });
                    }

                    getRollAll(); 

                })
            })
        }
    });
}

var getRaces = function() {
    var racesUrl = "https://www.dnd5eapi.co/api/races/";
    fetch(racesUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                let race = [data.results[0].name, data.results[1].name, data.results[2].name, data.results[3].name, data.results[4].name, data.results[5].name, data.results[6].name, data.results[7].name, data.results[8].name]

                btnRace.addEventListener("click", function() {
                    var getRollAll = function() {
                        var diceRoll = "https://rolz.org/api/?1d9.json"
                        fetch(diceRoll).then(function(response){
                            if(response.ok) {
                                response.json().then(function(data){
                                    let allDice = data.result - 1
                                    characterRace = race[allDice]; 
                                    resultRace.innerText = characterRace;
                                return;
                                }) 
                            }
                        });
                    }


                    getRollAll(); 

                })
            })
        }
    })
};

//modal functions
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

saveBtn.addEventListener("click", function() {
    modal.style.display = "none";
    window.location.reload();
});


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Local Storage
document.getElementById("save-btn").addEventListener("click", function() {
    var characterName = document.getElementById("characternameinput").value;
    localStorage.setItem("characternameinput",JSON.stringify(characterName));

    var characterClass1 = document.getElementById("class-input").value;
    localStorage.setItem("class-input",JSON.stringify(characterClass1));

    var characterRace1 = document.getElementById("race-input").value;
    localStorage.setItem("race-input",JSON.stringify(characterRace1));

    var characterAlignment1 = document.getElementById("align-input").value;
    localStorage.setItem("align-input",JSON.stringify(characterAlignment1));
})

var displayCharacter = function () {
    var alignInput = JSON.parse(localStorage.getItem("align-input"));
    var classInput = JSON.parse(localStorage.getItem("class-input"));
    var raceInput = JSON.parse(localStorage.getItem("race-input"));
    var nameInput = JSON.parse(localStorage.getItem("characternameinput"));
    
    alignInputElement.textContent = alignInput
    classInputElement.textContent = classInput
    raceInputElement.textContent = raceInput
    nameInputElement.textContent = nameInput

    characterContainerEl.appendChild(alignInputElement)
    characterContainerEl.appendChild(classInputElement)
    characterContainerEl.appendChild(raceInputElement)
    characterContainerEl.appendChild(nameInputElement)
};




getAlignments();
getClasses();
getRaces();
displayCharacter();
