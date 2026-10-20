import type { Lang } from '../i18n/ui';
import type { FaqItem } from './case-faqs';

export interface TemaSeccion {
  title: string;
  body: string;
}

export interface Tema {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  sections: TemaSeccion[];
  faqs: FaqItem[];
}

export interface TemaPar {
  key: string;
  es: Tema;
  en: Tema;
}

const parent = {
  es: { href: '/creacion-de-negocios/', label: 'Creación de negocios desde cero' },
  en: { href: '/en/business-creation/', label: 'Business creation from scratch' },
};

export const creacionTemas: TemaPar[] = [
  {
    key: 'route_montar_negocio',
    es: {
      slug: 'montar-un-negocio',
      title: 'Montar un negocio | Unicornio Azul',
      description: 'Montar un negocio con poco dinero, online o desde casa. Vemos si es rentable antes de invertir en stock, web o una sociedad.',
      h1: 'Montar un negocio',
      lede: 'Montar un negocio es decidir si la idea se puede vender. Con poco dinero, online o desde casa, el primer trabajo es el mismo: demanda, precio y margen.',
      sections: [
        {
          title: 'Con poco dinero',
          body: 'El dinero que importa es el que no vuelves a ver si la idea falla: un molde, un stock, una web cerrada. Antes de eso se puede comprobar si alguien lo busca y si el precio aguanta el coste. Si no aguanta, se para. Ese es el modo de montar un negocio con poco dinero.',
        },
        {
          title: 'Online',
          body: 'Un negocio online sigue necesitando a quién le vendes, a qué precio y por qué canal. La tienda no sustituye al modelo. Si el margen no cubre la pasarela, el envío y el anuncio, estar online no lo hace rentable.',
        },
        {
          title: 'Desde casa',
          body: 'Montar un negocio en casa vale para un servicio o para una prueba corta. Si hay un producto que hay que fabricar, el límite aparece en cuanto hay que pagar fábrica, flete o stock. La casa no cambia esa cuenta.',
        },
        {
          title: 'Rentable',
          body: 'Rentable quiere decir que el precio cubre el coste y deja margen después del canal. No es una sensación. Si no se puede escribir esa cuenta, todavía no hay un negocio: hay una idea.',
        },
      ],
      faqs: [
        {
          question: '¿Se puede montar un negocio con poco dinero?',
          answer: 'Sí, si el primer gasto es comprobar la demanda y el margen, no fabricar. El stock y el molde llegan cuando la cuenta aguanta.',
        },
        {
          question: '¿Un negocio online es más fácil?',
          answer: 'No por ser online. El canal cambia el coste, no elimina la pregunta de a quién vendes y a qué precio.',
        },
        {
          question: '¿Cuándo es rentable?',
          answer: 'Cuando el precio cubre el coste puesto en destino y el canal, y aún queda margen. Si esa cifra no existe, no es rentable todavía.',
        },
      ],
    },
    en: {
      slug: 'start-a-business',
      title: 'Start a business | Unicornio Azul',
      description: 'Start a business with little money, online or from home. We check whether it is profitable before stock, a website or a company.',
      h1: 'Start a business',
      lede: 'Starting a business is deciding whether the idea can be sold. With little money, online or from home, the first job is the same: demand, price and margin.',
      sections: [
        {
          title: 'With little money',
          body: 'The money that matters is the money you do not get back if the idea fails: a mould, stock, a finished website. Before that, you can check whether anyone is looking for it and whether the price can carry the cost. If it cannot, you stop.',
        },
        {
          title: 'Online',
          body: 'An online business still needs someone to sell to, a price and a channel. The shop does not replace the model. If the margin does not cover the payment fee, the shipping and the ad, being online does not make it profitable.',
        },
        {
          title: 'From home',
          body: 'Starting from home works for a service or a short test. If a product has to be manufactured, the limit shows up as soon as the factory, the freight or the stock has to be paid. The house does not change that sum.',
        },
        {
          title: 'Profitable',
          body: 'Profitable means the price covers the cost and still leaves margin after the channel. It is not a feeling. If that sum cannot be written down, there is no business yet. There is an idea.',
        },
      ],
      faqs: [
        {
          question: 'Can you start a business with little money?',
          answer: 'Yes, if the first spend is checking demand and margin, not manufacturing. Stock and the mould come when the numbers hold.',
        },
        {
          question: 'Is an online business easier?',
          answer: 'Not because it is online. The channel changes the cost. It does not remove the question of who you sell to and at what price.',
        },
        {
          question: 'When is it profitable?',
          answer: 'When the price covers the landed cost and the channel, and margin remains. If that figure does not exist, it is not profitable yet.',
        },
      ],
    },
  },
  {
    key: 'route_crear_espana',
    es: {
      slug: 'en-espana',
      title: 'Crear una empresa en España | Unicornio Azul',
      description: 'Crear una empresa en España desde Madrid: la idea, el modelo y la marca antes del trámite de la sociedad. No es una gestoría.',
      h1: 'Crear una empresa en España',
      lede: 'Trabajamos desde Madrid con quien quiere crear una empresa en España. El trabajo es el negocio: a quién vendes, a qué precio y por qué canal. La escritura puede esperar.',
      sections: [
        {
          title: 'El negocio, no el trámite',
          body: 'Crear una empresa en España, en el registro, es constituir una sociedad. Crear el negocio es dejar escrito el modelo. Una sociedad sin eso es una carpeta. No hacemos de gestoría ni de notaría.',
        },
        {
          title: 'Desde Madrid',
          body: 'Unicornio Azul está en Madrid. El proyecto puede estar en otra ciudad de España: la cuenta de demanda, coste y canal no cambia por el código postal. Si hace falta estar en un mercado concreto, se dice al empezar.',
        },
        {
          title: 'Cuándo constituir',
          body: 'Constituir tiene sentido cuando ya hay algo que facturar o un motivo legal claro. Hacerlo antes, para “ir en serio”, adelanta gastos y no valida la idea.',
        },
      ],
      faqs: [
        {
          question: '¿Creáis la sociedad?',
          answer: 'No. Ayudamos a crear el negocio: validar la idea, el modelo, la marca y el canal. El trámite de la sociedad lo hace quien corresponda, cuando toca.',
        },
        {
          question: '¿Solo trabajáis en Madrid?',
          answer: 'Estamos en Madrid. El servicio es para proyectos en España. La sede no obliga a que el cliente esté en la misma ciudad.',
        },
        {
          question: '¿Sirve si todavía no soy autónomo?',
          answer: 'Sí. Se puede dejar cerrado el modelo antes de darte de alta. Darse de alta no demuestra que alguien vaya a comprar.',
        },
      ],
    },
    en: {
      slug: 'in-spain',
      title: 'Create a company in Spain | Unicornio Azul',
      description: 'Create a company in Spain from Madrid: the idea, the model and the brand before the paperwork. This is not a law firm.',
      h1: 'Create a company in Spain',
      lede: 'We work from Madrid with people who want to create a company in Spain. The work is the business: who you sell to, at what price and through which channel. The deed can wait.',
      sections: [
        {
          title: 'The business, not the filing',
          body: 'Creating a company in Spain, at the registry, means incorporating. Creating the business means writing the model down. A company without that is a folder. We are not a law firm or a notary.',
        },
        {
          title: 'From Madrid',
          body: 'Unicornio Azul is in Madrid. The project can be in another city in Spain: the sum of demand, cost and channel does not change with the postcode. If a specific market has to be visited, that is said at the start.',
        },
        {
          title: 'When to incorporate',
          body: 'Incorporating makes sense when there is something to invoice or a clear legal reason. Doing it early, to “look serious”, brings costs forward and does not validate the idea.',
        },
      ],
      faqs: [
        {
          question: 'Do you incorporate the company?',
          answer: 'No. We help create the business: validate the idea, the model, the brand and the channel. The filing is done by whoever should do it, when it is time.',
        },
        {
          question: 'Do you only work in Madrid?',
          answer: 'We are based in Madrid. The service is for projects in Spain. The office does not require the client to be in the same city.',
        },
        {
          question: 'Does this work if I am not registered as self-employed yet?',
          answer: 'Yes. The model can be closed before you register. Registering does not prove that anyone will buy.',
        },
      ],
    },
  },
  {
    key: 'route_marca_propia',
    es: {
      slug: 'marca-propia',
      title: 'Crear una marca propia | Unicornio Azul',
      description: 'Crear una marca propia de ropa, cosmética, suplementos o café: primero el negocio, el nombre que se puede registrar y el margen. No es un logo suelto.',
      h1: 'Crear una marca propia',
      lede: 'Crear una marca propia es parte de crear el negocio. Ropa, cosmética, suplementos o café cambian el producto. No cambian la pregunta: quién lo compra, a qué precio y con qué margen.',
      sections: [
        {
          title: 'Antes del logo',
          body: 'Una marca propia sin demanda es un nombre. El orden es oportunidad, validación, modelo y después el nombre que se puede registrar y cómo se ve en el pack o en la ficha.',
        },
        {
          title: 'Ropa, cosmética, suplementos, café',
          body: 'Son las categorías que más se buscan al decir “crear marca propia”. El trabajo no se parte en cuatro servicios. En todas hay que saber el coste puesto en destino, el canal y si el nombre está libre.',
        },
        {
          title: 'Lo que no es',
          body: 'No es la marca blanca del súper, ni un manual de diseño. Si el encargo es solo un logotipo, no es este servicio.',
        },
      ],
      faqs: [
        {
          question: '¿Creáis la marca de ropa, cosmética o suplementos?',
          answer: 'Creamos el negocio de esa marca: mercado, validación, precio y nombre. El diseño suelto, sin eso, no entra.',
        },
        {
          question: '¿Hace falta registrar el nombre ya?',
          answer: 'Hay que comprobar que se puede registrar antes de enamoraros del nombre. El registro formal llega cuando el nombre aguanta.',
        },
        {
          question: '¿Es lo mismo que marca blanca?',
          answer: 'No. Marca blanca, en el súper, es el producto del distribuidor. Marca propia aquí es tu producto, con tu promesa y tu margen.',
        },
      ],
    },
    en: {
      slug: 'own-brand',
      title: 'Create your own brand | Unicornio Azul',
      description: 'Create your own brand in clothing, cosmetics, supplements or coffee: the business, a name you can register and the margin. Not a logo on its own.',
      h1: 'Create your own brand',
      lede: 'Creating your own brand is part of creating the business. Clothing, cosmetics, supplements or coffee change the product. They do not change the question: who buys it, at what price and with what margin.',
      sections: [
        {
          title: 'Before the logo',
          body: 'An own brand without demand is a name. The order is opportunity, validation, model, and then a name you can register and how it looks on the pack or the listing.',
        },
        {
          title: 'Clothing, cosmetics, supplements, coffee',
          body: 'These are the categories people search when they say “create your own brand”. The work is not split into four services. In all of them you need the landed cost, the channel and whether the name is free.',
        },
        {
          title: 'What this is not',
          body: 'It is not a supermarket private label, and it is not a design manual. If the brief is only a logo, it is not this service.',
        },
      ],
      faqs: [
        {
          question: 'Do you create clothing, cosmetics or supplement brands?',
          answer: 'We create the business of that brand: market, validation, price and name. A logo on its own, without that, is out.',
        },
        {
          question: 'Does the name have to be filed now?',
          answer: 'You need to check that it can be registered before falling for the name. The formal filing comes when the name holds.',
        },
        {
          question: 'Is this the same as a store brand?',
          answer: 'No. A store brand belongs to the retailer. An own brand here is your product, with your promise and your margin.',
        },
      ],
    },
  },
  {
    key: 'route_validar_idea',
    es: {
      slug: 'validar-una-idea',
      title: 'Validar una idea de negocio | Unicornio Azul',
      description: 'Validar una idea de negocio con búsquedas, conversaciones o una preventa, antes de invertir. El gusto de la sala no cuenta como prueba.',
      h1: 'Validar una idea de negocio',
      lede: 'Validar una idea de negocio es conseguir una prueba de que alguien la quiere, y de que el precio aguanta. Sin eso, montar la empresa es adelantar el gasto.',
      sections: [
        {
          title: 'Qué cuenta como prueba',
          body: 'Búsquedas, conversaciones con quien compraría, una preventa o datos del canal. Un amigo que dice que le gusta no es una prueba. Tampoco lo es un logo.',
        },
        {
          title: 'Qué hacemos',
          body: 'Dejamos la prueba y la cuenta en el mismo sitio: a quién le quitas la venta, a qué precio y qué coste tiene llegar ahí. Si no cierra, el resultado es parar o cambiar el alcance.',
        },
        {
          title: 'Qué no prometemos',
          body: 'No hay una herramienta mágica ni un porcentaje que garantice que la idea funciona. La validación reduce el gasto tonto. No convierte una idea floja en un negocio.',
        },
      ],
      faqs: [
        {
          question: '¿Cómo se valida una idea de negocio?',
          answer: 'Con una prueba de demanda y una cuenta de margen. Si falta una de las dos, la idea no está validada.',
        },
        {
          question: '¿Hace falta un producto terminado?',
          answer: 'No. Se puede validar con una oferta, una conversación o una preventa. Fabricar antes es la forma cara de enterarte.',
        },
        {
          question: '¿Esto sustituye al plan de negocio?',
          answer: 'No. Validar dice si se sigue. El plan ordena precio, coste y canal cuando se sigue. Son dos pasos, en ese orden.',
        },
      ],
    },
    en: {
      slug: 'validate-an-idea',
      title: 'Validate a business idea | Unicornio Azul',
      description: 'Validate a business idea with searches, conversations or a presale, before you invest. What the room likes is not evidence.',
      h1: 'Validate a business idea',
      lede: 'Validating a business idea means getting evidence that someone wants it, and that the price holds. Without that, setting up the company only brings the spend forward.',
      sections: [
        {
          title: 'What counts as evidence',
          body: 'Searches, conversations with the person who would buy, a presale or channel data. A friend who says they like it is not evidence. Neither is a logo.',
        },
        {
          title: 'What we do',
          body: 'We put the evidence and the sum in the same place: whose sale you are taking, at what price, and what it costs to get there. If it does not close, the result is to stop or narrow the scope.',
        },
        {
          title: 'What we do not promise',
          body: 'There is no magic tool and no percentage that guarantees the idea works. Validation cuts the useless spend. It does not turn a weak idea into a business.',
        },
      ],
      faqs: [
        {
          question: 'How do you validate a business idea?',
          answer: 'With evidence of demand and a margin sum. If one of the two is missing, the idea is not validated.',
        },
        {
          question: 'Do you need a finished product?',
          answer: 'No. It can be validated with an offer, a conversation or a presale. Manufacturing first is the expensive way to find out.',
        },
        {
          question: 'Does this replace the business plan?',
          answer: 'No. Validation says whether to continue. The plan sets price, cost and channel if you do. They are two steps, in that order.',
        },
      ],
    },
  },
  {
    key: 'route_ciudad_madrid',
    es: {
      slug: 'madrid',
      title: 'Crear una empresa en Madrid | Unicornio Azul',
      description: 'Crear una empresa en Madrid o montar un negocio en Madrid: validamos la idea, el modelo y la marca. Estamos en Madrid. No somos una gestoría.',
      h1: 'Crear una empresa en Madrid',
      lede: 'Unicornio Azul está en Madrid. Crear una empresa en Madrid, para nosotros, es dejar el negocio escrito antes del trámite: a quién vendes, a qué precio y por qué canal.',
      sections: [
        {
          title: 'Montar un negocio en Madrid',
          body: 'Quien busca montar un negocio en Madrid suele querer dos cosas distintas: el alta o la sociedad, y saber si la idea se sostiene. Lo segundo es este servicio. Lo primero lo hace una gestoría o un notario, cuando ya hay algo que facturar.',
        },
        {
          title: 'Cuánto cuesta',
          body: 'No hay una tarifa única de “crear una empresa en Madrid”. El notario, el registro y el alta tienen sus precios, y no son los nuestros. Nuestro trabajo depende de si es un servicio, una marca o un producto. El primer paso es acotar el alcance.',
        },
        {
          title: 'Ayudas',
          body: '“Ayudas para crear una empresa en Madrid” o para montar un negocio cambia cada convocatoria. Hay que mirarlas en la Comunidad y en el Ayuntamiento, con la fecha delante. Nosotros no tramitamos subvenciones. Si existe una ayuda, no sustituye a validar la idea.',
        },
      ],
      faqs: [
        {
          question: '¿Tenéis oficina en Madrid?',
          answer: 'Sí. El domicilio de Unicornio Azul está en Madrid. El proyecto puede verse aquí o a distancia.',
        },
        {
          question: '¿Cuánto cuesta crear una empresa en Madrid?',
          answer: 'El trámite legal tiene sus tasas y no lo hacemos nosotros. El servicio de creación del negocio no tiene una tarifa cerrada: se acota después de saber qué quieres vender.',
        },
        {
          question: '¿Conseguís las ayudas?',
          answer: 'No. Las ayudas públicas se consultan en la convocatoria vigente. Nuestro trabajo es el modelo, no el expediente.',
        },
      ],
    },
    en: {
      slug: 'madrid',
      title: 'Create a company in Madrid | Unicornio Azul',
      description: 'Create a company in Madrid or start a business in Madrid: we validate the idea, the model and the brand. We are based in Madrid. We are not a law firm.',
      h1: 'Create a company in Madrid',
      lede: 'Unicornio Azul is in Madrid. Creating a company in Madrid, for us, means writing the business down before the filing: who you sell to, at what price and through which channel.',
      sections: [
        {
          title: 'Starting a business in Madrid',
          body: 'Someone searching for this usually wants two different things: the registration, and to know whether the idea holds. The second is this service. The first is a lawyer or a notary, once there is something to invoice.',
        },
        {
          title: 'What it costs',
          body: 'There is no single fee for “creating a company in Madrid”. The notary, the registry and the tax registration have their own prices, and they are not ours. Our work depends on whether this is a service, a brand or a product. The first step is to scope it.',
        },
        {
          title: 'Grants',
          body: 'Public grants for starting a business in Madrid change with each call. They have to be read on the regional and city sites, with the date in front of you. We do not file grant applications. A grant does not replace validating the idea.',
        },
      ],
      faqs: [
        {
          question: 'Do you have an office in Madrid?',
          answer: 'Yes. Unicornio Azul is based in Madrid. The project can be reviewed here or remotely.',
        },
        {
          question: 'How much does it cost to create a company in Madrid?',
          answer: 'The legal filing has its own fees and we do not do it. The business-creation work has no closed fee: it is scoped after we know what you want to sell.',
        },
        {
          question: 'Do you obtain the grants?',
          answer: 'No. Public grants are checked in the current call. Our work is the model, not the application.',
        },
      ],
    },
  },
  {
    key: 'route_ciudad_barcelona',
    es: {
      slug: 'barcelona',
      title: 'Crear una empresa en Barcelona | Unicornio Azul',
      description: 'Crear una empresa en Barcelona: el negocio, la idea y el margen, trabajado desde Madrid. Barcelona Activa es el programa del Ayuntamiento, no este servicio.',
      h1: 'Crear una empresa en Barcelona',
      lede: 'No tenemos oficina en Barcelona. Trabajamos desde Madrid con quien quiere crear una empresa en Barcelona y todavía no ha cerrado a quién vende y a qué precio.',
      sections: [
        {
          title: 'El trámite local no es el negocio',
          body: 'En Barcelona la búsqueda mezcla el alta, la sociedad y los programas municipales. Barcelona Activa es el servicio del Ayuntamiento para emprender. No somos Barcelona Activa ni una gestoría de la ciudad. Si el expediente local hace falta, se mira allí.',
        },
        {
          title: 'Qué hacemos desde Madrid',
          body: 'La demanda, el coste y el canal de un proyecto en Barcelona se pueden cerrar a distancia. Hemos trabajado piezas que pasaron por Barcelona, como una feria, sin que eso sea una sede. El entregable sigue siendo una decisión: seguir, ajustar o parar.',
        },
      ],
      faqs: [
        {
          question: '¿Sois Barcelona Activa?',
          answer: 'No. Barcelona Activa es del Ayuntamiento. Nosotros creamos el negocio: idea, modelo, marca y canal.',
        },
        {
          question: '¿Hay que estar en Barcelona para trabajar con vosotros?',
          answer: 'No. La base está en Madrid. El proyecto puede ser de Barcelona.',
        },
        {
          question: '¿Constituís la sociedad en Barcelona?',
          answer: 'No. Eso es un trámite local. Lo nuestro es saber si el negocio aguanta antes de ese gasto.',
        },
      ],
    },
    en: {
      slug: 'barcelona',
      title: 'Create a company in Barcelona | Unicornio Azul',
      description: 'Create a company in Barcelona: the business, the idea and the margin, done from Madrid. Barcelona Activa is the city programme, not this service.',
      h1: 'Create a company in Barcelona',
      lede: 'We do not have an office in Barcelona. We work from Madrid with people who want to create a company in Barcelona and have not yet closed who they sell to and at what price.',
      sections: [
        {
          title: 'The local filing is not the business',
          body: 'In Barcelona the search mixes registration, the company and municipal programmes. Barcelona Activa is the city council service for starting up. We are not Barcelona Activa and we are not a local law firm. If the local file is needed, it is handled there.',
        },
        {
          title: 'What we do from Madrid',
          body: 'Demand, cost and channel for a Barcelona project can be closed at a distance. We have worked on pieces that passed through Barcelona, such as a fair, without that being an office. The deliverable is still a decision: continue, adjust or stop.',
        },
      ],
      faqs: [
        {
          question: 'Are you Barcelona Activa?',
          answer: 'No. Barcelona Activa belongs to the city council. We create the business: idea, model, brand and channel.',
        },
        {
          question: 'Do you have to be in Barcelona to work with you?',
          answer: 'No. The base is in Madrid. The project can be in Barcelona.',
        },
        {
          question: 'Do you incorporate the company in Barcelona?',
          answer: 'No. That is a local filing. Ours is knowing whether the business holds before that spend.',
        },
      ],
    },
  },
  {
    key: 'route_ciudad_valencia',
    es: {
      slug: 'valencia',
      title: 'Crear una empresa en Valencia | Unicornio Azul',
      description: 'Crear una empresa en Valencia desde Madrid: validar la idea y el modelo antes del trámite. No tenemos oficina en Valencia ni hacemos de gestoría.',
      h1: 'Crear una empresa en Valencia',
      lede: 'Crear una empresa en Valencia, en este servicio, es el mismo trabajo que en el resto de España: demanda, precio, marca y canal. La base está en Madrid. No hay oficina en Valencia.',
      sections: [
        {
          title: 'Qué busca quien escribe esta frase',
          body: 'Casi siempre busca cómo constituir o darse de alta en Valencia. Eso tiene normativa y ventanilla, y no lo llevamos nosotros. Si además falta saber si alguien va a comprar, eso sí entra aquí.',
        },
        {
          title: 'Cómo se trabaja a distancia',
          body: 'La conversación, los números y la decisión de seguir o parar no exigen estar en Valencia. Si el proyecto necesita una visita, se dice al empezar. No se promete una sede que no existe.',
        },
      ],
      faqs: [
        {
          question: '¿Tenéis oficina en Valencia?',
          answer: 'No. Estamos en Madrid y el trabajo con un proyecto de Valencia se hace a distancia.',
        },
        {
          question: '¿Es distinto crear la empresa en Valencia que en Madrid?',
          answer: 'El trámite local puede cambiar de ventanilla. El negocio, no: sigue siendo a quién vendes, a qué precio y por qué canal.',
        },
        {
          question: '¿Montáis la sociedad?',
          answer: 'No. Ayudamos a decidir si el negocio se construye. La sociedad, cuando toca, la constituye quien corresponda en Valencia.',
        },
      ],
    },
    en: {
      slug: 'valencia',
      title: 'Create a company in Valencia | Unicornio Azul',
      description: 'Create a company in Valencia from Madrid: validate the idea and the model before the filing. We have no Valencia office and we are not a law firm.',
      h1: 'Create a company in Valencia',
      lede: 'Creating a company in Valencia, in this service, is the same work as in the rest of Spain: demand, price, brand and channel. The base is in Madrid. There is no office in Valencia.',
      sections: [
        {
          title: 'What this search is usually for',
          body: 'It is almost always about how to incorporate or register in Valencia. That has its own rules and counter, and we do not run it. If what is also missing is whether anyone will buy, that does belong here.',
        },
        {
          title: 'Working at a distance',
          body: 'The conversation, the numbers and the decision to continue or stop do not require being in Valencia. If the project needs a visit, that is said at the start. We do not promise an office that does not exist.',
        },
      ],
      faqs: [
        {
          question: 'Do you have an office in Valencia?',
          answer: 'No. We are in Madrid, and work on a Valencia project is done at a distance.',
        },
        {
          question: 'Is creating the company in Valencia different from Madrid?',
          answer: 'The local filing may use a different counter. The business does not: it is still who you sell to, at what price and through which channel.',
        },
        {
          question: 'Do you set up the company?',
          answer: 'No. We help decide whether the business gets built. The company, when it is time, is incorporated by whoever should do it in Valencia.',
        },
      ],
    },
  },
];

export function temasDe(lang: Lang): Tema[] {
  return creacionTemas.map((par) => par[lang]);
}

export function hrefTema(lang: Lang, slug: string): string {
  return lang === 'es' ? `/creacion-de-negocios/${slug}/` : `/en/business-creation/${slug}/`;
}

export function parentTema(lang: Lang) {
  return parent[lang];
}
