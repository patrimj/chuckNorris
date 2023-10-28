# Proyecto Chuck Norris

Este proyecto consiste en la creación de una aplicación web utilizando JavaScript y Webpack que interactúa con la API de Chuck Norris para mostrar frases y categorías relacionadas con Chuck Norris. Las frases podrán ser por categorias y de forma random.

---
## Requisitos

**REQ001: Pantalla Inicial**

+ La pantalla inicial debe mostrar el logo proporcionado por la API de Chuck Norris.
+ Se debe incluir una tabla dinámica que mostrará todas las categorías disponibles a través de una llamada asíncrona a la API.

**REQ002: Enlaces a Frases por Categoría**

+ Las categorías en la tabla dinámica deben ser enlaces a archivos HTML individuales llamados "frase.html".
+ Cada enlace debe mostrar una llamada a la API que devuelva una frase generada relacionada con esa categoría.

**REQ003: Generar una Frase Aleatoria**

+ En la parte inferior de la pantalla, debajo de la tabla dinámica, debe haber un botón con el texto "Genérame una Frase".
+ Al hacer clic en este botón, se debe realizar una llamada a la API para obtener una frase aleatoria de Chuck Norris. Esta frase debe cargarse en la página "frase.html".

**REQ004: Construcción con Webpack**

+ El proyecto debe estar completamente construido utilizando Webpack.
+ El código fuente del proyecto debe ser subido a GitHub con el nombre del repositorio como "ChuckNorris".

---

## Detalles de la Construcción

+ Debes crear una clase JavaScript llamada Clases.js para gestionar las categorías y las frases.
+ Utiliza Webpack para administrar las dependencias.

## Instrucciones para Ejecutar el Proyecto
+ Clona el repositorio desde GitHub: Repositorio ChuckNorris.
+ Asegúrate de tener Node.js y npm instalados en tu sistema.
+ Ejecuta <npm install webpack webpack-cli --save-dev> para instalar las dependencias necesarias.
+ Para compilar el proyecto, ejecuta <npm run build 
---
