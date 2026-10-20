# practica13_253239

## Preguntas de la práctica

### ¿Por qué el Layout no necesita saber que es una tienda?
Porque el layout solo organiza la estructura de la pagina como el encabezado, el contenido y el pie. No necesita saber que informacion hay dentro por eso se puede reutilizar 
en otras paginas

### ¿Qué pasa si escribes onClick={onAgregar(producto)} sin la flecha?
La funcion se ejecutaria inmediatamente al mostrar el componente en vez de esperar a que el usuario haga clic por eso se utiliza una funcion con flecha para que se ejecute 
hasta presionar el botn

### ¿Por qué con carrito.push(...) el contador no se mueve y no sale ningún error?
Porque el push modifica el mismo arreglo y React necesita recibir un arreglo nuevo para detectar el cambio y actualizar la pantalla por eso se crea un nuevo arreglo usando 
setCarrito
