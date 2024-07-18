let array = [5, 2, 4, 6, 1, 3];

// Una baraja de cartas que se ordena con una mano y cogiendo las cartas de la "pila" en otra mano
function insertionSort(A) {
  let n = A.length;
  console.log(array);
  for (let i = 1; i < n; i++) {
    let key = A[i]; // Es la carta que tenemos en la mano derecha y queremos ordenar
    let j = i - 1;
    while (j > -1 && A[j] > key) {
      // Mientras haya array y la key sea mayor que el elemento actual, se sigue de logica de comparar con cada uno:
      A[j + 1] = A[j]; // Mover el valor mayor que la key a la derecha
      j = j - 1; // desplazar el "cursor de comparación" hacia la izquierda
      A[j + 1] = key; //Mover la carta nueva una posicion a la izquierda
    }
    console.log(array);
  }
}
insertionSort(array);
