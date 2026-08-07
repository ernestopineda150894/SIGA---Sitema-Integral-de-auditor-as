# SIGA — Despliegue en Vercel

Este paquete contiene:
- `index.html` — la aplicación completa (HTML + CSS + JS en un solo archivo, sin dependencias externas)
- `vercel.json` — configuración mínima para que Vercel lo sirva como sitio estático

## Cómo publicarlo (sin cuenta, en 1 minuto)
1. Entra a **https://vercel.com/new**
2. Inicia sesión (puedes usar tu cuenta de GitHub, GitLab o correo)
3. Busca la opción para **subir una carpeta directamente** ("Deploy" → arrastra la carpeta de este ZIP ya descomprimido) — o bien, si te pide un repositorio, usa la opción "Import" → "Upload" según lo que te muestre la pantalla
4. Vercel detecta automáticamente que es un sitio estático y lo publica
5. Te entrega una URL pública tipo `https://siga-xxxx.vercel.app`

## Alternativa igual de rápida (por si Vercel pide conectar Git)
Si Vercel te obliga a conectar un repositorio de GitHub en vez de subir la carpeta directo:
- **Netlify Drop** (sin cuenta, sin Git): entra a **https://app.netlify.com/drop** y arrastra esta misma carpeta descomprimida. Es la forma más simple si solo quieres probarlo.

## Acceso a la aplicación
- Usuario: `admin`
- Contraseña: `Admin@2026Test`
- O el botón **"⚡ Entrar directo con el usuario de prueba"** en la pantalla de acceso

## Importante sobre los datos
Los datos se guardan en el navegador de cada persona que use la URL (localStorage), no en un servidor compartido. Esto significa:
- Cada usuario que entre a la URL pública tendrá su propia copia de los datos de prueba
- Los cambios que un usuario haga no los verá otro usuario
- Esto es esperado en esta versión de prototipo (frontend puro); una versión de producción requeriría backend + base de datos compartida, como se explica en `README-SIGA.md`
