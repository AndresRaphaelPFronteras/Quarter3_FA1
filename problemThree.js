
function runProblemThree()
{
    var isAllowedToShareInfo = confirm("Do you agree to share your personal information on this site?");
    
    
    if (isAllowedToShareInfo) {
        console.log(personalInformation);
    }
    
    else {
        console.log("User does not wish to share his/her information.");
    }
}

