# 🌿 Nexo Consultora Ambiental

Sitio web de **Nexo Consultora Ambiental**, una consultora ambiental interdisciplinaria de 25 de Mayo, La Pampa (Argentina). Ofrecen asesoramiento legal ambiental, trámites, estudios de impacto, planes de manejo y capacitación para empresas, entes públicos y privados.

🔗 **Producción:** [nexo-consultora-ambiental.vercel.app](https://nexo-consultora-ambiental.vercel.app)

## ✨ Características

- **One-page** con navegación por anclas y scroll suave
- **Responsive** — mobile first, probado desde 280px hasta 2560px
- **Menú móvil accesible** — hamburger con `aria-expanded`, cierre por click fuera y navegación
- **Imágenes optimizadas** — redimensionadas y convertidas a WebP (~85% menos peso)
- **SEO básico** — meta tags Open Graph, sitemap y `robots.txt`
- **Formulario de contacto** vía [Formspree](https://formspree.io)

## 🛠️ Tech stack

| Herramienta | Uso |
| :-- | :-- |
| [Astro 7](https://astro.build) | Framework estático |
| [pnpm](https://pnpm.io) | Gestor de paquetes |
| [sharp](https://sharp.pixelplumbing.com) | Optimización de imágenes (vía Astro) |
| [Vercel](https://vercel.com) | Deploy y hosting |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Generación de sitemap |

## 📁 Estructura del proyecto

```text
/
├── public/
│   └── images/          # Logos, fotos del equipo y fondo
├── src/
│   ├── components/      # banner, navigation, servicios, equipo, contacto, footer, social
│   ├── layouts/
│   │   └── Layout.astro # Shell HTML común (meta, fuentes, favicon)
│   ├── pages/
│   │   └── index.astro  # Página única con las secciones
│   └── styles/
│       └── global.css   # Variables de color, tipografía, utilidades
└── astro.config.mjs
```

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando           | Acción                                                    |
| :---------------- | :-------------------------------------------------------- |
| `pnpm install`    | Instala las dependencias                                   |
| `pnpm run dev`    | Levanta el servidor local en `localhost:4321`              |
| `pnpm run build`  | Genera el sitio de producción en `./dist/`                 |
| `pnpm run preview`| Previsualiza el build localmente antes de publicar         |

## 🧞 Desarrollo

```sh
# Clonar e instalar
git clone https://github.com/beresiartejuan/nexo-consultora-ambiental.git
cd nexo-consultora-ambiental
pnpm install

# Arrancar en modo desarrollo
pnpm run dev
```

### Notas para contribuir

- El **breakpoint principal** de responsive es `768px`. Los estilos globales (botones, secciones) viven en `src/styles/global.css`; cada componente estila sus propias clases con `<style>` scoped.
- La paleta de colores y las variables (`--color-verde`, `--sombra`, etc.) están definidas en `:root` del `global.css`.
- Tipografías: **Poppins** (títulos) y **Lato** (texto), cargadas desde Google Fonts.
- El formulario usa Formspree — para cambiar el destinatario hay que editar el `action` del form en `src/components/contacto.astro`.

## 👥 Créditos

Desarrollado por [Emilia Bazán](https://www.linkedin.com/in/mar%C3%ADa-emilia-baz%C3%A1n-azargado-77593968/), [Juan Beresiarte](https://www.linkedin.com/in/beresiartejuan/) y Fabricio Martinez.

---

© Nexo Consultora Ambiental · [Instagram](https://www.instagram.com/nexoambiental) · Alpachiri 142, 25 de Mayo, La Pampa, Argentina