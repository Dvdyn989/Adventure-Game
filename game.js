/*-------------------------------- Constants --------------------------------*/
const scenes = {
    start: {
        text: "You are leaving your village to explore the surroundings, where do you go?",
        img: "village.jpg",
        options: [
            {buttontext: "Go left", nextScene: "cave"},
            {buttontext: "Go right", nextScene: "forest"},
        ]},
    cave: {
        text: "You see a cave, do you enter?",
        img: "cave.jpg",
        options: [ 
            {buttontext: "Yes", nextScene: "findTreasure"},
            {buttontext: "No", nextScene: "slipBreakLeg"},
    ]},
    forest: {
        text: "You reach the forest and see a village. do you explore it?",
        img: "forest.jpg",
        options: [
        {buttontext: "Yes", nextScene: "villagerAttack"},
        {buttontext: "No", nextScene: "getLost"},
        ]},
    findTreasure: {
        text: "You found treasure, you win!",
        img: "treasure.jpg",
    buttontext: "Play again?", winEndScene: "start",
    },
    slipBreakLeg: {
        text: "You slip and break a leg, you lose!",
        img: "leg.img",
        buttontext: "Play again?", loseEndScene: "start",
    },
    villagerAttack: {
        text: "Villagers attack you, you lose!",
        img: "attack.img",
        buttontext: "Play again?", loseEndScene: "start",
    },
    getLost: {
        text: "You get lost, you lose!",
        img: "lost.jpg",
        buttontext: "Play again?", loseEndScene: "start",
}};
/*-------------------------------- Variables --------------------------------*/
let currentScene = "start"; //let variable as not constant
// /*------------------------ Cached Element References ------------------------*/
const gameText = document.getElementById("scenetext"); //grab h1 title element, what is displayed during scenes
const options = document.getElementById("options"); //grab div element that contains option
const sceneimg = document.getElementById("sceneimg"); //grab div element that contains img
/*-------------------------------- Functions --------------------------------*/
function showScene (scenename) {
//get data i need for scene using square bracket notation
const scene = scenes[scenename];
const currentScene = scenename; // currentScene stores scenename, activate when function showScene called

if (scene.endScene) {//what happens when scene ends
    const endMsg = scene.endScene === winEndScene ? "You win!" : "You lose!"; // if else statement for if scene is win/lose
    const pEndMsg = document.createElement("h2"); //create h2 element for ending message
    pEngMsg.textContent = engMsg; //h2 element actual text to be endMsg
    options.append(pEndMsg); //append h2 element child inside options (div element) to display;
};
gameText.textContent = scene.text; //set scene text
options.textContent = ""; //to be input which text stating the option given to user

scene.options.forEach(option => { //for each options in scene (scenes[scenename])
const btn = document.createElement("button"); //create a button for each option
btn.textContent = option.buttontext; //attach relevant buttontext to button
btn.addEventListener("click", function (e){//add event listener to button to run callback function when clicked
console.log(e.target); //confirmed buttons have been created and are the target
showScene(option.nextScene);//move to next scene, run function showScene, for every option (defined above in scene.options) to move to next scene defined in Scenes object
});
options.append(btn); //append btn to div element (options) in browser
});

}
showScene("start"); //rmb call function
/*----------------------------- Event Listeners -----------------------------*/
