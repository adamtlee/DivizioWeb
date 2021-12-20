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
    switch(true)
    {
        case (currentWeight < 0):
            console.log("The weight entered is below 0");
            break; 
        case (currentWeight <= 115):
            console.log("Strawweight");
            break;
        case (currentWeight <= 125 && currentWeight > 115):
            console.log("Flyweight");
            break;
        case(currentWeight > 125 && currentWeight <= 135):
            console.log("Bantamweight");
            break;
        case(currentWeight > 135 && currentWeight <= 145):
            console.log("Featherweight");
            break; 
        case(currentWeight > 145 && currentWeight <= 155):
            console.log("Lightweight");
            break;
        case(currentWeight > 155 && currentWeight <= 170):
            console.log("Welterweight");
            break; 
        case(currentWeight > 170 && currentWeight <= 185):
            console.log("Middleweight");
            break;
        case(currentWeight > 185 && currentWeight <= 205):
            console.log("Light Heavyweight");
            break; 
        case(currentWeight > 265):
            console.log("Heavyweight");
            break; 
        default: 
            console.log("error");
    }
}
