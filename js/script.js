function esPrimo(numero){

    if(numero < 2){
        return false;
    }

    let divisores = 0;

    for(let i = 1; i <= numero; i++){

        if(numero % i === 0){
            divisores++;
        }

    }

    if(divisores === 2){
        return true;
    }else{
        return false;
    }

}

function generarSecuencia(){

    let cantidad = parseInt(
        document.getElementById("cantidad").value
    );

    let resultado = document.getElementById("resultado");

    if(isNaN(cantidad) || cantidad <= 0){

        resultado.innerHTML = "Ingrese un número válido";

        return;
    }

    let a = 0;
    let b = 1;
    let c;

    let fibonacci = "";
    let primos = "";

    for(let i = 1; i <= cantidad; i++){

        fibonacci += b + " ";

        if(esPrimo(b)){
            primos += b + " ";
        }

        c = a + b;
        a = b;
        b = c;

    }

    resultado.innerHTML = `
        <h2>Fibonacci</h2>
        <p>${fibonacci}</p>

        <h2>Primos</h2>
        <p>${primos}</p>
    `;

}