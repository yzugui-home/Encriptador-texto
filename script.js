//declaramos las variables
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


//letra "a" es convertida para "ai"
//letra "e" es convertida para "enter"
//letra "i" es convertida para "imes"
//letra "o" es convertida para "ober"
//letra "u" es convertida para "ufat"

//creamos las funciones

//ENCRIPTAR
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    //matriz
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


//DESENCRIPTAR
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
}


function desencriptar(stringDesencriptada){
    //matriz
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}


function copiarTexto(){
    const p1 = document.getElementById("origen");
    const p2 = document.getElementById("destino");
    var val1 = p1.value;
    p1.value = p2.value;
    p2.value = val1;
}

//ejecutamos la matriz
console.table(matrizCodigo);