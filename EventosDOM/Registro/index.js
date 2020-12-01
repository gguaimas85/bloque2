//Cargar el nombre y apellido dentro de dos inputs type ="text" y al apretar un boton mostrar la concatenacion de estos strings en un tercer input de tipo text.


let nom="";
let ape="";
let completo="";


const handlerInputText = (e) =>{
    console.log(e.value);
    e.id=="nombre" ? nom=e.value: null;
    e.id=="apellido" ? ape=e.value: null;
   
}

const nombreApellido = () =>{
    completo = nom + " " + ape;
    
    document.getElementById("nombreCompleto").value=completo;
}