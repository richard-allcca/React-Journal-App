# Journal App

***node 16.17.0***

Una aplicación que simula una especie de diario digital, permite crear todo tipo de anotaciones y agregar imágenes.

Tiene autenticación con Email y Password, también autenticación con **Google SignIn**.

Esta aplicación está conectada en su autenticación con **Firebase** y para almacenamiento con **Firestore**.

## Correr Proyecto en local

No olvides instalar los módulos con:

    yarn ó npm i

Levantar el proyecto:

    npm start ó yarn dev

## Temas tocados en este proyecto

- **Maquetación con MaterialUi**: Uso de componentes de Material UI para diseñar la interfaz de usuario.
- **Redux**: Gestión del estado de la aplicación con Redux.
- **Store**: Configuración y uso de la tienda de Redux para almacenar el estado global.
- **Middlewares**: Uso de middlewares en Redux para manejar acciones asíncronas y otras tareas.
- **Dispatch**: Envío de acciones a la tienda de Redux para actualizar el estado.
- **Actions**: Definición de acciones en Redux para describir cambios en el estado.
- **State**: Gestión del estado de la aplicación y cómo se actualiza en respuesta a las acciones.
- **Acciones asíncronas**: Manejo de acciones que realizan operaciones asíncronas, como llamadas a APIs.
- **RTK Query**: Uso de RTK Query para simplificar las llamadas a APIs y la gestión de datos en Redux.
- **Redux Toolkit**: Uso de Redux Toolkit para simplificar la configuración y el uso de Redux.
- **Slices**: División del estado de Redux en slices para una gestión más modular.
- **Firebase**: Integración con Firebase para autenticación y almacenamiento.
- **Firestore**: Uso de Firestore como base de datos para almacenar las anotaciones.
- **Formularios**: Creación y manejo de formularios para la entrada de datos del usuario.
- **Google SignIn (firebase)**: Implementación de autenticación con Google usando Firebase.
- **Mantener el estado de la autenticación**: Persistencia del estado de autenticación del usuario a través de sesiones.

## Notas sobre Material UI

- **Link**: Este componente de Material solo tiene estilos, no funcionalidad, así que debes usar el atributo `component={}`.
- **Typography**: Puedes convertir este componente, por ejemplo, en h1 con `component="h1"`, pero si necesitas que sea como el tema que Material le puso por defecto, usa `variant="h1"`.
- **SX**: Es similar a `style` de un elemento HTML, solo que con este además tienes acceso a las propiedades del tema que definimos con `themeProvider`.
- **XS**: Pantalla extra pequeña.
- **SM**: Pantalla pequeña.
- **MD**: Pantalla mediana.
- **XL**: Pantalla grande.

## Enlaces

[Material Icons](https://v4.mui.com/es/components/material-icons/#material-icons)
[Animate css](https://animate.style/)

## Vista Previa

![En progreso](/public/journal-app.png)
