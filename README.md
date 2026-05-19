# Del CIE-11 al apoyo socioeducativo · Infografía interactiva

Versión final estática, sin frameworks externos, preparada para publicar en GitHub Pages.

## Estructura

```text
index.html
css/app.css
js/app.js
README.md
.nojekyll
```

## Características incluidas

- HTML semántico, CSS y JavaScript puro.
- Navegación interna narrativa con estados activos.
- Barra de progreso de lectura.
- Scroll reveal progresivo con `IntersectionObserver`.
- Interacciones significativas:
  - lectura del caso por foco familiar y capa profesional;
  - selector de herramientas de caso social;
  - ruta interactiva del código al apoyo;
  - checklist de evaluación con feedback textual.
- Accesibilidad básica:
  - enlace de salto al contenido;
  - foco visible robusto;
  - botones con `aria-pressed`;
  - regiones `aria-live` para feedback;
  - estructura por landmarks y encabezados jerárquicos;
  - contraste cuidado en la interfaz.
- Compatibilidad con `prefers-reduced-motion`.
- Estilos de impresión para guardar como PDF.
- `.nojekyll` incluido para evitar procesamiento Jekyll en GitHub Pages.

## Publicación en GitHub Pages

1. Sube estos archivos a la raíz del repositorio.
2. En GitHub, abre **Settings → Pages**.
3. Selecciona **Deploy from a branch**, rama `main` y carpeta `/root`.
4. Guarda los cambios y espera el despliegue.

## Desarrollo local

Puedes previsualizar la infografía con cualquier servidor estático:

```bash
python3 -m http.server 8080
```

Después abre `http://localhost:8080`.

## Fuentes recomendadas

- Organización Mundial de la Salud: CIE-11, navegador oficial.
- W3C/WAI: WCAG 2.2 y criterio de foco visible.
- Observatorio Español de las Drogas y las Adicciones: indicadores y sistemas de información.
- Material docente UNIR citado como marco académico del caso.

## Nota ética

La infografía tiene finalidad académica y orientativa. No diagnostica, no sustituye el navegador oficial de la CIE-11 y no reemplaza la valoración clínica ni la intervención profesional competente.
