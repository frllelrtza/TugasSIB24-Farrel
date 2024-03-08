document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  


    function validateForm() {
      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const noHp = document.getElementById("no_hp").value;
      const prodi = document.getElementById("prodi").value;
  
      if (nama.trim() === "") {
        alert("Mohon masukkan nama Anda.");
        return false;
      }
  
      if (email.trim() === "" || !isValidEmail(email)) {
        alert("Mohon masukkan alamat email yang valid.");
        return false;
      }
  
      if (noHp.trim() === "" || !isValidPhoneNumber(noHp)) {
        alert("Mohon masukkan nomor HP yang valid (format: xxxx-xxxx-xxxx).");
        return false;
      }
  
      if (prodi === "") {
        alert("Mohon pilih program studi Anda.");
        return false;
      }
  
      return true;
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function isValidPhoneNumber(phoneNumber) {
      const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
      return phoneRegex.test(phoneNumber);
    }
  });