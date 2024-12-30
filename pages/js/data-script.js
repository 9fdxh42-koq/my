// Menangani navigasi antar bagian kartu
const batten = document.querySelectorAll(".card-batten button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
    const targetSection = e.target.getAttribute("data-section");
    const section = document.querySelector(targetSection);

    targetSection !== "#about" ? card.classList.add("is-active") : card.classList.remove("is-active");
    card.setAttribute("data-state", targetSection);

    sections.forEach(s => s.classList.remove("is-active"));
    batten.forEach(b => b.classList.remove("is-active"));

    e.target.classList.add("is-active");
    section.classList.add("is-active");

    // Menambahkan history state tanpa memuat ulang halaman
    window.history.pushState({}, '', targetSection);
};

batten.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});

// Menangani sidebar toggle
document.getElementById('menuBtn').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menuBtn');

    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-200px'; // hide
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        sidebar.style.left = '0px'; // show
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }
});

// Fungsi tambahan untuk tombol navigasi
function keDomainAbout() {
    handleButtonClick({ target: batten[0] });
}

function keDomainProgres() {
    handleButtonClick({ target: batten[1] });
}

function keDomainContacts() {
    handleButtonClick({ target: batten[2] });
}

function keDomainTesti() {
    handleButtonClick({ target: batten[3] });
}

function keDomainBlog() {
    handleButtonClick({ target: batten[4] });
}

// Smooth scrolling untuk anchor links
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: "smooth" });
    });
});

// Eksekusi audio dan fullscreen
function exec() {
    document.getElementById('audio').play();
    openFullscreen();
}
