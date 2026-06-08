# Tab 1

\# Component Canvas — Mallorca as Local UI System

\#\# Objetivo general

Crear una librería de componentes visuales, animados y accesibles para construir una experiencia premium tipo Apple/editorial para Mallorca as Local.    
La colección combina componentes de:

\- Visual storytelling  
\- Cards premium  
\- Formularios y preferencias  
\- Flujos multi-step  
\- Galerías interactivas  
\- Navegación avanzada  
\- Efectos de movimiento, blur y color mood

\---

\# 1\. Glow Hover Cards

Ruta: /docs/components/glow-hover-card

\#\# Uso principal

Cards con efecto glow que sigue el cursor.

\#\# Features

\- Cursor-following glow effect usando CSS mask-image.  
\- Temas de color por card usando HSL.  
\- Animaciones suaves.  
\- GPU acceleration.  
\- Respeta prefers-reduced-motion.

\#\# Accesibilidad

\- Overlay decorativo con aria-hidden="true".  
\- pointer-events: none.  
\- No interfiere con lectores de pantalla.

\#\# Props detectadas

\- GlowHoverCardsProps  
\- GlowHoverCardItem  
\- GlowHoverCardTheme

\#\# Uso recomendado

Ideal para:

\- Categorías premium.  
\- Experiencias destacadas.  
\- Servicios principales.  
\- Cards tipo “Sea”, “Food”, “Nightlife”, “Hidden Gems”.

\---

\# 2\. Image Metadata Preview

Ruta: /docs/components/image-metadata-preview

\#\# Uso principal

Imagen con panel de metadata en hover/open.

\#\# Features

\- Metadata panel on hover.  
\- Animaciones suaves.  
\- Campos y layout personalizables.  
\- Compatible con datos estáticos o dinámicos.

\#\# Accesibilidad

\- Botones con aria-label.  
\- Iconos decorativos con aria-hidden="true".  
\- Metadata usando tabla semántica.  
\- Focus ring visible.  
\- Touch targets mínimos de 44px.

\#\# Props detectadas

\- ImageMetadataPreviewProps

\#\# Uso recomendado

Ideal para:

\- Galerías de villas.  
\- Barcos.  
\- Restaurantes.  
\- Eventos.  
\- Imágenes editoriales con información técnica.

\---

\# 3\. Interactive Image Selector

Ruta: /docs/components/interactive-image-selector

\#\# Uso principal

Galería responsive para seleccionar imágenes.

\#\# Features

\- Toggle selection con teclado y pointer.  
\- Anillo de selección animado.  
\- Escala animada.  
\- Captions y renderers custom.  
\- Grid responsive.

\#\# Accesibilidad

\- Reset button con aria-label.  
\- Select/Cancel button con aria-label dinámico.  
\- Cada imagen tiene alt.  
\- Selection count visible.

\#\# Nota de mejora

Los botones Share y Delete aparecen como icon-only sin labels accesibles.    
Añadir:

tsx aria-label="Share selected images" aria-label="Delete selected images" 

\#\# Props detectadas

\- InteractiveImageSelectorProps

\#\# Uso recomendado

Ideal para:

\- Selección de fotos.  
\- Selección de experiencias.  
\- Wishlist visual.  
\- Selección de barcos, villas o restaurantes.

\---

\# 4\. Infinite Slider

Ruta: /docs/components/infinite-slider

\#\# Uso principal

Carrusel infinito para contenido repetitivo.

\#\# Features

\- Infinite scroll suave.  
\- Velocidad y gap configurables.  
\- Pause on hover.  
\- Dirección horizontal o vertical.  
\- Reverse direction.  
\- Loop sin saltos.

\#\# Accesibilidad

Respeta prefers-reduced-motion.

Cuando reduced motion está activo:

\- Se detiene la animación.  
\- El contenido se muestra estático.

\#\# Props detectadas

\- InfiniteSliderProps

\#\# Uso recomendado

Ideal para:

\- Logos de partners.  
\- Testimonios.  
\- Fotos de Mallorca.  
\- Experiencias destacadas.  
\- Playas, pueblos, restaurantes o barcos.

\---

\# 5\. Scroll Reveal Paragraph

Ruta: /docs/components/scroll-reveal-paragraph

\#\# Uso principal

Párrafo animado al hacer scroll.

\#\# Features

\- Fade \+ translate reveal.  
\- Stagger por palabra/párrafo.  
\- Thresholds y offsets configurables.  
\- Framer Motion \+ Intersection Observer.  
\- Accesible y performante.

\#\# Accesibilidad

\- Renderiza como \<p\>.  
\- Cada palabra puede ir en span, pero el texto sigue siendo legible.

\#\# Reduced Motion

Cuando reduced motion está activo:

\- El texto aparece completo.  
\- Se elimina el reveal.  
\- Se oculta el ghost overlay.

\#\# Props detectadas

\- ScrollRevealParagraphProps

\#\# Uso recomendado

Ideal para:

\- Storytelling.  
\- Secciones editoriales.  
\- Manifiesto de marca.  
\- Textos tipo “Mallorca, but lived as a local”.

\---

\# 6\. Reveal Text

Ruta: /docs/components/reveal-text

\#\# Uso principal

Texto con animación direccional.

\#\# Features

\- Entrada desde arriba, abajo, izquierda o derecha.  
\- Stagger por carácter o palabra.  
\- Delay y duración configurables.  
\- Framer Motion.  
\- Accesible y performante.

\#\# Reduced Motion

Cuando reduced motion está activo:

\- El texto aparece inmediatamente.  
\- Sin slide ni animación direccional.

\#\# Props detectadas

\- RevealTextProps

\#\# Uso recomendado

Ideal para:

\- Hero title.  
\- Subtítulos.  
\- Claims.  
\- Títulos de secciones.  
\- Frases cortas premium.

\---

\# 7\. Magnetic Button

Ruta: /docs/components/magnetic-button

\#\# Uso principal

Botón/CTA con efecto magnético hacia el cursor.

\#\# Features

\- Cursor-following magnetic effect.  
\- Strength configurable.  
\- Radius configurable.  
\- Spring physics.  
\- Touch detection.  
\- Disabled state.  
\- Polymorphic con asChild.  
\- GPU transforms.

\#\# Accesibilidad

\- Wrapper con role="presentation".

\#\# Reduced Motion

Se desactiva si:

\- El usuario prefiere reduced motion.  
\- El dispositivo es touch.  
\- El botón está disabled.

\#\# Props detectadas

\- MagneticButtonProps  
\- strength  
\- radius  
\- springConfig  
\- asChild  
\- disabled

\#\# Uso recomendado

Ideal para CTAs como:

\- “Plan my Mallorca experience”  
\- “Create my route”  
\- “Request local recommendations”  
\- “Start planning”

\---

\# 8\. Dialog

Ruta: /docs/components/dialog

\#\# Uso principal

Modal accesible normal y variante crítica AlertDialog.

\#\# Features

\- open y onOpenChange.  
\- Title, description y footer slots.  
\- Close button configurable.  
\- Focus trap.  
\- Escape dismiss en Dialog normal.  
\- Backdrop dismiss en Dialog normal.  
\- AlertDialog requiere acción explícita.  
\- Spring animation con reduced motion.

