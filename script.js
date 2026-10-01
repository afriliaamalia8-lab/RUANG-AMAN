/* ==========================================================================
   RUANG AMAN — FULL JAVASCRIPT (script.js)
   Berkolaborasi dengan Duta Kesehatan Mental
   ========================================================================== */

// --- DATABASE 6 ARTIKEL PSIKOEDUKASI DKM ---
const articlesData = {
    'stres-akademik': {
        title: "📄 Mengelola Stres Akademik: Berdamai dengan Tekanan Belajar",
        time: "5 Menit Baca",
        content: `
            <p><strong>1. Kenali Respon Tubuhmu Terhadap Stres Akademik</strong></p>
            <p>Pernahkah kamu merasa jantung berdebar keras sebelum ujian atau sulit berkonsentrasi saat melihat jadwal tugas? Itu adalah tanda tubuhmu mengaktifkan sistem alarm alami saat menganggap beban belajar sebagai tekanan berat.</p>
            
            <p><strong>2. Strategi Menghadapi Beban Tugas:</strong></p>
            <ul>
                <li><strong>Teknik Chunking:</strong> Pecah tugas besar menjadi bagian-bagian kecil. Fokuslah menyelesaikan 1 paragraf terlebih dahulu.</li>
                <li><strong>Teknik Pomodoro:</strong> Belajar fokus selama 25 menit, lalu ambil istirahat total selama 5 menit. Ulangi 4 kali sebelum mengambil istirahat panjang.</li>
            </ul>

            <div class="exercise-box">
                <strong>✨ Latihan 1 Menit:</strong><br>
                Tutup matamu sejenak. Tarik napas perlahan selama 4 detik, tahan selama 7 detik, lalu hembuskan perlahan melalui mulut selama 8 detik. Ulangi 3 kali.
            </div>
        `
    },
    'overthinking': {
        title: "📄 Overthinking: Cara Memutus Lingkaran Pikiran Berputar",
        time: "5 Menit Baca",
        content: `
            <p><strong>1. Bedakan "Mencari Solusi" dan "Overthinking"</strong></p>
            <p>Berpikir solutif berfokus pada: <em>"Apa yang bisa aku lakukan sekarang?"</em>, sedangkan overthinking berputar pada kecemasan: <em>"Bagaimana kalau nanti gagal? Bagaimana kalau orang kecewa?"</em></p>

            <p><strong>2. Metode "Jadwal Khawatir" (Worry Time):</strong></p>
            <ul>
                <li>Sediakan waktu khusus 15 menit setiap sore hari untuk mencatat dan memikirkan kekhawatiranmu.</li>
                <li>Jika kecemasan muncul di luar jam tersebut, catat di kertas dan tunda pembahasannya sampai jam khawatir tiba.</li>
            </ul>

            <div class="exercise-box">
                <strong>✨ Latihan Grounding 5-4-3-2-1:</strong><br>
                Sebutkan 5 benda yang kamu lihat, 4 tekstur yang bisa kamu sentuh, 3 suara yang kamu dengar, 2 aroma yang kamu cium, dan 1 hal baik tentang dirimu saat ini.
            </div>
        `
    },
    'bullying': {
        title: "📄 Menghadapi Bullying: Hakmu untuk Merasa Aman",
        time: "6 Menit Baca",
        content: `
            <p><strong>1. Perundungan Bukan Salahmu</strong></p>
            <p>Bullying mencakup tindakan verbal, sosial, maupun cyberbullying yang bertujuan menyakiti orang lain. Ingatlah bahwa kamu berhak mendapatkan rasa aman di mana pun kamu berada.</p>

            <p><strong>2. Langkah Aman Perlindungan Diri:</strong></p>
            <ul>
                <li><strong>Beri Batasan Tegas:</strong> Tatap mata pelaku dan katakan dengan suara datar: "Hentikan, aku tidak suka bercandaan ini."</li>
                <li><strong>Dokumentasikan Bukti:</strong> Simpan tangkapan layar (screenshot) pesan atau catat waktu kejadian.</li>
                <li><strong>Laporkan:</strong> Ceritakan kepada guru BK, orang tua, atau pengurus DKM/konselor sebaya. Melapor adalah tindakan perlindungan diri.</li>
            </ul>

            <div class="exercise-box">
                <strong>✨ Penguatan Diri:</strong><br>
                Letakkan tangan kanan di dada kiri. Ucapkan pelan: "Perlakuan buruk orang lain tidak menentukan nilai diriku. Aku berhak dihormati."
            </div>
        `
    },
    'self-love': {
        title: "📄 Self-Love Bukan Egois: Belajar Menghargai Diri Sendiri",
        time: "4 Menit Baca",
        content: `
            <p><strong>1. Mengganti Dialog Batin (Self-Talk) yang Kejam</strong></p>
            <p>Saat berbuat salah, kita sering mengutuk diri sendiri. Cobalah melatih dialog batin yang konstruktif: <em>"Aku membuat kesalahan hari ini, tapi itu wajar. Aku bisa belajar dan mencobanya lagi besok."</em></p>

            <p><strong>2. Menetapkan Batasan (Boundaries):</strong></p>
            <ul>
                <li>Berani berkata "tidak" pada ajakan atau permintaan bantuan yang melebihi kapasitas emosionalmu saat itu.</li>
                <li>Membatasi konsumsi media sosial jika mulai memicu kebiasaan membanding-bandingkan diri.</li>
            </ul>

            <div class="exercise-box">
                <strong>✨ Latihan 1 Menit:</strong><br>
                Sebutkan 3 hal kecil yang berhasil kamu lalui minggu ini, dan berikan apresiasi yang tulus pada dirimu sendiri.
            </div>
        `
    },
    'bantu-teman': {
        title: "📄 Cara Menjadi Teman Pendengar yang Baik (P3K Emosional)",
        time: "5 Menit Baca",
        content: `
            <p><strong>1. Menjadi Pendengar Aktif tanpa Menghakimi</strong></p>
            <p>Saat teman datang bercerita, sering kali mereka hanya ingin didengar dan diakui perasaannya. Berikan perhatian penuh tanpa terburu-buru menghakimi atau memotong pembicaraan.</p>

            <p><strong>2. Hindari Toxic Positivity:</strong></p>
            <ul>
                <li>❌ Hindari: <em>"Kamu kurang bersyukur aja kali..."</em> atau <em>"Jangan sedih terus dong!"</em></li>
                <li>✅ Gantikan dengan: <em>"Pasti berat banget ya menghadapi itu. Makasih udah mau cerita ke aku."</em></li>
            </ul>

            <div class="exercise-box">
                <strong>✨ Latihan 1 Menit:</strong><br>
                Kirimkan pesan singkat atau sapaan hangat kepada satu orang teman yang sudah lama tidak kamu sapa untuk menanyakan kabarnya secara tulus.
            </div>
        `
    },
    'cari-bantuan': {
        title: "📄 Kapan Harus Mencari Bantuan Profesional?",
        time: "4 Menit Baca",
        content: `
            <p><strong>1. Sinyal Alarm Kesejahteraan Mental</strong></p>
            <p>Pertimbangkan untuk mencari konseling profesional jika kamu mengalami perasaan sedih/cemas berkepanjangan lebih dari 2 minggu, gangguan tidur parah, atau kehilangan minat total pada aktivitas harian.</p>

            <p><strong>2. Kontak Bantuan Darurat Gratis:</strong></p>
            <ul>
                <li><strong>Hotline Sehat Jiwa Kemenkes:</strong> Hubungi 119 (Ekstensi 8) — Gratis 24 Jam.</li>
                <li><strong>Layanan BK Sekolah / DKM:</strong> Konsultasikan langsung kepada konselor sekolah.</li>
                <li><strong>Puskesmas Terdekat:</strong> Akses layanan poli jiwa/psikologi menggunakan BPJS Kesehatan.</li>
            </ul>

            <div class="exercise-box">
                <strong>✨ Latihan Antisipasi:</strong><br>
                Simpan nomor kontak darurat 119 di dalam daftar kontak telepon selulermu sebagai bentuk kesiapsiagaan diri.
            </div>
        `
    }
};

