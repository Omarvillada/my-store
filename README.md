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
* ng version dentro del proyecto para ver las dependecinas que tenemos instaladas

## Estructura de un proyecto

* src: corazón de la aplicacion: componentes, html, css, routing
* .browserlistrc: indica a angular en que versiones tiene que ser compatible la aplicacion
* .editorconfig: Trabajo en equipo, configuracion de IDE
* tsconfig.json: Configuracion que tiene Angular con Typescript
* angular.json: para configurar ambientes
* Karma.config: Archivo para correr pruebas unitarias
* package.json: scripts y versiones que estamos manejando
* .nvmrc: se usa cuando se esta trabajando con varias versiones de node

## Conceptos de TypeScript

~~~
const username: string | number = 'omar';
const sum = (a: number, b:number) =>{
  return  a + b;
}

sum(1,2)

class Person {
  constructor(private age: number, public lastName: string){
  }
}

const omar = new Person(24,"Villada");
omar.lastName

~~~

## String interpolation
codigo javascript que se ejecuta entre {{}}
~~~
<h1>Hola Mundo</h1>
<h1>{{'Hola Mundo'.repeat(5)}}</h1>
<p>3 + 3 = {{3 + 3}}</p>
~~~
String interpolation: La forma en la que desde la lógica de nuestro typeScript podemos pasar datos a renderizar a nuestro template(html). En otras palabras, con las {{ }} podemos usar typeScript en html.

## Property Binding
Forma de modificar atributos en el controlador hasta nuestros componentes en html, es decir modificar el valor de los atributos por ejemplo de una etiqueta html. siempre lo debemos hacer al configurar propiedades html
<element [property] = "variableComponente">

## Introduccion a Event Binding de Angular
Event Binding
El Event Binding le permite escuchar y responder a las acciones del usuario, como pulsaciones de teclas, movimientos del mouse, clics y toques (Atributos HTML y propiedades DOM).
Nos sirve para capturar eventos de elementos HTML
<elemnt (click) = "onSave()">
