const display = document.getElementById('display');

function appendToDisplay(input)
{
    display.value += input;
}

function deleteFromDisplay()
{
    display.value = display.value.slice(0,-1);
}

function clearDisplay()
{
    display.value = "";
}

function calculate()
{
    try{
        result= eval(display.value);
        if(!isFinite(result)){
            throw new Error("Error")
        }
        display.value = result
    }
    catch(error)
    {
        display.value = "Error";
    }
}