
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
var smallItalianKidFactor = 1;

// grandma
let grandmaElement = document.getElementById("grandma");
var grayed = true;
var basePriceGrandma = 300;
var baseNpsGrandma = 3;
var ownedGrandma = 0;
var priceNextGrandma;
var grandmaFactor = 1;

// cook
let cookElement = document.getElementById("cook")
var basePriceCook = 1250;
var baseNpsCook = 10;
var ownedCook = 0;
var priceNextCook;
var cookFactor = 1;

// noodle machine
let noodleMachineElement = document.getElementById("noodleMachine")
var basePriceNoodleMachine = 5000;
var baseNpsNoodleMachine = 25;
var ownedNoodleMachine = 0;
var priceNextNoodleMachine;
var noodleMachineFactor = 1;

// kitchen
let kitchenElement = document.getElementById("kitchen")
var basePriceKitchen = 22500;
var baseNpsKitchen = 100;
var ownedKitchen = 0;
var priceNextKitchen;
var kitchenFactor = 1;

// small factory
let smallFactoryElement = document.getElementById("smallFactory")
var basePriceSmallFactory = 100000;
var baseNpsSmallFactory = 400;
var ownedSmallFactory = 0;
var priceNextSmallFactory;
var smallFactoryFactor = 1;


// big factory


// noodle Country


// noodle Planet


// noodle Star


// noodle Solar System

// Noodle Galaxy

// Black hole



// upgrades
    let Upgrade1 = {
        cost : 150,
        requirement : 1, //small italian kid
        bought : false,
        visible: false,
        effect : 2, //smallItalianKidFactor
    }
    let Upgrade2 = {
        cost : 300,
        requirement : 2, //small italian kid
        bought : false,
        visible: false,
        effect : 2, //NoodlesPerclick Factor
    }
    let Upgrade3 = {
        cost : 450,
        requirement : 1, // grandma
        bought : false,
        visible: false,
        effect : 2, //grandma Factor
    }
    let Upgrade4 = {
        cost : 750,
        requirement : 5, //small italian kid
        bought : false,
        visible: false,
        effect : 2, //smallItalianKidFactor
    }
    let Upgrade5 = {
        cost : 1500,
        requirement : 10, //Grandma
        bought : false,
        visible: false,
        effect : 2, //grandmaFactor
    }
    let Upgrade6 = {
        cost : 2500,
        requirement : 3, //Cook
        bought : false,
        visible: false,
        effect : 2, //cookFactor
    }
    let Upgrade7 = {
        cost : 7500,
        requirement : 35, //small italian kid
        bought : false,
        visible: false,
        effect : 2, //clickfactor
    }
    let Upgrade8 = {
        cost : 15000,
        requirement : 10, //cook
        bought : false,
        visible: false,
        effect : 2, //cooKFactor
    }




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
    
    document.getElementById("grandma").style.backgroundColor = "darkgrey";
    document.getElementById("cook").style.backgroundColor = "darkgrey";
    document.getElementById("noodleMachine").style.backgroundColor = "darkgrey";
    document.getElementById("kitchen").style.backgroundColor = "darkgrey";
    document.getElementById("smallFactory").style.backgroundColor = "darkgrey";
    document.getElementById("noodleMachine").style.visibility = "hidden";
    document.getElementById("kitchen").style.visibility = "hidden";
    document.getElementById("smallFactory").style.visibility = "hidden";
    document.getElementById("noodleMachineName").innerHTML = "???";
    document.getElementById("grandmaName").innerHTML = "???";
    document.getElementById("cookName").innerHTML = "???";
    document.getElementById("kitchenName").innerHTML = "???";
    document.getElementById("smallFactoryName").innerHTML = "???";

    document.getElementById("upgrade1").style.visibility = "hidden"; 
    document.getElementById("upgrade2").style.visibility = "hidden"; 
    document.getElementById("upgrade3").style.visibility = "hidden"; 
    document.getElementById("upgrade4").style.visibility = "hidden"; 
    document.getElementById("upgrade5").style.visibility = "hidden"; 
    document.getElementById("upgrade6").style.visibility = "hidden"; 
    document.getElementById("upgrade7").style.visibility = "hidden"; 
    document.getElementById("upgrade8").style.visibility = "hidden"; 
  
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

    let unlockedGrandma = false;
    let unlockedCook = false;
    let unlockedNoodleMachine = false;
    let unlockedKitchen = false;
    let unlockedSmallFactory = false;

    if (document.getElementById("priceGrandma").innerHTML<=noodles && !unlockedGrandma){
        document.getElementById("grandma").style.removeProperty("background-color");
        document.getElementById("grandmaName").innerHTML = "Grandma";
        unlockedGrandma = true;
    }
    if (document.getElementById("priceCook").innerHTML<=noodles && !unlockedCook){
        document.getElementById("cook").style.removeProperty("background-color");
        document.getElementById("cookName").innerHTML = "Cook";
        unlockedCook = true;
    }

    if (document.getElementById("priceNoodleMachine").innerHTML<=noodles && !unlockedNoodleMachine){
        document.getElementById("noodleMachine").style.removeProperty("background-color");
        document.getElementById("noodleMachineName").innerHTML = "Noodle Machine";
        unlockedNoodleMachine = true;
    }
    if (document.getElementById("priceKitchen").innerHTML<=noodles && !unlockedKitchen){
        document.getElementById("kitchen").style.removeProperty("background-color");
        document.getElementById("kitchenName").innerHTML = "Kitchen";
        unlockedKitchen = true;
    }
    if (document.getElementById("priceSmallFactory").innerHTML <=noodles && !unlockedSmallFactory){
        document.getElementById("smallFactory").style.removeProperty("background-color");
        document.getElementById("smallFactoryName").innerHTML = "Small Factory";
    }






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
    noodlesPerSecond = (baseNpsSmallItalianKid * ownedSmallItalianKid * smallItalianKidFactor) + 
    (baseNpsGrandma * ownedGrandma * grandmaFactor) + (baseNpsCook * ownedCook * cookFactor) + 
    (baseNpsNoodleMachine * ownedNoodleMachine * noodleMachineFactor) + (baseNpsKitchen * ownedKitchen * kitchenFactor) + 
    (baseNpsSmallFactory * ownedSmallFactory * smallFactoryFactor); 
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

