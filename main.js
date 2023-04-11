// Ejercicio 1

function recibirNumero(num){
    // let num = prompt("Ingrese numero:");

    if (num % 2 == 0){
        console.log(`El nro ${num} es par`);
    } else{
        console.log(`El nro ${num} es impar`);
    }
}

recibirNumero(4);
recibirNumero(7);


// Ejercicio 2

function num_mayorIgual(num1, num2){
    // let num1= prompt("Ingrese numero 1:");
    // let num2= prompt("Ingrese numero 2:");

    if (num1>num2) {
        console.log (`${num1} es mayor que ${num2}`);
    } else if (num1<num2) {
        console.log(`${num2} es mayor que ${num1}`);
    } else {
            console.log("son iguales");
        }
}

num_mayorIgual(2, 2);
num_mayorIgual(8, 2);
num_mayorIgual(2, 5);


// Ejercicio 3

function es_multiplo_cinco(num){
    // let num = prompt("Ingrese un numero:");

    if (num %5 == 0){
        console.log(`El nro ${num} ingresado es multiplo de 5`);
    } else {
        console.log("El nro ingresado NO es multiplo de 5");
    }
}

es_multiplo_cinco(5);
es_multiplo_cinco(25);
es_multiplo_cinco(2);


// Ejercicio 4

function imprime_nro(numero) {
       
    for (let i =0; i <= numero; i++) {
        console.log (i);
    }
    
}

imprime_nro(5);
imprime_nro(10);
imprime_nro(3);


// Ejercicio 5

function imprimirPalabra (palabra, cantidad){

    for (let i = 0; i<cantidad; i++){
      console.log(palabra)  
    }
}

imprimirPalabra("carrera", 10);
imprimirPalabra("carrera", 5);


// Ejercicio 6

let pais = ["Bs As", "Jujuy", "Rio Negro", "Chubut", "Tierra del Fuego", "Salta", "Misiones"] 

function imprime_array (){
    for (let provincias of pais){
        console.log(provincias);
    }
}

imprime_array()


// Ejercicio 7

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function imprimir_array(array){

    for (let i=0; i<array.length; i++){

        if (i == 5) {
            continue;
        }

        console.log(array[i]);
       
    }
  
}

imprimir_array(array);


//Ejercicio 8

let miArray = [2, 4, 6, 8, 10]

function arrayMultiplicacion (miArray, num){

    for (let i=0; i<miArray.length; i++) {
        let resultado = miArray[i] * num;
        console.log(resultado);
    }

}

arrayMultiplicacion(miArray, 5);
arrayMultiplicacion(miArray, 10);





