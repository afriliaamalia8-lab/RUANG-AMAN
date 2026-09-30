/**
 * Ruang Aman · Pojok Baca DKM
 * JavaScript Application Logic
 */

// Dataset 6 Artikel Psikoedukasi
const articles = [
    {
        id: 'stres-akademik',
        title: 'Mengelola Stres Akademik',
        category: 'Stres & Tekanan',
        time: '4 menit',
        summary: [
            'Stres akademik itu normal — yang penting cara mengelolanya.',
            'Teknik 4-7-8 dan pecah tugas jadi 15 menit bisa membantu hari ini.',
            'Kalau stres berlanjut lebih dari 2 minggu, itu tanda untuk mencari bantuan.'
        ],
        content: `
            <p><strong>1. Kenali dulu, apa yang terjadi</strong></p>
            <p>Coba ingat terakhir kali kamu merasa dadamu sesak sebelum ujian. Atau ketika tugas menumpuk dan kamu hanya bisa menatap layar tanpa bisa mulai. Itu bukan malas. Itu tanda tubuhmu sedang memberi sinyal: "aku kewalahan."</p>
            <p>Stres akademik muncul ketika tuntutan yang kita hadapi terasa lebih besar dari sumber daya yang kita punya (waktu, tenaga, atau dukungan).</p>
            <p><strong>2. Satu langkah kecil hari ini</strong></p>
            <p><strong>Teknik napas 4-7-8:</strong> Tarik napas 4 detik, tahan 7 detik, buang perlahan 8 detik. Ulangi tiga kali untuk menenangkan sistem saraf.</p>
            <p><strong>Pecah tugas 15 menit:</strong> Alih-alih "aku harus menyelesaikan makalah 10 halaman", ganti jadi "aku akan buka laptop dan tulis judulnya selama 15 menit". Sering kali, kamu justru lanjut karena sudah mulai.</p>
        `,
        exercise: 'Ambil napas dalam. Buang perlahan. Katakan pada dirimu: "Aku melakukan yang terbaik dengan yang aku punya. Itu cukup untuk hari ini."'
    },
    {
        id: 'overthinking',
        title: 'Overthinking: Kenali & Atasi',
        category: 'Kecemasan',
        time: '5 menit',
        summary: [
            'Overthinking itu beda dengan sekadar berpikir — ia berputar tanpa arah.',
            'Teknik "jadwal khawatir" dan "uji pikiran" bisa memutus lingkaran itu.',
            'Kalau overthinking mengganggu tidur & aktivitas, itu tanda butuh bantuan.'
        ],
        content: `
            <p><strong>1. Bedanya khawatir dan overthinking</strong></p>
            <p>Khawatir sehat: "Besok ada presentasi. Aku perlu latihan 20 menit malam ini."</p>
            <p>Overthinking: "Besok ada presentasi. Kalau aku salah ngomong gimana? Kalau teman-teman ketawa? Kenapa aku nggak bisa santai kayak orang lain?"</p>
            <p><strong>2. Teknik "Jadwal Khawatir"</strong></p>
            <p>Pilih waktu 15 menit setiap hari (misal jam 7 malam). Di luar jam itu, katakan: "Nanti aku pikirkan itu di jam 7." Berikan ruang yang jelas agar pikiran cemas tidak menyusup sepanjang hari.</p>
        `,
        exercise: 'Tulis satu pikiran yang paling sering berputar di kepalamu. Lalu tulis satu bukti nyata bahwa pikiran itu belum tentu benar.'
    },
    {
        id: 'bullying',
        title: 'Bullying: Apa yang Bisa Dilakukan',
        category: 'Relasi & Sosial',
        time: '4 menit',
        summary: [
            'Bullying bukan "bercanda" — ia melukai, dan itu bukan salahmu.',
            'Ada langkah nyata yang bisa kamu lakukan, baik sebagai korban maupun saksi.',
            'Kamu tidak harus menghadapinya sendiri — ada jalur bantuan.'
        ],
        content: `
            <p>Bullying adalah perilaku yang sengaja menyakiti, berulang, dan ada ketidakseimbangan kuasa. Kalau kamu merasa dilukai, perasaanmu valid.</p>
            <p><strong>Langkah untuk korban:</strong> Simpan bukti (screenshot), cerita ke satu orang yang dipercaya, dan melapor ke pihak berwenang. Melapor itu melindungi diri, bukan mengadu.</p>
        `,
        exercise: 'Letakkan tanganmu di dadamu. Katakan: "Apa yang mereka lakukan bukan salahku. Aku berhak aman." Ulangi tiga kali.'
    },
    {
        id: 'self-love',
        title: 'Self-Love Bukan Egois',
        category: 'Diri & Harga Diri',
        time: '3 menit',
        summary: [
            'Self-love bukan berarti egois atau menutup mata dari kekurangan.',
            'Ia soal memperlakukan diri seperti kita memperlakukan sahabat.',
            'Self-love bukan tujuan akhir — ia latihan setiap hari.'
        ],
        content: `
            <p>Self-love yang sebenarnya adalah cara kamu memperlakukan dirimu sendiri ketika tidak ada yang melihat.</p>
            <p><strong>Egois:</strong> Mengambil hak orang lain demi dirimu.<br>
            <strong>Self-Love:</strong> Menjaga hakmu sendiri, tanpa mengambil hak orang lain.</p>
        `,
        exercise: 'Tulis 3 hal yang kamu syukuri tentang dirimu — tentang caramu berpikir, caramu bertahan, atau caramu peduli.'
    },
    {
        id: 'bantu-teman',
        title: 'Cara Membantu Teman yang Sedih',
        category: 'Relasi & Sosial',
        time: '4 menit',
        summary: [
            'Yang paling dibutuhkan temanmu bukan nasihat — tapi kehadiranmu.',
            'Ada kalimat yang membantu, dan ada yang justru menyakiti.',
            'Kamu bukan terapis — ketahui batasmu, dan jangan lupa jaga dirimu.'
        ],
        content: `
            <p>Dengarkan tanpa memotong. Tanya: <em>"Kamu mau aku dengerin aja, atau mau aku bantu cari solusi?"</em></p>
            <p>Hindari kalimat seperti: <em>"Masih banyak yang lebih susah dari kamu"</em> atau <em>"Kamu terlalu sensitif"</em>.</p>
        `,
        exercise: 'Kirim satu pesan singkat ke teman yang sedang sedih: "Hey, aku kepikiran kamu. Gimana kabarmu?"'
    },
    {
        id: 'cari-bantuan',
        title: 'Kapan Harus Cari Bantuan?',
        category: 'Diri & Harga Diri',
        time: '3 menit',
        summary: [
            'Mencari bantuan bukan tanda lemah — itu tanda kamu peduli pada dirimu.',
            'Ada tanda-tanda jelas yang berarti "sudah waktunya".',
            'Ada banyak jalur bantuan: dari teman, keluarga, sampai hotline gratis.'
        ],
        content: `
            <p>Jika kamu mengalami sedih berkepanjangan > 2 minggu, cemas berlebihan, sulit tidur, atau memiliki pikiran untuk menyakiti diri, itu tanda untuk menghubungi bantuan.</p>
            <p><strong>Hotline Gratis Kemenkes:</strong> 119 ext 8 (24 Jam)</p>
        `,
        exercise: 'Simpan nomor 119 ext 8 di ponselmu sekarang sebagai langkah antisipasi diri.'
    }
];

