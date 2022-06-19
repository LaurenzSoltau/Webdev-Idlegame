
//general variables
var noodles = 0;
var noodlesPerClick = 1;
var noodlesPerSecond = 0;
var growthFactor = 1.07;
var noodlesPerSecondFactor = 1;
var noodlesPerClickFactor = 1;

// Generator variables

//small Italian Kid
var basePriceSmallItalianKid = 75;
var baseNpsSmallItalianKid = 1;
var ownedSmallItalianKid = 0;
var priceNextSmallItalianKid; 

// grandma

var basePriceGrandma = 300;
var baseNpsGrandma = 3;
var ownedGrandma = 0;
var priceNextGrandma;

// cook

var basePriceCook = 1250;
var baseNpsCook = 10;
var ownedCook = 0;
var priceNextCook;









//functions

//start functions

function Start()
{
    priceNextSmallItalianKid = CalculatePriceNextSmallItalianKid();
    priceNextGrandma = CalculatePriceNextGrandma();
    priceNextCook = CalculatePriceNextCook();
    
}
// general

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
    if(noodles < priceNextGrandma){
        return;
    }
    noodles = noodles - priceNextCook;
    ownedCook = ownedCook + 1;
    noodlesPerSecond = noodlesPerSecond + baseNpsCook;
    priceNextCook = CalculatePriceNextCook();
    document.getElementById("priceCook").innerHTML = priceNextCook;
    document.getElementById("ownedCook").innerHTML = ownedCook;
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



// Developer Tools

function GiveCoins() {
    noodles = noodles + 100;
    document.getElementById("noodles").innerHTML = noodles;
}

Start();