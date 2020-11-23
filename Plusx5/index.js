//[Plusx5] Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.
const cargarNumeros = () => {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
      const num = parseInt(prompt("Ingresa un número"));
      numeros.push(num);
    }
    return numeros;
};

const sumaNumeros = (vector) =>{
    let suma = 0;
    for (let i = 0; i < vector.length; i++) {
        suma += vector[i];
    }

    return suma;
}