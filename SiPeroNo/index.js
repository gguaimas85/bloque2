/*[SiPeroNo] Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo.

Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
[5,1,2,3,4] y [3,4] debería devolver [5,1,2]*/


const numRepetidos = (array1, array2) =>{
    let newArray = [];
    let pos;
    for (let i = 0; i < array1.length; i++) {
        pos = array2.indexOf(array1[i]);
        pos < 0 ? 
            newArray.push(array1[i])
            : null;
        
    }
    
    return newArray;
}