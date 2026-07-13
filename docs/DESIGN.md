# Unicornio Azul -- Diseno

> **Estado**: Direccion definida -- Arcoiris de Unicornio Azul
> **Concepto**: Abrazamos el nombre "Unicornio Azul" reconciliando lo corporativo con lo extraordinario mediante abstraccion geometrica. Las formas geometricas representan "ideas", la progresion de 5 tonos de azul representa el "arcoiris del unicornio", y la estrella 4 puntas marca visualmente lo "extraordinario". Serio pero diferente.

---

## PALETA -- Arcoiris de Azules

| Token | Hex | Rol |
|---|---|---|
| `--blue-navy` | `#163667` | Primario -- CTAs, headlines, logo |
| `--blue-midnight` | `#0F2548` | Hover states, fondos profundos |
| `--blue-aqua` | `#00698D` | Secundario -- acentos, hover CTA, slogan |
| `--blue-sky` | `#0088B3` | Terciario -- elementos decorativos, formas |
| `--blue-ice` | `#A8D8EA` | Decorativo -- nubes geometricas, micro-formas |

```
Navy      Midnight    Aqua       Sky        Ice
#163667   #0F2548     #00698D    #0088B3    #A8D8EA
(raiz)    (profundo)  (vivo)     (luminoso) (aire)
```

### Fondos

| Token | Hex | Rol |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Fondo principal -- hero |
| `--color-bg-alt` | `#FBF8F0` | Fondo alterno -- beige calido para secciones intercaladas |
| `--color-text` | `#1A1A1A` | Texto principal |
| `--color-text-muted` | `#6B7280` | Texto secundario |

---

## TIPOGRAFIA

### Desktop

| Rol | Fuente | Pesos | Tamaño |
|---|---|---|---|
| H1 | **Space Grotesk** | 700 (bold) | `clamp(2.8rem, 10vw, 5.5rem)` |
| H2 | **Space Grotesk** | 700 (bold) | `2.5rem` → `4xl` |
| Lead / destacado | **Space Grotesk** | 700 (bold) | `2xl` |
| Body | **Satoshi** | 400, 500 | `text-lg` |
| Card titles | **Space Grotesk** | 700 (bold) | `2xl` |
| Card body | **Satoshi** | 400 | `text-lg` |

### Mobile (≤767px)

> **Regla**: Todo lo que vaya a leerse debe ser grande y contrastado. Si parece pequeño, súbelo un escalón.

| Rol | Fuente | Peso | Tamaño | Color |
|---|---|---|---|---|
| H1 hero | Space Grotesk | 700 | `clamp(2.8rem, 10vw, 5.5rem)` | whitespace según fondo |
| H2 | Space Grotesk | 700 | `text-[2.5rem]` (**40px**) | `#1A1A1A` |
| Lead / destacado | Space Grotesk | 700 | `text-xl` (**20px**) | `#0F2548` |
| Body | Satoshi | 400 | `text-lg` (**18px**) | `#374151` |
| Card titles | Space Grotesk | 700 | `text-xl` (**20px**) | `#1A1A1A` |
| Card body | Satoshi | 400 | `text-lg` (**18px**) | `#374151` |
| Botón CTA | Satoshi | 600 | `17px` | `#0F2548` / `#ffffff` |
| Breadcrumb / meta | Satoshi | 400 | `text-xs` (**12px**) | `rgba(255,255,255,0.5)` |

> Space Grotesk (headings) + Satoshi (body). Space Grotesk aporta caracter geometrico y moderno. Satoshi equilibra con legibilidad, suavidad, tono accesible. Combinacion tech-forward pero humana.

---

## LOGO

| Version | Archivo | Uso |
|---|---|---|
| Navy | `logo-marino.png` | Principal -- header, hero |

---

## SISTEMA DE FORMAS GEOMETRICAS POR SERVICIO

Cada pilar de "Que hacemos" tiene una forma geometrica y un tono de azul asignados. Esto crea un lenguaje visual consistente que el cerebro reconoce sin esfuerzo.

### Mapeo definitivo

> **Orden cromatico**: mas oscuro → mas claro.
> Refuerza la narrativa: desde la base solida del negocio hasta el escalado luminoso internacional.

| Pilar | Forma | Color | Hex | Por que |
|---|---|---|---|---|
| **01 — Negocios** | Estrella 4 puntas ★ | midnight | `#0F2548` | Mas oscuro. Norte estrategico, la guia que orienta todo |
| **02 — Producto** | Cuadrado ■ | navy | `#163667` | Caja, tangible, solido |
| **03 — Marketing** | Circulo ● | aqua | `#00698D` | Target, alcance, audiencia |
| **04 — Escalado** | Triangulo ▲ (equilatero) | sky | `#0088B3` | Mas claro. Apunta arriba = crecimiento, expansion |

### Reglas tecnicas de la seccion "Que hacemos" (BRUTALISTA)

