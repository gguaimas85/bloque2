/*[Filter] Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos.

Ejemplo:
[1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]*/

const filtro = (vector)=>{
    let newArray = [];
    
    for (let i = 0; i < vector.length; i++) {
        newArray.indexOf(vector[i]) < 0 ? 
            newArray.push(vector[i])
            : null;
        
    }
    
    return newArray;
}