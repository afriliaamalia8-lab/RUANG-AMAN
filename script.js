/* ==========================================================================
   RUANG AMAN — CLIENT-SIDE ENGINE (v2.0 FULL)
   Seluruh 6 Artikel Psikoedukasi Utuh + Filter + Krisis Detection
   ========================================================================== */

// DATA LENGKAP 6 ARTIKEL PSIKOEDUKASI
const articlesData = [
  {
    id: 'stres-akademik',
    title: 'Mengelola Stres Akademik',
    readTime: '4 menit',
    category: 'Stres & Tekanan',
    summary: [
      'Stres akademik itu normal — yang penting cara mengelolanya.',
      'Teknik 4-7-8 dan pecah tugas jadi 15 menit bisa membantu hari ini.',
      'Kalau stres berlanjut lebih dari 2 minggu, itu tanda untuk mencari bantuan.'
    ],
    content: `
      <h3>1. Kenali dulu, apa yang terjadi</h3>
      <p>Coba ingat terakhir kali kamu merasa dadamu sesak sebelum ujian. Atau ketika tugas menumpuk dan kamu hanya bisa menatap layar tanpa bisa mulai. Itu bukan malas. Itu tanda tubuhmu sedang memberi sinyal: "aku kewalahan."</p>
      <p>Stres akademik muncul ketika tuntutan yang kita hadapi terasa lebih besar dari sumber daya yang kita punya. Sumber daya itu bisa berupa waktu, tenaga, atau dukungan. Ketika salah satunya habis, stres datang — bukan karena kita lemah, tapi karena kita manusia.</p>
      
      <p><strong>Tanda-tanda yang sering muncul:</strong></p>
      <ul>
        <li>Sulit tidur, atau justru tidur berlebihan</li>
        <li>Mudah marah, mudah menangis, mudah tersinggung</li>
        <li>Sulit fokus membaca satu halaman saja</li>
        <li>Perut mual atau kepala pusing sebelum masuk kelas</li>
        <li>Merasa "kosong" meski banyak tugas menunggu</li>
        <li>Kehilangan minat pada hal yang dulu kamu suka</li>
      </ul>
      <p>Kalau kamu mengenali satu atau dua tanda ini, kamu tidak lemah. Kamu sedang memberi tahu dirimu sendiri bahwa ada yang perlu diubah.</p>

      <h3>2. Satu langkah kecil hari ini</h3>
      <p>Kamu tidak perlu menyelesaikan semuanya hari ini. Kalau kamu mencoba, justru kamu akan makin tenggelam. Yang perlu kamu lakukan hanya satu langkah kecil — dan itu cukup untuk hari ini.</p>
      <p><strong>Teknik napas 4-7-8:</strong> Tarik napas 4 detik, tahan 7 detik, buang perlahan 8 detik. Ulangi tiga kali. Teknik ini menenangkan sistem saraf dalam 30 detik. Kamu bisa melakukannya di kelas, di kamar mandi, di mana saja tanpa ada yang tahu.</p>
      <p><strong>Pecah tugas jadi 15 menit:</strong> Alih-alih "aku harus menyelesaikan makalah 10 halaman," ganti jadi "aku akan buka laptop dan tulis judulnya selama 15 menit." Setelah 15 menit, kamu bebas berhenti. Sering kali, kamu justru lanjut karena sudah mulai. Yang berat itu bukan mengerjakan — yang berat itu memulai.</p>
      <p><strong>Tulis 3 hal yang sudah kamu lakukan hari ini:</strong> Bukan yang belum. Yang sudah. "Aku bangun tepat waktu." "Aku makan siang." "Aku buka buku." Otak kita cenderung mengingat kegagalan; kita perlu sengaja mengingat keberhasilan kecil.</p>
      <p><strong>Beri ruang untuk istirahat yang benar-benar istirahat:</strong> Rebahan sambil scroll media sosial bukan istirahat. Istirahat yang mengembalikan energi adalah tidur cukup, jalan kaki, mendengarkan musik, atau ngobrol dengan orang yang membuatmu nyaman.</p>

      <h3>3. Kalau terasa berat</h3>
      <p>Kalau kamu sudah mencoba dan tetap merasa kewalahan selama lebih dari dua minggu, itu bukan tanda kamu gagal. Itu tanda kamu butuh dukungan tambahan.</p>
      <p>Beberapa hal yang bisa kamu coba:</p>
      <ul>
        <li>Cerita ke satu orang yang kamu percaya — orang tua, kakak, teman, siapa pun</li>
        <li>Tulis di Ruang Aman. Kadang menuangkan perasaan saja sudah membantu</li>
        <li>Hubungi hotline 119 ext 8 kalau kamu butuh teman bicara</li>
        <li>Kalau kamu punya akses, pertimbangkan konseling dengan psikolog</li>
      </ul>
      <p>Kamu tidak harus melewati ini sendiri. Dan kamu tidak harus kuat setiap saat. Kadang, hal paling kuat yang bisa kamu lakukan adalah mengakui bahwa kamu butuh bantuan.</p>

      <div class="exercise-box">
        <h4>✨ Latihan 1 menit</h4>
        <p>Ambil napas dalam. Buang perlahan. Katakan pada dirimu: <em>"Aku melakukan yang terbaik dengan yang aku punya. Itu cukup untuk hari ini."</em></p>
      </div>
    `
  },
  {
    id: 'overthinking',
    title: 'Overthinking: Kenali & Atasi',
    readTime: '5 menit',
    category: 'Kecemasan',
    summary: [
      'Overthinking itu beda dengan sekadar berpikir — ia berputar tanpa arah.',
      'Teknik "jadwal khawatir" dan "uji pikiran" bisa memutus lingkaran itu.',
      'Kalau overthinking mengganggu tidur & aktivitas, itu tanda butuh bantuan.'
    ],
    content: `
      <h3>1. Bedanya khawatir dan overthinking</h3>
      <p>Semua orang pernah khawatir. Khawatir itu sehat — ia membuat kita mempersiapkan diri. Tapi overthinking berbeda. Ia tidak menghasilkan solusi. Ia hanya memutar hal yang sama, lagi, lagi, dan lagi — sampai kepalamu terasa penuh dan tubuhmu lelah sebelum hari dimulai.</p>
      <p><strong>Contoh khawatir sehat:</strong> "Besok ada presentasi. Aku perlu latihan 20 menit malam ini."</p>
      <p><strong>Contoh overthinking:</strong> "Besok ada presentasi. Kalau aku salah ngomong gimana? Kalau teman-teman ketawa? Kalau guru kecewa? Kalau nilai jelek? Kalau nanti masa depanku hancur? Kenapa aku begini sih? Kenapa aku nggak bisa santai kayak orang lain?"</p>
      <p>Perhatikan bedanya. Yang pertama punya aksi. Yang kedua hanya berputar. Yang kedua tidak membawamu ke mana-mana — ia hanya membuatmu lelah.</p>
      <p>Overthinking sering datang di malam hari, saat tidak ada distraksi. Ia juga sering muncul saat kita sedang diam, saat kita merasa tidak cukup, saat kita membandingkan diri dengan orang lain.</p>

      <h3>2. Teknik "jadwal khawatir" & "uji pikiran"</h3>
      <p>Ini teknik dari terapi kognitif yang sederhana tapi kuat.</p>
      <p><strong>Jadwal Khawatir:</strong> Pilih waktu 15 menit setiap hari — misalnya jam 7 malam. Sebut itu jam khawatir. Di luar jam itu, kalau pikiran cemas datang, kamu bilang ke diri sendiri: "Nanti aku pikirkan itu di jam 7." Kamu tidak melawan pikiran itu — kamu hanya menundanya.</p>
      <p>Saat jam 7 datang, kamu benar-benar duduk dan mengizinkan dirimu khawatir selama 15 menit. Tulis semua yang muncul. Setelah 15 menit, kamu berhenti — tanpa memaksakan solusi.</p>

      <p><strong>Uji Pikiran:</strong> Saat kamu menangkap diri berpikir "pasti aku gagal," tanyakan tiga hal:</p>
      <ol>
        <li>Apa buktinya? (Bukan perasaan — bukti nyata.)</li>
        <li>Apa bukti yang melawannya? (Pernahkah kamu berhasil di situasi serupa?)</li>
        <li>Apa yang akan aku katakan kalau sahabatku berpikir seperti ini?</li>
      </ol>
      <p>Sering kali, jawabannya jauh lebih lembut dari suara di kepalamu sendiri.</p>

      <h3>3. Kalau overthinking mengganggu hidupmu</h3>
      <p>Overthinking yang wajar itu sesekali. Tapi kalau ia sudah:</p>
      <ul>
        <li>Membuatmu tidak bisa tidur beberapa malam dalam seminggu</li>
        <li>Membuatmu menghindari hal-hal yang penting</li>
        <li>Membuatmu merasa cemas hampir sepanjang hari</li>
        <li>Mengganggu sekolah, pertemanan, atau makan</li>
      </ul>
      <p>…maka itu tanda untuk mencari bantuan. Bukan tanda lemah. Tanda kamu peduli pada dirimu sendiri.</p>

      <div class="exercise-box">
        <h4>✨ Latihan 1 menit</h4>
        <p>Tulis satu pikiran yang paling sering berputar di kepalamu. Lalu tulis satu bukti nyata bahwa pikiran itu belum tentu benar. Simpan kertasnya. Besok, baca lagi.</p>
      </div>
    `
  },
  {
    id: 'bullying',
    title: 'Bullying: Apa yang Bisa Dilakukan',
    readTime: '4 menit',
    category: 'Relasi & Sosial',
    summary: [
      'Bullying bukan "bercanda" — ia melukai, dan itu bukan salahmu.',
      'Ada langkah nyata yang bisa kamu lakukan, baik sebagai korban maupun saksi.',
      'Kamu tidak harus menghadapinya sendiri — ada jalur bantuan.'
    ],
    content: `
      <h3>1. Bullying itu apa, dan bukan apa</h3>
      <p>Bullying bukan sekadar ejekan sekali. Bullying adalah perilaku yang sengaja menyakiti, berulang, dan ada ketidakseimbangan kuasa. Bisa fisik, verbal, sosial (dikucilkan), atau siber (lewat media sosial).</p>
      <p><strong>Bullying bukan:</strong></p>
      <ul>
        <li>Bercanda yang kedua pihak tertawa</li>
        <li>Konflik biasa yang seimbang</li>
        <li>Kritik yang membangun</li>
        <li>"Biasa lah, namanya juga sekolah"</li>
      </ul>
      <p>Kalau kamu merasa dilukai, itu valid. Kamu tidak sedang terlalu sensitif. Kamu tidak sedang melebih-lebihkan. Perasaanmu adalah data — dan data itu benar.</p>

      <h3>2. Yang bisa kamu lakukan</h3>
      <p><strong>Kalau kamu korban:</strong> Kamu tidak salah. Apapun yang mereka katakan — tentang penampilanmu, caramu bicara, keluargamu, apa pun — itu bukan tentangmu. Itu tentang mereka. Kata-kata mereka mencerminkan luka mereka sendiri.</p>
      <ul>
        <li><strong>Simpan bukti:</strong> Screenshot, catat tanggal, simpan pesan. Ini penting kalau kamu perlu melapor.</li>
        <li><strong>Cerita ke satu orang:</strong> Tidak harus banyak. Satu orang yang kamu percaya sudah cukup untuk memulai.</li>
        <li><strong>Jangan balas dengan kekerasan:</strong> Balas dengan kekerasan sering memperburuk situasi dan membuatmu ikut terseret.</li>
        <li><strong>Blokir kalau siber:</strong> Kamu berhak membuat ruang aman untuk dirimu di internet.</li>
        <li><strong>Lapor:</strong> Ke guru, ke orang tua, ke pihak yang berwenang. Melapor bukan mengadu. Melapor itu melindungi diri.</li>
      </ul>

      <p><strong>Kalau kamu saksi:</strong> Jangan diam. Diam itu membuat pelaku merasa tindakannya diterima.</p>
      <ul>
        <li>Jangan tertawa. Ini sederhana tapi sangat kuat.</li>
        <li>Dekati korban. Duduk di sebelahnya, ajak bicara. Satu teman bisa mengubah segalanya.</li>
        <li>Bilang ke pelaku dengan tenang: "Itu nggak lucu." Kamu tidak perlu berdebat.</li>
        <li>Lapor. Cerita ke guru, ke orang tua, atau lewat saluran yang ada.</li>
      </ul>

      <p><strong>Kalau kamu pelaku (dan kamu membaca ini):</strong> Mungkin kamu tidak sadar itu melukai. Mungkin kamu juga sedang terluka dan melampiaskannya. Apapun alasanmu, kamu bisa berhenti. Sekarang. Minta maaf, dan cari bantuan untuk dirimu sendiri juga.</p>

      <h3>3. Kamu tidak sendiri</h3>
      <p>Kalau kamu sedang dibully, ini yang ingin aku sampaikan: apa yang mereka lakukan bukan cerminan dirimu. Itu cerminan mereka. Kamu berhak aman. Kamu berhak didengar. Kamu berhak bahagia.</p>

      <div class="exercise-box">
        <h4>✨ Latihan 1 menit</h4>
        <p>Letakkan tanganmu di dadamu. Katakan: <em>"Apa yang mereka lakukan bukan salahku. Aku berhak aman."</em> Ulangi tiga kali.</p>
      </div>
    `
  },
  {
    id: 'self-love',
    title: 'Self-Love Bukan Egois',
    readTime: '3 menit',
    category: 'Diri & Harga Diri',
    summary: [
      'Self-love bukan berarti egois atau menutup mata dari kekurangan.',
      'Ia soal memperlakukan diri seperti kita memperlakukan sahabat.',
      'Self-love bukan tujuan akhir — ia latihan setiap hari.'
    ],
    content: `
      <h3>1. Miskonsepsi tentang self-love</h3>
      <p>Self-love sering digambarkan sebagai: mandi bunga, beli barang mahal, foto cantik sambil caption "aku berharga." Tidak salah, tapi bukan itu intinya.</p>
      <p>Self-love yang sebenarnya adalah cara kamu memperlakukan dirimu sendiri ketika tidak ada yang melihat.</p>
      <ul>
        <li>Apakah kamu masih makan saat sibuk?</li>
        <li>Apakah kamu masih tidur cukup saat stres?</li>
        <li>Apakah kamu memaafkan dirimu saat salah?</li>
        <li>Apakah kamu bicara ke dirimu dengan lembut, atau lebih keras dari kamu bicara ke orang lain?</li>
      </ul>
      <p>Kalau kamu berbicara ke sahabatmu seperti kamu berbicara ke dirimu sendiri, apakah dia masih mau berteman denganmu?</p>
      <p>Self-love bukan berarti kamu mengabaikan kekurangan. Justru sebaliknya: kamu melihat kekuranganmu, dan tetap memilih untuk tidak membencimu.</p>

      <h3>2. Batas sehat vs egois</h3>
      <p>Banyak orang takut self-love membuat mereka egois. Mari kita luruskan:</p>
      <p><strong>Egois:</strong> Mengambil hak orang lain demi dirimu.<br><strong>Self-love:</strong> Menjaga hakmu sendiri, tanpa mengambil hak orang lain.</p>
      <p><strong>Egois:</strong> "Aku tidak peduli kalau kamu sakit, aku tetap pergi."<br><strong>Self-love:</strong> "Aku tidak bisa menemanimu malam ini, aku butuh istirahat. Besok aku kabari lagi."</p>
      <p>Kamu tidak bisa menuangkan dari cangkir yang kosong. Menjaga dirimu bukan kelemahan — itu prasyarat untuk menjaga orang lain.</p>

      <h3>3. Latihan afirmasi realistis</h3>
      <p>Afirmasi "aku sempurna" tidak bekerja. Otakmu tahu itu tidak benar, jadi ia menolak. Yang bekerja adalah afirmasi yang jujur tapi lembut.</p>
      <ul>
        <li>❌ "Aku sempurna" → ✅ "Aku sedang belajar, dan itu cukup."</li>
        <li>❌ "Aku tidak akan pernah gagal lagi" → ✅ "Aku boleh gagal, dan aku akan bangkit."</li>
        <li>❌ "Semua orang harus menyukaiku" → ✅ "Aku tidak perlu disukai semua orang untuk berharga."</li>
        <li>❌ "Aku harus kuat terus" → ✅ "Aku boleh lelah, dan aku akan istirahat."</li>
      </ul>

      <div class="exercise-box">
        <h4>✨ Latihan 1 menit</h4>
        <p>Tulis 3 hal yang kamu syukuri tentang dirimu. Bukan tentang penampilan. Tentang caramu berpikir, caramu bertahan, caramu peduli.</p>
      </div>
    `
  },
  {
    id: 'bantu-teman',
    title: 'Cara Membantu Teman yang Sedih',
    readTime: '4 menit',
    category: 'Relasi & Sosial',
    summary: [
      'Yang paling dibutuhkan temanmu bukan nasihat — tapi kehadiranmu.',
      'Ada kalimat yang membantu, dan ada yang justru menyakiti.',
      'Kamu bukan terapis — ketahui batasmu, dan jangan lupa jaga dirimu.'
    ],
    content: `
      <h3>1. Yang membantu</h3>
      <p>Kalau temanmu sedang sedih, kamu mungkin bingung harus bilang apa. Kabar baiknya: kamu tidak perlu bilang apa-apa yang pintar. Yang temanmu butuhkan adalah kamu hadir.</p>
      <ul>
        <li><strong>Dengarkan tanpa memotong:</strong> Biarkan dia bicara selesai. Bahkan kalau ada jeda hening, biarkan.</li>
        <li><strong>Akui perasaannya:</strong> "Itu berat ya." "Aku ngerti kenapa kamu sedih." "Kedengerannya memang nggak fair."</li>
        <li><strong>Tanya apa yang dia butuhkan:</strong> "Kamu mau aku dengerin aja, atau mau aku bantu cari solusi?" Ini kalimat yang sangat berguna.</li>
        <li><strong>Tetap ada:</strong> Tidak perlu setiap hari. Sekadar "kamu gimana hari ini?" sekali seminggu sudah berarti.</li>
      </ul>
      <p>Yang paling penting: kamu tidak perlu menyelesaikan masalahnya. Kamu hanya perlu menemaninya melewatinya.</p>

      <h3>2. Yang justru menyakiti</h3>
      <p>Kita sering bilang hal-hal ini dengan niat baik, tapi justru melukai:</p>
      <ul>
        <li>❌ "Kamu terlalu sensitif." → Perasaannya valid. Kalimat ini membuatnya merasa salah.</li>
        <li>❌ "Masih banyak yang lebih susah dari kamu." → Ini lomba kesedihan, bukan bantuan.</li>
        <li>❌ "Udah, besok juga baik-baik aja." → Ini meremehkan perasaannya sekarang.</li>
        <li>❌ "Kamu harus kuat." → Dia sudah kuat. Yang dia butuh adalah ruang untuk tidak kuat.</li>
      </ul>
      <p><strong>Ganti dengan:</strong></p>
      <ul>
        <li>✅ "Aku nggak sepenuhnya ngerti, tapi aku pengin ngerti."</li>
        <li>✅ "Kamu nggak harus cerita semuanya ke aku. Aku cuma pengin kamu tahu aku ada."</li>
        <li>✅ "Terima kasih udah cerita. Itu bukan hal mudah."</li>
      </ul>

      <h3>3. Batas kemampuanmu</h3>
      <p>Ini yang paling penting: kamu bukan terapis temanmu. Kamu tidak bertanggung jawab menyembuhkannya.</p>
      <p>Kalau dia dalam bahaya — misalnya menyebut menyakiti diri — jangan janji merahasiakan itu. Hubungi <strong>119 ext 8</strong>, atau orang dewasa yang dia percaya.</p>

      <div class="exercise-box">
        <h4>✨ Latihan 1 menit</h4>
        <p>Pikirkan satu teman yang mungkin sedang tidak baik. Kirim satu pesan singkat: <em>"Hey, aku kepikiran kamu. Gimana kabarmu?"</em> Tidak perlu panjang. Kehadiranmu cukup.</p>
      </div>
    `
  },
  {
    id: 'cari-bantuan',
    title: 'Kapan Harus Cari Bantuan?',
    readTime: '3 menit',
    category: 'Diri & Harga Diri',
    summary: [
      'Mencari bantuan bukan tanda lemah — itu tanda kamu peduli pada dirimu.',
      'Ada tanda-tanda jelas yang berarti "sudah waktunya".',
      'Ada banyak jalur bantuan: dari teman, keluarga, sampai hotline gratis.'
    ],
    content: `
      <h3>1. Tanda-tanda kamu butuh bantuan</h3>
      <p>Kamu tidak harus menunggu sampai "cukup parah" untuk mencari bantuan. Tapi kalau kamu mengalami beberapa dari ini, itu tanda yang jelas:</p>
      <p><strong>Emosi:</strong></p>
      <ul>
        <li>Sedih berkepanjangan lebih dari 2 minggu</li>
        <li>Cemas hampir setiap hari</li>
        <li>Mudah marah untuk hal kecil</li>
        <li>Merasa hampa, kosong, tidak ada yang berarti</li>
      </ul>
      <p><strong>Fisik:</strong></p>
      <ul>
        <li>Sulit tidur atau tidur berlebihan</li>
        <li>Nafsu makan berubah drastis</li>
        <li>Sering sakit kepala atau mual tanpa sebab jelas</li>
      </ul>
      <p><strong>Pikiran:</strong></p>
      <ul>
        <li>Pikiran menyakiti diri sendiri</li>
        <li>Merasa tidak berharga, atau merasa jadi beban</li>
        <li>Pikiran "lebih baik aku tidak ada"</li>
      </ul>

      <h3>2. Jenis bantuan yang tersedia</h3>
      <ul>
        <li><strong>Teman & keluarga:</strong> Kadang cukup cerita ke satu orang terpercaya.</li>
        <li><strong>Hotline nasional:</strong> 119 ext 8 — Kemenkes, layanan kesehatan jiwa 24 jam, gratis.</li>
        <li><strong>Psikolog & konselor:</strong> Melalui sekolah, kampus, BPJS, atau klinik.</li>
        <li><strong>Ruang Aman:</strong> Menuliskan perasaan secara anonim untuk melegakan pikiran.</li>
      </ul>

      <h3>3. Cara menghubungi bantuan</h3>
      <p>Kalau kamu belum pernah, ini mungkin terasa menakutkan. Tapi ingat: kamu tidak harus punya cerita lengkap. Cukup bilang "aku sedang tidak baik-baik saja."</p>
      <p>Mencari bantuan bukan tanda kamu lemah. Itu tanda kamu memilih untuk hidup. Dan itu kuat.</p>

      <div class="exercise-box">
        <h4>✨ Latihan 1 menit</h4>
        <p>Simpan nomor <strong>119 ext 8</strong> di ponselmu sekarang. Kamu tidak harus memakainya hari ini, tapi ia sudah ada jika suatu saat dibutuhkan.</p>
      </div>
    `
  }
];

