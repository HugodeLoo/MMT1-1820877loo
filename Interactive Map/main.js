window.onload = getCountryData;
var countrydata, Naam, Vlag, Inwoners, Oppervlakte, Hoofdstad, naamp, naamtekst, beschrijvingp, beschrijvingtekst, vlagimg, oppervlaktep, oppervlaktetekst, hoofdstadp, hoofdstadtekst, Infoleft, Inforight;
var Infodiv = document.getElementById("infodiv");
var infoLeft = document.getElementById("infoleft");
var infoRight = document.getElementById("inforight");
var testP = document.getElementById("infop");
var testnode;
var testarray = ["albania", "armenia", "austria", "bosnia Herzegovina", "belgium", "bulgaria", "belarus", "switzerland", "cyprus", "czech republic", "germany", "denmark", "estonia", "spain", "finland", "france", "great britain", "georgia", "greece", "croatia", "hungary", "ireland", "iceland", "italy", "lithuania", "luxembourg", "latvia", "moldova", "montenegro", "north macedonia", "netherlands", "norway", "poland", "portugal", "romania", "serbia", "sweden", "slovenia", "slovakia", "turkey", "ukraine", "kosovo", "andorra", "liechtenstein"];

function getCountryData(){
    let countryjson = new XMLHttpRequest();
    countryjson.open("GET", "https://mia-mmt1-2021.github.io/assignment-hello-github-classroom-HugodeLoo/country.json", true);
    countryjson.responseType = 'json';
    countryjson.send();

    countryjson.onload = function() {
        countrydata = countryjson.response;
    }
}

function updateInfo(data){
    Naam = countrydata[data].naam;
    Vlag = countrydata[data].flag + ".svg";
    Inwoners = countrydata[data].inwoners;
    Oppervlakte = countrydata[data].oppervlakte;
    Hoofdstad = countrydata[data].hoofdstad;

    Vlag = "assets/flags/" + Vlag;

    Infodiv.style.backgroundColor = "grey";

    Infoleft = document.createElement("div");
    Infoleft.setAttribute("id", "left");
    Infodiv.appendChild(Infoleft);
    
    Inforight = document.createElement("div");
    Inforight.setAttribute("id", "right");
    Infodiv.appendChild(Inforight);
    
    vlagimg = document.createElement("img");
    vlagimg.setAttribute("src", Vlag);
    vlagimg.setAttribute("height", "80");
    vlagimg.setAttribute("width", "120");
    Inforight.appendChild(vlagimg);

    naamp = document.createElement("p");
    naamtekst = document.createTextNode(Naam);
    naamp.appendChild(naamtekst);
    Infoleft.appendChild(naamp);

    beschrijvingp = document.createElement("p");
    beschrijvingtekst = document.createTextNode("inwoners: " + Inwoners);
    beschrijvingp.appendChild(beschrijvingtekst);
    Infoleft.appendChild(beschrijvingp);

    oppervlaktep = document.createElement("p");
    oppervlaktetekst = document.createTextNode("Oppervlakte: " + Oppervlakte + "sq km");
    oppervlaktep.appendChild(oppervlaktetekst);
    Infoleft.appendChild(oppervlaktep);

    hoofdstadp = document.createElement("p");
    hoofdstadtekst = document.createTextNode("Hoofdstad: " + Hoofdstad);
    hoofdstadp.appendChild(hoofdstadtekst);
    Infoleft.appendChild(hoofdstadp);
}

window.addEventListener('mousemove', function(e){
    var left = (e.pageX + 5)+"px";
    var top = (e.pageY - 85)+"px";
    Infodiv.style.left = left;
    Infodiv.style.top = top;
});

function removeInfo() {
Infodiv.innerHTML = '';
//testP.innerHTML = '';
//testP.innerHTML = "country: ";
Infodiv.style.removeProperty("background-color"); 
}

function updateInfoDisabled(countrycode) {
    var pp = document.createElement("p");
    pp.setAttribute("id", "infop");
    testnode = document.createTextNode(testarray[countrycode]);
    pp.appendChild(testnode);
    Infodiv.appendChild(pp);
}