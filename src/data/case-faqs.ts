export type FaqItem = { question: string; answer: string };

export const rollOrderFaqs = {
  es: [
    {
      question: '¿Cómo se convierte una patente en un producto fabricable?',
      answer:
        'Tener una patente no significa tener un producto preparado para fabricar. Hay que estudiar materiales, procesos industriales, moldes, costes, certificaciones y encontrar un fabricante capaz de producirlo de forma viable.',
    },
    {
      question: '¿Cómo encontrar un fabricante para un producto patentado?',
      answer:
        'Primero se definen las especificaciones técnicas y económicas del producto. Después se identifican y comparan fabricantes, capacidades productivas, costes de moldes, cantidades mínimas y requisitos de calidad.',
    },
    {
      question: '¿Cuánto cuesta industrializar un producto?',
      answer:
        'Depende principalmente de la complejidad, los moldes necesarios, materiales, certificaciones y volumen de fabricación. Antes de producir recomendamos calcular el coste completo puesto en destino y comprobar que existe margen comercial suficiente.',
    },
    {
      question: '¿Qué certificaciones necesita un producto para venderse en Europa?',
      answer:
        'Depende de la categoría. En proyectos electrónicos pueden ser necesarias, entre otras, certificaciones y cumplimiento CE, RoHS y normativa específica aplicable al producto.',
    },
    {
      question: '¿Se puede validar un producto utilizando datos de Amazon antes de fabricarlo?',
      answer:
        'Sí. El análisis de demanda, competidores, precios, variantes y ventas estimadas permite tomar decisiones sobre características, colores, formatos o mercados antes de comprometer una producción.',
    },
    {
      question: '¿Puede Unicornio Azul gestionar fabricación, importación y lanzamiento en Amazon?',
      answer:
        'Sí. El trabajo puede abarcar desde análisis de viabilidad y búsqueda de fabricantes hasta industrialización, importación, posicionamiento y activación del canal de venta.',
    },
  ] satisfies FaqItem[],
  en: [
    {
      question: 'How do you turn a patent into a manufacturable product?',
      answer:
        'Having a patent does not mean you have a product ready to manufacture. You need to study materials, industrial processes, tooling, costs, certifications, and find a manufacturer able to produce it viably.',
    },
    {
      question: 'How do you find a manufacturer for a patented product?',
      answer:
        'First you define the product’s technical and commercial specifications. Then you identify and compare manufacturers, production capacity, tooling costs, minimum quantities, and quality requirements.',
    },
    {
      question: 'How much does it cost to industrialize a product?',
      answer:
        'It depends mainly on complexity, required tooling, materials, certifications, and production volume. Before producing, we recommend calculating the full landed cost and checking that there is enough commercial margin.',
    },
    {
      question: 'What certifications does a product need to be sold in Europe?',
      answer:
        'It depends on the category. For electronic projects, CE compliance, RoHS and other product-specific regulations may be required, among others.',
    },
    {
      question: 'Can you validate a product with Amazon data before manufacturing?',
      answer:
        'Yes. Demand, competitor, pricing, variant and estimated-sales analysis helps decide features, colors, formats or markets before committing to production.',
    },
    {
      question: 'Can Unicornio Azul manage manufacturing, import and an Amazon launch?',
      answer:
        'Yes. The work can cover everything from feasibility analysis and manufacturer search through industrialization, import, positioning and activating the sales channel.',
    },
  ] satisfies FaqItem[],
} as const;

