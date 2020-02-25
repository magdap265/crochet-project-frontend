# Crochet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Live demo
[Frontend](http://magdap.ct8.pl/)
## Documentation

This project consists of four main components: header, products, comments and patterns.
	First one is very simple component. It contains fonctionality of navbar and part of site navigation. User can very quickly navigate between products, comments and paterns. 
	Product components is the initial view of aplication and it is wthe largest one. At the begining user see list of products and message "Select a product...". Additionl abovethe list is button to adding a new product. When the user chooses a product, detail of them appears instead of message. In detail are many informtions about selected products and buttons redirects to  video with pattern, adding comment of this product, edit it, delete it. A list of comments of this product is under thede buttons. 
	Comments component shows list of comments. Every comment product image and name, username, description and rating. 
	Patterns component  shows list of video with patterns of products. Every item has product name and video.
	
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
