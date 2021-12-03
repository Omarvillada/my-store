# my-store
Angular Basics - Platzi

* Verifica versión de Node: node -v

* Verifica versión de npm: npm -v

* Instala el CLI de Angular: npm -g @angular/cli

* Verifica tu instalación: ng version

* Crea tu primer proyecto: ng new my-project

* Ejecuta el servidor de desarrollo: ng serve Dentro de la carpeta de tu proyecto.

## Comandos de Angular
* ng serve -o para lanzar el servidor de desarrollo y abrir el navegador y ng serve -o --port=3500 para especificar el puerto
* ng serve dentro del proyecto para ver las dependecinas que tenemos instaladas

## Estructura de un proyecto

* src: corazón de la aplicacion: componentes, html, css, routing
* .browserlistrc: indica a angular en que versiones tiene que ser compatible la aplicacion
* .editorconfig: Trabajo en equipo, configuracion de IDE
* tsconfig.json: Configuracion que tiene Angular con Typescript
* angular.json: para configurar ambientes
* Karma.config: Archivo para correr pruebas unitarias
* package.json: scripts y versiones que estamos manejando
* .nvmrc: se usa cuando se esta trabajando con varias versiones de node