let playClickSound = () => new Audio("./clickSound.wav").play()


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

    if(ownedSmallItalianKid >= Upgrade1.requirement && !Upgrade1.visible){
        document.getElementById("upgrade1").style.visibility = "visible";
        Upgrade1.visible = true;
    } 
    if(ownedSmallItalianKid >= Upgrade2.requirement && !Upgrade2.visible){
        document.getElementById("upgrade2").style.visibility = "visible";
        Upgrade2.visible = true;
    } 
    if(ownedSmallItalianKid >= Upgrade4.requirement && !Upgrade4.visible){
        document.getElementById("upgrade4").style.visibility = "visible";
        Upgrade4.visible = true;
    } 
    if(ownedSmallItalianKid >= Upgrade7.requirement && !Upgrade7.visible){
        document.getElementById("upgrade7").style.visibility = "visible";
        Upgrade7.visible = true;
    } 
    if (ownedSmallItalianKid % 10 == 0)
    {
        noodlesPerClick++;
        document.getElementById("noodlesPerClick").innerHTML = NoodlesNextClick();
    }
}
function BuyGrandma()
{
    if(noodles < priceNextGrandma){
        return;
    }
    document.getElementById("noodleMachine").style.visibility = "visible"
    noodles = noodles - priceNextGrandma;
    ownedGrandma = ownedGrandma + 1;
    noodlesPerSecond = noodlesPerSecond + baseNpsGrandma;
    priceNextGrandma = CalculatePriceNextGrandma();
    document.getElementById("priceGrandma").innerHTML = priceNextGrandma;
    document.getElementById("ownedGrandma").innerHTML = ownedGrandma;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
    if(ownedGrandma >= Upgrade3.requirement && !Upgrade3.visible){
        document.getElementById("upgrade3").style.visibility = "visible";
        Upgrade3.visible = true;
    } 
    if(ownedGrandma >= Upgrade5.requirement && !Upgrade5.visible){
        document.getElementById("upgrade5").style.visibility = "visible";
        Upgrade5.visible = true;
    } 
    if (ownedGrandma % 10 == 0)
    {
        noodlesPerClick++;
        document.getElementById("noodlesPerClick").innerHTML = NoodlesNextClick();
    }
}
function BuyCook()
{
    if(noodles < priceNextCook){
        return;
    }
    document.getElementById("kitchen").style.visibility = "visible"
    noodles = noodles - priceNextCook;
    ownedCook = ownedCook + 1;
    noodlesPerSecond = noodlesPerSecond + baseNpsCook;
    priceNextCook = CalculatePriceNextCook();
    document.getElementById("priceCook").innerHTML = priceNextCook;
    document.getElementById("ownedCook").innerHTML = ownedCook;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
    if(ownedCook >= Upgrade6.requirement && !Upgrade6.visible){
        document.getElementById("upgrade6").style.visibility = "visible";
        Upgrade6.visible = true;
    } 
    if(ownedCook >= Upgrade8.requirement && !Upgrade8.visible){
        document.getElementById("upgrade8").style.visibility = "visible";
        Upgrade8.visible = true;
    } 
    if (ownedCook % 10 == 0)
    {
        noodlesPerClick++;
        document.getElementById("noodlesPerClick").innerHTML = NoodlesNextClick();
    }
}

