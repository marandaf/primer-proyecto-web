# Mi espacio · Primer proyecto web

Una web en español, adaptable a móviles, hecha con HTML, CSS y JavaScript sin dependencias externas. Incluye una sección de presentación y un botón que propone ideas para crear.

## Desarrollo

Desde la carpeta del proyecto, con Python 3 instalado:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Abre el puerto 8000 en tu navegador. Detén el servidor con Ctrl+C. No necesita instalación de paquetes, variables de entorno ni compilación.

## Archivos

- `index.html`: contenido y estructura.
- `styles.css`: diseño y adaptación a pantallas pequeñas.
- `script.js`: ideas interactivas y año del pie de página.

## Comprobación

```sh
node --check script.js
curl --fail http://127.0.0.1:8000/
```

Comprueba en el navegador la navegación, la presentación móvil y el cambio de texto al pulsar «Dame una idea».
