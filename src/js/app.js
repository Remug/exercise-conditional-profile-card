import "../style/index.css";

/**
 *  EDITAR SOLO DENTRO DE ESTA FUNCIÓN DE RENDERIZADO
 *  Esta función se llama cada vez que el usuario cambia los tipos o cambia cualquier entrada
 */
function render(variables = {}) {
  console.log("Estas son las variables actuales: ", variables);

  // Aquí realizamos las comprobaciones lógicas para construir el HTML de acuerdo a las condiciones
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover === false) cover = "<div class='cover'></div>";

  // Actualizamos el contenido del elemento con el nuevo HTML generado
  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" />
      <h1>${variables.name ? variables.name : ""}
          ${variables.lastname ? variables.lastname : ""}
      </h1>
      <h2>${variables.role ? variables.role : ""}</h2>
      <h3>${variables.country ? variables.country : ""} 
          ${variables.city ? variables.city : ""}
      </h3>${
        variables.socialMediaPosition === "position-left"
          ? `<ul class="position-left">`
          : `<ul class="position-right">`
      }

      ${
        variables.twitter
          ? `<li><a href="https://twitter.com/4geeksacademy">
            <i class="fab fa-twitter"></i>
            </a>
          </li>`
          : ""
      }
      ${
        variables.github
          ? `<li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>`
          : ""
      }
      ${
        variables.linkedin
          ? `<li><a href="https://linkedin.com/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>`
          : ""
      }
      ${
        variables.instagram
          ? `<li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>`
          : ""
      }
    </ul>
  </div>
`;
}

/**
 * No cambies ninguna de las líneas a continuación, aquí es donde se realiza la lógica para los desplegables
 */
window.onload = function() {
  window.variables = {
    //si includeCover es true el algoritmo debería
    includeCover: true,
    // esta es la url de la imagen que se usará como fondo para la portada del perfil
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // esta es la url para el avatar del perfil
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // posición de la barra de redes sociales (izquierda o derecha)
    socialMediaPosition: "position-left",
    // nombres de usuario de las redes sociales
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //renderiza la card por primera vez

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // se añade un evento de escucha a todos los input
      const attribute = e.target.getAttribute("for"); //cuando cualquierinput cambia, recoge su valor
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); //renderiza otra vez la card con los nuevos valores
    });
  });
};
