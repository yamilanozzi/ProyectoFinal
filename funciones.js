documdocument.getElementById("descargarcv").addEventListener('click', () => {
console.log("CV descargado");
})

const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(`Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);
  if (!name || !email || !message) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  form.reset();
});

