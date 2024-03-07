document.addEventListener('DOMContentLoaded', function () {
    // Cargar datos del archivo JSON para Perfil
    fetch('perfil.json')
      .then(response => response.json())
      .then(data => {
        const perfilSection = document.querySelector('#perfil .row');
        data.servicios.forEach(servicio => {
          perfilSection.innerHTML += `
            <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-down">
              <div class="card text-center cardPerfil">
                <div class="card-body">
                  <img src="img/perfil/${servicio.imagen}" alt="${servicio.nombre}" class="img-fluid mb-3 mx-auto" width="500px">
                  <h5 class="card-title text-light">${servicio.nombre}</h5>
                  <p class="card-text">${servicio.descripcion}</p>
                </div>
              </div>
            </div>
          `;
        });
      })
      .catch(error => console.log('Error:', error));
  
    // Cargar datos del archivo JSON para Proyectos
    fetch('proyectos.json')
      .then(response => response.json())
      .then(data => {
        const proyectosSection = document.querySelector('#proyectos .row');
        data.proyectos.forEach(proyecto => {
          proyectosSection.innerHTML += `
            <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-down">
              <a href="${proyecto.enlace}" class="text-decoration-none">
                <div class="card">
                  <div class="card-body">
                    <img src="img/proyectos/${proyecto.imagen}" alt="${proyecto.nombre}" class="img-fluid mb-3 mx-auto" width="500px">
                    <h5 class="card-title text-center text-light">${proyecto.nombre}</h5>
                    <p class="card-text text-center">${proyecto.descripcion}</p>
                  </div>
                </div>
              </a>
            </div>
          `;
        });
      })
      .catch(error => console.log('Error:', error));
  });

document.addEventListener('DOMContentLoaded', function () {
// Variables para almacenar el estado del header
let headerHeight = document.querySelector('header').offsetHeight;
let isHeaderFixed = false;

// Función para guardar el estado del header
function saveHeaderState() {
    isHeaderFixed = true;
}

// Evento clic en las opciones de navegación
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function () {
    // Guardar el estado del header
    saveHeaderState();
    });
});

// Evento de scroll para guardar el estado del header
window.addEventListener('scroll', function () {
    // Obtener la posición actual del scroll
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Verificar si el header está fijo
        if (scrollPosition > headerHeight) {
        // Guardar el estado del header si no está fijo
            if (!isHeaderFixed) {
                saveHeaderState();
            }
        }
    });
});
