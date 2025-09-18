


document.addEventListener("DOMContentLoaded", () => {
  // Verificar si estamos en la página de inicio (index.html)
  if (window.location.pathname === '/index.html' || window.location.pathname === '/frontEndStore/index.html') {
    // Código específico para la página de inicio (index.html)

    const contenedor = document.querySelector('.grid'); // Contenedor donde se agregarán los productos

    if (contenedor) {
      fetch('http://localhost:8080/api/camisetas')
        .then(response => response.json())
        .then(camisetas => {
          contenedor.innerHTML = ''; // Limpiamos el contenedor para evitar que se repita el contenido

          camisetas.forEach(camiseta => {
            // Creamos un contenedor para cada producto
            const productoElemento = document.createElement('div');
            productoElemento.classList.add('producto'); // Añadimos la clase 'producto'

            // Rellenamos el HTML del producto con los datos obtenidos
            productoElemento.innerHTML = `
              <a href="producto.html?id=${camiseta.id}">
                <img class="producto__imagen" src="${camiseta.imagenUrl}" alt="${camiseta.nombre}">
                <div class="producto__informacion">
                  <p class="producto__nombre">${camiseta.nombre}</p>
                  <p class="producto__precio">${camiseta.precio} Euros</p>
                </div>
              </a>
            `;

            
            contenedor.appendChild(productoElemento);
          });
        })
        .catch(error => {
          console.error('Error al obtener los productos:', error);
        });
    }
  }

  // Verificar si estamos en la página producto.html
  if (window.location.pathname === '/producto.html' || window.location.pathname === '/frontEndStore/producto.html') {
    // Código específico para la página de producto.html
    const botonSubmit = document.querySelector(".formulario__submit");
    if (botonSubmit) {
      botonSubmit.addEventListener('click', event => {
        event.preventDefault();
        
        const imagen = document.querySelector('.camisa__imagen').src;
        const nombre = document.querySelector('.nombre__camiseta').textContent;
        const talla = document.querySelector('.formulario__campo').value;
        const cantidad = document.querySelector('.formulario__campo__cantidad').value;
        const precio = document.querySelector('.camisa__precio').textContent;

        const producto = {
          imagen,
          nombre,
          talla,
          cantidad,
          precio
        };

        
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));

        alert("Producto añadido correctamente al carrito");
        window.location.href = 'carrito.html';
      });
    }
  }
});






 
const urlParams = new URLSearchParams(window.location.search);
const idCamiseta = urlParams.get('id');

//Codigo para la pagina de producto.html


if (idCamiseta) {
    
    fetch(`http://localhost:8080/api/camisetas/${idCamiseta}`)
    .then(response => response.json())
    .then(camiseta => {
      const contenedor2 = document.querySelector('.contenedor'); 
       contenedor2.classList.add("main");
       contenedor2.innerHTML = '';
       contenedor2.innerHTML = `
       <h1 class="nombre__camiseta">${camiseta.nombre}</h1>
       <div class="camisa">
          <img class ="camisa__imagen" src="${camiseta.imagenUrl}" alt="${camiseta.nombre}">
          <div class="camisa__contenido">
              <p class="camisa__descripcion">${camiseta.descripcion}</p>
              <p class="camisa__precio">${camiseta.precio} Euros</p>
              <form class="formulario">
                  <select class="formulario__campo">
                      <option disabled selected>--Elige tu talla--</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                  </select>
                  <input class="formulario__campo__cantidad" type="number" placeholder="Cantidad" min="1" >
                  <input class="formulario__submit" type="submit" value="Añadir al carrito">
              </form>
            
          </div>


       </div>
     `
        
    })
    .catch(error => {
        console.error('Error al cargar la camiseta:', error);
    });
} else {
    console.log('ID de camiseta no encontrado');
}


/**vamos con el carrito **/
//quiero que al darle añadir al carrito guarde la camiseta en el carrito.html

function mostrarAlerta(mensaje) {
  const alerta = document.getElementById("alerta");
  alerta.textContent = mensaje;
  alerta.classList.remove("oculto");

  setTimeout(() => {
      alerta.classList.add("oculto");
  }, 3000); 
}



