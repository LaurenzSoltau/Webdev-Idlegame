
//general variables
var noodles = 0;
var noodlesPerClick = 1;
var noodlesPerSecond = 0;
var growthFactor = 1.07;
var noodlesPerSecondFactor = 1;
var noodlesPerClickFactor = 1;
var highestNoodles = 0;
var generatorStage = 1;

// Generator variables

//small Italian Kid
var basePriceSmallItalianKid = 75;
var baseNpsSmallItalianKid = 1;
var ownedSmallItalianKid = 0;
var priceNextSmallItalianKid; 

// grandma
let grandmaElement = document.getElementById("grandma");
var grayed = true;
var basePriceGrandma = 300;
var baseNpsGrandma = 3;
var ownedGrandma = 0;
var priceNextGrandma;

// cook
let cookElement = document.getElementById("cook")
var basePriceCook = 1250;
var baseNpsCook = 10;
var ownedCook = 0;
var priceNextCook;

// noodle machine
let noodleMachineElement = document.getElementById("noodleMachine")
var basePriceNoodleMachine = 5000;
var baseNpsNoodleMachine = 25;
var ownedNoodleMachine = 0;
var priceNextNoodleMachine;

// kitchen
let kitchenElement = document.getElementById("kitchen")
var basePriceKitchen = 22500;
var baseNpsKitchen = 100;
var ownedKitchen = 0;
var priceNextKitchen;

// small factory
let smallFactoryElement = document.getElementById("smallFactory")
var basePriceSmallFactory = 100000;
var baseNpsSmallFactory = 400;
var ownedSmallFactory = 0;
var priceNextSmallFactory;


// big factory


// noodle Country


// noodle Planet


// noodle Star


// noodle Solar System

// Noodle Galaxy

// Black hole









//functions

//start functions

function Start()
{
    priceNextSmallItalianKid = CalculatePriceNextSmallItalianKid();
    priceNextGrandma = CalculatePriceNextGrandma();
    priceNextCook = CalculatePriceNextCook();
    priceNextNoodleMachine = CalculatePriceNextNoodleMachine();
    priceNextKitchen = CalculatePriceNextKitchen();
    priceNextSmallFactory = CalculatePriceNextSmallFactory();
    
}
// general

document.getElementById("clicker").addEventListener("click", function(event) 
{
    NumberOnClicker(event);
}, false)

setInterval(function() {
    noodles = noodles + NoodlesNextSecond()
    document.getElementById("noodles").innerHTML = noodles;
    document.title = noodles + " Noodles - Noodle Clicker"
}, 1000);

function Click()
{
    noodles = noodles + NoodlesNextClick();
    document.getElementById("noodles").innerHTML = Math.round(noodles);
}

function NoodlesNextClick()
{
    return noodlesPerClick * noodlesPerClickFactor;
}

function NoodlesNextSecond()
{
    return noodlesPerSecond * noodlesPerSecondFactor;
}


function FadeOut(element, duration, finalOpacity, callback){
    let opacity = 1;

    let elementFadingInterval = window.setInterval(function() {
        opacity -= 50 / duration;

        if (opacity <= finalOpacity){
            clearInterval(elementFadingInterval);
            callback();
        }
        element.style.opacity = opacity;
    }, 50);
    
}

function NumberOnClicker(event) 
{
    //grab the clicker
    let clicker = document.getElementById("clicker");
   
    // grab position of click

    let clickerOffset = clicker.getBoundingClientRect();
    let position = {
        x: event.pageX - clickerOffset.left,
        y: event.pageY - clickerOffset.top,
    }

    // Create the Number
    let element = document.createElement("div");
    element.textContent = "+" + NoodlesNextClick();
    element.classList.add("number");
    element.style.left = position.x + "px"
    element.style.top = position.y +"px"
    
    // Add the Number to the clicker
    clicker.appendChild(element);

    //slowly rise element

    let movementInterval = window.setInterval(function(){
        if (typeof element == "undefined" && element == null) clearInterval(movementInterval);
        
        position.y--;
        element.style.top = position.y + "px"
    }, 10);

    //slowly fade out
    FadeOut(element, 2500, 0.3, function() {
        element.remove();
    });

}
// buy generators

function BuySmallItalianKid()
{
    if(noodles < priceNextSmallItalianKid){
        return;
    }
    noodles = noodles - priceNextSmallItalianKid;
    ownedSmallItalianKid = ownedSmallItalianKid + 1;
    noodlesPerSecond = noodlesPerSecond + baseNpsSmallItalianKid;
    priceNextSmallItalianKid = CalculatePriceNextSmallItalianKid();
    document.getElementById("priceSmallItalianKid").innerHTML = priceNextSmallItalianKid;
    document.getElementById("ownedSmallItalianKid").innerHTML = ownedSmallItalianKid;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
    
}
function BuyGrandma()
{
    if(noodles < priceNextGrandma){
        return;
    }
    if (generatorStage < 2) {
    generatorStage = 2; }
    noodles = noodles - priceNextGrandma;
    ownedGrandma = ownedGrandma + 1;
    noodlesPerSecond = noodlesPerSecond + baseNpsGrandma;
    priceNextGrandma = CalculatePriceNextGrandma();
    document.getElementById("priceGrandma").innerHTML = priceNextGrandma;
    document.getElementById("ownedGrandma").innerHTML = ownedGrandma;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
}
function BuyCook()
{
    if(noodles < priceNextCook){
        return;
    }
    if(generatorStage < 3){
    generatorStage = 3;}
    noodles = noodles - priceNextCook;
    ownedCook = ownedCook + 1;
    noodlesPerSecond = noodlesPerSecond + baseNpsCook;
    priceNextCook = CalculatePriceNextCook();
    document.getElementById("priceCook").innerHTML = priceNextCook;
    document.getElementById("ownedCook").innerHTML = ownedCook;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
}

