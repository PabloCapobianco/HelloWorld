var idioma = true;

function eng(){
    if (idioma==true){
            document.getElementById("texto").innerHTML =  "Hi;<br /><br />i make nice stuff<br /><br />for the web,<br /><br />desktop<br /><br />and mobile</div>";
            document.getElementById("english").style.color = "rgb(255, 152, 215)";
            document.getElementById("español").style.color = "white";
            idioma=false;
    }
}

function esp(){
    if (idioma==false){
            document.getElementById("texto").innerHTML =  "Hola;<br /><br />hago cosas lindas<br /><br />para la web,<br />escritorio<br /><br />y  móviles</div>";
            document.getElementById("español").style.color = "rgb(255, 152, 215)";
            document.getElementById("english").style.color = "white";
            idioma=true;
    }
}

function descargar(){
    var link = document.createElement("a");
    link.href = "CV.pdf";
    link.click();
}

