/*-------------------------------- Constants --------------------------------*/
const scenes = {
    start: {
        text: "You are leaving your village to explore the surroundings, where do you go?",
        img: "https://screenrant.com/wp-content/uploads/2018/01/Konoha-Gate-Entrance.jpg",
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
    buttontext: "Play again?", end: "win",
    },
    slipBreakLeg: {
        text: "You slip and break a leg, you lose!",
        img: "leg.img",
        buttontext: "Play again?", end: "lose",
    },
    villagerAttack: {
        text: "Villagers attack you, you lose!",
        img: "attack.img",
        buttontext: "Play again?", end: "lose",
    },
    getLost: {
        text: "You get lost, you lose!",
        img: "lost.jpg",
        buttontext: "Play again?", end: "lose",
}};
/*-------------------------------- Variables --------------------------------*/
let currentScene = "start"; //let variable as not constant
// /*------------------------ Cached Element References ------------------------*/
const gameText = document.getElementById("scenetext"); //grab h1 title element, what is displayed during scenes
const options = document.getElementById("options"); //grab div element that contains option
const sceneimg = document.getElementsByClassName("sceneimg"); //grab div element that contains img
/*-------------------------------- Functions --------------------------------*/
function showScene (scenename) {
//get data i need for scene using square bracket notation to access values in object
const scene = scenes[scenename]; //scene stores scenes object and the parameter scenename
const currentScene = scenename; // currentScene stores scenename, activate when function showScene called

gameText.textContent = scene.text; //h1 element text content is the text derived from scene(scenes[scenename])
options.textContent = "";

if (scene.options){ //if scene has options, if none, show restart button below
scene.options.forEach(option => { //for each options in scene (scenes[scenename])
const btn = document.createElement("button"); //create a button for each option
btn.textContent = option.buttontext; //attach relevant buttontext to button
btn.addEventListener("click", e => {//add event listener to button to run callback function when clicked
console.log(e.target); //confirmed buttons have been created and are the target
showScene(option.nextScene);//move to next scene, run function showScene, for every option (defined above in scene.options) to move to next scene defined in Scenes object
});
options.append(btn); //append btn to div element (options) in browser
})};

//need figure out if need the below if (scene.endScene)
//if (scene.end) {//what happens when scene ends
//     const endMsg = scene.end === winEndScene ? "You win!" : "You lose!"; // if else statement for if scene is win/lose
//     const pEndMsg = document.createElement("h2"); //create h2 element for ending message
//     pEngMsg.textContent = engMsg; //h2 element actual text to be endMsg
//     options.append(pEndMsg); //append h2 element child inside options (div element) to display;
// };
  if (scene.end) {//scene end
    const restartBtn = document.createElement("button"); //create the restart button
    restartBtn.textContent = "Play again?"; //restart button text is Play again?
    restartBtn.addEventListener("click", () => showScene("start")); //when clicked, showScene function runs to go back to start screen
    options.append(restartBtn); //append restart button to options div
  }
return;}; //return so stop

showScene("start"); //rmb call function
/*----------------------------- Event Listeners -----------------------------*/
