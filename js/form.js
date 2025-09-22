document.getElementById("kontaktForma").addEventListener("submit", function(e) {
  e.preventDefault();

  let ime = document.getElementById("ime").value.trim();
  let email = document.getElementById("email").value.trim();
  let status = document.getElementById("porukaStatus");

  if (ime.length < 2) {
    status.textContent = "Ime mora imati barem 2 slova.";
    return;
  }
  if (!email.includes("@")) {
    status.textContent = "Unesite ispravan email.";
    return;
  }
  localStorage.setItem("kontaktIme", ime);
  localStorage.setItem("kontaktEmail", email);
  localStorage.setItem("kontaktPoruka", poruka);

  status.textContent = "Poruka uspješno poslana!";
  this.reset()
})