\#\# Accesibilidad

\- role="dialog"  
\- role="alertdialog"  
\- aria-labelledby  
\- aria-describedby  
\- aria-modal="true"  
\- Focus trap.  
\- Focus return al cerrar.

\#\# Props detectadas

\- DialogProps  
\- AlertDialogProps

\#\# Uso recomendado

Ideal para:

\- Formularios rápidos.  
\- Detalles de experiencias.  
\- Confirmaciones.  
\- Previews.  
\- Booking request.  
\- Lead capture.

\---

\# 9\. Checkbox

Ruta: /docs/components/checkbox

\#\# Uso principal

Checkbox accesible y animado.

\#\# Features

\- Animated checkmark.  
\- Indeterminate state.  
\- aria-checked="mixed".  
\- Disabled state.  
\- Basado en Radix UI Checkbox.  
\- Compatible con labels vía id.

\#\# Accesibilidad

\- Space toggle.  
\- Tab focus.  
\- role="checkbox".  
\- aria-checked.

\#\# Props detectadas

\- CheckboxProps

\#\# Uso recomendado

Ideal para:

\- Filtros.  
\- Preferencias.  
\- Multi-select.  
\- Confirmaciones.  
\- Servicios incluidos.

\---

\# 10\. Animated Toggle

Ruta: /docs/components/animated-toggle

\#\# Uso principal

Switch animado para activar/desactivar opciones.

\#\# Features

\- Variantes:  
  \- default  
  \- morph  
  \- icon  
\- Tamaños:  
  \- sm  
  \- md  
  \- lg  
\- Controlled/uncontrolled.  
\- Spring animations.  
\- Custom icons.  
\- Disabled state.  
\- Reduced motion.

\#\# Accesibilidad

\- role="switch"  
\- aria-checked  
\- aria-label  
\- Toggle con Space y Enter.

\#\# Props detectadas

\- AnimatedToggleProps  
\- variant  
\- size  
\- label  
\- disabled

\#\# Uso recomendado

Ideal para:

\- Tourist mode / Local mode.  
\- Luxury only.  
\- Adults only.  
\- Map/List.  
\- Hidden gems only.  
\- Theme/language preferences.

\---

\# 11\. Animated Stepper

Ruta: /docs/components/animated-stepper

\#\# Uso principal

Proceso guiado por pasos con progreso animado.

\#\# Features

\- Horizontal y vertical.  
\- Línea de progreso animada.  
\- Slide transitions.  
\- Controlled/uncontrolled.  
\- Click navigation.  
\- Keyboard navigation.  
\- ARIA correcto.  
\- Reduced motion.

\#\# Accesibilidad

\- role="group"  
\- aria-label="Progress steps"  
\- role="tab"  
\- aria-selected  
\- role="tabpanel"  
\- Arrow navigation.

\#\# Props detectadas

\- AnimatedStepperProps

\#\# Uso recomendado

Ideal para:

1\. Elegir tipo de experiencia.  
2\. Seleccionar fechas/personas.  
3\. Elegir preferencias.  
4\. Mostrar recomendaciones.  
5\. Enviar solicitud.

\---

\# 12\. Apple Invites

Ruta: /docs/components/apple-invites

\#\# Uso principal

Gestión visual de invitados o participantes.

\#\# Features

\- Add/remove invitees.  
\- Drag & reorder friendly.  
\- Presence transitions.  
\- Keyboard support.  
\- Screen reader support.

\#\# Accesibilidad

\- Imágenes de evento con alt.  
\- Avatares con alt descriptivo.

\#\# Props detectadas

\- AppleInvitesProps

\#\# Uso recomendado

Ideal para:

\- Crear planes grupales.  
\- Añadir participantes a una experiencia.  
\- Eventos privados.  
\- Reservas grupales.  
\- Boat day, villa dinner, wine tasting.

\---

\# 13\. Expandable Cards

Ruta: /docs/components/expandable-cards

\#\# Uso principal

Cards expandibles en grid o lista.

\#\# Features

\- Expand/collapse animado.  
\- Keyboard navigable.  
\- Grid/list layout.  
\- Easy theming.

\#\# Accesibilidad

\- role="button"  
\- aria-label  
\- aria-selected  
\- tabIndex={0}  
\- Enter y Space para expandir/colapsar.

\#\# Props detectadas

\- ExpandableCardsProps

\#\# Uso recomendado

Ideal para:

\- Categorías de experiencias.  
\- Zonas de Mallorca.  
\- Restaurantes.  
\- Villas.  
\- Barcos.  
\- FAQs visuales.  
\- Paquetes.

\---

\# 14\. Exposure Slider

Ruta: /docs/components/exposure-slider

\#\# Uso principal

Slider físico/draggable para ajustar valor, mood o color ratio de página.

\#\# Nota especial

Este componente puede sincronizarse con el ratio/color de la página, de forma que al mover el slider cambie el color general de la página.

\#\# Features

\- Draggable ticker.  
\- Spring snap.  
\- Notches animadas.  
\- Circular SVG progress ring.  
\- Valores positivos/negativos.  
\- Edge fade gradient.  
\- Min/max/step.  
\- onChange.  
\- Reduced motion.

\#\# Nota de accesibilidad

Si se usa como slider real, añadir:

\- role="slider"  
\- aria-valuemin  
\- aria-valuemax  
\- aria-valuenow  
\- aria-label  
\- Soporte de teclado con arrows.

\#\# Props detectadas

\- ExposureSliderProps  
\- min  
\- max  
\- step  
\- onChange

\#\# Uso recomendado

Ideal para:

\- Mood selector.  
\- Local → Premium.  
\- Calm → Adventure.  
\- Relaxed → Active.  
\- Cambiar color global de página.  
\- Experiencia interactiva inmersiva.

\#\# Mapping conceptual

| Valor | Mood | Visual |  
|---:|---|---|  
| \-100 | Calm / slow travel | Arena, crema, azul suave |  
| 0 | Balanced local | Neutros cálidos |  
| 100 | Premium / nightlife | Dorado, negro, deep blue |

\---

\# 15\. GradualBlur

Origen: React Bits    
Componente: \<GradualBlur /\>    
Variant: JavaScript \+ CSS    
Dependencias indicadas: mathjs

\#\# Nota

El código pegado no muestra uso directo de mathjs, así que conviene confirmar si realmente es necesaria.

\#\# Uso principal

Blur gradual en bordes de contenedor o página.

\#\# Features

\- Blur por capas.  
\- Posiciones:  
  \- top  
  \- bottom  
  \- left  
  \- right  
\- Target:  
  \- parent  
  \- page  
\- backdrop-filter.  
\- mask-image.  
\- divCount.  
\- strength.  
\- Curves:  
  \- linear  
  \- bezier  
  \- ease-in  
  \- ease-out  
  \- ease-in-out  
\- Presets.  
\- Hover intensity.  
\- Responsive experimental.

\#\# Props principales

