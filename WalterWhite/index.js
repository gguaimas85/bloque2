//[WalterWhite] Crear una función que retorne la cantidad de espacios en blanco de un texto

const verEspacios = (text) => {
    const caracter=" ";
    let cont=0;

        for (let i = 0; i < text.length; i++) {
            text[i] ==" " ? cont++ :null;
            
        }
    return cont;

}