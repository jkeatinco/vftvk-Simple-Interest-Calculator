function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100;

    var actualyear = years + 2021
    
}

function displayRange(val)
{
    document.getElementById('spanVal').innerHTML = val; 
}
        