# Práctica del curso de Front-end Avanzado - BlogCoding
---

API desarrollada con **JavaScript** y **WebPacks** para proporcionar información sobre artículos, sobre diferente temas de la actualidad, es importante mencionar que el sistema actualmente utiliza una base de datos falsa, con la utilización del paquete **json-server** el cual por defecto corre en el puerto 3000 y **BlogCoding** por defecto en el pue5to 5000

**BlogCoding** : Es un prototipo, pero ya cuenta con algunas opciones funcionales, como:

1. Listado de artículos:  permite visualizar un listado de artículos almacenado en el archivo **db.json** que se encuentra en la carpeta data.

<p align="center">
  <img width="860" height="450" src="https://raw.githubusercontent.com/MichaelNode/FrontEndAvanzado-Entrega/master/content/1.jpg">
</p>

2. comentarios de artículos: permite agregar comentarios en cada artículo.
<p align="center">
  <img width="860" height="450" src="https://raw.githubusercontent.com/MichaelNode/FrontEndAvanzado-Entrega/master/content/4.jpg">
</p>

3. Búsqueda de articulo: permite realizar búsqueda de artículos, por título de articulo o autor( esta funcionalidad solo esta implementada en las vistas de listado de artículos(<http://localhost:5000/>) y detalle de articulo)

Además cuenta con las vistas para crear una cuenta(<http://localhost:5000/register>) e ingresar al sistema(<http://localhost:5000/login>), las cuales de momento aun no tienen funcionalidad.


<p align="center">
  <img width="360" height="600" src="https://github.com/MichaelNode/FrontEndAvanzado-Entrega/blob/master/content/2.jpg?raw=true">
</p>

<p align="center">
  <img width="360" height="600" src="https://github.com/MichaelNode/FrontEndAvanzado-Entrega/blob/master/content/3.jpg?raw=true">
</p>


## Proceso de instalación 

## Instalación
Ejecuta el siguiente comando para instalar todas las dependencias que necesita **BlogCoding**

```shell
npm install
npm run build
```

## Base de Datos

Copia .env.example a .env y revisa el valor.

Es importante tener corriendo el servidor con la dependencia **json-server**, para que la aplicación pueda consumir los datos.

```shell
npm run json-server
```

o

```shell
json-server --watch data/db.json
```

## Ejecución

Para ejecutar la aplicación en producción usa:

```shell
npm start
```
