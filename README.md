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

# Otros eventos que puedes escuchar

* Una forma común de manejar eventos es pasar el “objeto de evento” $event, donde se capturan eleentos del DOM, por lo general este evento contiene la informacion que debemos procesar en el metodo.

* Conviene conocer los objetos del evento DOM Event reference

* Tenga en cuenta el contexto de ejecución

* Las propiedades de un $event (objeto) varían según el tipo de evento DOM. Por ejemplo, un evento de mouse incluye información diferente a la de un evento de edición de cuadro de entrada.

* Podemos escuchar el scroll con el siguiente codigo

~~~
 //en el html
  <div class="box" (scroll)="onScroll($event)"></div>
  // en la capa logica
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  ~~~
* Podemos leer las teclas que se estan digitando a medida que estas son digitadas, esto lo hacemos con el sigiente codigo
~~~
 // en el html
  <input type="text" [value]="person.name" (keyup)="onKeyUp($event)" />
  <p>Name {{ person.name }}</p>
  // en la capa logica
  onKeyUp(event: Event) {
  const element = event.target as HTMLInputElement;
  this.person.name = element.value;
  }
~~~
* Use un tipo de datos espesifico (no any) que pueda revelar las propiedades del objeto asociado al evento
~~~
  // sin informacion de tipo ... simplifica el código al costo de no saber las propiedades del evento
  onK(event: any) {
    this.values += event.target.value + ' | ';
  }
  // define un tipo de dato para el evento que estamos capturando, lo que nos permite utilizar las propiedades adecuadas para el objeto
  onKey(event: KeyboardEvent) {
  this.values += (event.target as HTMLInputElement).value + ' | ';
  }
  // No todos los elementos tienen una value propiedad, por lo que se convierte target en un elemento de entrada. El método onKey expresa más claramente lo que espera y cómo debera interpretar el evento.
~~~
* Tambien puedes capturar teclas como Ctr, Alt, Shift y sus conbinaciones
~~~
  <input (keyup.control)='...respond to ctrl/control...' />
  <input (keyup.alt)='...respond to alt/option...' />
  <input (keyup.shift)='...respond to shift...' />
  <input (keyup.meta)='...respond to command...' />
  <input (keydown.control.shift.z)='...'/>
  <input (keyup.enter)='...responds to enter...' />
  <input (keydown.esc)='...responds to escape...' />
  <input (keyup.shift.f)='...responds to shift+f...' />
~~~
* Al utilizar el “$event” tenga en cuenta que este muestra mas infomacion de la necesaria, lo que rompe “la separacion de responsabilidaes” entre la plantilla ( lo que ve el usuario ) y el componente ( cómo la aplicación procesa los datos del usuario ), es mejor usar variables de referencia en la capa logica (componente) para abordar este problema.

* Conceptos extraídos de:
* https://developer.mozilla.org/en-US/docs/Web/Events
* https://angular.io/guide/event-binding-concepts
* https://medium.com/claritydesignsystem/angular-pseudo-events-d4e7f89247ee
* https://www.w3schools.com/angular/angular_events.asp
* https://angular.io/guide/user-input
* https://angular.io/guide/template-reference-variables

## Data Binding con NgModel
* Fusion entre escuchar un envento, Event Binding y setear una propiedad, Property Binding
* Importante recalcar que para hacer uso de ngModel debemos importar el “FormModule” y habilitar el mismo en app.module.ts

* ngModel raliza un seguimiento del valor y el estado de validación de un control de formulario individual debido a las propiedades que hereda de FormControl es recomentado saber como funciona dicho proceso.

* Podemos personalizar las validaciones que deberia tener un campo o el mismo formulario

* Aqui utilizamos las variables de referencia (las que tienen el signo #) y debemos indicar que la variable debera tomar el valor del ngModel <<#nameInput=“ngModel”>>

* Se pueden realizar las validaciones que normalmente encontramos en html y con “pattern” podemos especificar una comprobacion como exprecion regular

* Podemos tener un flujo de datos unidireccional con [] o bidireccional con [()] Acepta inputs

* Cuando se utiliza el ngModel sin la etiqueta <form> es necesario proporcionar un “nombre de atributo” de manera que el control pueda ser registrado en el formulario padre bajo ese nombre.

~~~
//comportamiento del ngModel sin etiqueta <form>
  	//html
  	<input [(ngModel)]="name" #ctrl="ngModel" required>
  	//capa logica
  	name: string = '';
//Comportamiento dentro de un form
	//html
	<form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
		<input name="first" ngModel required #first="ngModel">
		<input name="last" ngModel>
    		<button>Submit</button>
	</form>
  	//capa logica
	onSubmit(f: NgForm) {
	console.log(f.value);  // { first: '', last: '' }
	console.log(f.valid);  // false
	}

En el contexto de un formulario principal, a menudo no es necesario incluir enlaces unidireccionales o bidireccionales, ya que el formulario principal se encarga de su  sincronizacion
~~~
* Conceptos extraídos de:

* https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation
* https://angular.io/api/forms/FormControl
* https://angular.io/api/forms/NgModel
* https://gustavodohara.com/blogangular/banana-in-box-banana-la-caja/

## Directiva ngIf
Nos permite condicionar la visibilidad de los elemntos html
~~~
<p *ngIf="name === 'soy julian' && age == 18; else elseBlock">Soy Julian</p>
<ng-template #elseBlock>
  <p>Else Block</p>
</ng-template>
~~~
## Directiva ngFor
Nos permite iterar sobre elementos HTML de forma dinamica, nos sirve por ejemplo para iterar arrays en listas HTML
~~~
<h1>ngFor</h1>
<input type="text" [(ngModel)] = "newName"/>
<button (click)="addName()">Add Name</button>
<ul>
  <li *ngIf="names.length === 0">No hay nombres</li>
  <li *ngFor="let name of names; index as i">
    {{i}} {{name}}
    <button (click)="deleteName(i)">Delete</button>
  </li>
</ul>
~~~
## ngFor para arrays
Ejemplo de renderizacion de un array de objetos
~~~
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]
  <h1>*ngFor Objs</h1>
<div>
  <div *ngFor="let product of products">
    <img width="250" [src]="product.image" alt="image">
    <h2>{{product.price}}</h2>
    <p>{{product.name}}</p>
  </div>
~~~
Es importante tipar los datos, por ejemplo podemos determinar como se construye un objeto a partir de definir una iterface en typscript, ejemplo:
~~~
export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string;
}
~~~
## Uso de ngSwitch
ngSwitch
El funcionamiento de esta directiva es exactamente igual que el de un switch de programación, donde el resultante de una expresión definirá cual es el elemento del DOM (el tag) que se mostrará. Para ello se utilizan los atributos [ngSwitch] igualado a una variable definida en código (la cual será la que cambie su valor) y los atributos *ngSwitchCase igualados a los posibles valores que puede tomar la variable. Cuando la variable tome el valor de uno de los *ngSwitchCase se mostrará el tag asignado. También se puede incluir un tag con el atributo *ngDefaultSwitch para que se muestre siempre y cuando el valor de la variable no está contemplado en ninguno de los casos.

## Class and style
Se puede modificar el estilo de los componentes html de forma dinamica, se aplicar una clase o directamente aplicar propiedades css [class.claseStyle] = "valor booleano" o [style.font-style] = "nameInput3.invalid ? 'italic':'normal'" es decir se puede hacer data binding directamente a los valores de css

## NgClass y NgStyle
La NgStyle directiva te permite establecer propiedades de estilo de elementos DOM determinados.
La NgClass directiva te permite configurar la clase CSS de forma dinámica para un elemento DOM.
