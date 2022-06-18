var noodles = 0;
var priceSmallItalianKid;
var noodlesPerSecond;
var amountSmallItalianKid;
document.getElementById("priceSmallItalianKid")

function Click()
{
    noodles = noodles +1;
    document.getElementById("noodles").innerHTML=noodles;
}

function buySmallItalianKid()
{
    if(noodles<priceSmallItalianKid){
        return;
    }
    noodles = noodles-priceSmallItalianKid;
    amountSmallItalianKid = amountSmallItalianKid + 1;
    priceSmallItalianKid = priceSmallItalianKid * 1.07
    document.getElementById("priceSmallItalianKid").innerHTML=priceSmallItalianKid
    document.getElementById("noodles").innerHTML=noodles;
}