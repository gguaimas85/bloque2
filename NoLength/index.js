/*[NoLength] Crear una función que retorne la cantidad de caracteres de un texto.
    a. Nota: Esto es posible hacerlo dentro de javascript con .length. Implementar un ciclo para resolver el problema.
*/
const contarTexto = (texto) =>{

    const arrayNuevo = Array.from(texto);
    let cont=0;

    for (const letra in arrayNuevo) {
        cont++;
    }

      return cont;  
}