// --- SYSTEM ROUTING PERPINDAHAN HALAMAN (SPA) ---
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const selectedPage = document.getElementById(pageId) || document.getElementById(`page-${pageId}`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === pageId) {
            item.classList.add('active');
        }
    });

    const navLinks = document.getElementById('nav-links');
    if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- FUNGSI TAMPILAN DETAIL ARTIKEL ---
function openArticle(articleKey) {
    const data = articlesData[articleKey];
    if (!data) return;

    const detailContainer = document.getElementById('article-detail-content');
    if (detailContainer) {
        detailContainer.innerHTML = `
            <h2>${data.title}</h2>
            <div class="meta">⏱️ Estimasi Waktu: ${data.time}</div>
            <div class="article-body">
                ${data.content}
            </div>
        `;
    }

    navigateTo('baca-detail');
}

// --- INTERAKSI CEK MOOD ---
function setMood(mood) {
    const responseBox = document.getElementById('mood-response');
    if (!responseBox) return;

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

// --- PENYIMPANAN TULISAN KE LOCALSTORAGE (PERSISTEN) ---
function muatTulisan() {
    const wallList = document.getElementById('wall-list') || document.getElementById('containerDinding');
    if (!wallList) return;

    const daftarTulisan = JSON.parse(localStorage.getItem('ruangAman_tulisan')) || [];

    if (daftarTulisan.length === 0) {
        wallList.innerHTML = `
            <div class="card quote-card">
                <p class="quote-text">Belum ada tulisan tersimpan. Bagikan cerita pertamamu!</p>
            </div>`;
        return;
    }

    wallList.innerHTML = '';
    daftarTulisan.slice().reverse().forEach(item => {
        const card = document.createElement('div');
        card.className = 'card quote-card';
        card.innerHTML = `
            <p class="quote-text">"${escapeHtml(item.teks)}"</p>
            <span class="quote-author">— ${escapeHtml(item.penulis)}</span>
        `;
        wallList.appendChild(card);
    });
}

// --- EVENT LISTENER & INIT ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Set gambar latar utama secara langsung
    document.body.style.backgroundImage = "url('1000255441.png.jpg')";

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const navLinks = document.getElementById('nav-links');
            if (navLinks) navLinks.classList.toggle('active');
        });
    }

    // 3. Handling Submit Form Tulisan (Simpan ke localStorage)
    const formPerasaan = document.getElementById('form-perasaan') || document.getElementById('formTulis');
    if (formPerasaan) {
        formPerasaan.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah refresh halaman

            const inputTeks = document.getElementById('isi-tulisan') || document.getElementById('inputTeks');
            const inputAnonim = document.getElementById('anonim') || document.getElementById('inputAnonim');
            const inputNama = document.getElementById('nama-penulis');

            const teks = inputTeks ? inputTeks.value.trim() : '';
            const isAnonim = inputAnonim ? inputAnonim.checked : true;
            let namaPenulis = isAnonim ? 'Anonim' : (inputNama && inputNama.value.trim() !== '' ? inputNama.value : 'Anonim');

            if (!teks) {
                alert('Silakan tuliskan perasaan Anda terlebih dahulu.');
                return;
            }

            // Simpan ke localStorage
            const daftarTulisan = JSON.parse(localStorage.getItem('ruangAman_tulisan')) || [];
            daftarTulisan.push({
                teks: teks,
                penulis: namaPenulis
            });
            localStorage.setItem('ruangAman_tulisan', JSON.stringify(daftarTulisan));

            // Reset Form & Tampilkan Notifikasi
            this.reset();
            if (inputAnonim) inputAnonim.checked = true;

            const successMsg = document.getElementById('success-message') || document.getElementById('successCard');
            if (successMsg) {
                successMsg.classList.remove('hidden');
            }

            // Perbarui daftar dan navigasi ke Dinding
            muatTulisan();
            navigateTo('dinding');
        });
    }

    // Muat data awal
    muatTulisan();
});

// Helper XSS Protection
function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
