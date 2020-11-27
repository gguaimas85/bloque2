//[Capitalize] Crear una función que convierta un string “hola mundo” y retorne “Hola Mundo”

const capitalize = (texto) => {
    const array=texto.split('');
        
    array[0]=array[0].toUpperCase();
    for (let i = 0; i < array.length; i++) {
        if(array[i]==" "){
            i++;
            array[i]=array[i].toUpperCase();
        }
        
    }

    const str2=array.join("");

    return str2;
}