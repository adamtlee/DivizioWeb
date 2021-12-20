const currentWeight = 124.3; 

if (isNumeric(currentWeight))
{
    determineWeight(currentWeight);
}

function isNumeric(n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function determineWeight(currentWeight)
{
    if (currentWeight < 0)
    {
        console.log("The weight entered is below 0");
    }
    else if(currentWeight <= 115)
    {
        console.log("Strawweight");
    }
    else if(currentWeight <= 125 && currentWeight > 115)
    {
        console.log("Flyweight");
    }
    else if(currentWeight > 125 && currentWeight <= 135)
    {
        console.log("Bantamweight");
    }
    else if (currentWeight > 135 && currentWeight <= 145)
    {
        console.log("Featherweight");
    }
    else if (currentWeight > 145 && currentWeight <= 155)
    {
        console.log("Lightweight");
    }
    else if (currentWeight > 155 && currentWeight <= 170)
    {
        console.log("Welterweight");
    }
    else if (currentWeight > 170 && currentWeight <= 185)
    {
        console.log("Middleweight");
    }
    else if (currentWeight > 185 && currentWeight <= 205)
    {
        console.log("Light Heavyweight");
    }
    else if (currentWeight > 265)
    {
        console.log("Heavyweight");
    }
    else
    {
        console.log("error.");
    }
}