\- position  
\- strength  
\- height  
\- width  
\- divCount  
\- exponential  
\- curve  
\- opacity  
\- animated  
\- duration  
\- easing  
\- hoverIntensity  
\- target  
\- preset  
\- responsive  
\- zIndex  
\- onAnimationComplete  
\- className  
\- style

\#\# Mejora recomendada

Añadir:

jsx aria-hidden="true" 

Y adaptar a prefers-reduced-motion.

\#\# Uso recomendado

Ideal para:

\- Hero sections.  
\- Galerías premium.  
\- Infinite sliders.  
\- Headers glassmorphism.  
\- Bottom fade en contenido scrolleable.  
\- Secciones Apple-like.

\---

\# 16\. TiltedCard

Origen: React Bits    
Componente: \<TiltedCard /\>    
Variant: JavaScript \+ CSS    
Dependencias: motion

\#\# Uso principal

Card visual con efecto 3D tilt, tooltip y overlay.

\#\# Features

\- Tilt 3D con cursor.  
\- Rotación X/Y.  
\- Scale on hover.  
\- Tooltip flotante.  
\- Overlay content.  
\- Imagen con altText.  
\- Mobile warning opcional.  
\- Spring physics.

\#\# Props principales

\- imageSrc  
\- altText  
\- captionText  
\- containerHeight  
\- containerWidth  
\- imageHeight  
\- imageWidth  
\- scaleOnHover  
\- rotateAmplitude  
\- showMobileWarning  
\- showTooltip  
\- displayOverlayContent  
\- overlayContent

\#\# Mejoras recomendadas

\- Añadir reduced motion.  
\- Desactivar tilt en touch devices.  
\- Evitar mobile warning en producción.  
\- Revisar tooltip para screen readers.

\#\# Uso recomendado

Ideal para:

\- Experiencias premium.  
\- Barcos.  
\- Villas.  
\- Restaurantes.  
\- Categorías visuales.  
\- Itinerarios personalizados.

\---

\# 17\. Dock

Origen: React Bits    
Componente: \<Dock /\>    
Variant: JavaScript \+ CSS    
Dependencias: motion

\#\# Uso principal

Dock flotante estilo macOS para navegación o acciones rápidas.

\#\# Features

\- Magnificación por proximidad del cursor.  
\- Items con icon, label y onClick.  
\- Tooltip animado.  
\- Focus support.  
\- role="toolbar".  
\- Spring animation.  
\- Tamaños configurables.

\#\# Props principales

\- items  
\- className  
\- distance  
\- panelHeight  
\- baseItemSize  
\- dockHeight  
\- magnification  
\- spring

\#\# Estructura de item

\- icon  
\- label  
\- onClick  
\- className

\#\# Accesibilidad actual

\- role="toolbar"  
\- aria-label="Application dock"  
\- role="button"  
\- tabIndex={0}  
\- role="tooltip"

\#\# Mejoras recomendadas

Añadir activación con teclado:

jsx onKeyDown={(e) \=\> {   if (e.key \=== 'Enter' || e.key \=== ' ') {     e.preventDefault();     onClick?.();   } }} 

Añadir:

jsx aria-label={item.label} 

Y soporte para reduced motion.

\#\# Uso recomendado

Ideal para:

\- Home  
\- Discover  
\- Map  
\- Saved  
\- Profile  
\- Settings  
\- WhatsApp  
\- Language

En móvil conviene convertirlo en bottom nav estándar.

\---

\# 18\. Stepper

Origen: React Bits    
Componente: \<Stepper /\> \+ \<Step /\>    
Variant: JavaScript \+ CSS    
Dependencias: motion

\#\# Uso principal

Wizard multi-step con botones, indicadores y contenido custom.

\#\# Features

\- Steps con \<Step\>.  
\- initialStep.  
\- onStepChange.  
\- onFinalStepCompleted.  
\- Back/Next custom.  
\- Complete button.  
\- Indicadores clicables.  
\- renderStepIndicator.  
\- Slide transitions.  
\- Connector animation.  
\- Check animation.  
\- Dynamic height.

\#\# Props principales

\- children  
\- initialStep  
\- onStepChange  
\- onFinalStepCompleted  
\- stepCircleContainerClassName  
\- stepContainerClassName  
\- contentClassName  
\- footerClassName  
\- backButtonProps  
\- nextButtonProps  
\- backButtonText  
\- nextButtonText  
\- disableStepIndicators  
\- renderStepIndicator

\#\# Mejoras recomendadas

\- Convertir indicadores en \<button\>.  
\- Añadir aria-current="step".  
\- Añadir aria-label.  
\- Añadir soporte reduced motion.  
\- Añadir focus styles.  
\- Añadir alt a imágenes internas.

\#\# Diferencia con Animated Stepper

| Componente | Mejor para |  
|---|---|  
| Animated Stepper | Design system accesible, variantes horizontal/vertical |  
| Stepper React Bits | Wizard visual rápido con botones y contenido custom |

\#\# Uso recomendado

Ideal para concierge flow:

1\. Who are you travelling with?  
2\. What kind of Mallorca do you want?  
3\. Choose your mood.  
4\. Pick areas or activities.  
5\. Leave WhatsApp/contact.  
6\. Receive recommendations.

\---

\# 19\. BlurText

Origen: React Bits    
Componente: \<BlurText /\>    
Variant: JavaScript \+ CSS    
Dependencias: motion

\#\# Uso principal

Texto con entrada blur-in por palabras o letras.

\#\# Features

\- Blur \+ opacity \+ vertical movement.  
\- Anima por palabras o letras.  
\- Entrada desde top o bottom.  
\- Delay configurable.  
\- Step duration configurable.  
\- IntersectionObserver.  
\- onAnimationComplete.  
\- Custom animationFrom.  
\- Custom animationTo.  
\- Custom easing.

\#\# Props principales

\- text  
\- animateBy  
\- direction  
\- delay  
\- stepDuration  
\- threshold  
\- rootMargin  
\- onAnimationComplete  
\- className  
\- animationFrom  
\- animationTo  
\- easing

\#\# Mejora de accesibilidad

Añadir al \<p\>:

jsx aria-label={text} 

Especialmente si se usa animateBy="letters".

\#\# Reduced Motion recomendado

Cuando reduced motion esté activo:

\- Mostrar texto completo instantáneamente.  
\- Sin blur.  
\- Sin desplazamiento.  
\- Sin stagger.

\#\# Uso recomendado

Ideal para:

\- Hero titles.  
\- Frases editoriales.  
\- Claims emocionales.  
\- Landing premium.  
\- Texto sobre imagen o vídeo.

\---

\# Resumen global de componentes