function BuyNoodleMachine()
{
    if(noodles < priceNextNoodleMachine){
        return;
    }
    document.getElementById("smallFactory").style.visibility = "visible"
    noodles = noodles - priceNextNoodleMachine;
    ownedNoodleMachine = ownedNoodleMachine + 1;
    noodlesPerSecond = noodlesPerSecond + baseNpsNoodleMachine;
    priceNextNoodleMachine = CalculatePriceNextNoodleMachine();
    document.getElementById("priceNoodleMachine").innerHTML = priceNextNoodleMachine;
    document.getElementById("ownedNoodleMachine").innerHTML = ownedNoodleMachine;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
    if (ownedNoodleMachine % 10 == 0)
    {
        noodlesPerClick++;
        document.getElementById("noodlesPerClick").innerHTML = NoodlesNextClick();
    }
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
    if (ownedKitchen % 10 == 0)
    {
        noodlesPerClick++;
        document.getElementById("noodlesPerClick").innerHTML = NoodlesNextClick();
    }
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
    if (ownedSmallFactory % 10 == 0)
    {
        noodlesPerClick++;
        document.getElementById("noodlesPerClick").innerHTML = NoodlesNextClick();
    }
}


// Buy Upgrades


function BuyUpgrade1() {
    if(noodles < Upgrade1.cost || Upgrade1.bought){
        return;
    }
    noodles = noodles - Upgrade1.cost;
    Upgrade1.bought = true;
    smallItalianKidFactor = smallItalianKidFactor * Upgrade1.effect;
    document.getElementById("noodles").innerHTML = noodles;
    console.log(NoodlesNextClick)
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
}

function BuyUpgrade2() {
    if(noodles < Upgrade2.cost || Upgrade2.bought){
        return;
    }
    noodles = noodles - Upgrade2.cost;
    Upgrade2.bought = true;
    noodlesPerClickFactor = noodlesPerClickFactor * Upgrade2.effect;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerClick").innerHTML = NoodlesNextClick();
}

function BuyUpgrade3() {
    if(noodles < Upgrade3.cost || Upgrade3.bought){
        return;
    }
    noodles = noodles - Upgrade3.cost;
    Upgrade3.bought = true;
    grandmaFactor = grandmaFactor * Upgrade3.effect;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
}

function BuyUpgrade4() {
    if(noodles < Upgrade4.cost || Upgrade4.bought){
        return;
    }
    noodles = noodles - Upgrade4.cost;
    Upgrade4.bought = true;
    smallItalianKidFactor = smallItalianKidFactor * Upgrade4.effect;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
}
function BuyUpgrade5() {
    if(noodles < Upgrade5.cost || Upgrade5.bought){
        return;
    }
    noodles = noodles - Upgrade5.cost;
    Upgrade5.bought = true;
    grandmaFactor = grandmaFactor * Upgrade5.effect;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
}

function BuyUpgrade6() {
    if(noodles < Upgrade6.cost || Upgrade6.bought){
        return;
    }
    noodles = noodles - Upgrade6.cost;
    Upgrade6.bought = true;
    cookFactor = cookFactor * Upgrade6.effect;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerSecond").innerHTML = NoodlesNextSecond();
}

function BuyUpgrade7() {
    if(noodles < Upgrade7.cost || Upgrade7.bought){
        return;
    }
    noodles = noodles - Upgrade7.cost;
    Upgrade7.bought = true;
    noodlesPerClickFactor = noodlesPerClickFactor * Upgrade7.effect;
    document.getElementById("noodles").innerHTML = noodles;
    document.getElementById("noodlesPerClick").innerHTML = NoodlesNextClick();
}

function BuyUpgrade8() {
    if(noodles < Upgrade8.cost || Upgrade8.bought){
        return;
    }
    noodles = noodles - Upgrade8.cost;
    Upgrade8.bought = true;
    cookFactor = cookFactor * Upgrade8.effect;
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