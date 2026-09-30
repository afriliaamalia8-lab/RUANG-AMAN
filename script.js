// --- SPA ROUTING SYSTEM ---
function navigateTo(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(`page-${pageId}`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update Nav Link Active State
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${pageId}`) {
            item.classList.add('active');
        }
    });

    // Close Mobile Menu if open
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }

    // Scroll back to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- MOBILE MENU TOGGLE ---
document.getElementById('mobile-menu').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// --- UPLOAD LATAR FOTO (KUSTOM BACKGROUND & LOCALSTORAGE) ---
const bgUploader = document.getElementById('bg-upload');

bgUploader.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;
            // Set foto sebagai background body
            document.body.style.backgroundImage = `url('${imageUrl}')`;
            // Simpan ke LocalStorage agar tetap bertahan saat web direfresh
            localStorage.setItem('customBg', imageUrl);
        };
        reader.readAsDataURL(file);
    }
});

// Load background tersimpan saat halaman dibuka
window.addEventListener('DOMContentLoaded', () => {
    const savedBg = localStorage.getItem('customBg');
    if (savedBg) {
        document.body.style.backgroundImage = `url('${savedBg}')`;
    }
});

// --- INTERAKSI CEK MOOD HARI INI ---
function setMood(mood) {
    const responseBox = document.getElementById('mood-response');
    let message = "";

    switch(mood) {
        case 'senang':
            message = "✨ Senang mendengarnya! Bagikan energimu di Dinding Tulisan hari ini ya.";
            break;
        case 'sedih':
            message = "💙 Tidak apa-apa merasa sedih. Perasaanmu valid. Cobalah tuangkan di Tulis Perasaan.";
            break;
        case 'lelah':
            message = "🌿 Istirahat sejenak ya. Kamu sudah berjuang keras hari ini.";
            break;
        case 'cemas':
            message = "🫁 Tarik napas dalam-dalam... Hembuskan perlahan. Kamu aman di sini.";
            break;
        case 'marah':
            message = "🔥 Luapkan emosimu lewat tulisan di ruang anonim agar dadamu terasa lebih lapang.";
            break;
    }

    responseBox.textContent = message;
    responseBox.classList.remove('hidden');
}

// --- FORM SUBMISSION & DINDING TULISAN ---
document.getElementById('form-perasaan').addEventListener('submit', function(e) {
    e.preventDefault();

    const isi = document.getElementById('isi-tulisan').value;
    const isAnonim = document.getElementById('anonim').checked;
    const inputNama = document.getElementById('nama-penulis').value;

    let nama = isAnonim ? "Anonim" : (inputNama.trim() !== "" ? inputNama : "Anonim");

    // Dynamic insertion ke Dinding Tulisan
    const wallList = document.getElementById('wall-list');
    const newQuote = document.createElement('div');
    newQuote.className = 'card quote-card';
    newQuote.innerHTML = `
        <p class="quote-text">"${escapeHtml(isi)}"</p>
        <span class="quote-author">— ${escapeHtml(nama)}</span>
    `;
    wallList.prepend(newQuote);

    // Reset Form & Tampilkan Pesan Sukses
    this.reset();
    document.getElementById('anonim').checked = true;
    document.getElementById('success-message').classList.remove('hidden');

    // Scroll ke pesan sukses
    document.getElementById('success-message').scrollIntoView({ behavior: 'smooth' });
});

// Helper XSS Prevention
function escapeHtml(text) {
    return text
        .replace(/&/g, "&")
        .replace(/</g, "<")
        .replace(/>/g, ">")
        .replace(/"/g, """)
        .replace(/'/g, "'");
}