// Render Daftar Artikel ke DOM
function renderArticles(filter = 'all') {
    const listContainer = document.getElementById('articleList');
    if (!listContainer) return;
    
    listContainer.innerHTML = '';

    const filtered = filter === 'all' 
        ? articles 
        : articles.filter(a => a.category === filter);

    filtered.forEach(article => {
        const item = document.createElement('article');
        item.className = 'article-bubble-item';
        item.onclick = () => openModal(article.id);
        item.innerHTML = `
            <div class="article-meta">
                <span class="category-tag">${article.category}</span>
                <span>⏱ ${article.time}</span>
            </div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-summary">${article.summary[0]}</p>
        `;
        listContainer.appendChild(item);
    });
}

// Handler Filter Kategori
function initFilterNav() {
    const buttons = document.querySelectorAll('.pill-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.getAttribute('data-category');
            renderArticles(category);
        });
    });
}

// Buka Modal Dialog
function openModal(id) {
    const article = articles.find(a => a.id === id);
    if (!article) return;

    const modalBody = document.getElementById('modalBody');
    const modalOverlay = document.getElementById('readerModal');

    modalBody.innerHTML = `
        <span class="category-tag">${article.category}</span>
        <h2 style="margin-top:8px;">${article.title}</h2>
        <p style="font-size:0.85rem; color:var(--secondary-text);">Estimasi Baca: ${article.time}</p>
        
        <div class="summary-box">
            <strong>📌 Ringkasan 3 Poin:</strong>
            <ul>
                ${article.summary.map(s => `<li>${s}</li>`).join('')}
            </ul>
        </div>

        <div class="article-content">
            ${article.content}
        </div>

        <div class="exercise-card">
            <strong>✨ Latihan 1 Menit:</strong>
            <p style="margin-top:6px; font-size:0.9rem;">${article.exercise}</p>
        </div>
    `;

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

// Tutup Modal Dialog
function closeModal() {
    const modalOverlay = document.getElementById('readerModal');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }
}

// Event Listeners & Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    renderArticles('all');
    initFilterNav();

    // Event listener tombol tutup
    const closeBtn = document.getElementById('closeModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Tutup saat klik di luar area modal
    const modalOverlay = document.getElementById('readerModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    // Tutup saat tekan tombol ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});