| \# | Componente | Origen | Tipo | Prioridad para Mallorca as Local |  
|---|---|---|---|---|  
| 1 | Glow Hover Cards | SmoothUI | Visual cards | Alta |  
| 2 | Image Metadata Preview | SmoothUI | Galería/info | Alta |  
| 3 | Interactive Image Selector | SmoothUI | Selección visual | Alta |  
| 4 | Infinite Slider | SmoothUI | Carrusel | Media-Alta |  
| 5 | Scroll Reveal Paragraph | SmoothUI | Texto editorial | Alta |  
| 6 | Reveal Text | SmoothUI | Texto animado | Alta |  
| 7 | Magnetic Button | SmoothUI | CTA | Alta |  
| 8 | Dialog | SmoothUI | Modal | Muy alta |  
| 9 | Checkbox | SmoothUI | Formulario | Muy alta |  
| 10 | Animated Toggle | SmoothUI | Preferencias | Alta |  
| 11 | Animated Stepper | SmoothUI | Flujo guiado | Muy alta |  
| 12 | Apple Invites | SmoothUI | Social/eventos | Media-Alta |  
| 13 | Expandable Cards | SmoothUI | Cards detalladas | Muy alta |  
| 14 | Exposure Slider | SmoothUI | Mood/color control | Alta |  
| 15 | GradualBlur | React Bits | Blur visual | Alta |  
| 16 | TiltedCard | React Bits | Card 3D | Media-Alta |  
| 17 | Dock | React Bits | Navegación | Media |  
| 18 | Stepper | React Bits | Wizard | Alta |  
| 19 | BlurText | React Bits | Texto blur-in | Alta |

\---

\# Arquitectura recomendada por uso

\#\# Hero / Landing premium

\- BlurText  
\- Reveal Text  
\- Magnetic Button  
\- GradualBlur  
\- Exposure Slider

\#\# Galerías y contenido visual

\- Image Metadata Preview  
\- Interactive Image Selector  
\- TiltedCard  
\- Infinite Slider  
\- GradualBlur

\#\# Cards de experiencias

\- Glow Hover Cards  
\- Expandable Cards  
\- TiltedCard  
\- Magnetic Button  
\- Dialog

\#\# Formularios y preferencias

\- Checkbox  
\- Animated Toggle  
\- Stepper  
\- Animated Stepper  
\- Dialog

\#\# Flujos de planificación

\- Animated Stepper  
\- Stepper  
\- Interactive Image Selector  
\- Exposure Slider  
\- Apple Invites  
\- Checkbox  
\- Animated Toggle

\#\# Navegación

\- Dock  
\- Magnetic Button  
\- Dialog

\---

\# Dependencias detectadas

\#\# Motion

Usada por:

\- TiltedCard  
\- Dock  
\- Stepper  
\- BlurText  
\- Muchos componentes SmoothUI vía Motion/Framer Motion

Instalación:

bash npm install motion 

\#\# mathjs

Indicada por GradualBlur, pero no se ve uso directo en el source pegado.

Instalación solo si se confirma necesaria:

bash npm install mathjs 

\---

\# Recomendaciones generales antes de producción

\#\# 1\. Reduced Motion

Los componentes SmoothUI ya vienen muy bien documentados con soporte reduced motion.

Los React Bits necesitan revisión:

\- GradualBlur  
\- TiltedCard  
\- Dock  
\- Stepper  
\- BlurText

\#\# 2\. Accesibilidad

Revisar especialmente:

\- Dock keyboard activation.  
\- Stepper indicators.  
\- Exposure Slider ARIA slider.  
\- BlurText con aria-label.  
\- TiltedCard en mobile/touch.  
\- GradualBlur con aria-hidden.

\#\# 3\. Mobile

Adaptar o simplificar:

\- Dock  
\- TiltedCard  
\- Exposure Slider  
\- Magnetic Button

\#\# 4\. Uso visual moderado

No usar todos los efectos en la misma sección.    
Combinar máximo 2–3 efectos visuales por bloque para mantener una experiencia premium, no saturada.

\---

\# Stack visual ideal para Mallorca as Local

\#\# Home

\- BlurText  
\- GradualBlur  
\- Magnetic Button  
\- Glow Hover Cards  
\- Infinite Slider

\#\# Discover / Experiences

\- Expandable Cards  
\- Image Metadata Preview  
\- Interactive Image Selector  
\- Dialog

\#\# Concierge Form

\- Stepper o Animated Stepper  
\- Checkbox  
\- Animated Toggle  
\- Exposure Slider  
\- Apple Invites

\#\# Visual Gallery

\- TiltedCard  
\- Image Metadata Preview  
\- GradualBlur  
\- Infinite Slider

\#\# App Navigation

\- Dock en desktop  
\- Bottom nav estándar en mobile

\---

\# Componentes más importantes para MVP

\#\# Top 10 MVP

1\. Dialog  
2\. Animated Stepper  
3\. Checkbox  
4\. Animated Toggle  
5\. Expandable Cards  
6\. Glow Hover Cards  
7\. Image Metadata Preview  
8\. Magnetic Button  
9\. GradualBlur  
10\. BlurText

\#\# Componentes opcionales para segunda fase

11\. Exposure Slider  
12\. Apple Invites  
13\. Interactive Image Selector  
14\. Infinite Slider  
15\. TiltedCard  
16\. Dock  
17\. Stepper React Bits  
18\. Reveal Text  
19\. Scroll Reveal Paragraph

\---

\# Concepto final de experiencia

La interfaz de Mallorca as Local debería sentirse como:

\> Una experiencia editorial, premium y local-first, donde el usuario no navega una web tradicional, sino que construye su Mallorca ideal mediante cards visuales, preferencias inteligentes, microinteracciones suaves y un flujo concierge guiado.

# Tab 2

\# **Component Canvas — Mallorca as Local UI System**

\#\# **Objetivo general**

Crear una librería de componentes visuales, animados y accesibles para construir una experiencia premium tipo Apple/editorial para **\*\*Mallorca as Local\*\***.

La colección combina componentes de:

\- Visual storytelling  
\- Cards premium  
\- Formularios y preferencias  
\- Flujos multi-step  
\- Galerías interactivas  
\- Navegación avanzada  
\- Efectos de movimiento, blur y color mood

\---

\# **1\. Glow Hover Cards**

