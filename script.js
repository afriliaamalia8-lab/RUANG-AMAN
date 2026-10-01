/* ==========================================================================
   RUANG AMAN — FULL JAVASCRIPT (script.js)
   Berkolaborasi dengan Duta Kesehatan Mental
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. SET BACKGROUND BAWAAN
    document.body.style.backgroundImage = "url('1000255441.png.jpg')";

    // 2. NAVIGASI TAMPILAN HALAMAN (Single Page Application - SPA)
    window.navigateTo = function(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Perbarui class active pada menu navigasi
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            if (item.getAttribute('data-page') === pageId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Tutup menu mobile jika sedang terbuka
        const navLinks = document.getElementById('nav-links');
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }

        // Scroll halus ke atas
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Toggle menu untuk tampilan mobile
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. FITUR MOOD TRACKER INTERAKTIF
    const moodButtons = document.querySelectorAll('.mood-btn');
    const moodResponseBox = document.getElementById('mood-response');

    const pesanMood = {
        'senang': '😊 Senang mendengarnya! Terus sebarkan energi positifmu ya.',
        'sedih': '💙 Tidak apa-apa merasa sedih. Tarik napas dalam-dalam, kamu tidak sendirian.',
        'cemas': '🌿 Coba luangkan waktu sebentar, rehat sejenak dan fokus pada napasmu.',
        'marah': '🔥 Wajar jika kamu merasa kesal. Cobalah salurkan perasaanmu lewat tulisan di Ruang Aman.',
        'lelah': '🛋️ Istirahatlah. Tubuh dan pikiranmu butuh waktu untuk memulihkan energi.'
    };

    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.getAttribute('data-mood');
            if (moodResponseBox && pesanMood[mood]) {
                moodResponseBox.textContent = pesanMood[mood];
                moodResponseBox.classList.remove('hidden');
            }
        });
    });

    // 4. PENYIMPANAN DATA TULISAN (Mencegah teks hilang setelah dikirim)
    const formTulis = document.getElementById('formTulis');
    const inputTeks = document.getElementById('inputTeks');
    const inputAnonim = document.getElementById('inputAnonim');

    // Fungsi memuat dan menampilkan tulisan dari localStorage
    function muatTulisan() {
        const containerDinding = document.getElementById('containerDinding');
        if (!containerDinding) return;

        const daftarTulisan = JSON.parse(localStorage.getItem('ruangAman_tulisan')) || [];
        
        if (daftarTulisan.length === 0) {
            containerDinding.innerHTML = `
                <div class="card quote-card">
                    <p class="quote-text">Belum ada tulisan tersimpan. Bagikan cerita pertamamu!</p>
                </div>`;
            return;
        }

        containerDinding.innerHTML = '';
        daftarTulisan.reverse().forEach(item => {
            const card = document.createElement('div');
            card.className = 'card quote-card';
            card.innerHTML = `
                <p class="quote-text">"${escapeHtml(item.teks)}"</p>
                <small class="quote-author">— ${escapeHtml(item.penulis)} (${item.tanggal})</small>
            `;
            containerDinding.appendChild(card);
        });
    }

    // Event handler pengiriman formulir
    if (formTulis) {
        formTulis.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah halaman refresh otomatis saat dikirim

            const teks = inputTeks ? inputTeks.value.trim() : '';
            const isAnonim = inputAnonim ? inputAnonim.checked : true;
            const namaPenulis = isAnonim ? 'Anonim' : 'Teman Ruang Aman';

            if (teks === '') {
                alert('Silakan tuliskan perasaan Anda terlebih dahulu.');
                return;
            }

            // Ambil data lama, tambahkan data baru
            const daftarTulisan = JSON.parse(localStorage.getItem('ruangAman_tulisan')) || [];
            const dataBaru = {
                teks: teks,
                penulis: namaPenulis,
                tanggal: new Date().toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                })
            };

            daftarTulisan.push(dataBaru);
            localStorage.setItem('ruangAman_tulisan', JSON.stringify(daftarTulisan));

            // Bersihkan input formulir
            inputTeks.value = '';

            // Tampilkan pesan sukses jika ada
            const successCard = document.getElementById('successCard');
            if (successCard) {
                successCard.classList.remove('hidden');
                setTimeout(() => {
                    successCard.classList.add('hidden');
                }, 4000);
            }

            // Perbarui daftar tulisan di Dinding Tulisan dan berpindah halaman
            muatTulisan();
            navigateTo('dinding');
        });
    }

    // Utility untuk mencegah XSS (Injeksi HTML)
    function escapeHtml(string) {
        const div = document.createElement('div');
        div.textContent = string;
        return div.innerHTML;
    }

    // Tampilkan tulisan tersimpan saat halaman pertama kali dibuka
    muatTulisan();
});
