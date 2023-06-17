// Simpan elemen loading screen ke dalam variabel
var loadingScreen = document.getElementById("loading-screen");

// Tampilkan loading screen
loadingScreen.classList.replace("d-none", "d-flex");

// Hilangkan loading screen setelah 2 detik
setTimeout(function() {
  loadingScreen.classList.replace("d-flex", "d-none");
}, 2000);
