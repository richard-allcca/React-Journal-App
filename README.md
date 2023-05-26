# Journal App (IN PROGRESS)

Una aplicación que simula una especie de diario digital, permite crear todo tipo de anotaciones y agregar imagenes.

Tiene autenticación con Email y Password, También autenticación con **Google SingIn**

Esta aplicación esta conectada en su autenticación con **Firebase** y para almacenamiento con **Firestore**

## NPM instalaciones

    yarn install @mui/material
    yarn @emotion/react
    yarn @emotion/styled

## Temas tocados en este proyecto

- Maquetación con MaterialUi
- Redux
- Store
- Middlewares
- Dispatch
- Actions
- State
- Acciones asíncronas
- RTK Query
- Redux Toolkit
- Slices
- Firebase
- Firestore
- Formularios
- Google SingIn
- Acciones Asíncronas
- Mantener el estado de la authenticación

## Notas sobre Material UI

Link - Este componente de Material solo tiene estilos no funcionalidad asi que debes usar el atributo `component={}`

Typography - Puedes convertir este por ejemplo en h1 con 'compoent=h1' pero si necesitas que sea como el tema que material le puso por defecto usa 'variant=h1'

SX - Es similar a 'style' de un elemento html solo que con este adémas tienes acceso a las propiedades del  tema que definimos con themeProvider

XS - Pantalla extra pequeña
SM - Pantalla pequeña
MD - Pantalla mediana
XL - Pantalla grande

## Enlaces

[Material Icons](https://v4.mui.com/es/components/material-icons/#material-icons)
[Animate css](https://animate.style/)

## Vista Previa

![En progreso](/public/journal-app.png)

## Flujo de Archivos

 ![Diagrama de flujo](/src/assets/Diagramas%20t%C3%A9cnicos.jpg)
