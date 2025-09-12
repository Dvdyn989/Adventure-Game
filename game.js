/*-------------------------------- Constants --------------------------------*/
const scenes = {
    startScene: [{
        text: "you are leaving your village to explore the surroundings. where do you go?",
        options: [
            {buttontext: "Go left", nextScene: caveScene},
            {buttontext: "Go right", nextScene: forestScene}, 
        ]}],  
    caveScene: [{
        text: "you see a cave, do you enter?",
        options: [ 
            {buttontext: "Yes", nextScene: findTreasure},
            {buttontext: "No", nextScene: slipBreakLeg},
    ]}],
    forestScene: [{
        text: "you reach the forest and see a village. do you explore it?",
        options: [
        {buttontext: "Yes", nextScene: villagerAttack},
        {buttontext: "No", nextScene: getLost},
        ]}],
    findTreasure: [{
        text: "treasure found, you win!",
    buttontext: "Play again?", nextScene: startScene,
    }],
    slipBreakLeg: [{
        text: "you slip and break a leg, you lose!",
        buttontext: "Play again?", nextScene: startScene,
    }],
    villagerAttack: [{
        text: "villagers attack you, you lose!",
        buttontext: "Play again?", nextScene: startScene,
    }],
    getLost: [{
        text: "you get lost, you lose!",
        buttontext: "Play again?", nextScene: startScene,
}]};
/*-------------------------------- Variables --------------------------------*/
let currentScene = "startScene";
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
