Tecnologías utilizadas
React 19, TypeScript 5, Vite 7, Axios 1, CSS

Desarrollo de la práctica
Comencé creando la estructura de carpetas y definiendo los tipos de datos con TypeScript. La interfaz CharacterT la definí en un archivo separado para mantener el código organizado y poder reutilizarla en varios componentes.

Para las llamadas a la API configuré axios en un archivo aparte, aunque al principio tuve problemas con la tipificación de las respuestas. La SWAPI devuelve campos como "hair_color" que en TypeScript preferiría ver como "hairColor", pero decidí mantener los nombres originales para no complicar el mapeo de datos.

El mayor problema fue que al arrancar la aplicación la página se veía completamente en blanco. Revisando el código vi que faltaban estilos básicos y que los componentes Loader y Error no tenían estilos definidos, por lo que aunque el estado cambiara no se veía nada en pantalla. También me di cuenta de que no había importado App.css en App.tsx.

Para solucionarlo añadí un fondo con gradiente en el body, di estilos visibles a los componentes de carga y error, y mejoré el diseño de las tarjetas con sombras y efectos hover. También hice que el grid de personajes se adapte al tamaño de pantalla.

En la paginación tuve que asegurarme de que los nuevos personajes se acumularan con los anteriores en lugar de reemplazarlos. La SWAPI devuelve una URL "next" que utilicé para la siguiente página, y deshabilité el botón cuando no hay más páginas disponibles.

Los datos que muestro en cada tarjeta incluyen nombre, altura, peso, color de pelo, piel, ojos, año de nacimiento, género y algunos contadores como número de películas o vehículos. También añadí las fechas de creación y edición que devuelve la API.