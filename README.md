![header](https://user-images.githubusercontent.com/111798280/201878083-3582f8b7-7ff8-4673-ac94-3354322e5389.jpg)

# Proyecto Vanilla JavaScript Breaking-Bad ⚗

A continuación encontrarás una breve guía sobre el funcionamiento y cómo instalar esta aplicación web que trata sobre la famosa serie Breaking Bad, permitiéndote recorrer un listado de los mismos para que puedas elegir a tus favoritos.

## Descripción 🧾

Aplicación web de Breaking Bad que nos permite des/marcar los personajes como favoritos y guardarlos en el local storage. El proyecto está desarrollado utlizando HTML, Sass y JavaScript. 

## Funcionamiento 🔨

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/201878629-2fd8c0bc-69d4-4531-8bfa-b8c18b0e04ea.png">

- **Visualización de los personajes**: Permite ver en modo listado tarjetas de todos los personajes de la serie extraidas de la la siguiente API: https://breakingbadapi.com/. Por cada personaje se visualiza una tarjeta donde se muestra la foto del mismo, su nombre y su estado. 

- **Buscador de personajes**: Además el  usuario tiene la opción de buscar personajes por su nombre utilizando el buscador de la parte superior de la página.

- **Lista de personajes favoritos**: También puede seleccionar sus personajes favoritos. Cuando seleccione un personaje el color de su tarjeta cambiará indicando que ha pasado a ser un personaje favorito. Además, en la zona de la izquierda de la página será visible una lista de favoritos, con todos los personajes que haya seleccionado el usuario. Esta lista de favoritos será guardada en el Local Storage automáticamente, por lo que si el usuario vuelve a entrar a la página un tiempo después la lista con sus personajes favoritos le estará esperando.

- **Borrar los personajes favoritos**: Asimismo, cada tarjeta de los personajes favoritos tiene un botón en forma de ❌ que permite eliminar los personajes de tu lista. 

- **Eliminar todos los favoritos y ocultar la lista**: Por último, al final de toda la lista de favoritos se sitúa un botón que permite al usuario borrar toda la lista y ocultar la misma.

## Si te gustaría instalarlo, sigue esta guía de inicio rápido 🖥

Este proyecto se ha realizado utilizando una plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas, como es el **Adalab web starter kit**. Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más. Para poder trabajar con él se debe tener previamente instalado Node JS. 

### Pasos a seguir cada vez que se quiere arrancar un proeycto desde cero: 

1. **Crea tu propio repositorio**.
1. Descarga el **Starter kit desde GitHub**.
1. **Copia todos los ficheros** en la carpeta raíz del repositorio.
1. **Abre una terminal e instala las dependencias** locales ejecutando en la terminal de comando: 

```npm install```

### Pasos para arrancar el proyecto:

Una vez hemos instalado las dependencias, **el proyecto debe arrancarse cada vez que nos pongamos a programar** ejecutando el siguiente comando:

```npm start```

Este comando: 

- **Abre una ventana de Chrome y muestra tu página web**.
- También **observa** todos los ficheros que hay dentro de la carpeta ```src/```, para mostrar los cambios cada vez que modifiques un fichero, **refrescando tu página en Chrome**. 
- También **procesa los ficheros** HTML, SASS/CSS y JS y los **genera y guarda en la carpeta** ```/public```. 

Después de ejecutar ```npm start``` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta ```src/``` y programar cómodamente. 
