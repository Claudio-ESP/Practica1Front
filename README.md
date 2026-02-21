PRACTICA 1 STAR WARS API CON REACT.

Instalar dependencias: npm install

Arrancar proyecto : npm run dev

Las tecnologias que he usado son react, TypeScript, Vite, Axios, CSS

El desarrollo de la práctica:
He empezado con la estructura de las carpetas definí los tipos de datos con TS. La parte de la interfaz Character la puse en un archivo separado para que el codigo quedara organizado y tambien asi reutilizarla en varios componentes.

Cuando hacia las llamadas a la API configure en un archivo aparte axios. Me encontré con problemas en la tiipificacion de las respuestas.

El mayor problema que me encontré y mas me tuvo entretenido, fue que al abrir la pagina se veía todo en blanco, despues de mucho investigar vi que faltaban estilos basicos y que los Loader y Error no tenian ningun estilo definido, por eso aunque cambiara el estado no se veía nada todo blanco, y tambien me di cuenta que no había importado App.css en app.tsx.

Para ponerle solucion puse un fondo con gradiente en el body, mejore el diseño de las tarjetas con sambras y efectos hover, y que el grid de los personajes se adapte a la pantalla. Aunque al principio me costo mucho ya que se veía desordenado no se ajustaba y salia de una forma "fea" entonces para ese caso me apoye de la IA para ver como podia mejorarlo y quedar satisfecho con la practica. 

Tuve que asegurarme que los personajes no se acumularan con los de atras, la SAWPI decuelve una url next que use para la siguiente pagina y desactive el boton cuando ya no quedan mas paginas disponibles

Los datos que se muestran en las tarjetas son nombre, altura, color de pelo, peso, año de naciemiento, ojos, genero y algun contador comoo numero de peliculas.


