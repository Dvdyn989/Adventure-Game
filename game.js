/*-------------------------------- Constants --------------------------------*/
const scenes = {
    start: {
        text: "You are leaving your village to explore the surroundings, where do you go?",
        img: "https://images.unsplash.com/photo-1523760957528-55d1d540360d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D",
        options: [
            {buttontext: "Go Left", nextScene: "cave"},
            {buttontext: "Go Right", nextScene: "forest"},
        ]},
    cave: {
        text: "You see a cave, do you enter?",
        img: "https://images.unsplash.com/photo-1422452098470-722310d3ad74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F2ZXxlbnwwfHwwfHx8MA%3D%3D",
        options: [ 
            {buttontext: "Yes", nextScene: "choice"},
            {buttontext: "No", nextScene: "slipBreakLeg"},
    ]},
    choice: {
        text: "You see three items at the entrance of the cave, pick one to bring inside.",
        img: "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/share/2753.jpg",
        options: [
            {buttontext: "Hammer", addItem: "Hammer", nextScene: "ending"},
            {buttontext: "Key", addItem: "Key", nextScene: "ending"},
            {buttontext: "Torchlight", addItem: "Torchlight", nextScene: "findTreasure"},
    ]},
    forest: {
        text: "You reach the forest and see a village, do you explore it?",
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww",
        options: [
        {buttontext: "Yes", nextScene: "villagerAttack"},
        {buttontext: "No", nextScene: "getLost"},
        ]},
    findTreasure: {
        text: "You found treasure using the torchlight, you win!",
        img: "https://images.unsplash.com/photo-1691404819847-dab7d769aca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJlYXN1cmV8ZW58MHx8MHx8fDA%3D",
        end: "win",
    },
    ending: {
        text: "It's useless as you cannot see anything in the cave, you lose!",
        img: "https://static.vecteezy.com/system/resources/previews/016/640/975/non_2x/no-looking-flat-icon-free-vector.jpg",
        end: "lose",
    },
    slipBreakLeg: {
        text: "You slip and break a leg, you lose!",
        img: "https://images.pexels.com/photos/4067795/pexels-photo-4067795.jpeg",
        end: "lose",
    },
    villagerAttack: {
        text: "Villagers attack you, you lose!",
        img: "https://images.pexels.com/photos/8411578/pexels-photo-8411578.jpeg",
        end: "lose",
    },
    getLost: {
        text: "You get lost, you lose!",
        img: "https://images.unsplash.com/photo-1485847791529-09ed2263da0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvc3R8ZW58MHx8MHx8fDA%3D",
        end: "lose",
}};
/*-------------------------------- Variables --------------------------------*/
let inventory = []; //start with nothing first in inventory
// /*------------------------ Cached Element References ------------------------*/
const gameText = document.getElementById("scenetext"); //grab h1 element, for text displayed during scenes
const options = document.getElementById("options"); //grab div element that contains option
const sceneimg = document.querySelector(".sceneimg"); //grab div element that contains img
/*-------------------------------- Functions --------------------------------*/
function showScene (scenename) {
//get data i need for scene using square bracket notation to access values in object
const scene = scenes[scenename]; //scene stores scenes object and the parameter scenename
gameText.textContent = scene.text; //h1 element text content is the text derived from scene(scenes[scenename])
options.textContent = ""; //all items in options cleared first
sceneimg.textContent = ""; //all items in sceneimg cleared first

if (scene.options){ //if scene has options, if none, show only restart button below
scene.options.forEach(option => { //for each option in options in scene (scenes[scenename])
const btn = document.createElement("button"); //create a button for each option
btn.textContent = option.buttontext; //attach relevant buttontext to button
btn.addEventListener("click", e => {//add event listener to button to run callback function when clicked
//console.log(e.target); //confirmed buttons have been created and are the target
inventoryItem(option); //call inventoryItem function
});
options.append(btn);//append btn to div element (options) in browser and for buttons to appear
})};

if (scene.img){ //all scenes have img
    const img = document.createElement("img"); //create image element
  img.src = scene.img; //img src from url in scene.img
  img.alt = "Scene image"; //alt for accessibilty
  img.title = "Scene image"; //title mouseover over image
  sceneimg.append(img); //append img to sceneimg (div to contain images) and for images to appear
}

if (scene.end) {//for scene end, need a restart button
    const restartBtn = document.createElement("button"); //create the restart button then
    restartBtn.textContent = "Play Again"; //set restart button text as Play Again
    restartBtn.addEventListener("click", e => {//when clicked, showScene function runs to go back to start screen
    //console.log(e.target); //confirmed restart button created and is the target
    showScene("start")}); //goes back to start scene
    options.append(restartBtn); //append restart button to options div so it appears
  };
};

function inventoryItem (option) { //parameter is option
if(option.addItem) { //once item is selected
    inventory.push(option.addItem); //push the item to inventory
    //console.log(`${option.addItem} picked up!`); //confirmed correct item has been picked up when button clicked
    gameText.textContent = `${option.addItem} picked up!`; //text to display
    options.textContent = ""; //clear all items in options
   setTimeout(() => { //timeout to show how long the text is to be displayed before moving to next scene
      showScene(option.nextScene);
    }, 1200); //1.2 seconds
  } else {
    // if no item since not all scenes have items, just go straight to the next scene
    showScene(option.nextScene);
  };
};
showScene("start"); //rmb call function
/*----------------------------- Event Listeners -----------------------------*/
