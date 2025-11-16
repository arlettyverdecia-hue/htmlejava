// DATOS DEL JUEGO
const cenas = [
    {
      id: 0,
      titulo: "Bien-venido a la Aventura Interativa",
      descripcion: "Despiertas en una floresta misteriosa. No sabes cómo llegaste aquí, pero sientes que una gran aventura te aguarda. Frente a ti, hay tres caminos diferentes. ¿Cuál eliges?",
      opciones: [
        { texto: "Seguir el camino de la izquierda (floresta densa)", proximaCena: 1, efecto: { vida: -5 } },
        { texto: "Seguir el camino del medio (trilha clara)", proximaCena: 2 },
        { texto: "Seguir el camino de la derecha (montaña)", proximaCena: 3, efecto: { vida: -10 } },
      ],
    },
    {
      id: 1,
      titulo: "La Floresta Oscura",
      descripcion: "Entras en la floresta densa. El aire se vuelve frío y húmedo. De repente, ves los ojos brillantes de una criatura. ¡Es un lobo! Necesitas actuar rápido.",
      opciones: [
        { texto: "Luchar contra el lobo", proximaCena: 4, efecto: { vida: -20, ouro: 50 } },
        { texto: "Correr para lejos", proximaCena: 5 },
        { texto: "Ofrecer comida al lobo", proximaCena: 6, efecto: { ouro: -10, item: "Amistad del Lobo" } },
      ],
    },
    {
      id: 2,
      titulo: "La Trilha Clara",
      descripcion: "Sigues por la trilha bien marcada. El camino es seguro y agradable. Encuentras una aldea pequeña con gente amiga. Un comerciante te ofrece una misión.",
      opciones: [
        { texto: "Aceptar la misión del comerciante", proximaCena: 7, efecto: { ouro: 100 } },
        { texto: "Explorar la aldea", proximaCena: 8 },
        { texto: "Continuar viaje", proximaCena: 9 },
      ],
    },
    {
      id: 3,
      titulo: "La Montaña Peligrosa",
      descripcion: "Comienzas a subir la montaña. El camino es difícil y peligroso. Resbalas varias veces, pero logras mantenerte en equilibrio. En la cima, ves una caverna brillante.",
      opciones: [
        { texto: "Entrar en la caverna", proximaCena: 10, efecto: { ouro: 200, item: "Cristal Mágico" } },
        { texto: "Bajar la montaña", proximaCena: 2 },
        { texto: "Acampar en la cima", proximaCena: 11 },
      ],
    },
    {
      id: 4,
      titulo: "Batalla Épica",
      descripcion: "¡Enfrentas al lobo en una batalla intensa! Después de un combate feroz, logras vencer al animal salvaje. Encuentras una bolsa de oro en un árbol cercano.",
      opciones: [
        { texto: "Continuar por la floresta", proximaCena: 12 },
        { texto: "Volver al punto de partida", proximaCena: 0 },
      ],
    },
    {
      id: 5,
      titulo: "Fuga Precipitada",
      descripcion: "¡Corres por la floresta, el lobo te persigue! Después de una carrera emocionante, logras escapar y encuentras un río. Estás seguro, pero exhausto.",
      opciones: [
        { texto: "Descansar a la orilla del río", proximaCena: 13 },
        { texto: "Atravesar el río", proximaCena: 14 },
      ],
    },
    {
      id: 6,
      titulo: "Amistad Inesperada",
      descripcion: "¡El lobo acepta la comida y se convierte en tu amigo! Te guía por la floresta y te lleva a un tesoro escondido. ¡Qué suerte increíble!",
      opciones: [
        { texto: "Seguir con el lobo", proximaCena: 15, efecto: { ouro: 150, item: "Lobo Compañero" } },
        { texto: "Agradecer y partir solo", proximaCena: 12 },
      ],
    },
    {
      id: 7,
      titulo: "Misión Cumplida",
      descripcion: "¡Completas la misión del comerciante con éxito! Queda tan impresionado que te ofrece una recompensa generosa e invita a volver siempre que necesites.",
      opciones: [
        { texto: "Aceptar la recompensa y partir", proximaCena: 16 },
        { texto: "Quedarse en la aldea", proximaCena: 17 },
      ],
    },
    {
      id: 8,
      titulo: "Exploración de la Aldea",
      descripcion: "Exploras la aldea y descubres una biblioteca antigua con libros mágicos. Un sabio local te ofrece enseñarte sobre magia.",
      opciones: [
        { texto: "Aprender magia", proximaCena: 18, efecto: { item: "Conocimiento Mágico" } },
        { texto: "Rechazar y partir", proximaCena: 9 },
      ],
    },
    {
      id: 9,
      titulo: "Carretera Infinita",
      descripcion: "Continúas viajando por la carretera. Después de días de caminata, llegas a una ciudad grande y próspera. ¡Nuevas oportunidades te aguardan!",
      opciones: [
        { texto: "Entrar en la ciudad", proximaCena: 19, efecto: { ouro: 50 } },
        { texto: "Acampar fuera de la ciudad", proximaCena: 20 },
      ],
    },
    {
      id: 10,
      titulo: "Tesoro del Dragón",
      descripcion: "¡Dentro de la caverna encuentras un dragón dormido y un tesoro inmenso! Logras tomar algunos artículos valiosos sin despertar al dragón. ¡Qué suerte!",
      opciones: [
        { texto: "Salir de la caverna rápidamente", proximaCena: 21 },
        { texto: "Intentar tomar más tesoro", proximaCena: 22, efecto: { vida: -50 } },
      ],
    },
    {
      id: 11,
      titulo: "Noche en la Montaña",
      descripcion: "Acampas en la cima de la montaña. Por la noche, ves las estrellas más brillantes que hayas visto en tu vida. Una visión mágica te trae paz y sabiduría.",
      opciones: [
        { texto: "Bajar por la mañana", proximaCena: 23, efecto: { item: "Sabiduría de las Estrellas" } },
      ],
    },
    {
      id: 12,
      titulo: "Fin de la Floresta",
      descripcion: "¡Finalmente sales de la floresta y llegas a un prado abierto y hermoso! El sol brilla y sientes una sensación de victoria.",
      opciones: [
        { texto: "Descansar en el prado", proximaCena: 24 },
      ],
    },
    {
      id: 13,
      titulo: "Descanso Restaurador",
      descripcion: "Descansas a la orilla del río y te recuperas. El agua fresca te revitaliza. Te sientes renovado y listo para continuar.",
      opciones: [
        { texto: "Continuar viaje", proximaCena: 14, efecto: { vida: 30 } },
      ],
    },
    {
      id: 14,
      titulo: "Travesía del Río",
      descripcion: "Atraviesas el río con cuidado. Del otro lado, encuentras una cabaña acogedora con alguien adentro.",
      opciones: [
        { texto: "Entrar en la cabaña", proximaCena: 25 },
        { texto: "Continuar caminando", proximaCena: 26 },
      ],
    },
    {
      id: 15,
      titulo: "Jornada con el Lobo",
      descripcion: "Con tu nuevo amigo lobo, viajas por tierras mágicas. Juntos, descubren un reino oculto lleno de magia y misterio.",
      opciones: [
        { texto: "Explorar el reino", proximaCena: 27 },
      ],
    },
    {
      id: 16,
      titulo: "Riqueza Conquistada",
      descripcion: "Con la recompensa en manos, te vuelves una persona adinerada. Decides usar tu riqueza para ayudar a otros viajeros.",
      opciones: [
        { texto: "Construir una posada", proximaCena: 28 },
      ],
    },
    {
      id: 17,
      titulo: "Vida en la Aldea",
      descripcion: "Decides quedarte en la aldea y te conviertes en parte de la comunidad. Eres feliz y bienvenido por todos.",
      opciones: [
        { texto: "Vivir en paz", proximaCena: 29 },
      ],
    },
    {
      id: 18,
      titulo: "Aprendiz de Mago",
      descripcion: "Aprendes magia con el sabio y te vuelves un mago poderoso. Tu conocimiento te hace respetado en toda la región.",
      opciones: [
        { texto: "Usar magia para ayudar", proximaCena: 30 },
      ],
    },
    {
      id: 19,
      titulo: "Ciudad Grande",
      descripcion: "Entras en la ciudad grande y quedas maravillado por su grandeza. ¡Oportunidades infinitas te aguardan aquí!",
      opciones: [
        { texto: "Buscar fortuna", proximaCena: 31 },
      ],
    },
    {
      id: 20,
      titulo: "Campamento Seguro",
      descripcion: "Acampas fuera de la ciudad y descansas bien. Por la mañana, estás listo para explorar.",
      opciones: [
        { texto: "Entrar en la ciudad", proximaCena: 19 },
      ],
    },
    {
      id: 21,
      titulo: "Fuga del Dragón",
      descripcion: "¡Sales de la caverna rápidamente con el tesoro! El dragón despierta, pero logras escapar a tiempo.",
      opciones: [
        { texto: "Disfrutar del tesoro", proximaCena: 32 },
      ],
    },
    {
      id: 22,
      titulo: "Ira del Dragón",
      descripcion: "¡El dragón despierta furioso! Logras escapar, pero quedas herido. Aun así, conseguiste mucho oro.",
      opciones: [
        { texto: "Recuperarse", proximaCena: 33, efecto: { vida: -30 } },
      ],
    },
    {
      id: 23,
      titulo: "Descenso Sabio",
      descripcion: "Con la sabiduría de las estrellas, bajas la montaña con confianza. Sabes que tu futuro será brillante.",
      opciones: [
        { texto: "Continuar la aventura", proximaCena: 34 },
      ],
    },
    {
      id: 24,
      titulo: "Paz Encontrada",
      descripcion: "Descansas en el prado y sientes una paz profunda. ¡Has conquistado la floresta y ahora eres libre!",
      opciones: [
        { texto: "Continuar viaje", proximaCena: 35 },
      ],
    },
    {
      id: 25,
      titulo: "Cabaña Misteriosa",
      descripcion: "Dentro de la cabaña, encuentras un viejo sabio que te ofrece orientación para tu jornada. Comparte secretos antiguos.",
      opciones: [
        { texto: "Escuchar los secretos", proximaCena: 36, efecto: { item: "Secretos Antiguos" } },
      ],
    },
    {
      id: 26,
      titulo: "Camino Desconocido",
      descripcion: "Continúas caminando y descubres un templo antiguo. Dentro hay artefactos valiosos.",
      opciones: [
        { texto: "Explorar el templo", proximaCena: 37, efecto: { ouro: 100 } },
      ],
    },
    {
      id: 27,
      titulo: "Reino Mágico Descubierto",
      descripcion: "Exploras el reino mágico y te conviertes en un héroe legendario. ¡Tu historia será contada por generaciones!",
      opciones: [
        { texto: "Vivir como héroe", proximaCena: 38 },
      ],
    },
    {
      id: 28,
      titulo: "Posada Construida",
      descripcion: "Construyes una posada acogedora donde viajeros pueden descansar. Vives una vida feliz y próspera.",
      opciones: [
        { texto: "FIN - Vida Próspera", proximaCena: -1 },
      ],
    },
    {
      id: 29,
      titulo: "Vida Simple y Feliz",
      descripcion: "Vives una vida simple pero feliz en la aldea. Tienes amigos, comunidad y paz.",
      opciones: [
        { texto: "FIN - Vida Feliz", proximaCena: -1 },
      ],
    },
    {
      id: 30,
      titulo: "Mago Benevolente",
      descripcion: "Usas tu magia para ayudar a la gente y proteger el reino. ¡Te vuelves legendario como el mago más sabio!",
      opciones: [
        { texto: "FIN - Legado Mágico", proximaCena: -1 },
      ],
    },
    {
      id: 31,
      titulo: "Fortuna en la Ciudad",
      descripcion: "Buscas fortuna en la ciudad grande y ¡la encuentras! Te vuelves un comerciante exitoso.",
      opciones: [
        { texto: "FIN - Riqueza Urbana", proximaCena: -1 },
      ],
    },
    {
      id: 32,
      titulo: "Tesoro del Dragón Conquistado",
      descripcion: "¡Disfrutas del tesoro que conquistaste! Eres rico y famoso por tu valentía.",
      opciones: [
        { texto: "FIN - Héroe Famoso", proximaCena: -1 },
      ],
    },
    {
      id: 33,
      titulo: "Recuperación Victoriosa",
      descripcion: "Te recuperas de tus heridas y celebras tu victoria. ¡El oro del dragón es tuyo!",
      opciones: [
        { texto: "FIN - Victoria Conquistada", proximaCena: -1 },
      ],
    },
    {
      id: 34,
      titulo: "Futuro Brillante",
      descripcion: "Con la sabiduría adquirida, continúas tu aventura con confianza. ¡Tu futuro es brillante y lleno de posibilidades!",
      opciones: [
        { texto: "FIN - Destino Brillante", proximaCena: -1 },
      ],
    },
    {
      id: 35,
      titulo: "Nuevos Horizontes",
      descripcion: "Continúas viajando y descubres nuevos mundos. ¡Tus aventuras nunca terminan!",
      opciones: [
        { texto: "FIN - Aventurero Eterno", proximaCena: -1 },
      ],
    },
    {
      id: 36,
      titulo: "Sabiduría Adquirida",
      descripcion: "Con los secretos antiguos, te vuelves sabio y respetado. Ayudas a muchas personas con tu conocimiento.",
      opciones: [
        { texto: "FIN - Sabio Respetado", proximaCena: -1 },
      ],
    },
    {
      id: 37,
      titulo: "Templo Explorado",
      descripcion: "¡Exploras completamente el templo y encuentras artefactos preciosos! Eres rico y famoso por tu descubrimiento.",
      opciones: [
        { texto: "FIN - Arqueólogo Famoso", proximaCena: -1 },
      ],
    },
    {
      id: 38,
      titulo: "Héroe Legendario",
      descripcion: "¡Vives como héroe en el reino mágico! Tu historia es contada en todas las tabernas y tu fama es eterna.",
      opciones: [
        { texto: "FIN - Leyenda Inmortal", proximaCena: -1 },
      ],
    },
  ];
  
  // ESTADO DEL JUEGO
  let estadoJuego = {
    juegoIniciado: false,
    cenaActual: 0,
    vida: 100,
    ouro: 0,
    inventario: [],
    finJuego: false,
  };
  
  // FUNCIONES PRINCIPALES
  function iniciarJuego() {
    estadoJuego.juegoIniciado = true;
    estadoJuego.cenaActual = 0;
    estadoJuego.vida = 100;
    estadoJuego.ouro = 0;
    estadoJuego.inventario = [];
    estadoJuego.finJuego = false;
    renderizar();
  }
  
  function fazerEscolha(proximaCena, efecto) {
    if (efecto) {
      if (efecto.vida) {
        estadoJuego.vida = Math.max(0, estadoJuego.vida + efecto.vida);
      }
      if (efecto.ouro) {
        estadoJuego.ouro = Math.max(0, estadoJuego.ouro + efecto.ouro);
      }
      if (efecto.item) {
        estadoJuego.inventario.push(efecto.item);
      }
    }
  
    if (proximaCena === -1) {
      estadoJuego.finJuego = true;
    } else {
      estadoJuego.cenaActual = proximaCena;
    }
  
    renderizar();
  }
  
  function reiniciarJuego() {
    estadoJuego.juegoIniciado = false;
    estadoJuego.cenaActual = 0;
    estadoJuego.vida = 100;
    estadoJuego.ouro = 0;
    estadoJuego.inventario = [];
    estadoJuego.finJuego = false;
    renderizar();
  }
  
  // FUNCIONES DE RENDERIZADO
  function renderizar() {
    const app = document.getElementById('app');
  
    if (!estadoJuego.juegoIniciado) {
      app.innerHTML = renderMenuInicial();
    } else if (estadoJuego.finJuego) {
      app.innerHTML = renderPantallaFin();
    } else {
      app.innerHTML = renderJuego();
    }
  
    agregarEventos();
  }
  
  function renderMenuInicial() {
    return `
      <div class="menu-inicial">
        <h1>⚔️ Aventura Interativa ⚔️</h1>
        <p class="subtitulo">Una jornada épica llena de misterio y magia</p>
        
        <p class="descripcion">
          Bienvenido, aventurero! Estás a punto de embarcarte en una jornada épica llena de misterio, peligro y magia. 
          Tus elecciones determinarán tu destino. ¿Serás un héroe legendario, un sabio respetado o un viajero eterno?
        </p>
        
        <p class="descripcion">
          ¡Prepárate para enfrentar lobos salvajes, explorar cavernas de dragones, descubrir reinos mágicos y mucho más!
        </p>
  
        <div class="instrucciones">
          <h3>📋 Cómo Jugar:</h3>
          <ul>
            <li>Lee la descripción de cada escena con atención</li>
            <li>Elige una de las opciones disponibles</li>
            <li>Tus elecciones afectarán tu vida, oro e inventario</li>
            <li>¡Llega al final de la aventura y descubre tu destino!</li>
          </ul>
        </div>
  
        <button class="boton-iniciar" onclick="iniciarJuego()">
          🎮 Iniciar Aventura
        </button>
      </div>
    `;
  }
  
  function renderJuego() {
    const escena = cenas[estadoJuego.cenaActual];
    const porcentajeVida = Math.max(0, estadoJuego.vida);
  
    let html = `
      <div class="contenedor-juego">
        <!-- BARRA DE ESTADO -->
        <div class="barra-estado">
          <div class="estado-item vida">
            <div class="estado-icono">❤️</div>
            <div class="estado-label">VIDA</div>
            <div class="estado-valor">${estadoJuego.vida}/100</div>
            <div class="barra-vida">
              <div class="barra-vida-relleno" style="width: ${porcentajeVida}%"></div>
            </div>
          </div>
          
          <div class="estado-item oro">
            <div class="estado-icono">⚔️</div>
            <div class="estado-label">ORO</div>
            <div class="estado-valor">${estadoJuego.ouro}</div>
          </div>
          
          <div class="estado-item items">
            <div class="estado-icono">🎒</div>
            <div class="estado-label">ITEMS</div>
            <div class="estado-valor">${estadoJuego.inventario.length}</div>
          </div>
        </div>
  
        <!-- TARJETA DE ESCENA -->
        <div class="tarjeta-escena">
          <div class="cabecera-escena">
            <h2>📖 ${escena.titulo}</h2>
            <div class="numero-escena">Escena ${estadoJuego.cenaActual + 1} de ${cenas.length}</div>
          </div>
          
          <div class="contenido-escena">
            <p class="descripcion-escena">${escena.descripcion}</p>
    `;
  
    // MOSTRAR INVENTARIO SI HAY ITEMS
    if (estadoJuego.inventario.length > 0) {
      html += `
        <div class="inventario-contenedor">
          <div class="inventario-titulo">🎒 Tu Inventario:</div>
          <div class="inventario-items">
            ${estadoJuego.inventario.map(item => `<span class="item-inventario">${item}</span>`).join('')}
          </div>
        </div>
      `;
    }
  
    html += `
            <div class="pregunta">⚔️ ¿Qué haces?</div>
            <div class="opciones">
    `;
  
    // OPCIONES
    escena.opciones.forEach((opcion, idx) => {
      html += `
        <button class="boton-opcion" onclick="fazerEscolha(${opcion.proximaCena}, ${JSON.stringify(opcion.efecto || {})})">
          <span class="icono-escudo">🛡️</span>
          ${opcion.texto}
        </button>
      `;
    });
  
    html += `
            </div>
          </div>
        </div>
  
        <!-- BOTÓN VOLVER -->
        <button class="boton-volver" onclick="reiniciarJuego()">
          🔄 Volver al Menú
        </button>
      </div>
    `;
  
    return html;
  }
  
  function renderPantallaFin() {
    const escena = cenas[estadoJuego.cenaActual];
  
    return `
      <div class="pantalla-fin">
        <div class="titulo-fin">🎉 FIN DE LA AVENTURA 🎉</div>
        
        <div class="nombre-final">${escena.titulo}</div>
        
        <p class="descripcion-final">${escena.descripcion}</p>
  
        <div class="estadisticas-finales">
          <div class="estadistica-final vida">
            <div class="valor">${estadoJuego.vida}</div>
            <div class="label">Vida Restante</div>
          </div>
          
          <div class="estadistica-final oro">
            <div class="valor">${estadoJuego.ouro}</div>
            <div class="label">Oro Acumulado</div>
          </div>
          
          <div class="estadistica-final items">
            <div class="valor">${estadoJuego.inventario.length}</div>
            <div class="label">Items Recolectados</div>
          </div>
        </div>
  
        ${estadoJuego.inventario.length > 0 ? `
          <div class="inventario-contenedor">
            <div class="inventario-titulo">🎒 Tu Inventario Final:</div>
            <div class="inventario-items">
              ${estadoJuego.inventario.map(item => `<span class="item-inventario">${item}</span>`).join('')}
            </div>
          </div>
        ` : ''}
  
        <button class="boton-reiniciar" onclick="reiniciarJuego()">
          🔄 Jugar Nuevamente
        </button>
      </div>
    `;
  }
  
  function agregarEventos() {
    // Los eventos se agregan inline en los botones
  }
  
  // INICIALIZAR APLICACIÓN
  document.addEventListener('DOMContentLoaded', () => {
    renderizar();
  });