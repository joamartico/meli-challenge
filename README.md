# Mercado Libre test práctico

Este proyecto es una aplicación web desarrollada para el challenge técnico de Frontend para Mercado Libre, utilizando Next.js para manejar tanto el frontend como el backend mediante API routes. La aplicación implementa una caja de búsqueda, muestra resultados de búsqueda y permite ingresar a la página de detalles de cada producto.

## Comenzando

Para obtener una copia del proyecto en funcionamiento en tu máquina local siga las siguientes instrucciones.

### Prerrequisitos

Antes de comenzar, asegurate de tener instalado Node.js (versión 6 o superior). Puede verificar esto con:

node --version

### Instalación

Siga estos pasos para instalar y ejecutar el proyecto:

1. Clona el repositorio:

git clone https://github.com/joamartico/meli-challenge.git

2. Instala las dependencias:

cd meli-challenge
npm install

3. Inicia el entorno de desarrollo de Next.js:

npm run dev

La aplicación debería estar ahora corriendo en `http://localhost:3000`.

## Estructura del Proyecto

Breve descripción de la estructura del proyecto:

- `src/pages/api`: Contiene los endpoints de la API que actúa como backend.
- `src/app`: Contiene las páginas de la aplicación, incluyendo la página de inicio, resultados de búsqueda y detalles del producto.
- `src/components`: Componentes reutilizables de la UI.
- `public`: Archivos estáticos como imágenes e íconos.

### Vistas

La aplicación consta de tres vistas principales, cada una navegables de manera independiente con su propia URL:
- **Caja de Búsqueda**: Accesible en `http://localhost:3000/` y en el resto de páginas
- **Resultados de Búsqueda**: Visible en `http://localhost:3000/items?search=query`
- **Detalles del Producto**: Se encuentra en `http://localhost:3000/items/:id`

### API Endpoints

Los endpoints implementados para las vistas son los siguientes:

- **Endpoint de Búsqueda**: `/api/items?q=:query`
  - Se conecta a `https://api.mercadolibre.com/sites/MLA/search?q=:query`
  - Devuelve datos en el formato especificado incluyendo autor, categorías e items.
- **Endpoint de Detalle del Artículo**: `/api/items/:id`
  - Recupera datos de `https://api.mercadolibre.com/items/:id` y `https://api.mercadolibre.com/items/:id/description`
  - Provee detalles del artículo incluyendo la descripción en el formato requerido.

## Construido con

* [React](https://reactjs.org/) - El framework web usado
* [Next.js](https://nextjs.org/) - El framework de React para mejoras de SEO y para construir el servidor
* [Sass](https://sass-lang.com/) - Usado para estilos avanzados
