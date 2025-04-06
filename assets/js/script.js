document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan refresh halaman

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Menampilkan alert sebagai contoh
    alert(`Pesan Anda telah terkirim!\n\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`);

    // Reset form setelah pengiriman
    document.getElementById("contactForm").reset();
});
