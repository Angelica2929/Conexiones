console.log("page loaded...");

function eliminarusuario(){
var img= document.querySelector('.card-list-item');
img.remove();
count--;
console.log(count);
var newcount=document.querySelector('.badge');
newcount.innerHTML=count
conexiones++;

console.log(conexiones);
var nuevaconexion=document.querySelector('#decrease');
nuevaconexion.innerHTML=conexiones;
}

function eliminarusuario1(){
    var img= document.querySelector('.card-list-item');
    img.remove();
    count--;
    console.log(count);
    var newcount=document.querySelector('.badge');
    newcount.innerHTML=count
    }


function cambiarnombre(){
    var h1=document.querySelector('.nombre');
    h1.innerHTML="Angelica Acevedo";
}

var count= parseInt(document.querySelector('.badge').innerText)
var conexiones=parseInt(document.querySelector('#decrease').innerText)
console.log(conexiones);




// var decrease=[0,0]
// function elimconexion(){
// var h3=document.querySelector('h3');
// invitaciones[numero]--;
// boton.innerText=invitaciones[numero];
// }
