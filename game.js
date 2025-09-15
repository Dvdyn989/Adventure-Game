/*-------------------------------- Constants --------------------------------*/
const scenes = {
    start: {
        text: "You are leaving your village to explore the surroundings, where do you go?",
        img: "https://images.unsplash.com/photo-1523760957528-55d1d540360d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D",
        options: [
            {buttontext: "Go left", nextScene: "cave"},
            {buttontext: "Go right", nextScene: "forest"},
        ]},
    cave: {
        text: "You see a cave, do you enter?",
        img: "https://images.unsplash.com/photo-1422452098470-722310d3ad74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F2ZXxlbnwwfHwwfHx8MA%3D%3D",
        options: [ 
            {buttontext: "Yes", nextScene: "findTreasure"},
            {buttontext: "No", nextScene: "slipBreakLeg"},
    ]},
    forest: {
        text: "You reach the forest and see a village. do you explore it?",
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww",
        options: [
        {buttontext: "Yes", nextScene: "villagerAttack"},
        {buttontext: "No", nextScene: "getLost"},
        ]},
    findTreasure: {
        text: "You found treasure, you win!",
        img: "https://images.unsplash.com/photo-1691404819847-dab7d769aca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJlYXN1cmV8ZW58MHx8MHx8fDA%3D",
    buttontext: "Play again?", end: "win",
    },
    slipBreakLeg: {
        text: "You slip and break a leg, you lose!",
        img: "https://images.pexels.com/photos/4067795/pexels-photo-4067795.jpeg",
        buttontext: "Play again?", end: "lose",
    },
    villagerAttack: {
        text: "Villagers attack you, you lose!",
        img: "https://plus.unsplash.com/premium_photo-1724695601024-26c417347557?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0aXZlJTIwYXR0YWNrfGVufDB8fDB8fHww",
        buttontext: "Play again?", end: "lose",
    },
    getLost: {
        text: "You get lost, you lose!",
        img: "https://images.unsplash.com/photo-1485847791529-09ed2263da0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvc3R8ZW58MHx8MHx8fDA%3D",
        buttontext: "Play again?", end: "lose",
}};
/*-------------------------------- Variables --------------------------------*/
let currentScene = "start"; //let variable as not constant
// /*------------------------ Cached Element References ------------------------*/
const gameText = document.getElementById("scenetext"); //grab h1 title element, what is displayed during scenes
const options = document.getElementById("options"); //grab div element that contains option
const sceneimg = document.querySelector(".sceneimg"); //grab div element that contains img
const body = document.querySelector("body"); //grab whole body of document

/*-------------------------------- Functions --------------------------------*/
function showScene (scenename) {
//get data i need for scene using square bracket notation to access values in object
const scene = scenes[scenename]; //scene stores scenes object and the parameter scenename
const currentScene = scenename; // currentScene stores scenename, activate when function showScene called

gameText.textContent = scene.text; //h1 element text content is the text derived from scene(scenes[scenename])
options.textContent = ""; //clear once option is selected

if (scene.options){ //if scene has options, if none, show only restart button below
scene.options.forEach(option => { //for each options in scene (scenes[scenename])
const btn = document.createElement("button"); //create a button for each option
btn.textContent = option.buttontext; //attach relevant buttontext to button
btn.addEventListener("click", e => {//add event listener to button to run callback function when clicked
console.log(e.target); //confirmed buttons have been created and are the target
showScene(option.nextScene);//move to next scene, run function showScene, for every option (defined above in scene.options) to move to next scene defined in Scenes object
});
options.append(btn); //append btn to div element (options) in browser
})};

if (scene.img){ //scene has img
    body.style.backgroundImage = `url(${scene.img})`; //display in body the relevant scene img url

}

  if (scene.end) {//scene end
    const restartBtn = document.createElement("button"); //create the restart button
    restartBtn.textContent = "Play again?"; //restart button text is Play again?
    restartBtn.addEventListener("click", () => showScene("start")); //when clicked, showScene function runs to go back to start screen
    options.append(restartBtn); //append restart button to options div
  }
return;}; //return so stop running function

showScene("start"); //rmb call function
/*----------------------------- Event Listeners -----------------------------*/