export const electricBikeFaqs = {
  es: [
    {
      question: '¿Cómo buscar un fabricante de bicicletas eléctricas en China?',
      answer:
        'No basta con localizar proveedores online. Es necesario definir especificaciones, comparar fabricantes, revisar componentes críticos, solicitar muestras y comprobar capacidad productiva y control de calidad.',
    },
    {
      question: '¿Es recomendable visitar las fábricas antes de realizar un pedido importante?',
      answer:
        'En productos complejos o inversiones relevantes, sí. Una visita permite comprobar instalaciones, procesos, proveedores de componentes y capacidad real de producción.',
    },
    {
      question: '¿Cómo se puede mejorar un producto que ya existe en el mercado?',
      answer:
        'Analizando primero sus fallos reales de uso. En este proyecto se estudiaron problemas como robos de componentes, resistencia de soportes y autonomía de batería antes de rediseñar la bicicleta.',
    },
    {
      question: '¿Qué hay que tener en cuenta al importar bicicletas eléctricas a Europa?',
      answer:
        'Además del coste de fabricación y transporte, deben analizarse clasificación arancelaria, derechos antidumping cuando correspondan, documentación, homologaciones y normativa europea aplicable.',
    },
    {
      question: '¿Puede cambiar la viabilidad de una importación por un cambio arancelario?',
      answer:
        'Sí. Un cambio de arancel puede transformar por completo el coste puesto en destino. Por eso la fiscalidad y clasificación aduanera deben formar parte del análisis económico del proyecto.',
    },
    {
      question: '¿Unicornio Azul acompaña al cliente en viajes de sourcing?',
      answer:
        'Cuando el proyecto lo requiere, el trabajo puede incluir preparación previa de proveedores, ferias, visitas a fábricas, reuniones y evaluación de muestras junto al cliente.',
    },
  ] satisfies FaqItem[],
  en: [
    {
      question: 'How do you find an electric bike manufacturer in China?',
      answer:
        'Finding suppliers online is not enough. You need to define specifications, compare manufacturers, review critical components, request samples, and verify production capacity and quality control.',
    },
    {
      question: 'Is it advisable to visit factories before placing a major order?',
      answer:
        'For complex products or significant investments, yes. A visit lets you check facilities, processes, component suppliers and real production capacity.',
    },
    {
      question: 'How can you improve a product that already exists on the market?',
      answer:
        'By first analyzing real usage failures. In this project we studied issues such as component theft, mount strength and battery range before redesigning the bike.',
    },
    {
      question: 'What should you consider when importing electric bikes into Europe?',
      answer:
        'Beyond manufacturing and shipping costs, you should analyze tariff classification, antidumping duties where applicable, documentation, homologation and applicable European regulations.',
    },
    {
      question: 'Can a tariff change alter the viability of an import?',
      answer:
        'Yes. A tariff change can completely transform landed cost. That is why customs taxation and classification must be part of the project’s economic analysis.',
    },
    {
      question: 'Does Unicornio Azul accompany clients on sourcing trips?',
      answer:
        'When the project requires it, the work can include supplier preparation, trade fairs, factory visits, meetings and sample evaluation together with the client.',
    },
  ] satisfies FaqItem[],
} as const;

export const utrillaFaqs = {
  es: [
    {
      question: '¿Cómo puede un fabricante tradicional ampliar su oferta sin fabricar todos los productos?',
      answer:
        'Una opción es mantener la fabricación propia como núcleo y desarrollar una red de proveedores complementarios para ofrecer una solución más amplia al mismo cliente.',
    },
    {
      question: '¿Cómo encontrar proveedores contract para hoteles en China?',
      answer:
        'Primero hay que definir las categorías necesarias y criterios técnicos. Después se pueden localizar fabricantes mediante investigación, ferias profesionales y visitas directas a fábrica.',
    },
    {
      question: '¿Qué ventajas tiene ofrecer una solución Contract integral?',
      answer:
        'Permite concentrar más partidas del proyecto en un único proveedor, simplificar la gestión del arquitecto o interiorista y aumentar el valor económico de cada proyecto.',
    },
    {
      question: '¿Es necesario viajar a China para trabajar con proveedores asiáticos?',
      answer:
        'No siempre, pero para desarrollar una red estable de suministro o productos complejos puede ser especialmente útil para verificar fabricantes, comparar soluciones y negociar directamente.',
    },
    {
      question: '¿Cómo puede una fábrica española captar proyectos Contract internacionales?',
      answer:
        'Necesita combinar capacidad industrial con una propuesta especializada, casos reales, presencia digital B2B, contenido técnico, SEO y prospección dirigida a arquitectos, interioristas y responsables de proyectos.',
    },
    {
      question: '¿Se pueden conseguir leads B2B sin invertir inicialmente en publicidad?',
      answer:
        'Sí, aunque no está garantizado. Una web correctamente estructurada, especializada en búsquedas concretas y acompañada de SEO y presencia profesional puede generar demanda orgánica. En el caso Utrilla comenzaron a llegar solicitudes de presupuesto durante el primer mes sin campañas de pago.',
    },
  ] satisfies FaqItem[],
  en: [
    {
      question: 'How can a traditional manufacturer expand its offering without making every product?',
      answer:
        'One option is to keep in-house manufacturing as the core and build a complementary supplier network to offer a broader solution to the same client.',
    },
    {
      question: 'How do you find hotel contract suppliers in China?',
      answer:
        'First define the required categories and technical criteria. Then manufacturers can be located through research, professional trade fairs and direct factory visits.',
    },
    {
      question: 'What are the advantages of offering a full Contract solution?',
      answer:
        'It concentrates more project line items with a single supplier, simplifies management for the architect or interior designer, and increases the economic value of each project.',
    },
    {
      question: 'Is it necessary to travel to China to work with Asian suppliers?',
      answer:
        'Not always, but to build a stable supply network or develop complex products it can be especially useful to verify manufacturers, compare solutions and negotiate directly.',
    },
    {
      question: 'How can a Spanish factory win international Contract projects?',
      answer:
        'It needs to combine industrial capacity with a specialized proposition, real case studies, B2B digital presence, technical content, SEO and prospecting aimed at architects, interior designers and project leads.',
    },
    {
      question: 'Can you generate B2B leads without initially investing in ads?',
      answer:
        'Yes, though it is not guaranteed. A well-structured website focused on specific searches, supported by SEO and a professional presence, can generate organic demand. In the Utrilla case, quote requests started arriving in the first month without paid campaigns.',
    },
  ] satisfies FaqItem[],
} as const;

