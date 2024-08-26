/*
 * JEUX - LA ROULETTE 13-AOUT-24 : 2h - 11hPm
 * Version 1.0
 * ING PRESUME, Tous droits reservés.
 */
 
function getNbOrdi(){
    let nombreOrdi = Math.random()*100;
    nombreOrdi = parseInt(nombreOrdi);
    
    return nombreOrdi;
}

let nombreOrdi = getNbOrdi();
let chance = 4;
let verifie = false;

function formulaire(){
    let intervale = "Entre un nombre compris entre 0 et "+
    "100<br>Vous avez "+(chance+1)+" chance";
    
    document.write('<form id="myForm">'+
        '<p>'+intervale+'</p>'+
        '<label for="nombreUser">Nombre : </label>'+
        '<input type="text" id="nombreUser" name="nombreUser"'+
        'placeholder="Entre un nombre entier"><br><br>'+
        '<input type="submit" value="Envoyer">'+
    '</form>');
}

//Traitement des entres users
function processFormData() {
    
    let nombreUser = document.getElementById("nombreUser").value;
    let nombreUserVerifie = parseInt(nombreUser);

    if((chance == 4) && (nombreUserVerifie < 0 || nombreUserVerifie > 100)){
        alert('Entre un nombre compris entre 0 et 100\n');
        window.location.replace(window.location.href);
    }
    console.log("nombreOdi :"+nombreOrdi);
    console.log("NombreUser : " + nombreUser);
    
    if(nombreOrdi == nombreUser){
        verifie = true;
    }else{
        
        if(nombreUser < nombreOrdi){
            if(chance == 1){
                document.getElementById('p1').innerHTML = 'Entre un nombre entre '+(nombreOrdi-2)+' et '+(nombreOrdi+2);
            }else{
                document.getElementById('p1').innerHTML = 'Entre un nombre plus grand !';
            }
            document.getElementById('p2').innerHTML = nombreUser;
            document.getElementById('p3').innerHTML = 'il te reste '+chance+' chance';
        }else{
            if(chance == 1){
                document.getElementById('p1').innerHTML = 'Entre un nombre entre '+(nombreOrdi-2)+' et '+(nombreOrdi+2);
            }else{
                document.getElementById('p1').innerHTML = 'Entre un nombre plus petit !';
            }
            document.getElementById('p2').innerHTML = nombreUser;
            document.getElementById('p3').innerHTML = 'il te reste '+chance+' chance';
        }
    }
    
    document.getElementById('nombreUser').value="";
    console.log("chance : "+chance);
    
    if(chance == 0){
        if(verifie){
            alert('Gagne !!!');
            window.location.replace(window.location.href);
        }else{
            alert('Perdu !!!'+"\n"+
                "le nombre est : "+nombreOrdi);
            window.location.replace(window.location.href);
        }
    }else{
        if(verifie){
            alert('Gagne !!!');
            window.location.replace(window.location.href);
        }
    }
    
    chance--;
    
}

    formulaire();
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche la soumission du formulaire
        processFormData();
    });
