/*

Mira este vídeo antes de hacer el los siguientes ejercicios: https://www.youtube.com/watch?v=ovWYhDVQiR8

1. Antes de ejecutar "node ex6.js"; razona: qué vamos a ver por el terminal? ¿Por qué ?

*/

if (4 > 3 && 6 > 5) {
  console.log("Esta condición se cumple");
}

if (4 > 3 && -1 > 0) {
  console.log("Esta condición también se cumple?");
}

/**
 * Lecturas adicionales: 
https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

 */
console.log("En la primera se cumplen las dos comparaciones, en la segunda no, por lo que no se cumple la condición global.");