//[AlCesarLoQueEsDelCesar] Implementar una función que pueda aplicar el cifrado del césar. (Googlear)

const caesarCode = (texto, desp=3) =>{
    const cifrado=[];
    let codigoLetra;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i]==" ") {
            cifrado[i]=texto[i] ;
        }else{
            codigoLetra = texto.charCodeAt(i)+desp;
            codigoLetra>122 ? codigoLetra=codigoLetra-26: null;
            codigoLetra>90 && codigoLetra<97 ? codigoLetra=codigoLetra-26 :null;
            cifrado[i]=String.fromCharCode(codigoLetra);

        } 
        
    }

    return cifrado.join('');

}