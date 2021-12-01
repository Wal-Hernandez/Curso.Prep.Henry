// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 var matriz = Object.entries(objeto);
 return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {};
  let key = 0;
  for(i=0;i<string.length;i++){
    key = string[i];
    if(objeto[key] === undefined){
      objeto[key] = 1
    }
    else{
      objeto[key] = objeto[key] + 1
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusarray = [];
  let minusarray = [];
  let string = s.split("");
  for(i=0;i<string.length;i++){
    if(string[i] === string[i].toUpperCase()){
      mayusarray.push(string[i])}
    else {minusarray.push(string[i])}
    }
  let alrevez = mayusarray.join("") + minusarray.join("");
  return alrevez;
  }



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let newarr = [];
  let palabras = str.split(" ");
  for(i=0;i<palabras.length;i++){
    var palabravv = palabras[i];
    newarr.push(palabravv.split("").reverse());
  }
  let palabras2 = [];
  for(i=0;i<newarr.length;i++){
    palabras2.push(newarr[i].join(""))
  }
  
  return palabras2.join(" ");
   

  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let num = numero.toString();
  let num2 = num.split("");
  for (i=0;i<num2.length;i++){
    if(num2[i] != num2[num2.length - (1 + i)]){
      return "No es capicua"
    }}
    return "Es capicua";
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.split("");
  for(i=0;i<cadena.length;i++){
    if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c"){
      cadena.splice(i, 1 );
      i = i - 1;
    }
  }
  return cadena.join("");

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(i=0;i<arr.length;i++){
    var acum = arr[i];
    var j = i - 1;
    while(j >= 0 && acum.length < arr[j].length){
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = acum;
  
     
    }
   
  
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo3 = [];
  var union = [];
  for(i=0;i<arreglo1.length;i++){
    arreglo3 = arreglo1[i];
    for(e=0;e<arreglo2.length;e++){
      if(arreglo3 === arreglo2[e]){
        union.push(arreglo3)}}}
    return union;    

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

