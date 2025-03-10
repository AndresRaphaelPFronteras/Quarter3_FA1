
function runProblemTwo()
{
    const currentYear = 2025;
    
    var firstName = prompt("Enter your first name.");
    var lastName = prompt("Enter your last name.");
    var birthYear = prompt("Enter your birth year.");
    
    document.getElementById("problemTwoOutput").innerHTML = 
        "Hello " + firstName + " " + lastName + "! How does it feel to be " + (currentYear - birthYear) + " years old?";
}

