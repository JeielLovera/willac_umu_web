# WILLAC UMU WEB
Esta Single Page Application de Willac Umu está desarrollada en Angular 8, sirve como interfaz gráfica para los usuarios finales, los cuales harán uso del sistema para entrenar y predecir el ingreso de los alumnos a las universidades a través de sus notas escolares.
Este SPA hace uso de los endpoints de WILLAC UMU API para el entrenamiento y predicción de datos, asimismo, utiliza el servicio de almacenamiento de archivos Firebase Storage para la subida y descarga de archivos .csv.

## Requerimientos para la instalación y uso de la página web

#### Softwares
- Node.js
- Angular CLI

#### Instalación
Descargar e instalar Node.js la versión LTS

    https://nodejs.org/es/

Instalar Angular CLI a través de la terminal

    $ npm install -g @angular/cli

Clonar los archivos en la carpeta deseada por medio de la terminal

    $ git clone https://github.com/JeielLovera/willac_umu_web.git

Dentro de la carpeta willac_umu_web abrir la terminal e instalar los archivos de node_modules por medio de npm

    $ npm install

#### Uso de la Web
Teniendo ya los archivos de node_modules descargados, se puede dar inicio a la ejecución de la aplicación desde la terminal

    $ ng serve
    

## Archivos core
#### upload.service.ts
Contiene todas las funciones para el uso de los endpoints del API de Willac Umu y el servicio de almacenamiento de archivos de FirebaseStorage.

#### training.component.ts
Contiene las funciones para la selección y subida de archivos .csv, como también la funciones de entrenamiento haciendo uso del servicio de upload.service.ts

#### predict.component.ts
Contiene las funciones para la selección y subida de archivos .csv, como también la funciones de predicción haciendo uso del servicio de upload.service.ts

## Estructura de archivos
```
willac_umu_web
├──e2e
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── components
│   │   ├── examples
│   │   ├── pages
│   │   │    ├── langing-page
│   │   │    │       ├── landing-page.component.html
│   │   │    │       └── landing-page.component.ts
│   │   │    ├── training
│   │   │    │       ├── training.component.html
│   │   │    │       └── training.component.ts
│   │   │    └── predict
│   │   │    │       ├── preditc.component.html
│   │   │    │       └── predict.component.ts
│   │   ├── services
│   │        └── upload.service.ts
│   │   └── shared
│   ├── assets
│   ├── environments
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── tsconfig.app.json
├── .gitignore
├── README.md
├── tsconfig.json
└── tslint.json
```