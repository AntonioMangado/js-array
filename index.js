let arrayVacio = [];

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayNumerosPares = [0, 2, 4, 6, 8];

let arrayBidimensional = [[0, 1, 2], ["a", "b", "c"]];


function suma(a, b) {
    return a + b;
}


function potenciacion(a, b) {
    return a ** b;
}


function separarPalabras (str) {
    return str.split(" ");
}
  

function repetirString(str, n) {

    let concStr = str.concat(str);
    
    for (let i = 2; i < n; i++) {
         concStr = concStr.concat(str);       
    }

    return concStr;
}


function esPrimo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
      return false;
    }
  
    // Los números 2 y 3 son primos
    if (numero === 2 || numero === 3) {
      return true;
    }
  
    // Verificamos si el número es divisible por algún número entre 2 y su raíz cuadrada
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
}


function ordenarArray(arr) {
    return arr.sort((a, b) => a - b);
}


function obtenerPares(arr) {

    let arrPares = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arrPares.push(arr[i])
        }
    }

    return arrPares;
}


// function pintarArray(arr) {
//     return "Array entrada: " + arr + " String salida: " + arr.toString();
// }


// function arrayMapi(arr, fn) {

//     let fnArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         fnArray.push(arr[i].fn);
//     }

//     return fnArray;
// }



// function eliminarDuplicados(arr) {

//     for (let i = 0; i < arr.length; i++) {
        
        
//     } 

// }

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

let holaMundo = ["Hola", "Mundo"];

let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];



function multiplicacion(a, b) {
    return a*b;
}


function division(a, b) {
    return a/b;
}


function esPar(num) {
    return num % 2 == 0;
}


function resta(a, b) {
    return a-b;
}

let arrayFunciones = [suma, resta, multiplicacion] 



function ordenarArray2(arr) {
    return arr.sort((a, b) => b - a);
}


function obtenerImpares(arr) {

    let arrImpares = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 > 0) {
            arrImpares.push(arr[i])
        }
    }

    return arrImpares;
}


function sumarArray(arr) {
    return arr.reduce((a, b) => a + b);
}


function multiplicarArray(arr) {
    return arr.reduce((a, b) => a * b);
}