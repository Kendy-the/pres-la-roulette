let nombreOrdi = Math.random()*100;
nombreOrdi = parseInt(nombreOrdi);
console.log(nombreOrdi);

function form(){
let intervale = "Entre un nombre compris entre 0 et "+"100";
document.write('<form id="myForm">'+
    '<p>'+intervale+'</p>'+
    '<label for="nombreUser">Nombre : </label>'+
    '<input type="text" id="nombreUser" name="nombreUser"'+
    'placeholder="Entre un nombre entier"><br><br>'+
    '<input type="submit" value="Envoyer">'+
  '</form>');
}