// FILTER KATA KUNCI KRISIS MENDESAK
const crisisKeywords = [
  'bunuh diri', 'akhiri hidup', 'ingin mati', 'menyakiti diri', 
  'self harm', 'potong nadi', 'overdosis', 'tidak kuat lagi hidup'
];

// STORAGE LOCAL DINDING CERITA
let wallPosts = JSON.parse(localStorage.getItem('ruang_aman_posts')) || [
  {
    id: 1,
    content: "Terima kasih sudah buat website ini. Hari ini rasanya berat banget karena ujian, tapi baca tulisan di sini buat aku sadar aku gak sendirian.",
    author: "Anonim",
    date: "30 Sep 2026",
    hearts: 12
  },
  {
    id: 2,
    content: "Pelan-pelan ya untuk diri sendiri. Nggak apa-apa kalau hari ini cuma bisa bertahan hidup.",
    author: "Bunga",
    date: "30 Sep 2026",
    hearts: 24
  }
];

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderWallPosts();
  renderArticles('semua');
});

// RENDER ARTIKEL DENGAN KATEGORI
function renderArticles(filterCategory = 'semua') {
  const container = document.getElementById('articlesGrid');
  if (!container) return;

  const filtered = filterCategory === 'semua' 
    ? articlesData 
    : articlesData.filter(a => a.category === filterCategory);

  container.innerHTML = filtered.map(art => `
    <article class="article-card glass-panel" onclick="openArticleModal('${art.id}')">
      <div class="article-card-header">
        <span class="article-category">${art.category}</span>
        <span class="read-time-tag">⏱ ${art.readTime}</span>
      </div>
      <h3 class="article-title">${art.title}</h3>
      <ul class="article-summary-list">
        ${art.summary.map(s => `<li>${s}</li>`).join('')}
      </ul>
      <span class="btn-read-more">Baca Selengkapnya →</span>
    </article>
  `).join('');
}

