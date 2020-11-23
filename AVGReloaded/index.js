//[AVGReloaded] Elaborar una función que reciba tres enteros y retorne el promedio
const cargarNumeros = (numero) => {
    const numeros = [];
    for (let i = 0; i < numero; i++) {
      const num = parseInt(prompt("Ingresa un número"));
      numeros.push(num);
    }
    return numeros;
};


const mostrarPromedio = (vector) => {
    let suma=0;
    for (let i = 0; i < vector.length; i++) {
        suma += vector[i];
    }
    let promedio = suma/3; 
    return promedio;
}