**\*\*Ruta:\*\*** \`/docs/components/glow-hover-card\`

\#\# **Uso principal**

Cards con efecto glow que sigue el cursor.

\#\# **Features**

\- Cursor-following glow effect usando \`CSS mask-image\`.  
\- Temas de color por card usando HSL.  
\- Animaciones suaves.  
\- GPU acceleration.  
\- Respeta \`prefers-reduced-motion\`.

\#\# **Accesibilidad**

\- Overlay decorativo con \`aria-hidden="true"\`.  
\- \`pointer-events: none\`.  
\- No interfiere con lectores de pantalla.

\#\# **Props detectadas**

\- \`GlowHoverCardsProps\`  
\- \`GlowHoverCardItem\`  
\- \`GlowHoverCardTheme\`

\#\# **Uso recomendado**

Ideal para:

\- Categorías premium.  
\- Experiencias destacadas.  
\- Servicios principales.  
\- Cards tipo “Sea”, “Food”, “Nightlife”, “Hidden Gems”.

\---

\# **2\. Image Metadata Preview**

**\*\*Ruta:\*\*** \`/docs/components/image-metadata-preview\`

\#\# **Uso principal**

Imagen con panel de metadata en hover/open.

\#\# **Features**

\- Metadata panel on hover.  
\- Animaciones suaves.  
\- Campos y layout personalizables.  
\- Compatible con datos estáticos o dinámicos.

\#\# **Accesibilidad**

\- Botones con \`aria-label\`.  
\- Iconos decorativos con \`aria-hidden="true"\`.  
\- Metadata usando tabla semántica.  
\- Focus ring visible.  
\- Touch targets mínimos de \`44px\`.

\#\# **Props detectadas**

\- \`ImageMetadataPreviewProps\`

\#\# **Uso recomendado**

Ideal para:

\- Galerías de villas.  
\- Barcos.  
\- Restaurantes.  
\- Eventos.  
\- Imágenes editoriales con información técnica.

\---

\# **3\. Interactive Image Selector**

**\*\*Ruta:\*\*** \`/docs/components/interactive-image-selector\`

\#\# **Uso principal**

Galería responsive para seleccionar imágenes.

\#\# **Features**

\- Toggle selection con teclado y pointer.  
\- Anillo de selección animado.  
\- Escala animada.  
\- Captions y renderers custom.  
\- Grid responsive.

\#\# **Accesibilidad**

\- Reset button con \`aria-label\`.  
\- Select/Cancel button con \`aria-label\` dinámico.  
\- Cada imagen tiene \`alt\`.  
\- Selection count visible.

\#\# **Nota de mejora**

Los botones Share y Delete aparecen como icon-only sin labels accesibles.

Añadir:

\`\`\`tsx  
aria\-label\="Share selected images"  
aria\-label\="Delete selected images"  
\`\`\`

\#\# **Props detectadas**

\- \`InteractiveImageSelectorProps\`

\#\# **Uso recomendado**

Ideal para:

\- Selección de fotos.  
\- Selección de experiencias.  
\- Wishlist visual.  
\- Selección de barcos, villas o restaurantes.

\---

\# **4\. Infinite Slider**

**\*\*Ruta:\*\*** \`/docs/components/infinite-slider\`

\#\# **Uso principal**

Carrusel infinito para contenido repetitivo.

\#\# **Features**

\- Infinite scroll suave.  
\- Velocidad y gap configurables.  
\- Pause on hover.  
\- Dirección horizontal o vertical.  
\- Reverse direction.  
\- Loop sin saltos.

\#\# **Accesibilidad**

Respeta \`prefers-reduced-motion\`.

Cuando reduced motion está activo:

\- Se detiene la animación.  
\- El contenido se muestra estático.

\#\# **Props detectadas**

\- \`InfiniteSliderProps\`

\#\# **Uso recomendado**

Ideal para:

\- Logos de partners.  
\- Testimonios.  
\- Fotos de Mallorca.  
\- Experiencias destacadas.  
\- Playas, pueblos, restaurantes o barcos.

\---

\# **5\. Scroll Reveal Paragraph**

**\*\*Ruta:\*\*** \`/docs/components/scroll-reveal-paragraph\`

\#\# **Uso principal**

Párrafo animado al hacer scroll.

\#\# **Features**

\- Fade \+ translate reveal.  
\- Stagger por palabra/párrafo.  
\- Thresholds y offsets configurables.  
\- Framer Motion \+ Intersection Observer.  
\- Accesible y performante.

\#\# **Accesibilidad**

\- Renderiza como \`\<p\>\`.  
\- Cada palabra puede ir en \`span\`, pero el texto sigue siendo legible.

\#\# **Reduced Motion**

Cuando reduced motion está activo:

\- El texto aparece completo.  
\- Se elimina el reveal.  
\- Se oculta el ghost overlay.

\#\# **Props detectadas**

\- \`ScrollRevealParagraphProps\`

\#\# **Uso recomendado**

Ideal para:

\- Storytelling.  
\- Secciones editoriales.  
\- Manifiesto de marca.  
\- Textos tipo “Mallorca, but lived as a local”.

\---

\# **6\. Reveal Text**

**\*\*Ruta:\*\*** \`/docs/components/reveal-text\`

\#\# **Uso principal**

Texto con animación direccional.

\#\# **Features**

\- Entrada desde arriba, abajo, izquierda o derecha.  
\- Stagger por carácter o palabra.  
\- Delay y duración configurables.  
\- Framer Motion.  
\- Accesible y performante.

\#\# **Reduced Motion**

Cuando reduced motion está activo:

\- El texto aparece inmediatamente.  
\- Sin slide ni animación direccional.

\#\# **Props detectadas**

\- \`RevealTextProps\`

\#\# **Uso recomendado**

Ideal para:

\- Hero title.  
\- Subtítulos.  
\- Claims.  
\- Títulos de secciones.  
\- Frases cortas premium.

\---

\# **7\. Magnetic Button**

**\*\*Ruta:\*\*** \`/docs/components/magnetic-button\`

\#\# **Uso principal**

Botón/CTA con efecto magnético hacia el cursor.

\#\# **Features**

\- Cursor-following magnetic effect.  
\- Strength configurable.  
\- Radius configurable.  
\- Spring physics.  
\- Touch detection.  
\- Disabled state.  
\- Polymorphic con \`asChild\`.  
\- GPU transforms.

\#\# **Accesibilidad**

\- Wrapper con \`role="presentation"\`.

\#\# **Reduced Motion**

Se desactiva si:

\- El usuario prefiere reduced motion.  
\- El dispositivo es touch.  
\- El botón está disabled.

\#\# **Props detectadas**

\- \`MagneticButtonProps\`  
\- \`strength\`  
\- \`radius\`  
\- \`springConfig\`  
\- \`asChild\`  
\- \`disabled\`

\#\# **Uso recomendado**

Ideal para CTAs como:

\- “Plan my Mallorca experience”  
\- “Create my route”  
\- “Request local recommendations”  
\- “Start planning”

\---

\# **8\. Dialog**

**\*\*Ruta:\*\*** \`/docs/components/dialog\`

\#\# **Uso principal**

Modal accesible normal y variante crítica \`AlertDialog\`.

\#\# **Features**

\- \`open\` y \`onOpenChange\`.  
\- Title, description y footer slots.  
\- Close button configurable.  
\- Focus trap.  
\- Escape dismiss en Dialog normal.  
\- Backdrop dismiss en Dialog normal.  
\- AlertDialog requiere acción explícita.  
\- Spring animation con reduced motion.

\#\# **Accesibilidad**

\- \`role="dialog"\`  
\- \`role="alertdialog"\`  
\- \`aria-labelledby\`  
\- \`aria-describedby\`  
\- \`aria-modal="true"\`  
\- Focus trap.  
\- Focus return al cerrar.

\#\# **Props detectadas**

\- \`DialogProps\`  
\- \`AlertDialogProps\`

\#\# **Uso recomendado**

Ideal para:

\- Formularios rápidos.  
\- Detalles de experiencias.  
\- Confirmaciones.  
\- Previews.  
\- Booking request.  
\- Lead capture.

\---

\# **9\. Checkbox**

**\*\*Ruta:\*\*** \`/docs/components/checkbox\`

\#\# **Uso principal**

Checkbox accesible y animado.

\#\# **Features**

\- Animated checkmark.  
\- Indeterminate state.  
\- \`aria-checked="mixed"\`.  
\- Disabled state.  
\- Basado en Radix UI Checkbox.  
\- Compatible con labels vía \`id\`.

\#\# **Accesibilidad**

\- \`Space\` toggle.  
\- \`Tab\` focus.  
\- \`role="checkbox"\`.  
\- \`aria-checked\`.

\#\# **Props detectadas**

\- \`CheckboxProps\`

\#\# **Uso recomendado**

Ideal para:

\- Filtros.  
\- Preferencias.  
\- Multi-select.  
\- Confirmaciones.  
\- Servicios incluidos.

\---

\# **10\. Animated Toggle**

**\*\*Ruta:\*\*** \`/docs/components/animated-toggle\`

\#\# **Uso principal**

Switch animado para activar/desactivar opciones.

\#\# **Features**

\- Variantes: \`default\`, \`morph\`, \`icon\`.  
\- Tamaños: \`sm\`, \`md\`, \`lg\`.  
\- Controlled/uncontrolled.  
\- Spring animations.  
\- Custom icons.  
\- Disabled state.  
\- Reduced motion.

\#\# **Accesibilidad**

\- \`role="switch"\`  
\- \`aria-checked\`  
\- \`aria-label\`  
\- Toggle con \`Space\` y \`Enter\`.

\#\# **Props detectadas**

\- \`AnimatedToggleProps\`  
\- \`variant\`  
\- \`size\`  
\- \`label\`  
\- \`disabled\`

\#\# **Uso recomendado**

Ideal para:

\- Tourist mode / Local mode.  
\- Luxury only.  
\- Adults only.  
\- Map/List.  
\- Hidden gems only.  
\- Theme/language preferences.

\---

\# **11\. Animated Stepper**

**\*\*Ruta:\*\*** \`/docs/components/animated-stepper\`

\#\# **Uso principal**

Proceso guiado por pasos con progreso animado.

\#\# **Features**

\- Horizontal y vertical.  
\- Línea de progreso animada.  
\- Slide transitions.  
\- Controlled/uncontrolled.  
\- Click navigation.  
\- Keyboard navigation.  
\- ARIA correcto.  
\- Reduced motion.

\#\# **Accesibilidad**

\- \`role="group"\`  
\- \`aria-label="Progress steps"\`  
\- \`role="tab"\`  
\- \`aria-selected\`  
\- \`role="tabpanel"\`  
\- Arrow navigation.

\#\# **Props detectadas**

\- \`AnimatedStepperProps\`

\#\# **Uso recomendado**

Ideal para:

1\. Elegir tipo de experiencia.  
2\. Seleccionar fechas/personas.  
3\. Elegir preferencias.  
4\. Mostrar recomendaciones.  
5\. Enviar solicitud.

\---

\# **12\. Apple Invites**

**\*\*Ruta:\*\*** \`/docs/components/apple-invites\`

\#\# **Uso principal**

Gestión visual de invitados o participantes.

\#\# **Features**

\- Add/remove invitees.  
\- Drag & reorder friendly.  
\- Presence transitions.  
\- Keyboard support.  
\- Screen reader support.

\#\# **Accesibilidad**

\- Imágenes de evento con \`alt\`.  
\- Avatares con \`alt\` descriptivo.

\#\# **Props detectadas**

\- \`AppleInvitesProps\`

\#\# **Uso recomendado**

Ideal para:

\- Crear planes grupales.  
\- Añadir participantes a una experiencia.  
\- Eventos privados.  
\- Reservas grupales.  
\- Boat day, villa dinner, wine tasting.

\---

\# **13\. Expandable Cards**

**\*\*Ruta:\*\*** \`/docs/components/expandable-cards\`

\#\# **Uso principal**

Cards expandibles en grid o lista.

\#\# **Features**

\- Expand/collapse animado.  
\- Keyboard navigable.  
\- Grid/list layout.  
\- Easy theming.

\#\# **Accesibilidad**

\- \`role="button"\`  
\- \`aria-label\`  
\- \`aria-selected\`  
\- \`tabIndex={0}\`  
\- \`Enter\` y \`Space\` para expandir/colapsar.

\#\# **Props detectadas**

\- \`ExpandableCardsProps\`

\#\# **Uso recomendado**

Ideal para:

\- Categorías de experiencias.  
\- Zonas de Mallorca.  
\- Restaurantes.  
\- Villas.  
\- Barcos.  
\- FAQs visuales.  
\- Paquetes.

\---

\# **14\. Exposure Slider**

**\*\*Ruta:\*\*** \`/docs/components/exposure-slider\`

\#\# **Uso principal**

Slider físico/draggable para ajustar valor, mood o color ratio de página.

\#\# **Nota especial**

Este componente puede sincronizarse con el ratio/color de la página, de forma que al mover el slider cambie el color general de la página.

\#\# **Features**

\- Draggable ticker.  
\- Spring snap.  
\- Notches animadas.  
\- Circular SVG progress ring.  
\- Valores positivos/negativos.  
\- Edge fade gradient.  
\- Min/max/step.  
\- \`onChange\`.  
\- Reduced motion.

\#\# **Nota de accesibilidad**

Si se usa como slider real, añadir:

\- \`role="slider"\`  
\- \`aria-valuemin\`  
\- \`aria-valuemax\`  
\- \`aria-valuenow\`  
\- \`aria-label\`  
\- Soporte de teclado con arrows.

\#\# **Props detectadas**

\- \`ExposureSliderProps\`  
\- \`min\`  
\- \`max\`  
\- \`step\`  
\- \`onChange\`

\#\# **Uso recomendado**

Ideal para:

\- Mood selector.  
\- Local → Premium.  
\- Calm → Adventure.  
\- Relaxed → Active.  
\- Cambiar color global de página.  
\- Experiencia interactiva inmersiva.

\#\# **Mapping conceptual**

| Valor | Mood | Visual |  
|---:|---|---|  
| \-100 | Calm / slow travel | Arena, crema, azul suave |  
| 0 | Balanced local | Neutros cálidos |  
| 100 | Premium / nightlife | Dorado, negro, deep blue |

\---

\# **15\. GradualBlur**

**\*\*Origen:\*\*** React Bits   
**\*\*Componente:\*\*** \`\<GradualBlur /\>\`   
**\*\*Variant:\*\*** JavaScript \+ CSS   
**\*\*Dependencias indicadas:\*\*** \`mathjs\`

\#\# **Nota**

El código pegado no muestra uso directo de \`mathjs\`, así que conviene confirmar si realmente es necesaria.

\#\# **Uso principal**

Blur gradual en bordes de contenedor o página.

\#\# **Features**

\- Blur por capas.  
\- Posiciones: top, bottom, left, right.  
\- Target: parent o page.  
\- \`backdrop-filter\`.  
\- \`mask-image\`.  
\- \`divCount\`.  
\- \`strength\`.  
\- Curves: linear, bezier, ease-in, ease-out, ease-in-out.  
\- Presets.  
\- Hover intensity.  
\- Responsive experimental.

\#\# **Props principales**

\- \`position\`  
\- \`strength\`  
\- \`height\`  
\- \`width\`  
\- \`divCount\`  
\- \`exponential\`  
\- \`curve\`  
\- \`opacity\`  
\- \`animated\`  
\- \`duration\`  
\- \`easing\`  
\- \`hoverIntensity\`  
\- \`target\`  
\- \`preset\`  
\- \`responsive\`  
\- \`zIndex\`  
\- \`onAnimationComplete\`  
\- \`className\`  
\- \`style\`

\#\# **Mejora recomendada**

Añadir:

\`\`\`jsx  
aria\-hidden\="true"  
\`\`\`

Y adaptar a \`prefers-reduced-motion\`.

\#\# **Uso recomendado**

Ideal para:

\- Hero sections.  
\- Galerías premium.  
\- Infinite sliders.  
\- Headers glassmorphism.  
\- Bottom fade en contenido scrolleable.  
\- Secciones Apple-like.

\---

\# **16\. TiltedCard**

**\*\*Origen:\*\*** React Bits   
**\*\*Componente:\*\*** \`\<TiltedCard /\>\`   
**\*\*Variant:\*\*** JavaScript \+ CSS   
**\*\*Dependencias:\*\*** \`motion\`

\#\# **Uso principal**

Card visual con efecto 3D tilt, tooltip y overlay.

\#\# **Features**

\- Tilt 3D con cursor.  
\- Rotación X/Y.  
\- Scale on hover.  
\- Tooltip flotante.  
\- Overlay content.  
\- Imagen con \`altText\`.  
\- Mobile warning opcional.  
\- Spring physics.

\#\# **Props principales**

\- \`imageSrc\`  
\- \`altText\`  
\- \`captionText\`  
\- \`containerHeight\`  
\- \`containerWidth\`  
\- \`imageHeight\`  
\- \`imageWidth\`  
\- \`scaleOnHover\`  
\- \`rotateAmplitude\`  
\- \`showMobileWarning\`  
\- \`showTooltip\`  
\- \`displayOverlayContent\`  
\- \`overlayContent\`

\#\# **Mejoras recomendadas**

\- Añadir reduced motion.  
\- Desactivar tilt en touch devices.  
\- Evitar mobile warning en producción.  
\- Revisar tooltip para screen readers.

\#\# **Uso recomendado**

Ideal para:

\- Experiencias premium.  
\- Barcos.  
\- Villas.  
\- Restaurantes.  
\- Categorías visuales.  
\- Itinerarios personalizados.

\---

\# **17\. Dock**

**\*\*Origen:\*\*** React Bits   
**\*\*Componente:\*\*** \`\<Dock /\>\`   
**\*\*Variant:\*\*** JavaScript \+ CSS   
**\*\*Dependencias:\*\*** \`motion\`

\#\# **Uso principal**

Dock flotante estilo macOS para navegación o acciones rápidas.

\#\# **Features**

\- Magnificación por proximidad del cursor.  
\- Items con icon, label y \`onClick\`.  
\- Tooltip animado.  
\- Focus support.  
\- \`role="toolbar"\`.  
\- Spring animation.  
\- Tamaños configurables.

\#\# **Props principales**

\- \`items\`  
\- \`className\`  
\- \`distance\`  
\- \`panelHeight\`  
\- \`baseItemSize\`  
\- \`dockHeight\`  
\- \`magnification\`  
\- \`spring\`

\#\# **Estructura de item**

\- \`icon\`  
\- \`label\`  
\- \`onClick\`  
\- \`className\`

\#\# **Accesibilidad actual**

\- \`role="toolbar"\`  
\- \`aria-label="Application dock"\`  
\- \`role="button"\`  
\- \`tabIndex={0}\`  
\- \`role="tooltip"\`

\#\# **Mejoras recomendadas**

Añadir activación con teclado:

\`\`\`jsx  
onKeyDown\={(e) \=\> {  
 if (e.key \=== 'Enter' || e.key \=== ' ') {  
   e.**preventDefault**();  
   **onClick**?.();  
 }  
}}  
\`\`\`

Añadir:

\`\`\`jsx  
aria\-label\={item.label}  
\`\`\`

Y soporte para reduced motion.

\#\# **Uso recomendado**

Ideal para:

\- Home  
\- Discover  
\- Map  
\- Saved  
\- Profile  
\- Settings  
\- WhatsApp  
\- Language

En móvil conviene convertirlo en bottom nav estándar.

\---

\# **18\. Stepper**

**\*\*Origen:\*\*** React Bits   
**\*\*Componente:\*\*** \`\<Stepper /\>\` \+ \`\<Step /\>\`   
**\*\*Variant:\*\*** JavaScript \+ CSS   
**\*\*Dependencias:\*\*** \`motion\`

\#\# **Uso principal**

Wizard multi-step con botones, indicadores y contenido custom.

\#\# **Features**

\- Steps con \`\<Step\>\`.  
\- \`initialStep\`.  
\- \`onStepChange\`.  
\- \`onFinalStepCompleted\`.  
\- Back/Next custom.  
\- Complete button.  
\- Indicadores clicables.  
\- \`renderStepIndicator\`.  
\- Slide transitions.  
\- Connector animation.  
\- Check animation.  
\- Dynamic height.

\#\# **Props principales**

\- \`children\`  
\- \`initialStep\`  
\- \`onStepChange\`  
\- \`onFinalStepCompleted\`  
\- \`stepCircleContainerClassName\`  
\- \`stepContainerClassName\`  
\- \`contentClassName\`  
\- \`footerClassName\`  
\- \`backButtonProps\`  
\- \`nextButtonProps\`  
\- \`backButtonText\`  
\- \`nextButtonText\`  
\- \`disableStepIndicators\`  
\- \`renderStepIndicator\`

\#\# **Mejoras recomendadas**

\- Convertir indicadores en \`\<button\>\`.  
\- Añadir \`aria-current="step"\`.  
\- Añadir \`aria-label\`.  
\- Añadir soporte reduced motion.  
\- Añadir focus styles.  
\- Añadir \`alt\` a imágenes internas.

\#\# **Diferencia con Animated Stepper**

| Componente | Mejor para |  
|---|---|  
| Animated Stepper | Design system accesible, variantes horizontal/vertical |  
| Stepper React Bits | Wizard visual rápido con botones y contenido custom |

\#\# **Uso recomendado**

Ideal para concierge flow:

1\. Who are you travelling with?  
2\. What kind of Mallorca do you want?  
3\. Choose your mood.  
4\. Pick areas or activities.  
5\. Leave WhatsApp/contact.  
6\. Receive recommendations.

\---

\# **19\. BlurText**

**\*\*Origen:\*\*** React Bits   
**\*\*Componente:\*\*** \`\<BlurText /\>\`   
**\*\*Variant:\*\*** JavaScript \+ CSS   
**\*\*Dependencias:\*\*** \`motion\`

\#\# **Uso principal**

Texto con entrada blur-in por palabras o letras.

\#\# **Features**

\- Blur \+ opacity \+ vertical movement.  
\- Anima por palabras o letras.  
\- Entrada desde top o bottom.  
\- Delay configurable.  
\- Step duration configurable.  
\- IntersectionObserver.  
\- \`onAnimationComplete\`.  
\- Custom \`animationFrom\`.  
\- Custom \`animationTo\`.  
\- Custom easing.

\#\# **Props principales**

\- \`text\`  
\- \`animateBy\`  
\- \`direction\`  
\- \`delay\`  
\- \`stepDuration\`  
\- \`threshold\`  
\- \`rootMargin\`  
\- \`onAnimationComplete\`  
\- \`className\`  
\- \`animationFrom\`  
\- \`animationTo\`  
\- \`easing\`

\#\# **Mejora de accesibilidad**

Añadir al \`\<p\>\`:

\`\`\`jsx  
aria\-label\={text}  
\`\`\`

Especialmente si se usa \`animateBy="letters"\`.

\#\# **Reduced Motion recomendado**

Cuando reduced motion esté activo:

\- Mostrar texto completo instantáneamente.  
\- Sin blur.  
\- Sin desplazamiento.  
\- Sin stagger.

\#\# **Uso recomendado**

Ideal para:

\- Hero titles.  
\- Frases editoriales.  
\- Claims emocionales.  
\- Landing premium.  
\- Texto sobre imagen o vídeo.

\---

\# **Resumen global de componentes**

| \# | Componente | Origen | Tipo | Prioridad para Mallorca as Local |  
|---|---|---|---|---|  
| 1 | Glow Hover Cards | SmoothUI | Visual cards | Alta |  
| 2 | Image Metadata Preview | SmoothUI | Galería/info | Alta |  
| 3 | Interactive Image Selector | SmoothUI | Selección visual | Alta |  
| 4 | Infinite Slider | SmoothUI | Carrusel | Media-Alta |  
| 5 | Scroll Reveal Paragraph | SmoothUI | Texto editorial | Alta |  
| 6 | Reveal Text | SmoothUI | Texto animado | Alta |  
| 7 | Magnetic Button | SmoothUI | CTA | Alta |  
| 8 | Dialog | SmoothUI | Modal | Muy alta |  
| 9 | Checkbox | SmoothUI | Formulario | Muy alta |  
| 10 | Animated Toggle | SmoothUI | Preferencias | Alta |  
| 11 | Animated Stepper | SmoothUI | Flujo guiado | Muy alta |  
| 12 | Apple Invites | SmoothUI | Social/eventos | Media-Alta |  
| 13 | Expandable Cards | SmoothUI | Cards detalladas | Muy alta |  
| 14 | Exposure Slider | SmoothUI | Mood/color control | Alta |  
| 15 | GradualBlur | React Bits | Blur visual | Alta |  
| 16 | TiltedCard | React Bits | Card 3D | Media-Alta |  
| 17 | Dock | React Bits | Navegación | Media |  
| 18 | Stepper | React Bits | Wizard | Alta |  
| 19 | BlurText | React Bits | Texto blur-in | Alta |

\---

\# **Arquitectura recomendada por uso**

\#\# **Hero / Landing premium**

\- BlurText  
\- Reveal Text  
\- Magnetic Button  
\- GradualBlur  
\- Exposure Slider

\#\# **Galerías y contenido visual**

\- Image Metadata Preview  
\- Interactive Image Selector  
\- TiltedCard  
\- Infinite Slider  
\- GradualBlur

\#\# **Cards de experiencias**

\- Glow Hover Cards  
\- Expandable Cards  
\- TiltedCard  
\- Magnetic Button  
\- Dialog

\#\# **Formularios y preferencias**

\- Checkbox  
\- Animated Toggle  
\- Stepper  
\- Animated Stepper  
\- Dialog

\#\# **Flujos de planificación**

\- Animated Stepper  
\- Stepper  
\- Interactive Image Selector  
\- Exposure Slider  
\- Apple Invites  
\- Checkbox  
\- Animated Toggle

\#\# **Navegación**

\- Dock  
\- Magnetic Button  
\- Dialog

\---

\# **Dependencias detectadas**

\#\# **Motion**

Usada por:

\- TiltedCard  
\- Dock  
\- Stepper  
\- BlurText  
\- Muchos componentes SmoothUI vía Motion/Framer Motion

Instalación:

\`\`\`bash  
**npm** install motion  
\`\`\`

\#\# **mathjs**

Indicada por GradualBlur, pero no se ve uso directo en el source pegado.

Instalación solo si se confirma necesaria:

\`\`\`bash  
**npm** install mathjs  
\`\`\`

\---

\# **Recomendaciones generales antes de producción**

\#\# **1\. Reduced Motion**

Los componentes SmoothUI ya vienen muy bien documentados con soporte reduced motion.

Los React Bits necesitan revisión:

\- GradualBlur  
\- TiltedCard  
\- Dock  
\- Stepper  
\- BlurText

\#\# **2\. Accesibilidad**

Revisar especialmente:

\- Dock keyboard activation.  
\- Stepper indicators.  
\- Exposure Slider ARIA slider.  
\- BlurText con \`aria-label\`.  
\- TiltedCard en mobile/touch.  
\- GradualBlur con \`aria-hidden\`.

\#\# **3\. Mobile**

Adaptar o simplificar:

\- Dock  
\- TiltedCard  
\- Exposure Slider  
\- Magnetic Button

\#\# **4\. Uso visual moderado**

No usar todos los efectos en la misma sección.

Combinar máximo 2–3 efectos visuales por bloque para mantener una experiencia premium, no saturada.

\---

\# **Stack visual ideal para Mallorca as Local**

\#\# **Home**

\- BlurText  
\- GradualBlur  
\- Magnetic Button  
\- Glow Hover Cards  
\- Infinite Slider

\#\# **Discover / Experiences**

\- Expandable Cards  
\- Image Metadata Preview  
\- Interactive Image Selector  
\- Dialog

\#\# **Concierge Form**

\- Stepper o Animated Stepper  
\- Checkbox  
\- Animated Toggle  
\- Exposure Slider  
\- Apple Invites

\#\# **Visual Gallery**

\- TiltedCard  
\- Image Metadata Preview  
\- GradualBlur  
\- Infinite Slider

\#\# **App Navigation**

\- Dock en desktop  
\- Bottom nav estándar en mobile

\---

\# **Componentes más importantes para MVP**

\#\# **Top 10 MVP**

1\. Dialog  
2\. Animated Stepper  
3\. Checkbox  
4\. Animated Toggle  
5\. Expandable Cards  
6\. Glow Hover Cards  
7\. Image Metadata Preview  
8\. Magnetic Button  
9\. GradualBlur  
10\. BlurText

\#\# **Componentes opcionales para segunda fase**

11\. Exposure Slider  
12\. Apple Invites  
13\. Interactive Image Selector  
14\. Infinite Slider  
15\. TiltedCard  
16\. Dock  
17\. Stepper React Bits  
18\. Reveal Text  
19\. Scroll Reveal Paragraph

\---

\# **Concepto final de experiencia**

La interfaz de **\*\*Mallorca as Local\*\*** debería sentirse como:

\> Una experiencia editorial, premium y local-first, donde el usuario no navega una web tradicional, sino que construye su Mallorca ideal mediante cards visuales, preferencias inteligentes, microinteracciones suaves y un flujo concierge guiado.

