const emailList = document.getElementById("email-list");
const beginButton = document.getElementById("comincia");
const reGenButton = document.getElementById("rigenera");
// versione con il fetch
function emailGenerator() {
  let emailHtml = "";
  for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((Response) => Response.json())
      .then((data) => {
        emailHtml += `<li class="list-group-item text-bg-dark">${data.response}</li>`;
        emailList.innerHTML = emailHtml;
      })
      .catch((error) => console.error("Errore nel fetch", error));
  }
}

beginButton.addEventListener("click", () => {
  beginButton.classList.add("d-none");
  reGenButton.classList.remove("d-none");
  emailGenerator();
});
reGenButton.addEventListener("click", () => {
  emailList.innerHTML = "";
  emailGenerator();
});


// versione con axios
// function emailGenerator() {
//   let emailHtml = "";
//   for (let i = 0; i < 10; i++) {
//     axios
//       .get("https://flynn.boolean.careers/exercises/api/random/mail")
//       .then((response) => {
//         emailHtml += `<li class="list-group-item text-bg-dark">${response.data.response}</li>`;
//         emailList.innerHTML = emailHtml;
//       })
//       .catch((error) => console.error("Errore nel fetch", error));
//   }
// }