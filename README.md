# Distrileco en ExpoCaucasia 2026

App (PWA) del stand de **Distrileco Caucasia S.A.S.** en ExpoCaucasia 2026 (6 y 7 de noviembre, Caucasia): Super Arroz y Arroz Vistahermosa.

**URL:** https://distrileco-expocaucasia.netlify.app

## Qué trae
- Portada con la foto real del stand, en vivo con la hora de Colombia y la cuenta regresiva al cierre de la feria
- Marcas y presentaciones (500 g, 2.500 g, 5.000 g) con fotos reales
- Ofertas de feria, rifa gratis con boleta digital (DLX-#####), cambio de bolsas por libras de arroz
- Pedido para tenderos que se envía por WhatsApp
- Recetas, cobertura, contacto, QR y botón de compartir
- Español / inglés, instalable, funciona sin señal
- **Sorteo en vivo:** abre `https://distrileco-expocaucasia.netlify.app/?sorteo=1`, pega la lista y presiona Sortear

## Inscripciones a la rifa
Llegan a **Netlify → el sitio → Forms → rifa-distrileco**. Ahí se descargan en CSV y ese CSV se pega tal cual en el sorteo en vivo (se quitan los WhatsApp repetidos).
Netlify Forms solo funciona si el sitio se publica en Netlify (no en GitHub Pages). La primera vez, en Forms, activa "Enable form detection" y vuelve a publicar.

## Cómo cambiar precios y reglas
En `index.html`, bloque `CONFIG`:
- `precio` / `antes` de cada producto (número sin puntos, p. ej. `2900`); `null` = "Precio de feria en el stand"
- `bolsasPorLibra`: cuántas bolsas vacías dan 1 libra
- `sorteo`: fecha y hora del sorteo, p. ej. `"7 de noviembre, 5:00 p. m."`

## Archivos
index.html · manifest.json · sw.js · netlify.toml · img/ (stand, banners, productos, og-image, qr, íconos)

---
Desarrollada por Vibras Positivas HM — Derechos de Autor Reservados
