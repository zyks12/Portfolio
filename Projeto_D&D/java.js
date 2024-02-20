const generatorButton = document.querySelector('#generator');
const image = document.querySelector('#portrait')
const nameChar = document.querySelector('#name');
const raceChar = document.querySelector('#race');
const classChar = document.querySelector('#class');
const namePull = [
"Haemir Lorasandoral",
"Reluvethel Herzumin",
"Laeroth Norvalur ",
"Katyr Daezana",
"Grathgor Elmenor",
"Goren Miavalur",
"Klaern Chaerona",
"Tiarsus Brytris",
"Nym Orilynn",
"Raibyn Traxidor",
]
const racePull = [{
    name: "Dwarf",
    img: "./images/Personagens/Dwarf.jpg"
},
{
    name: "Elf",
    img: "./images/Personagens/elf.jpg"
},
{
    name: "Halfling",
    img: "./images/Personagens/Halfling.jpg"
},
{
    name: "Human",
    img: "./images/Personagens/Human.jpg"
},
{
    name: "Dragonborn",
    img: "./images/Personagens/Dragonborn.jpg"
},
{
    name: "Gnome",
    img: "./images/Personagens/Gnome.jpg"
},
{
    name: "Half-Elf",
    img: "./images/Personagens/Half-Elf.jpg"
},
{
    name: "Half-Orc",
    img: "./images/Personagens/Half-Orc.jpg"
},
{
    name: "Tiefling",
    img: "./images/Personagens/Tiefling.jpg"
}
    
]
const classPull = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Sorcerer",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard"
]

generatorButton.addEventListener("click", giveName);
generatorButton.addEventListener("click", giveClass);
generatorButton.addEventListener("click", giveRace);

function giveClass(){
    let number = getRandomInt(classPull.length - 1);
    classChar.innerHTML = "Class:&nbsp;" + classPull[number];
}

function giveRace(){
    let number = getRandomInt(racePull.length - 1);
    raceChar.innerHTML = "Race:&nbsp;" + racePull[number].name;
    image.src = racePull[number].img;
}

function giveName(){
    let number = getRandomInt(namePull.length - 1);
    nameChar.innerHTML = "Name:&nbsp;" + namePull[number];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }