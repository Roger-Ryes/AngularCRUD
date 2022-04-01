# HeroesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
____________________________________________
## ANGULAR MATERIAL
	https://material.angular.io/
	https://material.angular.io/components/categories
	https://www.npmjs.com/package/@angular/flex-layout
	icons
	https://fonts.google.com/icons?selected=Material+Icons
	Backend
	https://gist.github.com/Klerith/403c91e61d3c87284beb0dd138619958
	https://www.npmjs.com/package/json-server

## LEER LA URL
	import { ActivatedRoute } from '@angular/router';

	constructor(
		private activatedRoute: ActivatedRoute // Lee el url
	) { }

	ngOnInit(): void {
		this.activatedRoute.params
		.subscribe( ({id}) => {
		  console.log(id)
		  })
	}

## PURE EN PIPE'S
pure: false // Se invoca al metodo transform(), cuando la entrada del atributo cambia

<br>
## GUARD
Permite no acceder a otras rutas si no cumple un parametro como no contar con el id del usuario
ng g guard directorio/

Aparecen opciones, se uso el CanActivate y CanLoad 

## GUARD - CanLoad
Solo sirve para prevenir que el usuario carge el modulo, si ya el modulo estaba cargado la persona
podra quedarse ahi