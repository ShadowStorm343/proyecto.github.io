/*carrusel de imagenes uwu*/
const baner=['../imgs/ban1.jpg','../imgs/ban2.jpg',
             '../imgs/ban3.jpg']
var c=0
var sw=true
function carrusel(){

    if(sw==true){
        document.getElementById('imgbaner').setAttribute('style','opacity:0; transition:1s')
        sw=false
    }
    else{
        //realizar el cambio de imagen, incremento c de 1 en 1 y evaluo
        c++
        if(c==baner.length) c=0
        document.getElementById('imgbaner').setAttribute('src',baner[c])
        //que se haga la imagen
        document.getElementById('imgbaner').setAttribute('style','opacity:1; transition:1s')
        sw=true
    }

    setTimeout(carrusel,2000)
}

document.body.setAttribute("onload","carrusel()")

/* jotaese para el onmouseover */

function oculta(n){
  var obj=document.getElementsByClassName("imgblok").item(n);
  obj.style.opacity="0";
  obj.style.transition="all 1s";
  obj.style.height="0%";
}

function ver(n){
  document.getElementsByClassName("imgblok").item(n).style.opacity="1";
  document.getElementsByClassName("imgblok").item(n).style.height="100%";
}


/*Pa crearte tu cuenta uwu*/

    // permitir ingreso de números (máximo 8 dígitos)
    document.querySelector('input[name="txtdni"]').addEventListener("keypress",function(event)
    {
    
        var longitud=document.querySelector('input[name="txtdni"]').value.length;
        if(longitud>=8){
            window.event.preventDefault();  
            alert("Máxmo 8 dígitos")
            return;
        }
    
        //codigos ascii alt+48 hasta alt+57 (0-9 permitidos)
        var ascii=event.keyCode || event.wich;
        if(ascii<48 || ascii>57){
            window.event.preventDefault();
            alert("Solo dígitos mano");
            return;
        }
    
    
    });
    
    // Permitir solo texto yyyy límite de caracteres para evitar amarres o algo así xD.
    document.querySelector('input[name="txtnombre"]').addEventListener("keypress",function(event)
    {

        var longitud=document.querySelector('input[name="txtnombre"]').value.length;
        if(longitud>=15){
            window.event.preventDefault();  
            alert("Máxmo 15 dígitos")
            return;
        }

        var ascii = event.keyCode || event.wich;
        if(ascii>=48 && ascii<=57){
            window.event.preventDefault();
            alert("Solo texto mano, que fue.");
            return;
        }
    
    });

    // permitir ingreso de solo números para el teléfono (máximo 9 dígitos)
        document.querySelector('input[name="txtfono"]').addEventListener("keypress",function(event)
        {
        
            var longitud=document.querySelector('input[name="txtfono"]').value.length;
            if(longitud>=9){
                window.event.preventDefault();  
                alert("Máxmo 9 dígitos")
                return;
            }
        
            //codigos ascii alt+48 hasta alt+57 (0-9 permitidos)
            var ascii=event.keyCode || event.wich;
            if(ascii<48 || ascii>57){
                window.event.preventDefault();
                alert("Tu celular no tiene letras xD");
                return;
            }
        });


