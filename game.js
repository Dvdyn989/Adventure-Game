/*-------------------------------- Constants --------------------------------*/
const scenes = {
    start: {
        text: "You are leaving your village, where do you go?",
        img: "https://images.unsplash.com/photo-1523760957528-55d1d540360d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D",
        options: [
            {buttontext: "Go Left", nextScene: "cave"},
            {buttontext: "Go Right", nextScene: "forest"},
        ]},
    cave: {
        text: "You see a dark cave, do you enter?",
        img: "https://media.gettyimages.com/id/1411183993/video/entrance-into-a-cave-in-the-mountain-with-blackout-in-the-end.jpg?s=640x640&k=20&c=yvuinOCGonZrZt0Jr_LGhXNwN3qXHaMW7NFLLXH9buY=",
        options: [ 
            {buttontext: "Yes", nextScene: "choice"},
            {buttontext: "No", nextScene: "slipBreakLeg"},
    ]},
    choice: {
        text: "You see three items at the entrance of the cave, pick one to bring inside.",
        img: "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/share/2753.jpg",
        options: [
            {buttontext: "Hammer", addItem: "Hammer", nextScene: "outcome"},
            {buttontext: "Key", addItem: "Key", nextScene: "outcome"},
            {buttontext: "Torchlight", addItem: "Torchlight", nextScene: "outcome"},
    ]},
    forest: {
        text: "You reach a forest and see a village, do you explore it?",
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww",
        options: [
        {buttontext: "Yes", nextScene: "villagerAttack"},
        {buttontext: "No", nextScene: "getLost"},
    ]},
    outcome : {
        text: "",
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
        text: "You get lost in the forest, you lose!",
        img: "https://images.unsplash.com/photo-1485847791529-09ed2263da0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvc3R8ZW58MHx8MHx8fDA%3D",
        end: "lose",
}};
/*-------------------------------- Variables --------------------------------*/
let inventory = [];
// /*------------------------ Cached Element References ------------------------*/
const gameText = document.getElementById("scenetext");
const options = document.getElementById("options");
const sceneimg = document.querySelector(".sceneimg");
/*-------------------------------- Functions --------------------------------*/
function showScene (scenename) {
const scene = scenes[scenename];
gameText.textContent = scene.text;
options.textContent = "";
sceneimg.textContent = "";

const img = document.createElement("img");
img.classList.add("img-fluid");
  img.src = scene.img;
  img.alt = "Scene image";
  img.title = "Scene image";
sceneimg.append(img);

if (scene.options){
scene.options.forEach(option => {
const btn = document.createElement("button");
btn.textContent = option.buttontext;
btn.addEventListener("click", e => {
//console.log(e.target);
inventoryItem(option);
});
options.append(btn);
})};

if (scene.end) {
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Play Again";
    restartBtn.classList.add("btn", "btn-success", "game-btn");
    restartBtn.addEventListener("click", e => {
    //console.log(e.target);
    showScene("start")});
    options.append(restartBtn);
  };

if (scenename === "outcome") {
if (inventory.includes("Torchlight")) {
    gameText.textContent = "You find treasure using the torchlight, you win!";
    img.src = "https://images.unsplash.com/photo-1691404819847-dab7d769aca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJlYXN1cmV8ZW58MHx8MHx8fDA%3D";
  } else {
    gameText.textContent = "The item is useless as you cannot see anything in the cave, you lose!";
    img.src = "https://static.vecteezy.com/system/resources/previews/016/640/975/non_2x/no-looking-flat-icon-free-vector.jpg";
}
  options.textContent = "";
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Play Again";
  restartBtn.classList.add("btn", "btn-success", "game-btn");
  restartBtn.addEventListener("click", () => {
    inventory = [];
    showScene("start");
  });
  options.append(restartBtn);
  }
};

function inventoryItem (option) {
if(option.addItem) {
    inventory.push(option.addItem);
    //console.log(`${option.addItem} picked up!`);
    gameText.textContent = `${option.addItem} picked up!`;
   setTimeout(() => {
      showScene(option.nextScene);
    }, 1200);
  } else {
    showScene(option.nextScene);
  };
};
showScene("start");
/*----------------------------- Event Listeners -----------------------------*/

