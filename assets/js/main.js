
function polo() 
{
    var szinvalaszt = document.getElementById("szintvalaszt").value

    if (szinvalaszt == "zold") 
    {
        document.getElementById("polokep").src = "assets/images/polo-zold.png"
        document.getElementById("polokep").style = "filter: grayscale(0%);"
    }
    else if (szinvalaszt == "piros") 
    {
        document.getElementById("polokep").src = "assets/images/polo-piros.png"
        document.getElementById("polokep").style = "filter: grayscale(0%);"
    }
    else if (szinvalaszt == "kek") 
    {
        document.getElementById("polokep").src = "assets/images/polo-kek.png"
        document.getElementById("polokep").style = "filter: grayscale(0%);"
    } 
    else if (szinvalaszt == "narancs") 
    {
        document.getElementById("polokep").src = "assets/images/polo-narancs.png"
        document.getElementById("polokep").style = "filter: grayscale(0%);"
    } 
    else if (szinvalaszt == "szurke") 
    {
        document.getElementById("polokep").src = "assets/images/polo-piros.png" 
        document.getElementById("polokep").style = "filter: grayscale(100%);"
    } 
}