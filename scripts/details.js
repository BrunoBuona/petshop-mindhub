let jugueteId= new URL(window.location.href).searchParams.get('id')

let container18 = document.getElementById("container18");

async function getDatos() {
  try {
    let id = location.search.slice(4);
    console.log(id);
    let res = await fetch("https://apipetshop.herokuapp.com/api/articulos");
    let data = await res.json();
    console.log(data);
    let dataShop= data.response
    console.log(dataShop);
    // let juguetes= dataShop.filter(e => e.tipo === "Juguete")
    // console.log(juguetes);
    let juegueteDetail = dataShop.find(object => object._id == jugueteId)
    createCardDetails(juegueteDetail)
  } catch (error) {
    console.log(error);
  }
}
getDatos();

function createCardDetails(event) {
  let div = document.createElement("div");
  div.className = "row g-0 shadow";
  div.innerHTML = `
  <article class="card cardDetails" style="width: 30rem">
  <img
    src="${event.imagen}"
    class="card-img-top"
    alt="${event.nombre}"
    height="70%"
  />
  <h5 class="card-title text-center pb-2">${event.nombre}</h5>
  <p class="card-text text-center pb-2">${event.descripcion}</p>
  <div class="d-flex flex-column align-items-center justify-content-evenly pb-2">
    <p class="pb-2">Precio: US$ ${event.precio}</p>
    <a href="../pages/juguetes.html" class="btn btn-success pb-2">Regresar</a>
  </div>
  
</article>`
                            ;
  container18.appendChild(div);
}
let objetoPrincipal;