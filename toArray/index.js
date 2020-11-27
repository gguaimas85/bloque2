//[toArray] Crear una función que reciba un string y lo convierta en un array de caracteres.

const toArray = (cadena) =>{
    const array = [];

    for(let i=0;i < cadena.length; i++){
        array.push(cadena[i]);
    }

    return array;
}