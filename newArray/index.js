/*[newArray] Crear una función que reciba dos dos arrays (arreglos) como argumentos y retorne el resultado en un nuevo arreglo
Ejemplo:
[1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]*/

const array1 = () =>{
    const arreglo=[];
    let dato;

    do{
        dato = prompt("Ingrese datos");
        arreglo.push(dato);
    }while(dato!=="")

    return arreglo;
}

const sumaArrays = (arreglo1, arreglo2) =>{
    const arrayFinal=[];
    arrayFinal = arreglo1.concat(arreglo2);
    return arrayFinal;
}