function filterArticles(category, btnElement) {
  document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');
  renderArticles(category);
}

// RENDER DINDING SUARA REMAJA
function renderWallPosts() {
  const container = document.getElementById('wallGrid');
  if (!container) return;

  container.innerHTML = wallPosts.map(post => `
    <div class="wall-card glass-panel">
      <p class="wall-text">"${escapeHTML(post.content)}"</p>
      <div class="wall-meta">
        <span>— ${escapeHTML(post.author)} · ${post.date}</span>
        <button class="btn-heart" onclick="addHeart(${post.id})" aria-label="Beri dukungan">🤍 ${post.hearts}</button>
      </div>
    </div>
  `).join('');
}

// HANDLER CHIPS DOKUMEN
function insertPrompt(text) {
  const textarea = document.getElementById('storyContent');
  textarea.value = text + " ";
  textarea.focus();
  updateCharCount();
}

function updateCharCount() {
  const textarea = document.getElementById('storyContent');
  const counter = document.getElementById('charCounter');
  counter.textContent = `${textarea.value.length} / 2000 karakter`;
}

// SUBMIT FORM CERITA & PENGECEKAN KRISIS
function handleFormSubmit(event) {
  event.preventDefault();

  const content = document.getElementById('storyContent').value.trim();
  const authorInput = document.getElementById('authorName').value.trim();
  const isAnon = document.getElementById('isAnonymous').checked;

  if (content.length < 10) {
    alert("Tulisan terlalu pendek. Tuliskan minimal 10 karakter ya.");
    return;
  }

  const containsCrisis = crisisKeywords.some(keyword => content.toLowerCase().includes(keyword));
  const authorName = isAnon || !authorInput ? "Anonim" : authorInput;

  const newPost = {
    id: Date.now(),
    content: content,
    author: authorName,
    date: "Baru saja",
    hearts: 0
  };

  wallPosts.unshift(newPost);
  localStorage.setItem('ruang_aman_posts', JSON.stringify(wallPosts));
  renderWallPosts();

  document.getElementById('writeForm').reset();
  updateCharCount();

  if (containsCrisis) {
    document.getElementById('crisisModal').classList.add('active');
  } else {
    alert("Tulisanmu telah tersimpan secara aman 🌸");
  }
}

function addHeart(id) {
  wallPosts = wallPosts.map(p => p.id === id ? {...p, hearts: p.hearts + 1} : p);
  localStorage.setItem('ruang_aman_posts', JSON.stringify(wallPosts));
  renderWallPosts();
}

// MODAL ARTIKEL LENGKAP
function openArticleModal(id) {
  const article = articlesData.find(a => a.id === id);
  if (!article) return;

  const modalBody = document.getElementById('modalArticleBody');
  modalBody.innerHTML = `
    <div class="modal-article-header">
      <span class="article-category">${article.category}</span>
      <h2>${article.title}</h2>
      <p class="modal-read-time">⏱ Estimasi membaca: ${article.readTime}</p>
    </div>
    <div class="modal-article-content">
      ${article.content}
    </div>
  `;

  document.getElementById('articleModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeArticleModal() {
  document.getElementById('articleModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

function closeCrisisModal() {
  document.getElementById('crisisModal').classList.remove('active');
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