document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript cargado correctamente");

  if (window.location.pathname.includes("producto.html")) {
      console.log("Ejecutando código de producto...");

      const params = new URLSearchParams(window.location.search);
      const idCamiseta = params.get("id");

      if (idCamiseta) {
          fetch(`http://localhost:8080/api/camisetas/${idCamiseta}`)
              .then(response => response.json())
              .then(camiseta => {
                  const contenedor2 = document.querySelector('.contenedor');
                  contenedor2.classList.add("main");
                  contenedor2.innerHTML = `
                      <h1 class="nombre__camiseta">${camiseta.nombre}</h1>
                      <div class="camisa">
                          <img class="camisa__imagen" src="${camiseta.imagenUrl}" alt="${camiseta.nombre}">
                          <div class="camisa__contenido">
                              <p class="camisa__descripcion">${camiseta.descripcion}</p>
                              <p class="camisa__precio">${camiseta.precio} Euros</p>
                              <form class="formulario">
                                  <select class="formulario__campo">
                                      <option disabled selected>--Elige tu talla--</option>
                                      <option value="S">S</option>
                                      <option value="M">M</option>
                                      <option value="L">L</option>
                                      <option value="XL">XL</option>
                                  </select>
                                  <input class="formulario__campo__cantidad" type="number" placeholder="Cantidad" min="1">
                                  <input class="formulario__submit" type="submit" value="Añadir al carrito">
                              </form>
                          </div>
                      </div>
                  `;

                  
                  const formulario = document.querySelector(".formulario");
                  formulario.addEventListener("submit", event => {
                      event.preventDefault();

                      console.log("Formulario enviado correctamente");

                      const imagen = document.querySelector('.camisa__imagen')?.src;
                      const nombre = document.querySelector('.nombre__camiseta')?.textContent;
                      const talla = document.querySelector('.formulario__campo')?.value;
                      const cantidad = document.querySelector('.formulario__campo__cantidad')?.value;
                      const precio = document.querySelector('.camisa__precio')?.textContent;

                      if (!imagen || !nombre || !talla || !cantidad || !precio) {
                          alert("Elige una talla y cantidad para añadir al carrito");
                          return;
                      }

                      const producto = { imagen, nombre, talla, cantidad, precio };
                      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                      carrito.push(producto);
                      localStorage.setItem("carrito", JSON.stringify(carrito));

                      mostrarAlerta("Producto añadido al carrito");
                      setTimeout(() => {
                        window.location.href = "carrito.html";
                    }, 2000); 
                  });

              })
              .catch(error => console.error("Error al cargar la camiseta:", error));
      } else {
          console.log("ID de camiseta no encontrado");
      }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript cargado correctamente");

  if (window.location.pathname.includes("carrito.html")) {
      console.log("Cargando productos del carrito...");

      const carritoContainer = document.querySelector(".carrito__articles");
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const itemsPorPaginaSelect = document.getElementById("itemsPorPagina");
      let itemsPorPagina = parseInt(itemsPorPaginaSelect.value); 
      let paginaActual = 1;

      // Función para actualizar el carrito en la vista
      function renderCarrito() {
          carritoContainer.innerHTML = "";

          // Filtrar los productos a mostrar según la página
          const productosPorPagina = carrito.slice((paginaActual - 1) * itemsPorPagina, paginaActual * itemsPorPagina);

          if (carrito.length === 0) {
              carritoContainer.innerHTML = "<h2 class='carrito__vacio'>El carrito está vacío.</h2>";
              return;
          }

          // Agregar los productos de la página actual al contenedor
          productosPorPagina.forEach((producto, index) => {
              const item = document.createElement("div");
              item.classList.add("carrito__item");
              item.innerHTML = `
                  <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito__imagen">
                  <div class="carrito__detalles">
                      <h3>${producto.nombre}</h3>
                      <p>Talla: ${producto.talla}</p>
                      <p>Cantidad: ${producto.cantidad}</p>
                      <p>Precio: ${producto.precio}</p>
                      <button class="carrito__eliminar" data-index="${index}">Eliminar</button>
                  </div>
              `;
              carritoContainer.appendChild(item);
          });

          
          actualizarPaginacion();
      }

      // Función para actualizar los controles de paginación
      function actualizarPaginacion() {
          const totalPaginas = Math.ceil(carrito.length / itemsPorPagina);

          
          const paginacionContainer = document.querySelector(".carrito__paginacion");
          paginacionContainer.innerHTML = "";

          const botonAnterior = document.createElement("button");
          botonAnterior.textContent = "Anterior";
          botonAnterior.disabled = paginaActual === 1;
          botonAnterior.addEventListener("click", () => {
              if (paginaActual > 1) {
                  paginaActual--;
                  renderCarrito();
              }
          });
          paginacionContainer.appendChild(botonAnterior);

          for (let i = 1; i <= totalPaginas; i++) {
              const botonPagina = document.createElement("button");
              botonPagina.textContent = i;
              botonPagina.classList.toggle("activo", i === paginaActual);
              botonPagina.addEventListener("click", () => {
                  paginaActual = i;
                  renderCarrito();
              });
              paginacionContainer.appendChild(botonPagina);
          }

          const botonSiguiente = document.createElement("button");
          botonSiguiente.textContent = "Siguiente";
          botonSiguiente.disabled = paginaActual === totalPaginas;
          botonSiguiente.addEventListener("click", () => {
              if (paginaActual < totalPaginas) {
                  paginaActual++;
                  renderCarrito();
              }
          });
          paginacionContainer.appendChild(botonSiguiente);
      }

     
      itemsPorPaginaSelect.addEventListener("change", (e) => {
          itemsPorPagina = parseInt(e.target.value);
          paginaActual = 1; 
          renderCarrito();
      });

      
      renderCarrito();

      // Eliminar producto del carrito
      carritoContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("carrito__eliminar")) {
          const index = parseInt(event.target.dataset.index);
          carrito.splice(index, 1);
          localStorage.setItem("carrito", JSON.stringify(carrito));
          renderCarrito();
        }
      });
  }
});


//buscador 
document.addEventListener("DOMContentLoaded", () => {
  console.log("Buscador JavaScript cargado correctamente");

  const buscadorInput = document.querySelector(".buscador__input");
  let timeout;


  buscadorInput.addEventListener("input", () => {
    
      clearTimeout(timeout);

      const query = buscadorInput.value.trim().toLowerCase();

      
      if (query.length < 3) {
          return;
      }

      
      timeout = setTimeout(() => {
          fetch(`http://localhost:8080/api/camisetas/buscar?nombre=${query}`)
              .then(response => response.json())
              .then(resultados => {
                  if (resultados.length === 0) {
                      // No mostrar alerta si no se encuentran resultados
                      console.log("Camiseta no encontrada."); // Solo logueamos el error en la consola
                  } else {
                      // Redirigimos al producto si se encuentran camisetas
                      const idCamiseta = resultados[0].id;
                      window.location.href = `producto.html?id=${idCamiseta}`;
                  }
              })
              .catch(error => {
                  console.error("Error al buscar camisetas:", error);
                  alert("Hubo un problema al buscar las camisetas. Inténtalo de nuevo.");
              });
      }, 500); 
  });
});



