## Challenge Inditex - Frontend developer

Este challenge se trata de una aplicación web donde se puede ver un listado de personajes de Marvel (50 como máximo) utilizando la API [http://gateway.marvel.com/v1/](http://gateway.marvel.com/v1/) Cada uno está mostrado en una card con opción de ser guardado como favorito.

Si se pulsa el icono del corazon que hay a la derecha del Header, podemos ver el listado de personajes que tenemos guardados en favoritos (en caso de tener alguno) y para volver a la vista general solo hay que pulsar el logo principal de Marvel.

Además si pulsamos en cualquier personaje tenemos una segunda vista con el detalle del personaje. Además debajo de la información principal mostramos un slide con los últimos comics (20 como máximo) en los que aparece dicho personaje.

## Stack tecnológico

- NextJS 14+
- Typescrip
- ContexAPI
- Jest
- Testing Library

## Instrucciones

Clonamos y accedemos al repositorio

> ```console
>  $ git clone https://github.com/Jommartinez/challenge-inditex-nextjs.git
>  $ cd challenge-inditex-nextjs
> ```

Instalamos dependencias e iniciamos el proyecto

> ```console
> $ npm install
> $ npm run dev
> ```

Para ejecutar los test utilizamos el siguiente comando

> ```console
> $ npm run test
> ```

## Demo del challenge

El proyecto ha sido desplegado en la siguiente url para fines de demostración : https://challenge-inditex-nextjs.vercel.app/

## Jerarquía de carpetas

La jerarquía de carpetas que se ha utilizado para el proyecto ha sido la siguiente:

- Dentro de la carpeta .next encontramos el código minificado listo para subir a un servidor (normalmente este archivo lo excluiría con el .gitignore, pero es requisito del challenge entregar el codigo minificado)

- Dentro de src encontramos todo lo necesario para el desarrollo del proyecto. Encontramos las siguientes carpetas:

📂 utils/api : Aqui nos encontramos con todo lo relacionado con la API de Marvel (conexión y endpoint necesarios)

📂 assets: Aquí se encuentran las imágenes estáticas que utilizamos para el proyecto.

📂 components: En esta carpeta se encuentran todos los componentes de la aplicación y los estilos relacionados a cada componente. (Cada componente está dentro de una carpeta propia)

📂 context: Aqui nos encontramos todo el estado gobal de la aplicación, en este caso dado los requisitos, se ha empleado ContexAPI. Desde aqui se controla la lista de heroes y de favoritos.

📂 hook: Aqui encontramos algunos hooks que se han creado personalizados para favoritos, heroes y comics.

📂 app: Se encuentras las 2 vistas principales de la aplicación y todo el router de páginas según NextJS

📂 style: Aqui tenemos algunas variables genericas de CSS y el reset.

📂 tests: Aqui tenemos los test que se han realizado con vitest y react testing library

📂 types: aqui encontramso algunas interfaces que se han reutilizado durante el proyecto.

Además de estas carpeta, en la raiz del proyecto tenemos estos archivos a destacar:

📜 .prettierrc al cual le damos las reglas de formateo

📜 .eslintrc.js cuenta con las reglas para el linter
