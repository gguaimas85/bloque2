/* 
    Permitirle al usuario cargar 3 alumnos y 3 notas (concepto de arrays paralelo)
        a. Mostrar el alumno con MAYOR nota
        b. Mostrar el alumno con MENOR nota
        c. Promedio de todos los alumnos

    Todo el código debe estar resuelto en arrow function

*/
const cargarDatos = (nombres, numeros) => {
    for (let i = 0; i < 3; i++) {
        nombres.push(prompt("Ingrese nombre de alumno"));
        numeros.push(parseInt(prompt("Ingrese nota")));
    }

}

const mostrarMayor=(vector, notas)=>{
    let mayor=0;
    for (let i = 0; i < 3; i++) {
        notas[i] >= mayor ? mayor = notas[i] : null;
        
    }

    for (let i = 0; i < 3; i++) {
        mayor === notas[i] ? 
            document.write(`Alumno con mayor nota: ${vector[i]}, nota: ${notas[i]}<br>`)
            : null;
          
    }
}

const mostrarMenor=(vector, notas) =>{
    let menor=10;

    for (let i = 0; i < 3; i++) {
        notas[i] <= menor ? menor = notas[i] : null;
        
    }

    for (let i = 0; i < 3; i++) {
        menor === notas[i] ? 
            document.write(`Alumno con menor nota: ${vector[i]}, nota: ${notas[i]}<br>`)
            : null;
        
    }
}

const promedio=(vector)=>{
    let cont=0;
        for (let i = 0; i < vector.length; i++) {
            cont += vector[i];
            
        }

        return parseFloat(cont/3).toFixed(2);
        
}