function BuyNoodleMachine()
{
    if(noodles < priceNextNoodleMachine){
        return;
    }
    if(generatorStage <4){
    generatorStage = 4;}
    noodles = noodles - priceNextNoodleMachine;
    ownedNoodleMachine = ownedNoodleMachine + 1;
    noodlesPerSecond = noodlesPerSecond + baseNpsNoodleMachine;
    priceNextNoodleMachine = CalculatePriceNextNoodleMachine();
    document.getElementById("priceNoodleMachine").innerHTML = priceNextNoodleMachine;
    document.getElementById("ownedNoodleMachine").innerHTML = ownedNoodleMachine;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
}

function BuyKitchen()
{
    if(noodles < priceNextKitchen){
        return;
    }
    if(generatorStage <5){
    generatorStage = 5;}
    noodles = noodles - priceNextKitchen;
    ownedKitchen = ownedKitchen + 1;
    noodlesPerSecond = noodlesPerSecond + baseNpsKitchen;
    priceNextKitchen = CalculatePriceNextKitchen();
    document.getElementById("priceKitchen").innerHTML = priceNextKitchen;
    document.getElementById("ownedKitchen").innerHTML = ownedKitchen;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
}

function BuySmallFactory()
{
    if(noodles < priceNextSmallFactory){ 
        return;
    }
    if(generatorStage <6){
    generatorStage = 6;}
    noodles = noodles - priceNextSmallFactory;
    ownedSmallFactory = ownedSmallFactory + 1;
    noodlesPerSecond = noodlesPerSecond + baseNpsKitchen;
    priceNextNoodleMachine = CalculatePriceNextNoodleMachine();
    document.getElementById("priceSmallFactory").innerHTML = priceNextSmallFactory;
    document.getElementById("ownedSmallFactory").innerHTML = ownedSmallFactory;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
}

// calculate prices

function CalculatePriceNextSmallItalianKid()
{
    return Math.round(basePriceSmallItalianKid * (Math.pow(growthFactor, ownedSmallItalianKid)));
}

function CalculatePriceNextGrandma()
{
    return Math.round(basePriceGrandma * (Math.pow(growthFactor, ownedGrandma)));
}

function CalculatePriceNextCook()
{
    return Math.round(basePriceCook * (Math.pow(growthFactor, ownedCook)));
}

function CalculatePriceNextNoodleMachine()
{
    return Math.round(basePriceNoodleMachine * (Math.pow(growthFactor, ownedNoodleMachine)));
}

function CalculatePriceNextKitchen()
{
    return Math.round(basePriceKitchen * (Math.pow(growthFactor, ownedKitchen)));
}

function CalculatePriceNextSmallFactory()
{
    return Math.round(basePriceSmallFactory * (Math.pow(growthFactor, ownedSmallFactory)));
}




// Developer Tools

function GiveCoins() {
    noodles = noodles + 1000;
    document.getElementById("noodles").innerHTML = noodles;
}

Start();

document.getElementById("grandma").style.backgroundColor = "darkgrey";
document.getElementById("cook").style.backgroundColor = "darkgrey";
document.getElementById("noodleMachine").style.backgroundColor = "darkgrey";
document.getElementById("kitchen").style.backgroundColor = "darkgrey";
document.getElementById("smallFactory").style.backgroundColor = "darkgrey";
document.getElementById("noodleMachineName").innerHTML = "???";
document.getElementById("grandmaName").innerHTML = "???";
document.getElementById("cookName").innerHTML = "???";
document.getElementById("kitchenName").innerHTML = "???";
document.getElementById("smallFactoryName").innerHTML = "???";




setInterval(function() {

    if (document.getElementById("priceGrandma").innerHTML<=noodles){
        document.getElementById("grandma").style.removeProperty("background-color");
        document.getElementById("grandmaName").innerHTML = "Grandma";

        return;
    }
}, 100);

setInterval(function() {

    if (document.getElementById("priceCook").innerHTML<=noodles){
        document.getElementById("cook").style.removeProperty("background-color");
        document.getElementById("cookName").innerHTML = "Cook";
        return;
    }
}, 100);

setInterval(function() {

    if (document.getElementById("priceNoodleMachine").innerHTML<=noodles){
        document.getElementById("noodleMachine").style.removeProperty("background-color");
        document.getElementById("noodleMachineName").innerHTML = "Noodle Machine";
        return;
    }
}, 100);

setInterval(function() {

    if (document.getElementById("priceKitchen").innerHTML<=noodles){
        document.getElementById("kitchen").style.removeProperty("background-color");
        document.getElementById("kitchenName").innerHTML = "Kitchen";
        return;
    }
}, 100);

setInterval(function() {

    if (document.getElementById("priceSmallFactory").innerHTML<=noodles){
        document.getElementById("smallFactory").style.removeProperty("background-color");
        document.getElementById("smallFactoryName").innerHTML = "Small Factory";
        return;
    }
}, 100);

setInterval(function() {
    if(generatorStage == 1){
        noodleMachineElement.style.visibility = "hidden";
        kitchenElement.style.visibility = "hidden";
        smallFactoryElement.style.visibility = "hidden";
    }else if(generatorStage == 2){
        noodleMachineElement.style.visibility = "visible";
        kitchenElement.style.visibility = "hidden";
        smallFactoryElement.style.visibility = "hidden";
    }else if(generatorStage == 3) {
        kitchenElement.style.visibility = "visible";
    }else if(generatorStage == 4) {
        smallFactoryElement.style.visibility = "visible";
    }
}, 100)

// testing