export const otrasHistoriasFaqs = {
  es: [
    {
      question: '¿Qué tipo de proyectos aparecen en Otras historias?',
      answer:
        'Proyectos reales fuera de los tres casos principales: un SmartWatch para pádel, importación de vehículos desde mercados internacionales y una capa de música y marketing digital para empresas.',
    },
    {
      question: '¿Cómo se desarrolla un wearable o SmartWatch desde cero?',
      answer:
        'Se define el uso real del producto, la electrónica y el software necesarios, se localiza fabricante, se validan muestras y se industrializa con costes, certificaciones y canal de venta claros antes de producir en volumen.',
    },
    {
      question: '¿Se puede importar vehículos y maquinaria desde subastas internacionales?',
      answer:
        'Sí. Desde 1994 se ha trabajado con coches, motos, quads, embarcaciones y maquinaria, partiendo de subastas en EE. UU. y ampliando a Asia y Europa con una red de compra y logística.',
    },
    {
      question: '¿Unicornio Azul también trabaja música y marketing digital?',
      answer:
        'Sí, como capa complementaria al producto y al negocio: música para empresas, jingles, distribución en plataformas y activaciones digitales, sin sustituir el foco principal de marcas, producto y canales.',
    },
    {
      question: '¿Cuándo encaja mi proyecto aquí y no en Roll Order, la bici o Utrilla?',
      answer:
        'Cuando el reto es similar en método —producto, sourcing, importación o activación— pero el sector o el formato no coinciden con esos tres casos. Otras historias muestra el rango; los casos principales profundizan en un recorrido concreto.',
    },
    {
      question: '¿Puedo combinar producto físico con una capa digital o musical?',
      answer:
        'Sí. Varios proyectos unen hardware o importación con marketing, contenido o música para reforzar la marca y el lanzamiento. Se decide según el modelo de negocio, no como un pack fijo.',
    },
  ] satisfies FaqItem[],
  en: [
    {
      question: 'What kind of projects appear in Other stories?',
      answer:
        'Real projects beyond the three main cases: a padel SmartWatch, international vehicle imports, and a music / digital marketing layer for companies.',
    },
    {
      question: 'How do you develop a wearable or SmartWatch from scratch?',
      answer:
        'You define the real use case, the electronics and software required, find a manufacturer, validate samples, and industrialize with clear costs, certifications and sales channel before scaling production.',
    },
    {
      question: 'Can you import vehicles and machinery from international auctions?',
      answer:
        'Yes. Since 1994 the work has covered cars, motorcycles, quads, boats and machinery, starting with U.S. auctions and expanding to Asia and Europe through a buying and logistics network.',
    },
    {
      question: 'Does Unicornio Azul also work on music and digital marketing?',
      answer:
        'Yes, as a complementary layer to product and business: music for companies, jingles, platform distribution and digital activations — without replacing the core focus on brands, product and channels.',
    },
    {
      question: 'When does my project fit here instead of Roll Order, the bike or Utrilla?',
      answer:
        'When the method is similar — product, sourcing, import or activation — but the sector or format does not match those three cases. Other stories shows the range; the main cases go deep on one concrete journey.',
    },
    {
      question: 'Can physical product be combined with a digital or music layer?',
      answer:
        'Yes. Several projects pair hardware or import with marketing, content or music to strengthen the brand and launch. It is decided by the business model, not as a fixed package.',
    },
  ] satisfies FaqItem[],
} as const;