```
• Estilo: Brutalista -- titulos masivos, numeros gigantes, expansion en hover
• Figuras: 240×240 px (desktop), 120×120 px (mobile), viewBox 0 0 240 240
• Paths tocan los 4 bordes del viewBox (sin padding, sin opacidad)
• Color solido (fill puro, mismo hex que el rectangulo-bg)
• Barra de color cubre 85% → 88% del ancho en hover
• Figura centrada en el borde libre de la barra (clase brutal-fig)
• Numero gigante (01-04) como fondo semi-invisible (clase brutal-num)
• Texto SIEMPRE a la izquierda, dentro de la barra (clase brutal-text)
• Titulos: Space Grotesk 800, clamp(1.5rem, 3.5vw, 3.2rem)
• Items (bullet points) ocultos por defecto, se revelan en hover
• CTA "Explorar →" se desliza desde la izquierda en hover
• Hover: card crece 340px → 480px (desktop), 260px → 380px (mobile)
• Tipografia: Space Grotesk Bold (titulos) + Satoshi (cuerpo), texto #FFFFFF
```

### Vista general

```
Mas oscuro ──────────────────────────────────────────→ mas claro
#0F2548        #163667        #00698D        #0088B3
midnight       navy           aqua           sky
   ★              ■              ●              ▲
Negocios       Producto       Marketing      Escalado
(base)          (caja)         (target)       (crece)
```

---

## ESTRELLA 4 PUNTAS

Elemento visual clave. Aparece en:
- Dentro o junto a la palabra "extraordinarias" en el hero
- Fondo del hero: estrellas gigantes recortadas (solo visibles parcialmente en los bordes)
- Como micro-detalle en transiciones y separadores a lo largo del sitio

La estrella es el "unicornio" -- ese detalle extraordinario que diferencia.

---

## HERO

```
┌──────────────────────────────────────────────────────┐
│  Fondo: #FFFFFF + composicion geometrica abstracta   │
│                                                      │
│  ★  Estrella gigante navy recortada top-right       │
│  ★  Estrella gigante aqua recortada bottom-left     │
│  ╭─ Arco de azules curveado atravesando el fondo    │
│  ○ ○ ○  Nubes geometricas (circulos superpuestos)   │
│                                                      │
│                                                      │
│         Soluciones reales       ← Space Grotesk     │
│         para ideas              ← aqua #00698D      │
│         extraordinarias ★       ← navy + estrella   │
│                                                      │
│    Desarrollo de marcas propias, producto,           │
│    compras internacionales y canales digitales.      │
│                                                      │
│    [ Cuentanos tu proyecto ]  ( Quiero saber mas )   │
│                                                      │
│                                                      │
│    ┌────────────────────────────────────┐            │
│    │  Mockup / Ilustracion / Video      │            │
│    └────────────────────────────────────┘            │
│    ★ □ ○ △  sistema visual: estrella, cuadrado, circulo, triangulo  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Principios
- **Arcoiris de azules**: Progresion cromatica dentro de una sola familia -- profesional pero visualmente rico
- **Abstraccion geometrica**: Nubes son circulos, arcoiris es un path curvo, estrellas son formas geometricas recortadas. Nada literal, nada infantil
- **Tipografia como ancla**: Space Grotesk Bold 700 mantiene la seriedad. La geometria del fondo complementa, no compite
- **Estrella semantica**: Solo en "extraordinarias". Diseno con intencion, no decoracion
- **Formas por servicio**: Cada pilar tiene su propia forma y tono -- arquitectura visual, no adorno

---

## ESTRUCTURA DE PAGINAS

```
Home          → Hero + Que hacemos (figuras partidas extruidas) + Diferencial + Autoridad + CTA
Que hacemos   → 4 pilares (pagina dedicada)
Como trabajamos → 5 pasos (timeline)
Sobre nosotros → Luis Chicharro + medios
Contacto      → Formulario
```

---

## COMPONENTES

### CTAButton (`src/components/ui/CTAButton.astro`)

Componente Astro reutilizable para el CTA principal con efecto circle-expand en hover. Se usa tanto en el hero como en la navbar para garantizar consistencia.

| Prop | Tipo | Default | Descripcion |
|---|---|---|---|
| `size` | `"lg" \| "sm"` | `"lg"` | `lg` (hero, 52px) / `sm` (navbar, 48px) |
| `href` | `string` | `"#contacto"` | Destino del enlace |
| `label` | `string` | `"Cuentanos tu proyecto"` | Texto del boton |

**Efecto hover (circle-expand):**
- La flecha derecha sale volando (`right: -25%`)
- Una flecha nueva entra desde la izquierda (`left: 16px`)
- El texto se desplaza a la derecha (`translateX(14px)`)
- Un circulo aqua (`#00698D`) se expande desde `20px` a `400px` detras del texto

```astro
<!-- Hero -->
<CTAButton size="lg" />

<!-- Navbar -->
<CTAButton size="sm" />
```

---

## PROXIMOS PASOS

- [x] Componente CTAButton reutilizable
- [ ] Definir componentes reutilizables (cards con formas geometricas, timeline)
- [ ] Disenar secciones siguientes: Que hacemos, Como trabajamos, Sobre nosotros
- [ ] Preparar assets visuales (mockup, ilustracion o video para el hero)
- [ ] Implementar pagina de contacto
