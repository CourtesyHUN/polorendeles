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

function szoveg() 
{
    var szo = document.getElementById("felirat")
    var szam = document.getElementById("sorszam")
    var feliratom = document.getElementById("feliratom").value
    var szamom = document.getElementById("szamom").value
    szo.style = "text-transform: uppercase"
    szo.innerHTML = feliratom
    console.log(szamom);
    if (szamom >= 1 && szamom < 100) 
    {   
        szam.innerHTML = szamom
    }
    else
    {
        alert("Nem jó")
    }

}