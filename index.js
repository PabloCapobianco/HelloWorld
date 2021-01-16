var idioma = true;

function eng(){
    if (idioma==true){
            document.getElementById("texto").innerHTML =  "Hi;<br /><br /><br />i make nice stuff<br /><br /><br />for the web,<br /><br /><br />desktop<br /><br /><br />and mobile</div>";
            document.getElementById("english").style.color = "rgb(255, 152, 215)";
            document.getElementById("español").style.color = "white";
            idioma=false;
    }
}

function esp(){
    if (idioma==false){
            document.getElementById("texto").innerHTML =  "Hola;<br /><br /><br />hago cosas lindas<br /><br /><br />para la web,<br /><br /><br />escritorio<br /><br /><br />y  móviles</div>";
            document.getElementById("español").style.color = "rgb(255, 152, 215)";
            document.getElementById("english").style.color = "white";
            idioma=true;
    }
}
