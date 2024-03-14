const mensajes = [
  { mensaje: "Mi Oladi hermosa preciosa", tiempo: 3000 },
  { mensaje: "¿Cómo estás?", tiempo: 2500 },
  { mensaje: "Espero que estés muy bien :)", tiempo: 2500 },
  { mensaje: "Quiero decirte que estar contigo un mes más me hace muy feliz", tiempo: 5000 },
  { mensaje: "Me hace sentir muy emocionado de lo más cerca que estamos para poder estar juntos en nuestro hogar", tiempo: 8500 },
  { mensaje: "Te amo demasiado, y te amaré el resto de mi existencia", tiempo: 4000 },
  { mensaje: "Eres mi razón, mi inspiración", tiempo: 5000 },
  { mensaje: "Eres lo que le faltaba a mi vida", tiempo: 5000 },
  { mensaje: "", tiempo: 1000 },
  { mensaje: "De los elementos esenciales para la vida; fuego, agua, tierra y aire", tiempo: 9000 },
  { mensaje: "Eres mi quinto elemento esencial para vivir", tiempo: 5000 },
  { mensaje: "Estar contigo lo tengo todo", tiempo: 4000 },
  { mensaje: "No llegue a un punto en mi vida pensar que estaría tan feliz", tiempo: 6000 },
  { mensaje: "No pensé que a alguien podria contarle lo que me sucede en la vida, ya que soy un poco reservado", tiempo: 9000 },
  { mensaje: "Pero contigo puedo ver peliculas, series, jugar videojuegos, comentarte lo que me pasa, y sé que estarás ahí escuchándome", tiempo: 9300 },
  { mensaje: "Contigo es diferente", tiempo: 5000 },
  { mensaje: "Y todo lo que quiero es estar a tu lado abrazandote", tiempo: 5000 },
  { mensaje: "Eres mi lugar seguro Oladi c:", tiempo: 4000 },
  { mensaje: "Te amo un montón", tiempo: 5000 },
  { mensaje: "Mi cuhurrumin", tiempo: 1000 },
  { mensaje: "Mi totololoche", tiempo: 1000 },
  { mensaje: "Mi preciosura", tiempo: 1000 },
  { mensaje: "Mi amorcito", tiempo: 1000 },
  { mensaje: "ME ENCANTAS", tiempo: 3000 }
];

function startMessages() {
  var audio = new Audio('cancioncita.mp3');
  audio.volume = 0.3;
  audio.loop = true;
  audio.play();
  document.querySelector('button').style.display = 'none'; // Oculta el botón
  document.getElementById('messageContainer').style.display = 'flex'; // Muestra el contenedor de mensajes
  showNextMessage(0); // Comienza a mostrar los mensajes
}

function showNextMessage(index) {
  if (index < mensajes.length) {
    const message = mensajes[index];
    document.getElementById('message').textContent = message.mensaje;
    fadeInMessage();
    setTimeout(() => {
      fadeOutMessage();
      setTimeout(() => {
        showNextMessage(index + 1);
      }, 1000);
    }, message.tiempo);
  } else if ( index == mensajes.length) {
    document.getElementById('message').style.whiteSpace = 'pre-line';
    document.getElementById('message').textContent = 'Mi Oladi hermosa preciosa, ¿Cómo estás? Espero que estés muy bien :). Quiero decirte que estar contigo un mes más me hace muy feliz. Me hace sentir muy emocionado de lo más cerca que estamos para poder estar juntos en nuestro hogar.\n\nTe amo demasiado, y te amaré el resto de mi existencia. Eres mi razón, mi inspiración. Eres lo que le faltaba a mi vida.\n\nDe los elementos esenciales para la vida; fuego, agua, tierra y aire, eres mi quinto elemento esencial para vivir.\n\nEstar contigo lo tengo todo.\nNo llegue a un punto en mi vida pensar que estaría tan feliz. No pensé que a alguien podría contarle lo que me sucede en la vida, ya que soy un poco reservado. Pero contigo puedo ver películas, series, jugar videojuegos, comentarte lo que me pasa, y sé que estarás ahí escuchándome. Contigo es diferente. Y todo lo que quiero es estar a tu lado abrazándote.\nEres mi lugar seguro Oladi c:\nTe amo un montón, mi cuhurrumin, mi totololoche, mi preciosura, mi amorcito, ME ENCANTAS.'
    var anchoVentana = window.innerWidth;
    if (anchoVentana >= 768) {
      document.getElementById('message').style.fontSize = '1.3rem';
    } else {
      document.getElementById('message').style.fontSize = '0.8rem';
    }
    fadeInMessage();
  }

}

function fadeInMessage() {
  document.getElementById('message').style.opacity = '1';
}

function fadeOutMessage() {
  document.getElementById('message').style.opacity = '0';
}
