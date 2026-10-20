import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // BAGIAN I: PILIHAN GANDA (40 BUTIR SOAL)
  // ==========================================

  // --- SOAL 1 (Pengertian Norma) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian Norma',
    difficulty: 'Mudah',
    text: 'Aturan, kaidah, atau pedoman tingkah laku yang disepakati bersama dan mengikat seluruh anggota masyarakat agar tercipta ketertiban serta ketenteraman disebut...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <rect x="140" y="12" width="140" height="30" rx="8" fill="#1D4ED8"/>
      <text x="210" y="32" fill="#FFFFFF" font-size="13" font-weight="bold" text-anchor="middle">KONSEP NORMA</text>
      <g transform="translate(20, 56)">
        <rect x="0" y="0" width="115" height="48" rx="8" fill="#EFF6FF" stroke="#93C5FD"/>
        <text x="57" y="20" fill="#1E3A8A" font-size="10.5" font-weight="bold" text-anchor="middle">Kaidah / Aturan</text>
        <text x="57" y="36" fill="#475569" font-size="9" text-anchor="middle">Pedoman Berperilaku</text>
        
        <text x="127" y="28" fill="#1D4ED8" font-size="16" font-weight="bold">→</text>
        
        <rect x="140" y="0" width="115" height="48" rx="8" fill="#F0FDF4" stroke="#86EFAC"/>
        <text x="197" y="20" fill="#166534" font-size="10.5" font-weight="bold" text-anchor="middle">Sifat Mengikat</text>
        <text x="197" y="36" fill="#475569" font-size="9" text-anchor="middle">Wajib Ditaati Bersama</text>

        <text x="267" y="28" fill="#1D4ED8" font-size="16" font-weight="bold">→</text>

        <rect x="280" y="0" width="100" height="48" rx="8" fill="#FEF3C7" stroke="#FDE68A"/>
        <text x="330" y="20" fill="#92400E" font-size="10.5" font-weight="bold" text-anchor="middle">Tujuan Utama</text>
        <text x="330" y="36" fill="#475569" font-size="9" text-anchor="middle">Tertib &amp; Damai</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Adat istiadat' },
      { id: 'B', text: 'Norma' },
      { id: 'C', text: 'Hak pribadi' },
      { id: 'D', text: 'Kebiasaan sepihak' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma adalah ketentuan atau aturan yang menjadi pedoman bagi tingkah laku manusia dalam masyarakat yang disepakati bersama dan bersifat mengikat anggota kelompok masyarakat tersebut.',
  },

  // --- SOAL 2 (Tujuan Norma) ---
  {
    id: 2,
    type: 'pg',
    topic: 'Tujuan Norma',
    difficulty: 'Mudah',
    text: 'Tujuan utama dibentuk dan diterapkannya norma dalam kehidupan bermasyarakat adalah untuk...',
    options: [
      { id: 'A', text: 'Membatasi kebebasan individu agar tidak berkembang' },
      { id: 'B', text: 'Mewujudkan ketertiban, keamanan, keadilan, dan ketenteraman bersama' },
      { id: 'C', text: 'Memberikan kekuasaan tanpa batas kepada aparat penegak aturan' },
      { id: 'D', text: 'Menghukum orang-orang yang tidak disukai oleh masyarakat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma diciptakan untuk mengatur kehidupan manusia agar tercipta ketertiban, keamanan, keadilan, kerukunan, dan ketenteraman dalam kehidupan bersama sehingga benturan kepentingan dapat dihindarkan.',
  },

  // --- SOAL 3 (Macam-macam Norma) ---
  {
    id: 3,
    type: 'pg',
    topic: 'Macam-Macam Norma',
    difficulty: 'Mudah',
    text: 'Perhatikan bagan macam-macam norma di atas! Berdasarkan sumber dan daya ikatnya dalam kehidupan bermasyarakat, norma terbagi menjadi empat jenis, yaitu...',
    image: `<svg viewBox="0 0 440 125" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="440" height="125" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="145" y="10" width="150" height="26" rx="6" fill="#047857"/>
      <text x="220" y="27" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">4 MACAM NORMA</text>
      <g transform="translate(15, 48)">
        <rect x="0" y="0" width="95" height="60" rx="8" fill="#ECFDF5" stroke="#10B981"/>
        <text x="47" y="24" font-size="11" font-weight="bold" fill="#065F46" text-anchor="middle">1. AGAMA</text>
        <text x="47" y="44" font-size="9" fill="#047857" text-anchor="middle">Wahyu Tuhan</text>

        <rect x="105" y="0" width="95" height="60" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="152" y="24" font-size="11" font-weight="bold" fill="#1E40AF" text-anchor="middle">2. KESUSILAAN</text>
        <text x="152" y="44" font-size="9" fill="#1D4ED8" text-anchor="middle">Hati Nurani</text>

        <rect x="210" y="0" width="95" height="60" rx="8" fill="#FEF3C7" stroke="#F59E0B"/>
        <text x="257" y="24" font-size="11" font-weight="bold" fill="#B45309" text-anchor="middle">3. KESOPANAN</text>
        <text x="257" y="44" font-size="9" fill="#92400E" text-anchor="middle">Tata Krama</text>

        <rect x="315" y="0" width="95" height="60" rx="8" fill="#FEE2E2" stroke="#EF4444"/>
        <text x="362" y="24" font-size="11" font-weight="bold" fill="#B91C1C" text-anchor="middle">4. HUKUM</text>
        <text x="362" y="44" font-size="9" fill="#991B1B" text-anchor="middle">Negara Resmi</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Norma adat, norma pergaulan, norma sekolah, dan norma keluarga' },
      { id: 'B', text: 'Norma agama, norma kesusilaan, norma kesopanan, dan norma hukum' },
      { id: 'C', text: 'Norma tertulis, norma lisan, norma bebas, dan norma mengikat' },
      { id: 'D', text: 'Norma pribadi, norma kelompok, norma umum, dan norma khusus' },
    ],
    correctAnswer: 'B',
    explanation:
      'Empat macam norma yang berlaku dalam kehidupan bermasyarakat di Indonesia adalah: (1) Norma Agama, (2) Norma Kesusilaan, (3) Norma Kesopanan, dan (4) Norma Hukum.',
  },

  // --- SOAL 4 (Norma Agama) ---
  {
    id: 4,
    type: 'pg',
    topic: 'Macam Norma: Agama',
    difficulty: 'Mudah',
    text: 'Norma agama bersumber dari wahyu Tuhan Yang Maha Esa yang tercantum dalam kitab suci. Sanksi bagi seseorang yang melanggar norma agama adalah...',
    options: [
      { id: 'A', text: 'Mendapat hukuman denda dan kurungan penjara seketika' },
      { id: 'B', text: 'Mendapat cemoohan dan dikucilkan oleh masyarakat setempat' },
      { id: 'C', text: 'Dosa dan balasan dari Tuhan Yang Maha Esa kelak di akhirat' },
      { id: 'D', text: 'Disita seluruh harta kekayaannya oleh aparat penegak hukum' },
    ],
    correctAnswer: 'C',
    explanation:
      'Norma agama bersumber langsung dari wahyu Tuhan Yang Maha Esa. Oleh karena itu, sanksi bagi pelanggarnya bersifat batiniah dan spiritual, yaitu berupa rasa bersalah, dosa, serta balasan kelak dari Tuhan Yang Maha Esa di akhirat.',
  },

  // --- SOAL 5 (Contoh Norma Agama) ---
  {
    id: 5,
    type: 'pg',
    topic: 'Macam Norma: Agama',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar simbol rumah ibadah di Indonesia di atas!\nPerilaku berikut yang mencerminkan pelaksanaan norma agama dalam kehidupan bermasyarakat adalah...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="130" y="10" width="160" height="24" rx="6" fill="#10B981"/>
      <text x="210" y="26" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">TOLERANSI &amp; KERUKUNAN</text>
      <!-- Masjid -->
      <g transform="translate(30, 44)">
        <rect width="60" height="60" rx="8" fill="#ECFDF5" stroke="#10B981"/>
        <path d="M30 12 C20 12 18 24 18 28 L42 28 C42 24 40 12 30 12 Z" fill="#047857"/>
        <rect x="25" y="34" width="10" height="20" rx="2" fill="#047857"/>
        <text x="30" y="66" font-size="8.5" font-weight="bold" fill="#065F46" text-anchor="middle">Masjid</text>
      </g>
      <!-- Gereja -->
      <g transform="translate(110, 44)">
        <rect width="60" height="60" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <path d="M30 12 L16 26 L44 26 Z" fill="#1D4ED8"/>
        <line x1="30" y1="14" x2="30" y2="24" stroke="#FFFFFF" stroke-width="2"/>
        <line x1="25" y1="18" x2="35" y2="18" stroke="#FFFFFF" stroke-width="2"/>
        <rect x="25" y="34" width="10" height="20" rx="2" fill="#1D4ED8"/>
        <text x="30" y="66" font-size="8.5" font-weight="bold" fill="#1E3A8A" text-anchor="middle">Gereja</text>
      </g>
      <!-- Pura -->
      <g transform="translate(190, 44)">
        <rect width="60" height="60" rx="8" fill="#FEF3C7" stroke="#F59E0B"/>
        <rect x="20" y="14" width="20" height="6" rx="1" fill="#B45309"/>
        <rect x="23" y="22" width="14" height="6" rx="1" fill="#B45309"/>
        <rect x="26" y="30" width="8" height="6" rx="1" fill="#B45309"/>
        <rect x="27" y="38" width="6" height="16" fill="#B45309"/>
        <text x="30" y="66" font-size="8.5" font-weight="bold" fill="#92400E" text-anchor="middle">Pura</text>
      </g>
      <!-- Vihara & Klenteng -->
      <g transform="translate(270, 44)">
        <rect width="60" height="60" rx="8" fill="#FEE2E2" stroke="#EF4444"/>
        <path d="M14 20 Q30 8 46 20 L44 26 L16 26 Z" fill="#DC2626"/>
        <rect x="20" y="28" width="20" height="26" fill="#DC2626"/>
        <circle cx="30" cy="38" r="4" fill="#FEF08A"/>
        <text x="30" y="66" font-size="8.5" font-weight="bold" fill="#991B1B" text-anchor="middle">Vihara</text>
      </g>
      <!-- Kerukunan -->
      <g transform="translate(345, 52)">
        <text x="30" y="20" font-size="9" font-weight="bold" fill="#1E293B" text-anchor="middle">Saling</text>
        <text x="30" y="34" font-size="9" font-weight="bold" fill="#1E293B" text-anchor="middle">Menghormati</text>
        <text x="30" y="48" font-size="8" fill="#64748B" text-anchor="middle">Ibadah</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Menyalakan musik keras-keras saat tetangga sedang melaksanakan ibadah' },
      { id: 'B', text: 'Melaksanakan ibadah tepat waktu dan menghormati pemeluk agama lain yang beribadah' },
      { id: 'C', text: 'Memaksa teman sekelas untuk mengikuti tata cara beribadah sesuai keyakinan kita' },
      { id: 'D', text: 'Mengejek tata cara persembahyangan teman yang berlainan suku dan agama' },
    ],
    correctAnswer: 'B',
    explanation:
      'Penerapan norma agama meliputi ketaatan menjalankan perintah Tuhan seperti ibadah tepat waktu, serta menjunjung tinggi sikap toleransi dan menghormati sesama manusia dalam beribadah.',
  },

  // --- SOAL 6 (Norma Kesusilaan) ---
  {
    id: 6,
    type: 'pg',
    topic: 'Macam Norma: Kesusilaan',
    difficulty: 'Sedang',
    text: 'Norma kesusilaan adalah aturan yang bersumber dari hati nurani manusia mengenai hal yang baik dan hal yang buruk. Akibat langsung yang dirasakan oleh seseorang apabila melanggar norma kesusilaan adalah...',
    options: [
      { id: 'A', text: 'Dipenjara oleh polisi selama beberapa tahun' },
      { id: 'B', text: 'Dikenakan denda materiel oleh ketua RT setempat' },
      { id: 'C', text: 'Merasa bersalah, gelisah, malu, dan menyesal di dalam hati nuraninya' },
      { id: 'D', text: 'Dicabut hak pilihnya dalam pemilihan umum' },
    ],
    correctAnswer: 'C',
    explanation:
      'Karena norma kesusilaan bersumber dari suara hati nurani manusia, maka sanksi bagi pelanggarnya bersifat internal, yaitu timbulnya rasa gelisah, bersalah, malu, dan penyesalan mendalam.',
  },

  // --- SOAL 7 (Contoh Norma Kesusilaan) ---
  {
    id: 7,
    type: 'pg',
    topic: 'Macam Norma: Kesusilaan',
    difficulty: 'Mudah',
    text: 'Made menemukan sebuah dompet berisi uang dan kartu identitas tergeletak di lapangan sekolah. Tindakan Made yang paling sesuai dengan norma kesusilaan adalah...',
    options: [
      { id: 'A', text: 'Mengambil uangnya untuk jajan dan membuang kartu identitasnya' },
      { id: 'B', text: 'Menyerahkan dompet tersebut secara utuh kepada guru piket untuk diumumkan' },
      { id: 'C', text: 'Menyembunyikan dompet di tas dan menunggu teman mencarinya' },
      { id: 'D', text: 'Membiarkan dompet tersebut terinjak-injak oleh orang lain' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hati nurani manusia selalu membisikkan kejujuran. Mengembalikan barang yang bukan hak kita kepada pemiliknya atau menyerahkannya kepada pihak sekolah merupakan wujud nyata norma kesusilaan.',
  },

  // --- SOAL 8 (Norma Kesopanan) ---
  {
    id: 8,
    type: 'pg',
    topic: 'Macam Norma: Kesopanan',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar di atas!\nSiswa berpamitan dengan mencium tangan orang tua dan mengucapkan salam sebelum berangkat ke sekolah. Tindakan ini merupakan pengamalan dari...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="130" y="8" width="160" height="24" rx="6" fill="#D97706"/>
      <text x="210" y="24" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">TATA KRAMA &amp; KESOPANAN</text>
      <g transform="translate(120, 42)">
        <!-- Sosok Ibu -->
        <circle cx="45" cy="16" r="10" fill="#FBBF24"/>
        <path d="M35 28 C35 28 45 28 55 28 C57 38 57 58 57 58 L33 58 Z" fill="#9333EA"/>
        <!-- Sosok Anak -->
        <circle cx="105" cy="22" r="8" fill="#FDE68A"/>
        <path d="M96 32 C96 32 105 32 114 32 C116 42 116 58 116 58 L94 58 Z" fill="#2563EB"/>
        <!-- Gerakan Mencium Tangan -->
        <line x1="55" y1="36" x2="94" y2="34" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
        <!-- Balon Teks Salam -->
        <rect x="125" y="8" width="80" height="26" rx="6" fill="#FEF3C7" stroke="#F59E0B"/>
        <text x="165" y="25" font-size="9" font-weight="bold" fill="#78350F" text-anchor="middle">"Salim &amp; Salam"</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Norma hukum tertulis' },
      { id: 'B', text: 'Norma kesopanan' },
      { id: 'C', text: 'Norma internasional' },
      { id: 'D', text: 'Norma perdagangan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma kesopanan bersumber dari tata krama, pergaulan, dan adat kebiasaan masyarakat. Berpamitan, mencium tangan orang tua, serta bertutur kata santun adalah contoh norma kesopanan.',
  },

  // --- SOAL 9 (Sifat Norma Kesopanan) ---
  {
    id: 9,
    type: 'pg',
    topic: 'Macam Norma: Kesopanan',
    difficulty: 'Sedang',
    text: 'Norma kesopanan sering disebut bersifat lokal atau kedaerahan. Hal ini disebabkan karena...',
    options: [
      { id: 'A', text: 'Norma kesopanan dibuat langsung oleh presiden untuk satu daerah saja' },
      { id: 'B', text: 'Apa yang dianggap sopan di suatu daerah belum tentu dianggap sopan di daerah lainnya' },
      { id: 'C', text: 'Norma kesopanan hanya berlaku bagi anak-anak di bawah umur' },
      { id: 'D', text: 'Norma kesopanan tidak memiliki sanksi sama sekali' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma kesopanan bersifat relatif dan lokal, artinya tata krama atau adat di suatu kelompok masyarakat berbeda-beda tergantung adat istiadat, kebiasaan, dan budaya setempat.',
  },

  // --- SOAL 10 (Sanksi Norma Kesopanan) ---
  {
    id: 10,
    type: 'pg',
    topic: 'Macam Norma: Kesopanan',
    difficulty: 'Mudah',
    text: 'Seseorang yang melanggar norma kesopanan di lingkungan masyarakat biasanya akan mendapatkan sanksi sosial berupa...',
    options: [
      { id: 'A', text: 'Hukuman penjara seumur hidup' },
      { id: 'B', text: 'Teguran, celaan, cemoohan, atau dikucilkan dalam pergaulan' },
      { id: 'C', text: 'Kewajiban membayar denda uang ke kas negara' },
      { id: 'D', text: 'Penyitaan rumah dan kendaraan bermotor' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pelanggaran norma kesopanan tidak diadili di pengadilan negara, melainkan mendapatkan sanksi sosial dari masyarakat berupa teguran, sindiran, cemoohan, atau dikucilkan dari pergaulan.',
  },

  // --- SOAL 11 (Norma Hukum) ---
  {
    id: 11,
    type: 'pg',
    topic: 'Macam Norma: Hukum',
    difficulty: 'Mudah',
    text: 'Norma hukum memiliki keistimewaan dibandingkan dengan norma-norma lainnya. Keistimewaan utama norma hukum adalah...',
    options: [
      { id: 'A', text: 'Tidak ada sanksi bagi pelanggarnya' },
      { id: 'B', text: 'Hanya berlaku bagi pejabat dan orang dewasa' },
      { id: 'C', text: 'Sifatnya mengikat, tegas, nyata, dan memiliki aparat penegak resmi' },
      { id: 'D', text: 'Boleh dilanggar jika tidak ada orang lain yang melihat' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ciri khas norma hukum adalah dibuat oleh lembaga resmi negara yang berwenang, bersifat tegas, mengikat seluruh warga tanpa pandang bulu, dan memiliki aparat resmi (polisi, jaksa, hakim) untuk menegakkannya.',
  },

  // --- SOAL 12 (Contoh Norma Hukum) ---
  {
    id: 12,
    type: 'pg',
    topic: 'Macam Norma: Hukum',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar pengendara motor di atas!\nPengendara motor yang mengenakan helm berstandar SNI dan mematuhi lampu rambu lalu lintas merupakan contoh ketaatan terhadap...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="130" y="8" width="160" height="24" rx="6" fill="#DC2626"/>
      <text x="210" y="24" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">KETAATAN HUKUM</text>
      <!-- Lampu Lalu Lintas -->
      <g transform="translate(60, 38)">
        <rect width="26" height="64" rx="6" fill="#1E293B"/>
        <circle cx="13" cy="14" r="8" fill="#EF4444"/>
        <circle cx="13" cy="32" r="8" fill="#475569"/>
        <circle cx="13" cy="50" r="8" fill="#475569"/>
        <rect x="11" y="64" width="4" height="14" fill="#334155"/>
      </g>
      <!-- Pengendara Motor dengan Helm SNI -->
      <g transform="translate(130, 42)">
        <rect x="0" y="0" width="220" height="60" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <circle cx="40" cy="24" r="14" fill="#2563EB"/>
        <path d="M40 10 A14 14 0 0 1 54 24 L26 24 Z" fill="#DC2626"/>
        <text x="40" y="20" font-size="7" font-weight="bold" fill="#FFFFFF" text-anchor="middle">SNI</text>
        <circle cx="44" cy="24" r="3" fill="#1E293B"/>
        <!-- Text Aturan -->
        <text x="75" y="26" font-size="11" font-weight="bold" fill="#1E40AF">Tertib Berlalu Lintas</text>
        <text x="75" y="42" font-size="9" fill="#475569">Memakai Helm &amp; Taat Rambu Merah</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Norma kesusilaan' },
      { id: 'B', text: 'Norma hukum' },
      { id: 'C', text: 'Norma kesopanan' },
      { id: 'D', text: 'Norma agama' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kewajiban menggunakan helm berstandar SNI dan mematuhi rambu lalu lintas diatur secara resmi dalam Undang-Undang Lalu Lintas dan Angkutan Jalan, sehingga termasuk dalam norma hukum.',
  },

  // --- SOAL 13 (Sumber Norma Hukum) ---
  {
    id: 13,
    type: 'pg',
    topic: 'Macam Norma: Hukum',
    difficulty: 'Sedang',
    text: 'Norma hukum bersumber dari lembaga negara yang berwenang. Di Indonesia, aturan perundang-undangan tertinggi yang menjadi landasan hukum nasional adalah...',
    options: [
      { id: 'A', text: 'Peraturan Daerah Kabupaten/Kota' },
      { id: 'B', text: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945' },
      { id: 'C', text: 'Keputusan Kepala Desa' },
      { id: 'D', text: 'Tata tertib pos ronda malam' },
    ],
    correctAnswer: 'B',
    explanation:
      'UUD NRI Tahun 1945 adalah hukum dasar tertulis tertinggi di Negara Kesatuan Republik Indonesia yang menjadi acuan bagi seluruh peraturan perundang-undangan di bawahnya.',
  },

  // --- SOAL 14 (Tabel Matriks Norma) ---
  {
    id: 14,
    type: 'pg',
    topic: 'Macam-Macam Norma',
    difficulty: 'Sedang',
    text: 'Perhatikan tabel perbandingan macam-macam norma di atas!\nPasangan yang tepat antara norma, sumber, dan sanksinya ditunjukkan oleh nomor...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="10" fill="#F8FAFC" stroke="#CBD5E1"/>
      <rect x="0" y="0" width="420" height="26" rx="10" fill="#1E3A8A"/>
      <text x="25" y="17" fill="#FFFFFF" font-size="10" font-weight="bold">No</text>
      <text x="80" y="17" fill="#FFFFFF" font-size="10" font-weight="bold">Norma</text>
      <text x="180" y="17" fill="#FFFFFF" font-size="10" font-weight="bold">Sumber</text>
      <text x="320" y="17" fill="#FFFFFF" font-size="10" font-weight="bold">Sanksi</text>
      
      <!-- Row 1 -->
      <line x1="0" y1="52" x2="420" y2="52" stroke="#E2E8F0"/>
      <text x="25" y="42" font-size="10" fill="#334155" font-weight="bold">1</text>
      <text x="80" y="42" font-size="9.5" fill="#1E40AF">Agama</text>
      <text x="180" y="42" font-size="9.5" fill="#334155">Wahyu Tuhan</text>
      <text x="320" y="42" font-size="9.5" fill="#334155">Dosa di akhirat</text>

      <!-- Row 2 -->
      <line x1="0" y1="78" x2="420" y2="78" stroke="#E2E8F0"/>
      <text x="25" y="68" font-size="10" fill="#334155" font-weight="bold">2</text>
      <text x="80" y="68" font-size="9.5" fill="#047857">Kesusilaan</text>
      <text x="180" y="68" font-size="9.5" fill="#334155">Hati Nurani</text>
      <text x="320" y="68" font-size="9.5" fill="#334155">Penyesalan batin</text>

      <!-- Row 3 -->
      <line x1="0" y1="104" x2="420" y2="104" stroke="#E2E8F0"/>
      <text x="25" y="94" font-size="10" fill="#334155" font-weight="bold">3</text>
      <text x="80" y="94" font-size="9.5" fill="#D97706">Kesopanan</text>
      <text x="180" y="94" font-size="9.5" fill="#334155">Pergaulan masyarakat</text>
      <text x="320" y="94" font-size="9.5" fill="#334155">Celaan / cemoohan</text>

      <!-- Row 4 -->
      <text x="25" y="120" font-size="10" fill="#334155" font-weight="bold">4</text>
      <text x="80" y="120" font-size="9.5" fill="#DC2626">Hukum</text>
      <text x="180" y="120" font-size="9.5" fill="#334155">Pemerintah resmi</text>
      <text x="320" y="120" font-size="9.5" fill="#334155">Tegas &amp; nyata (penjara/denda)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Hanya nomor 1 dan 2 yang benar' },
      { id: 'B', text: 'Hanya nomor 2 dan 4 yang benar' },
      { id: 'C', text: 'Seluruh nomor (1, 2, 3, dan 4) merupakan pasangan yang benar' },
      { id: 'D', text: 'Hanya nomor 3 yang benar' },
    ],
    correctAnswer: 'C',
    explanation:
      'Semua baris pada tabel menyajikan pasangan norma, sumber, dan sanksi dengan tepat sesuai materi Kurikulum Merdeka Pendidikan Pancasila.',
  },

  // --- SOAL 15 (Ciri-ciri Norma) ---
  {
    id: 15,
    type: 'pg',
    topic: 'Ciri-Ciri Norma',
    difficulty: 'Mudah',
    text: 'Berikut ini yang BUKAN merupakan ciri-ciri umum norma dalam kehidupan masyarakat adalah...',
    options: [
      { id: 'A', text: 'Memiliki sanksi yang jelas bagi mereka yang melanggar' },
      { id: 'B', text: 'Dibuat untuk kepentingan pribadi seorang penguasa semata' },
      { id: 'C', text: 'Bersifat mengikat seluruh warga masyarakat pendukungnya' },
      { id: 'D', text: 'Dapat berupa aturan tertulis maupun aturan tidak tertulis' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma dibuat demi kepentingan bersama seluruh anggota masyarakat untuk menciptakan ketertiban, bukan untuk menguntungkan atau melayani kepentingan pribadi penguasa.',
  },

  // --- SOAL 16 (Ciri Norma Tertulis dan Tidak Tertulis) ---
  {
    id: 16,
    type: 'pg',
    topic: 'Ciri-Ciri Norma',
    difficulty: 'Sedang',
    text: 'Contoh norma yang berbentuk tertulis dan tersusun rapi dalam bentuk pasal-pasal peraturan adalah...',
    options: [
      { id: 'A', text: 'Tata cara menyapa tetangga di jalan' },
      { id: 'B', text: 'Tata tertib sekolah dan Undang-Undang Republik Indonesia' },
      { id: 'C', text: 'Kebiasaan makan bersama menggunakan tangan kanan' },
      { id: 'D', text: 'Sikap sopan saat berbicara dengan orang yang lebih tua' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma hukum dan tata tertib sekolah adalah contoh norma tertulis yang disusun secara resmi dalam naskah hukum/pasal, sedangkan tata krama pergaulan umumnya tidak tertulis.',
  },

  // --- SOAL 17 (Tujuan Norma dalam Mewujudkan Keadilan) ---
  {
    id: 17,
    type: 'pg',
    topic: 'Tujuan Norma & Keadilan',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar timbangan keadilan di atas!\nTujuan penerapan norma dalam mewujudkan keadilan di tengah masyarakat adalah...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="130" y="8" width="160" height="24" rx="6" fill="#1E3A8A"/>
      <text x="210" y="24" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">KEADILAN BAGI SEMUA</text>
      <!-- Timbangan Keadilan -->
      <g transform="translate(140, 36)">
        <rect x="68" y="10" width="4" height="60" fill="#334155"/>
        <rect x="50" y="68" width="40" height="8" rx="2" fill="#1E293B"/>
        <line x1="20" y1="18" x2="120" y2="18" stroke="#D97706" stroke-width="4"/>
        <circle cx="70" cy="18" r="5" fill="#B45309"/>
        <!-- Piring Kiri (Hak) -->
        <line x1="20" y1="20" x2="10" y2="44" stroke="#64748B" stroke-width="1.5"/>
        <line x1="20" y1="20" x2="30" y2="44" stroke="#64748B" stroke-width="1.5"/>
        <path d="M5 44 Q20 54 35 44 Z" fill="#F59E0B"/>
        <text x="20" y="42" font-size="8" font-weight="bold" fill="#1E293B" text-anchor="middle">HAK</text>
        <!-- Piring Kanan (Kewajiban) -->
        <line x1="120" y1="20" x2="110" y2="44" stroke="#64748B" stroke-width="1.5"/>
        <line x1="120" y1="20" x2="130" y2="44" stroke="#64748B" stroke-width="1.5"/>
        <path d="M105 44 Q120 54 135 44 Z" fill="#F59E0B"/>
        <text x="120" y="42" font-size="7.5" font-weight="bold" fill="#1E293B" text-anchor="middle">KEWAJIBAN</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Melindungi warga yang kaya dan berkuasa dari sanksi' },
      { id: 'B', text: 'Memberikan kepastian hukum dan perlakuan setara bagi setiap warga tanpa membeda-bedakan' },
      { id: 'C', text: 'Menghukum setiap orang tanpa perlu proses pembuktian' },
      { id: 'D', text: 'Menghapus hak-hak masyarakat miskin' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma hukum menjamin prinsip persamaan di depan hukum (equality before the law). Keadilan terwujud bila setiap warga negara diperlakukan setara, haknya dilindungi, dan pelanggar aturan dihukum secara adil.',
  },

  // --- SOAL 18 (Mencegah Main Hakim Sendiri) ---
  {
    id: 18,
    type: 'pg',
    topic: 'Tujuan Norma & Keadilan',
    difficulty: 'Sedang',
    text: 'Ketika ada seseorang yang diduga mencuri barang di kampung, warga yang menjunjung tinggi norma hukum akan bersikap...',
    options: [
      { id: 'A', text: 'Memukuli pelaku beramai-ramai agar jera di tempat' },
      { id: 'B', text: 'Mengamankan pelaku dan segera menyerahkannya kepada pihak kepolisian' },
      { id: 'C', text: 'Membakar rumah pelaku sebagai bentuk hukuman sosial' },
      { id: 'D', text: 'Meminta uang tebusan secara paksa kepada keluarga pelaku' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma hukum melarang tindakan main hakim sendiri (eigenrichting). Setiap dugaan pelanggaran harus diserahkan kepada pihak yang berwajib (kepolisian) agar diproses sesuai hukum yang adil.',
  },

  // --- SOAL 19 (Pengertian Hak) ---
  {
    id: 19,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Mudah',
    text: 'Segala sesuatu yang mutlak menjadi milik seseorang sejak lahir dan penggunaannya bergantung kepada pribadi masing-masing disebut...',
    options: [
      { id: 'A', text: 'Kewajiban' },
      { id: 'B', text: 'Hak' },
      { id: 'C', text: 'Tanggung jawab' },
      { id: 'D', text: 'Sanksi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hak adalah segala sesuatu yang harus diterima atau mutlak menjadi milik seseorang, serta penggunaannya tergantung pada individu yang bersangkutan sesuai batasan norma yang berlaku.',
  },

  // --- SOAL 20 (Pengertian Kewajiban) ---
  {
    id: 20,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Mudah',
    text: 'Segala sesuatu yang wajib dilaksanakan oleh seseorang dengan penuh rasa tanggung jawab agar dapat menuntut haknya disebut...',
    options: [
      { id: 'A', text: 'Kewajiban' },
      { id: 'B', text: 'Hadiah' },
      { id: 'C', text: 'Wewenang' },
      { id: 'D', text: 'Hak istimewa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kewajiban adalah segala sesuatu yang harus dilakukan atau dikerjakan oleh setiap individu dengan penuh rasa tanggung jawab sesuai dengan peraturan yang berlaku.',
  },

  // --- SOAL 21 (Keseimbangan Hak dan Kewajiban) ---
  {
    id: 21,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Sedang',
    text: 'Prinsip yang benar dalam menjalankan hak dan kewajiban dalam kehidupan sehari-hari adalah...',
    options: [
      { id: 'A', text: 'Menuntut hak sebesar-besarnya tanpa mau melaksanakan kewajiban' },
      { id: 'B', text: 'Kewajiban harus didahulukan dan dilaksanakan secara seimbang dengan pemenuhan hak' },
      { id: 'C', text: 'Hanya orang tua yang memiliki kewajiban, sedangkan anak hanya memiliki hak' },
      { id: 'D', text: 'Hak seseorang boleh melanggar hak orang lain demi kebahagiaan pribadi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hak dan kewajiban bagaikan dua sisi mata uang yang tidak terpisahkan. Agar tercipta keadilan dan kerukunan, kewajiban harus dilaksanakan terlebih dahulu secara bertanggung jawab baru kemudian menuntut hak.',
  },

  // --- SOAL 22 (Hak Anak di Rumah) ---
  {
    id: 22,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Mudah',
    text: 'Berikut ini yang merupakan contoh HAK anak ketika berada di lingkungan rumah adalah...',
    options: [
      { id: 'A', text: 'Mendapatkan kasih sayang, makanan bergizi, dan perlindungan dari orang tua' },
      { id: 'B', text: 'Membantu ibu menyapu halaman rumah setiap sore' },
      { id: 'C', text: 'Merapikan tempat tidur sendiri setelah bangun tidur' },
      { id: 'D', text: 'Mematuhi nasihat yang diberikan oleh ayah dan ibu' },
    ],
    correctAnswer: 'A',
    explanation:
      'Mendapatkan kasih sayang, tempat tinggal layak, makanan sehat, dan perlindungan merupakan hak mutlak anak di rumah, sedangkan menyapu, merapikan kasur, dan patuh adalah kewajibannya.',
  },

  // --- SOAL 23 (Kewajiban Anak di Rumah) ---
  {
    id: 23,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Mudah',
    text: 'Tindakan yang merupakan KEWAJIBAN anak terhadap orang tuanya di rumah adalah...',
    options: [
      { id: 'A', text: 'Meminta dibelikan telepon pintar terbaru setiap tahun' },
      { id: 'B', text: 'Menghormati orang tua, membantu pekerjaan rumah, dan belajar dengan tekun' },
      { id: 'C', text: 'Bermain gim sepanjang hari tanpa mempedulikan waktu' },
      { id: 'D', text: 'Menolak diajak makan bersama oleh keluarga' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kewajiban utama seorang anak di rumah antara lain berbakti kepada orang tua, patuh pada nasihat baik, membantu tugas ringan rumah tangga, serta belajar dengan sungguh-sungguh.',
  },

  // --- SOAL 24 (Hak Siswa di Sekolah) ---
  {
    id: 24,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Mudah',
    text: 'Di lingkungan sekolah, setiap siswa berhak untuk...',
    options: [
      { id: 'A', text: 'Membuat gaduh dan mengganggu teman saat pelajaran berlangsung' },
      { id: 'B', text: 'Mendapatkan bimbingan dan pengajaran yang baik dari guru secara adil' },
      { id: 'C', text: 'Mencoret-coret meja dan dinding ruang kelas' },
      { id: 'D', text: 'Meninggalkan kelas saat jam sekolah tanpa izin' },
    ],
    correctAnswer: 'B',
    explanation:
      'Setiap peserta didik memiliki hak untuk memperoleh pengajaran berkualitas, perlakuan adil tanpa diskriminasi, serta memanfaatkan fasilitas perpustakaan dan sarana belajar yang ada di sekolah.',
  },

  // --- SOAL 25 (Kewajiban Siswa di Sekolah) ---
  {
    id: 25,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar kegiatan piket kelas di atas!\nKegiatan siswa menyapu lantai dan membersihkan papan tulis bersama-sama merupakan wujud pelaksanaan...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="130" y="8" width="160" height="24" rx="6" fill="#0D9488"/>
      <text x="210" y="24" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">KEWAJIBAN PIKET KELAS</text>
      <!-- Papan Tulis -->
      <g transform="translate(60, 42)">
        <rect width="90" height="50" rx="4" fill="#065F46" stroke="#94A3B8" stroke-width="2"/>
        <text x="45" y="22" font-size="8.5" fill="#FFFFFF" text-anchor="middle">Papan Tulis</text>
        <text x="45" y="36" font-size="8" fill="#A7F3D0" text-anchor="middle">Kelas Bersih &amp; Rapi</text>
      </g>
      <!-- Siswa Menyapu & Menghapus -->
      <g transform="translate(170, 42)">
        <rect x="0" y="0" width="180" height="56" rx="8" fill="#F0FDFA" stroke="#5EEAD4"/>
        <!-- Siswa 1 -->
        <circle cx="35" cy="18" r="8" fill="#FBBF24"/>
        <path d="M26 28 C26 28 35 28 44 28 L44 50 L26 50 Z" fill="#2563EB"/>
        <line x1="44" y1="36" x2="60" y2="48" stroke="#78350F" stroke-width="2"/>
        <!-- Siswa 2 -->
        <circle cx="105" cy="18" r="8" fill="#FDE68A"/>
        <path d="M96 28 C96 28 105 28 114 28 L114 50 L96 50 Z" fill="#DC2626"/>
        <!-- Keterangan -->
        <text x="145" y="28" font-size="9" font-weight="bold" fill="#0F766E">Gotong Royong</text>
        <text x="145" y="42" font-size="8" fill="#475569">Jaga Kelas</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Kewajiban siswa menjaga kebersihan lingkungan sekolah' },
      { id: 'B', text: 'Hak siswa untuk memerintah teman sekelas' },
      { id: 'C', text: 'Bentuk hukuman bagi siswa yang melanggar aturan' },
      { id: 'D', text: 'Pekerjaan yang seharusnya dikerjakan oleh guru saja' },
    ],
    correctAnswer: 'A',
    explanation:
      'Melaksanakan tugas piket kelas untuk menjaga kebersihan dan kerapian ruang belajar adalah salah satu kewajiban utama siswa di lingkungan sekolah.',
  },

  // --- SOAL 26 (Kewajiban di Masyarakat: Kerja Bakti) ---
  {
    id: 26,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Mudah',
    text: 'Warga desa bergotong royong membersihkan saluran air dan memotong rumput liar di pinggir jalan raya. Kegiatan ini merupakan contoh pelaksanaan kewajiban di lingkungan...',
    options: [
      { id: 'A', text: 'Keluarga' },
      { id: 'B', text: 'Masyarakat' },
      { id: 'C', text: 'Sekolah' },
      { id: 'D', text: 'Negara asing' },
    ],
    correctAnswer: 'B',
    explanation:
      'Gotong royong membersihkan selokan, pos ronda, dan fasilitas umum di lingkungan tempat tinggal merupakan contoh nyata kewajiban warga di lingkungan masyarakat.',
  },

  // --- SOAL 27 (Hak Warga di Masyarakat) ---
  {
    id: 27,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Mudah',
    text: 'Salah satu hak yang dapat dinikmati oleh setiap warga di lingkungan tempat tinggalnya adalah...',
    options: [
      { id: 'A', text: 'Menikmati lingkungan yang bersih, aman, tenteram, dan nyaman' },
      { id: 'B', text: 'Membuang sampah rumah tangga ke sungai seenaknya' },
      { id: 'C', text: 'Menutup jalan umum untuk kepentingan pesta pribadi tanpa izin' },
      { id: 'D', text: 'Tidak mau membayar iuran kebersihan lingkungan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Menikmati lingkungan yang sehat, bersih, aman dari gangguan, serta hidup rukun dan damai merupakan hak asasi setiap warga dalam bermasyarakat.',
  },

  // --- SOAL 28 (Akibat Melalaikan Kewajiban) ---
  {
    id: 28,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Sedang',
    text: 'Apabila para warga di suatu permukiman enggan melaksanakan kewajiban membersihkan selokan dan membuang sampah pada tempatnya, akibat yang paling mungkin terjadi adalah...',
    options: [
      { id: 'A', text: 'Udara menjadi semakin bersih dan segar' },
      { id: 'B', text: 'Terjadi banjir saat musim hujan dan timbul wabah penyakit' },
      { id: 'C', text: 'Harga tanah di pemukiman tersebut akan melonjak tinggi' },
      { id: 'D', text: 'Warga mendapatkan penghargaan desa teladan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Melalaikan kewajiban menjaga kebersihan lingkungan akan berdampak buruk bagi semua orang, seperti selokan tersumbat, timbulnya banjir, serta penyebaran sarang nyamuk dan penyakit demam berdarah.',
  },

  // --- SOAL 29 (Norma dan Keadilan: Musyawarah) ---
  {
    id: 29,
    type: 'pg',
    topic: 'Tujuan Norma & Keadilan',
    difficulty: 'Sedang',
    text: 'Dalam pemilihan ketua kelas 5, guru mengajak seluruh siswa melakukan musyawarah dan pemungutan suara secara terbuka. Nilai keadilan yang terkandung dalam kegiatan tersebut adalah...',
    options: [
      { id: 'A', text: 'Hanya siswa berprestasi yang boleh memberikan suaranya' },
      { id: 'B', text: 'Setiap siswa memiliki hak suara yang sama dan keputusannya dihargai' },
      { id: 'C', text: 'Ketua kelas dipilih langsung oleh siswa yang paling kaya' },
      { id: 'D', text: 'Siswa yang kalah boleh memaksakan keinginannya sendiri' },
    ],
    correctAnswer: 'B',
    explanation:
      'Musyawarah mufakat mencerminkan keadilan dan norma kesopanan di sekolah, di mana setiap siswa memiliki kedudukan setara untuk menyampaikan pendapat dan menentukan pemimpin kelas secara demokratis.',
  },

  // --- SOAL 30 (Sanksi Norma Hukum) ---
  {
    id: 30,
    type: 'pg',
    topic: 'Macam Norma: Hukum',
    difficulty: 'Mudah',
    text: 'Bentuk sanksi nyata bagi seseorang yang terbukti secara sah melakukan pelanggaran norma hukum di pengadilan adalah...',
    options: [
      { id: 'A', text: 'Merasa bersalah dalam hati' },
      { id: 'B', text: 'Hukuman denda, kurungan, atau pidana penjara' },
      { id: 'C', text: 'Ditegur oleh tetangga sebelah rumah' },
      { id: 'D', text: 'Diberikan tepuk tangan oleh warga' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sanksi norma hukum bersifat tegas dan mengikat secara materiil, seperti denda administratif, kurungan, atau hukuman penjara yang diputuskan oleh hakim di pengadilan resmi.',
  },

  // --- SOAL 31 (Sopan Santun Berbicara) ---
  {
    id: 31,
    type: 'pg',
    topic: 'Macam Norma: Kesopanan',
    difficulty: 'Mudah',
    text: 'Ketika berbicara atau meminta tolong kepada guru dan orang yang lebih tua, sikap kita yang paling tepat sesuai norma kesopanan adalah...',
    options: [
      { id: 'A', text: 'Berbicara dengan nada membentak dan berkacak pinggang' },
      { id: 'B', text: 'Menggunakan bahasa yang santun, nada ramah, dan mengucapkan kata tolong serta terima kasih' },
      { id: 'C', text: 'Memotong pembicaraan sebelum orang tua selesai berbicara' },
      { id: 'D', text: 'Memalingkan muka dan bersikap acuh tak acuh' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mengucapkan kata tolong, permisi, maaf, dan terima kasih serta menggunakan tutur kata halus mencerminkan penerapan norma kesopanan dalam bertutur kata.',
  },

  // --- SOAL 32 (Norma Kesusilaan saat Ulangan) ---
  {
    id: 32,
    type: 'pg',
    topic: 'Macam Norma: Kesusilaan',
    difficulty: 'Mudah',
    text: 'Saat mengerjakan soal tes sumatif di kelas, Roni tidak mencontek catatan teman meskipun ada kesempatan dan guru sedang tidak memperhatikan. Tindakan Roni didorong oleh...',
    options: [
      { id: 'A', text: 'Rasa takut dimarahi orang tua di rumah' },
      { id: 'B', text: 'Suara hati nurani yang menjunjung tinggi nilai kejujuran' },
      { id: 'C', text: 'Keinginan agar dipuji oleh teman sebangkunya' },
      { id: 'D', text: 'Tulisan teman sebangku yang terlalu sulit dibaca' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kejujuran saat ulangan merupakan dorongan dari hati nurani (norma kesusilaan). Meskipun tidak diawasi manusia, hati kecil seseorang tahu bahwa mencontek adalah perbuatan tercela.',
  },

  // --- SOAL 33 (Tujuan Norma dalam Mencegah Kekacauan) ---
  {
    id: 33,
    type: 'pg',
    topic: 'Tujuan Norma',
    difficulty: 'Sedang',
    text: 'Bayangkan apa yang akan terjadi di jalan raya apabila lampu lalu lintas dan peraturan berkendara ditiadakan sama sekali. Keadaan yang paling pasti terjadi adalah...',
    options: [
      { id: 'A', text: 'Lalu lintas semakin lancar tanpa hambatan' },
      { id: 'B', text: 'Semua pengendara akan saling mengalah dengan tertib' },
      { id: 'C', text: 'Terjadi kemacetan parah, kesemrawutan, dan angka kecelakaan meningkat drastis' },
      { id: 'D', text: 'Tidak ada lagi kendaraan yang berani keluar rumah' },
    ],
    correctAnswer: 'C',
    explanation:
      'Tanpa adanya norma (aturan hukum) di jalan raya, setiap orang akan bertindak semaunya sehingga memicu tabrakan, kemacetan, dan kekacauan. Ini membuktikan pentingnya norma demi keselamatan bersama.',
  },

  // --- SOAL 34 (Hak Anak Mendapat Pendidikan) ---
  {
    id: 34,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Mudah',
    text: 'Pemerintah Indonesia menyediakan program Wajib Belajar dan sekolah dasar bagi seluruh anak di Indonesia. Hal ini membuktikan bahwa mendapatkan pendidikan merupakan...',
    options: [
      { id: 'A', text: 'Beban yang memberatkan anak' },
      { id: 'B', text: 'Hak mendasar setiap anak yang dijamin oleh negara' },
      { id: 'C', text: 'Hukuman bagi anak-anak usia sekolah' },
      { id: 'D', text: 'Kewajiban orang kaya saja' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pasal 31 UUD NRI Tahun 1945 menegaskan bahwa setiap warga negara berhak mendapatkan pendidikan. Pendidikan adalah hak asasi setiap anak untuk meraih masa depan cerah.',
  },

  // --- SOAL 35 (Kewajiban Menjaga Fasilitas Umum) ---
  {
    id: 35,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Sedang',
    text: 'Di taman kota terdapat bangku taman, lampu hias, dan arena bermain anak. Sikap kita yang menunjukkan pelaksanaan kewajiban sebagai warga yang bertanggung jawab adalah...',
    options: [
      { id: 'A', text: 'Mencoret-coret bangku taman dengan spidol permanen' },
      { id: 'B', text: 'Menggunakan fasilitas dengan baik, tertib, dan tidak merusaknya' },
      { id: 'C', text: 'Membawa pulang ayunan taman untuk dipasang di rumah sendiri' },
      { id: 'D', text: 'Mematahkan tiang lampu taman saat bermain' },
    ],
    correctAnswer: 'B',
    explanation:
      'Fasilitas umum dibangun dari uang rakyat. Setiap warga memiliki hak menggunakannya dan memiliki kewajiban bersama untuk menjaga, memelihara, serta tidak merusaknya (anti-vandalisme).',
  },

  // --- SOAL 36 (Kewajiban Mengikuti Upacara Bendera) ---
  {
    id: 36,
    type: 'pg',
    topic: 'Hak & Kewajiban',
    difficulty: 'Mudah',
    text: 'Setiap hari Senin pagi di sekolah diadakan upacara bendera. Sikap siswa yang benar dalam melaksanakan kewajibannya saat upacara bendera adalah...',
    options: [
      { id: 'A', text: 'Berdiri tegap, tertib, khidmat, dan menyanyikan lagu Indonesia Raya dengan sungguh-sungguh' },
      { id: 'B', text: 'Mengobrol dan bercanda dengan teman di barisan belakang' },
      { id: 'C', text: 'Bersembunyi di kantin agar tidak kepanasan' },
      { id: 'D', text: 'Duduk di lapangan sambil memainkan telepon pintar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Mengikuti upacara bendera dengan khidmat, tertib, dan sungguh-sungguh adalah wujud kewajiban siswa di sekolah sekaligus bentuk penghormatan dan rasa cinta terhadap tanah air.',
  },

  // --- SOAL 37 (Hubungan Norma Hukum dan Norma Lainnya) ---
  {
    id: 37,
    type: 'pg',
    topic: 'Macam-Macam Norma',
    difficulty: 'Sukar',
    text: 'Norma hukum seringkali memperkuat norma agama, norma kesusilaan, dan norma kesopanan dalam masyarakat. Contoh aturan hukum yang memperkuat norma kesusilaan (larangan mencuri) adalah...',
    options: [
      { id: 'A', text: 'Undang-undang yang mengatur jam buka toko pakaian' },
      { id: 'B', text: 'Kitab Undang-Undang Hukum Pidana yang menetapkan sanksi penjara bagi pelaku pencurian' },
      { id: 'C', text: 'Peraturan pemilihan seragam sekolah putih merah' },
      { id: 'D', text: 'Ketentuan tentang cara berjalan di trotoar' },
    ],
    correctAnswer: 'B',
    explanation:
      'Larangan mencuri berasal dari norma agama dan kesusilaan (hati nurani). Norma hukum mempertegas larangan tersebut dengan sanksi pidana penjara nyata melalui KUHP sehingga masyarakat terlindungi.',
  },

  // --- SOAL 38 (Pengertian Adat Istiadat dan Norma Kesopanan) ---
  {
    id: 38,
    type: 'pg',
    topic: 'Macam Norma: Kesopanan',
    difficulty: 'Sedang',
    text: 'Di Bali terdapat tradisi "Megibung" (makan bersama dalam satu wadah dengan penuh kebersamaan dan tata krama). Ketaatan masyarakat terhadap tradisi turun-temurun ini merupakan contoh norma...',
    options: [
      { id: 'A', text: 'Norma kesopanan dan adat kebiasaan setempat' },
      { id: 'B', text: 'Norma hukum internasional' },
      { id: 'C', text: 'Norma kebebasan individu mutlak' },
      { id: 'D', text: 'Norma persaingan usaha' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tradisi luhur dan adat pergaulan yang diwariskan turun-temurun di suatu daerah merupakan bagian dari norma kesopanan dan adat istiadat yang mempererat tali persaudaraan.',
  },

  // --- SOAL 39 (Penerapan Keadilan di Rumah) ---
  {
    id: 39,
    type: 'pg',
    topic: 'Tujuan Norma & Keadilan',
    difficulty: 'Sedang',
    text: 'Ibu membagi tugas membersihkan rumah kepada kakak dan adik sesuai dengan usia dan kemampuannya: kakak menyapu halaman, sedangkan adik membereskan mainannya sendiri. Tindakan ibu mencerminkan...',
    options: [
      { id: 'A', text: 'Pilih kasih dan tidak adil' },
      { id: 'B', text: 'Penerapan keadilan secara proporsional sesuai porsi dan kemampuan' },
      { id: 'C', text: 'Bentuk hukuman kepada anak-anak' },
      { id: 'D', text: 'Pelanggaran hak asasi anak' },
    ],
    correctAnswer: 'B',
    explanation:
      'Keadilan tidak selalu berarti membagi secara sama rata, melainkan adil secara proporsional yaitu sesuai kebutuhan, usia, dan kapasitas kemampuan masing-masing anggota keluarga.',
  },

  // --- SOAL 40 (Kesimpulan Peran Norma) ---
  {
    id: 40,
    type: 'pg',
    topic: 'Tujuan Norma',
    difficulty: 'Sedang',
    text: 'Berdasarkan seluruh materi yang telah dipelajari, kesimpulan yang paling tepat mengenai peranan norma dalam kehidupan bermasyarakat adalah...',
    options: [
      { id: 'A', text: 'Norma hanya diperlukan jika ada petugas polisi yang berjaga di lingkungan' },
      { id: 'B', text: 'Norma merupakan pedoman berharga yang membimbing manusia hidup rukun, adil, aman, dan saling menghormati' },
      { id: 'C', text: 'Norma diciptakan untuk membuat kehidupan masyarakat menjadi kaku dan tertekan' },
      { id: 'D', text: 'Norma boleh diabaikan asalkan kita memiliki banyak harta dan kekuasaan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma adalah pilar keteraturan masyarakat. Dengan menaati norma agama, kesusilaan, kesopanan, dan hukum, manusia dapat hidup berdampingan secara damai, saling menghargai, tertib, dan berkeadilan.',
  },

  // =========================================================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS KATEGORI (5 BUTIR SOAL)
  // Setiap soal memiliki 3 deskripsi / pernyataan dengan pilihan Benar / Salah
  // =========================================================================

  // --- SOAL 41 (PGK Kategori: Sumber & Sanksi 4 Macam Norma) ---
  {
    id: 41,
    type: 'pgk_kategori',
    topic: 'Macam-Macam Norma',
    difficulty: 'Sedang',
    text: 'Perhatikan stimulus kasus mengenai penerapan norma berikut ini!\nDalam kehidupan bermasyarakat, kita mengenal empat macam norma yang memiliki sumber dan konsekuensi sanksi yang berbeda-beda bagi siapa saja yang mematuhinya maupun yang melanggarnya.\n\nBerdasarkan karakteristik macam-macam norma, tentukan nilai kebenaran (BENAR / SALAH) untuk setiap pernyataan di bawah ini:',
    statements: [
      {
        id: 's1',
        text: 'Norma agama bersumber dari wahyu Tuhan Yang Maha Esa, dan sanksi bagi pelanggarnya berupa dosa serta pembalasan di akhirat kelak.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Norma kesusilaan bersumber dari tata krama pergaulan dan sanksinya selalu berupa denda uang yang disetor ke kas negara.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Norma hukum dibuat oleh lembaga negara yang berwenang dan memiliki sanksi yang tegas, nyata, serta memaksa.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Analisis pernyataan:\n• Pernyataan 1 (BENAR): Norma agama memang bersumber dari wahyu Tuhan dengan sanksi akhirat/dosa.\n• Pernyataan 2 (SALAH): Norma kesusilaan bersumber dari HATI NURANI (bukan pergaulan) dan sanksinya berupa rasa gelisah/penyesalan batin, bukan denda uang.\n• Pernyataan 3 (BENAR): Norma hukum bersumber dari kekuasaan negara resmi dengan sanksi tegas dan memaksa.',
  },

  // --- SOAL 42 (PGK Kategori: Hak dan Kewajiban Siswa di Sekolah) ---
  {
    id: 42,
    type: 'pgk_kategori',
    topic: 'Hak & Kewajiban',
    difficulty: 'Sedang',
    text: 'Perhatikan stimulus kegiatan sekolah berikut!\nSebagai peserta didik kelas 5 di SD Negeri 3 Loloan Timur, setiap siswa memiliki hak yang dijamin oleh pihak sekolah dan sekaligus kewajiban yang harus dijalankan dengan penuh kesadaran dan tanggung jawab.\n\nTentukan apakah setiap pernyataan mengenai hak dan kewajiban siswa di sekolah berikut bernilai BENAR atau SALAH:',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="110" y="8" width="200" height="24" rx="6" fill="#1D4ED8"/>
      <text x="210" y="24" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">HAK &amp; KEWAJIBAN DI SEKOLAH</text>
      <!-- Kolom Hak -->
      <g transform="translate(25, 40)">
        <rect width="175" height="66" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="87" y="20" font-size="11" font-weight="bold" fill="#1E40AF" text-anchor="middle">HAK SISWA</text>
        <text x="87" y="38" font-size="9" fill="#334155" text-anchor="middle">• Memperoleh Pengajaran</text>
        <text x="87" y="52" font-size="9" fill="#334155" text-anchor="middle">• Meminjam Buku Perpus</text>
      </g>
      <!-- Kolom Kewajiban -->
      <g transform="translate(220, 40)">
        <rect width="175" height="66" rx="8" fill="#F0FDF4" stroke="#22C55E"/>
        <text x="87" y="20" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">KEWAJIBAN SISWA</text>
        <text x="87" y="38" font-size="9" fill="#334155" text-anchor="middle">• Mematuhi Tata Tertib</text>
        <text x="87" y="52" font-size="9" fill="#334155" text-anchor="middle">• Menghormati Guru &amp; Teman</text>
      </g>
    </svg>`,
    statements: [
      {
        id: 's1',
        text: 'Menggunakan fasilitas perpustakaan dan mendapatkan bimbingan dari bapak/ibu guru merupakan HAK yang sah bagi setiap siswa.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Siswa diperbolehkan menuntut haknya untuk belajar di kelas yang nyaman tanpa perlu ikut serta melaksanakan tugas piket kebersihan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Memakai seragam sekolah rapi sesuai jadwal dan menghormati bapak/ibu guru serta seluruh tenaga kependidikan merupakan KEWAJIBAN siswa.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Analisis pernyataan:\n• Pernyataan 1 (BENAR): Fasilitas perpustakaan dan bimbingan guru adalah hak yang wajib didapatkan siswa.\n• Pernyataan 2 (SALAH): Hak dan kewajiban harus seimbang; siswa tidak boleh menuntut kelas bersih tanpa mau menjalankan kewajiban piket.\n• Pernyataan 3 (BENAR): Memakai seragam rapi dan menghormati warga sekolah adalah kewajiban dasar siswa.',
  },

  // --- SOAL 43 (PGK Kategori: Norma dalam Mewujudkan Keadilan) ---
  {
    id: 43,
    type: 'pgk_kategori',
    topic: 'Tujuan Norma & Keadilan',
    difficulty: 'Sukar',
    text: 'Perhatikan wacana berikut!\nKeadilan merupakan cita-cita luhur bangsa Indonesia yang tercermin dalam Sila Kelima Pancasila: "Keadilan sosial bagi seluruh rakyat Indonesia". Norma hukum dibentuk sebagai sarana nyata untuk menegakkan keadilan dan melindungi hak-hak setiap warga negara.\n\nBerdasarkan wacana tersebut, tentukan kebenaran (BENAR / SALAH) dari ketiga pernyataan di bawah ini:',
    statements: [
      {
        id: 's1',
        text: 'Norma hukum menjamin bahwa setiap orang memiliki kedudukan yang sama di depan hukum tanpa membedakan suku, agama, dan tingkat kekayaan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Tindakan main hakim sendiri terhadap seseorang yang diduga mencuri merupakan tindakan terpuji karena membantu meringankan tugas kepolisian.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Norma hadir untuk mencegah terjadinya benturan kepentingan dan kesewenang-wenangan antara kelompok kuat terhadap kelompok lemah.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Analisis pernyataan:\n• Pernyataan 1 (BENAR): Prinsip kesetaraan di depan hukum (equality before the law) berlaku bagi semua warga negara tanpa diskriminasi.\n• Pernyataan 2 (SALAH): Main hakim sendiri adalah pelanggaran hukum berat yang dilarang keras karena merampas hak asasi dan merusak keadilan.\n• Pernyataan 3 (BENAR): Norma hukum berfungsi melindungi pihak lemah dari kesewenang-wenangan pihak yang berkuasa atau lebih kuat.',
  },

  // --- SOAL 44 (PGK Kategori: Ciri-Ciri dan Sifat Norma) ---
  {
    id: 44,
    type: 'pgk_kategori',
    topic: 'Ciri-Ciri Norma',
    difficulty: 'Sedang',
    text: 'Perhatikan ringkasan ciri-ciri norma dalam kehidupan bermasyarakat berikut!\nNorma tidak muncul dengan sendirinya, melainkan lahir dari kebutuhan manusia akan ketertiban dalam interaksi sosial sehari-hari.\n\nTentukan nilai kebenaran (BENAR / SALAH) dari pernyataan-pernyataan mengenai karakteristik norma berikut ini:',
    statements: [
      {
        id: 's1',
        text: 'Norma pada umumnya disepakati bersama oleh anggota masyarakat pendukungnya untuk ditaati.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Semua jenis norma yang berlaku di masyarakat selalu berbentuk undang-undang tertulis dan disahkan oleh presiden.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Norma kesopanan dapat mengalami perubahan dan penyesuaian seiring dengan perkembangan zaman dan peradaban masyarakat.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Analisis pernyataan:\n• Pernyataan 1 (BENAR): Norma merupakan hasil kesepakatan sosial anggota masyarakat.\n• Pernyataan 2 (SALAH): Tidak semua norma tertulis; norma kesopanan dan kesusilaan sebagian besar berbentuk aturan tidak tertulis (kebiasaan lisan dan moral batin).\n• Pernyataan 3 (BENAR): Norma sosial bersifat dinamis dan dapat berkembang menyesuaikan zaman.',
  },

  // --- SOAL 45 (PGK Kategori: Hak dan Kewajiban Warga di Lingkungan Masyarakat) ---
  {
    id: 45,
    type: 'pgk_kategori',
    topic: 'Hak & Kewajiban',
    difficulty: 'Sedang',
    text: 'Perhatikan narasi kehidupan bertetangga di lingkungan rukun tetangga (RT) berikut ini!\nPak Budi tinggal di sebuah perumahan yang asri. Warga di lingkungannya rutin mengadakan ronda malam (siskamling), kerja bakti membersihkan selokan setiap bulan, serta menjenguk tetangga yang tertimpa musibah sakit.\n\nTentukan kebenaran (BENAR / SALAH) untuk setiap pernyataan berikut berkaitan dengan hak dan kewajiban warga masyarakat:',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="110" y="8" width="200" height="24" rx="6" fill="#047857"/>
      <text x="210" y="24" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">KEHIDUPAN BERMASYARAKAT</text>
      <!-- Pos Ronda -->
      <g transform="translate(60, 42)">
        <rect width="70" height="56" rx="6" fill="#FEF3C7" stroke="#F59E0B"/>
        <path d="M10 20 L35 6 L60 20 Z" fill="#B45309"/>
        <rect x="25" y="30" width="20" height="26" fill="#78350F"/>
        <text x="35" y="66" font-size="8" font-weight="bold" fill="#78350F" text-anchor="middle">Pos Ronda</text>
      </g>
      <!-- Warga Bersatu -->
      <g transform="translate(160, 42)">
        <rect width="200" height="56" rx="8" fill="#ECFDF5" stroke="#10B981"/>
        <text x="100" y="22" font-size="11" font-weight="bold" fill="#065F46" text-anchor="middle">Siskamling &amp; Kerja Bakti</text>
        <text x="100" y="38" font-size="9" fill="#047857" text-anchor="middle">Kewajiban Warga demi Keamanan</text>
        <text x="100" y="50" font-size="8" fill="#64748B" text-anchor="middle">Lingkungan Damai &amp; Bebas Penyakit</text>
      </g>
    </svg>`,
    statements: [
      {
        id: 's1',
        text: 'Mengikuti kegiatan kerja bakti dan menjaga ketertiban lingkungan tempat tinggal merupakan KEWAJIBAN setiap warga masyarakat.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Setiap warga berhak menikmati rasa aman, lingkungan yang bersih, serta ketenangan beristirahat di rumah masing-masing.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Seorang warga boleh membakar sampah dedaunan di depan rumah tetangga yang sedang sakit karena itu merupakan hak pribadi miliknya.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Analisis pernyataan:\n• Pernyataan 1 (BENAR): Kerja bakti dan menjaga ketertiban lingkungan adalah kewajiban sosial kemasyarakatan.\n• Pernyataan 2 (BENAR): Menikmati lingkungan yang aman, bersih, dan tenteram adalah hak mendasar setiap warga.\n• Pernyataan 3 (SALAH): Hak pribadi dibatasi oleh hak dan kenyamanan orang lain. Membakar sampah yang asapnya mengganggu tetangga melanggar norma kesopanan dan ketertiban lingkungan.',
  },
];
