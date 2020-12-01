/*Replicar la calculadora (+,-) y que una vez resuelto el calculo pasados 2 segundos limpiar los inputs
setTimeout(()=>{

},2000)*/ 

let numero1=0;
let numero2=0;
let resultado=0;


const operacion = (op="+") => {
    op==="+" ? alert(resultado=numero1+numero2) : null;
    op==="-" ? alert(resultado=numero1-numero2) : null;

    setTimeout(()=>{
        reset();
    
    },2000)
   
}

const handlerInputNumber = (e) =>{
    console.log(e.value);
    e.id==="num1" ? numero1 =parseInt(e.value) : numero2=parseInt(e.value)
}

const reset=()=>{
    document.getElementById("num1").value='';
    document.getElementById("num2").value='';
}

