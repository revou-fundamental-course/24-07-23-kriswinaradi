function validateForm() {
  var name = document.getElementById("nama").value.trim();
  var email = document.getElementById("email").value.trim();
  var destination = document.getElementById("destination").value;
  console.log(name);

  if (name === "") {
    alert("Nama tidak boleh kosong.");
    return false;
  }

  if (name.length < 3 || name.length > 30) {
    alert("Nama harus terdiri dari 3 hingga 30 karakter.");
    return false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Email tidak valid.");
    return false;
  }

  if (destination === "0") {
    alert("Anda belum memilih destinasi.");
    return false;
  }

  return true;
}
