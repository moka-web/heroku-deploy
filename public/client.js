const schema = normalizr.schema;
const denormalize = normalizr.denormalize;
//
const author = new schema.Entity("authors", {}, { idAttribute: "email" });
const message = new schema.Entity("messages", {
  author: author,
});
const chats = new schema.Entity("chats", { chats: [message] });

const socket = io();

function convertirFecha(timestamp) {
  let fecha = new Date(timestamp);
  fecha = `${fecha.getDate()}/${
    fecha.getMonth() + 1
  }/${fecha.getFullYear()} ${fecha.getHours()}:${
    fecha.getMinutes().toString().length == 1
      ? `0${fecha.getMinutes()}`
      : fecha.getMinutes()
  }:${
    fecha.getSeconds().toString().length == 1
      ? `0${fecha.getSeconds()}`
      : fecha.getSeconds()
  }`;
  return fecha;
}

function pintarChat(data) {
  const divchat = document.getElementById("chat");
  const dataD = denormalize(data.result, chats, data.entities);
  const chat = dataD.chats.reduce(
    (acu, act) =>
      (acu += `<p style="margin:5px;"><span class="fw-bold" style="color:blue;">${
        act.author.email
      }</span><span style="color:brown;"> [${convertirFecha(
        act.timestamp
      )}]</span><span class="fst-italic" style="color:green;"> : ${
        act.text
      }</span><img style="width: 35px; height: 35px;" src="${
        act.author.avatar
      }"/></p>`),
    ""
  );
  divchat.innerHTML = chat;

  let porcentaje =(JSON.stringify(data).length / JSON.stringify(dataD).length) * 100;

  document.getElementById("compresion").textContent = `Compresión: ${Math.trunc(
    porcentaje
  )}%`;
}

document.getElementById("form-chat").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = document.getElementById("form-chat");
  const email = document.getElementById("email").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const alias = document.getElementById("alias").value;
  const avatar = document.getElementById("avatar").value;
  const mensaje = document.getElementById("mensaje").value;
  const timestamp = Date.now();
  const mensajeCompleto = {
    author: { email, nombre, apellido, edad, alias, avatar },
    text: mensaje,
    timestamp,
  };
  socket.emit("mensaje", mensajeCompleto);
  form.reset();
  return false;
});

socket.on("chat", (data) => {
  pintarChat(data);
});

pintarChat(dataN);
