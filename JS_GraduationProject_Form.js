function validateForm()
{
    let fn = document.forms["GraduationProject_Form"]["FirstName"].value;
    let ln = document.forms["GraduationProject_Form"]["LastName"].value;
    let email =  document.forms["GraduationProject_Form"]["Email"].value;
    let country = document.forms["GraduationProject_Form"]["Country"].value;
    let tel = document.forms["GraduationProject_Form"]["Telephone"].value;

    if(fn == "")
    {
        alert("Can't be submitted; First Name required!");
        return false;
    }
    if (ln == "")
    {
        alert("Can't be submitted; Last Name required!");
        return false;
    }
    if(email == "")
    {
        alert("Can't be submitted; Email required!");
        return false;
    }
    if(country == "")
    {
        alert("Can't be submitted; Country required!");
        return false;
    }
    if(country.length > 20)
    {
        alert("Can't be submitted; Country maximum lenght is 20 letters!");
        return false;
    }
    if(tel == "")
    {
        alert("Can't be submitted; Telephone required!");
        return false;
    }
    if(tel.length > 20)
    {
        alert("Can't be submitted; Telephone maximum lenght is 20 letters!");
        return false;
    }
    return true;
}