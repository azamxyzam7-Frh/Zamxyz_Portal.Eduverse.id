(() => {
  "use strict";

  const MATERIALS = [
    {
      id:"fisika-gerak", subject:"Fisika", icon:"⚙️", title:"Gerak dan Kecepatan",
      summary:"Mempelajari posisi, jarak, perpindahan, kelajuan, kecepatan, dan percepatan.",
      sections:{
        "Pengertian":"Gerak adalah perubahan posisi suatu benda terhadap titik acuan dalam selang waktu tertentu.",
        "Konsep penting":"Jarak adalah panjang lintasan, sedangkan perpindahan adalah perubahan posisi dari awal ke akhir. Kelajuan memakai jarak dan kecepatan memakai perpindahan.",
        "Rumus":"Kelajuan rata-rata = jarak / waktu. Percepatan rata-rata = perubahan kecepatan / waktu.",
        "Contoh":"Mobil menempuh 120 km dalam 2 jam. Kelajuan rata-ratanya 60 km/jam.",
        "Rangkuman":"Untuk memahami gerak, tentukan titik acuan, besaran yang diketahui, satuan, lalu gunakan rumus yang sesuai."
      }
    },
    {
      id:"fisika-newton", subject:"Fisika", icon:"🪐", title:"Hukum Newton",
      summary:"Mengenal hubungan gaya, massa, dan percepatan serta contoh penerapannya.",
      sections:{
        "Pengertian":"Hukum Newton menjelaskan hubungan antara gaya yang bekerja pada benda dan geraknya.",
        "Hukum I":"Benda mempertahankan keadaan diam atau gerak lurus beraturan jika resultan gaya nol.",
        "Hukum II":"Resultan gaya berhubungan dengan massa dan percepatan melalui F = m × a.",
        "Hukum III":"Setiap aksi memiliki reaksi yang sama besar dan berlawanan arah.",
        "Contoh":"Saat kaki mendorong tanah ketika berjalan, tanah memberikan gaya reaksi sehingga tubuh terdorong ke depan.",
        "Rangkuman":"Tiga hukum Newton membantu menjelaskan keadaan benda dari keseimbangan sampai gerak yang dipercepat."
      }
    },
    {
      id:"fisika-energi", subject:"Fisika", icon:"🔋", title:"Energi dan Perubahannya",
      summary:"Membahas energi kinetik, potensial, dan perubahan bentuk energi.",
      sections:{
        "Pengertian":"Energi adalah kemampuan untuk melakukan usaha atau menyebabkan perubahan.",
        "Jenis":"Energi kinetik berkaitan dengan gerak. Energi potensial gravitasi berkaitan dengan posisi benda terhadap permukaan acuan.",
        "Perubahan energi":"Energi dapat berubah bentuk, misalnya energi listrik menjadi cahaya pada lampu.",
        "Contoh":"Benda yang jatuh mengalami perubahan energi potensial gravitasi menjadi energi kinetik.",
        "Rangkuman":"Energi tidak hilang begitu saja; energi dapat berpindah atau berubah bentuk."
      }
    },
    {
      id:"fisika-tekanan", subject:"Fisika", icon:"💧", title:"Tekanan Zat",
      summary:"Memahami tekanan pada zat padat, cair, dan gas.",
      sections:{
        "Pengertian":"Tekanan adalah gaya yang bekerja pada setiap satuan luas permukaan.",
        "Zat padat":"Untuk gaya yang sama, permukaan lebih kecil menghasilkan tekanan lebih besar.",
        "Zat cair":"Tekanan hidrostatik bertambah ketika kedalaman bertambah.",
        "Gas":"Gas memberikan tekanan karena partikel-partikelnya bergerak dan bertumbukan dengan dinding wadah.",
        "Contoh":"Ujung paku yang runcing memudahkan menembus kayu karena luas bidang tekan kecil.",
        "Rangkuman":"Tekanan dipengaruhi oleh gaya, luas bidang, dan pada zat cair juga dipengaruhi kedalaman."
      }
    },

    {
      id:"bio-sel", subject:"Biologi", icon:"🧬", title:"Sel dan Organel",
      summary:"Memahami sel sebagai unit dasar kehidupan dan fungsi organelnya.",
      sections:{
        "Pengertian":"Sel adalah unit struktural dan fungsional dasar makhluk hidup.",
        "Membran sel":"Mengatur keluar-masuknya zat ke dalam dan ke luar sel.",
        "Inti sel":"Menyimpan materi genetik dan mengatur berbagai aktivitas sel.",
        "Mitokondria":"Tempat utama pelepasan energi dari molekul makanan melalui respirasi sel.",
        "Ribosom":"Tempat sintesis protein.",
        "Kloroplas":"Pada tumbuhan, organel ini menjadi tempat utama fotosintesis.",
        "Rangkuman":"Organela memiliki tugas khusus dan bekerja bersama agar sel dapat tetap hidup."
      }
    },
    {
      id:"bio-fotosintesis", subject:"Biologi", icon:"🌿", title:"Fotosintesis",
      summary:"Membahas bahan, proses, dan hasil fotosintesis pada tumbuhan.",
      sections:{
        "Pengertian":"Fotosintesis adalah proses tumbuhan hijau membuat senyawa organik menggunakan energi cahaya.",
        "Bahan":"Bahan utama yang digunakan adalah karbon dioksida dan air. Cahaya dan klorofil mendukung proses ini.",
        "Proses":"Energi cahaya membantu mengubah bahan baku menjadi glukosa, sementara oksigen dilepaskan sebagai salah satu hasil.",
        "Faktor":"Intensitas cahaya, ketersediaan air, karbon dioksida, suhu, dan kondisi klorofil dapat memengaruhi laju fotosintesis.",
        "Contoh":"Daun yang memperoleh cahaya cukup umumnya lebih aktif melakukan fotosintesis dibandingkan daun yang sangat kekurangan cahaya.",
        "Rangkuman":"Fotosintesis menyediakan sumber bahan organik bagi tumbuhan dan berperan dalam keseimbangan oksigen-karbon dioksida."
      }
    },
    {
      id:"bio-genetika", subject:"Biologi", icon:"🧬", title:"Genetika Dasar",
      summary:"Mengenal DNA, gen, kromosom, dan pewarisan sifat.",
      sections:{
        "Pengertian":"Genetika mempelajari pewarisan sifat dari satu generasi ke generasi berikutnya.",
        "DNA":"DNA adalah molekul yang menyimpan informasi genetik pada sebagian besar makhluk hidup.",
        "Gen":"Gen adalah bagian dari DNA yang berkaitan dengan informasi tertentu untuk menghasilkan produk fungsional atau memengaruhi sifat.",
        "Kromosom":"Kromosom merupakan struktur yang membawa DNA dan protein di dalam sel.",
        "Pewarisan":"Sifat anak dipengaruhi kombinasi informasi genetik dari orang tua serta interaksi dengan lingkungan.",
        "Rangkuman":"DNA, gen, dan kromosom saling berhubungan dalam penyimpanan dan pewarisan informasi genetik."
      }
    },
    {
      id:"bio-ekosistem", subject:"Biologi", icon:"🌳", title:"Ekosistem dan Rantai Makanan",
      summary:"Mengenal hubungan antarmakhluk hidup dan aliran energi dalam ekosistem.",
      sections:{
        "Pengertian":"Ekosistem adalah interaksi antara makhluk hidup dan faktor tak hidup dalam suatu lingkungan.",
        "Komponen":"Komponen biotik meliputi produsen, konsumen, dan pengurai. Komponen abiotik meliputi air, cahaya, tanah, suhu, dan udara.",
        "Rantai makanan":"Rantai makanan menunjukkan perpindahan energi dan materi dari satu organisme ke organisme lain melalui proses makan dan dimakan.",
        "Jaring-jaring":"Beberapa rantai makanan dapat saling terhubung membentuk jaring-jaring makanan.",
        "Contoh":"Rumput → belalang → katak → ular adalah contoh sederhana rantai makanan.",
        "Rangkuman":"Keseimbangan ekosistem dipengaruhi hubungan banyak komponen yang saling bergantung."
      }
    },

    {
      id:"math-pangkat", subject:"Matematika", icon:"🔢", title:"Bilangan Berpangkat",
      summary:"Memahami aturan pangkat positif, negatif, nol, dan operasi sederhana.",
      sections:{
        "Pengertian":"Pangkat adalah bentuk singkat dari perkalian berulang suatu bilangan dengan dirinya sendiri.",
        "Aturan":"a^m × a^n = a^(m+n), a^m / a^n = a^(m−n) untuk a ≠ 0.",
        "Pangkat nol":"a^0 = 1 untuk a ≠ 0.",
        "Pangkat negatif":"a^(−n) = 1/a^n untuk a ≠ 0.",
        "Contoh":"2^3 × 2^2 = 2^5 = 32.",
        "Rangkuman":"Perhatikan basis yang sama sebelum menggabungkan pangkat dan pastikan aturan digunakan sesuai bentuk operasi."
      }
    },
    {
      id:"math-pythagoras", subject:"Matematika", icon:"📐", title:"Teorema Pythagoras",
      summary:"Mencari sisi segitiga siku-siku menggunakan hubungan kuadrat sisi.",
      sections:{
        "Pengertian":"Pada segitiga siku-siku, kuadrat sisi miring sama dengan jumlah kuadrat kedua sisi lainnya.",
        "Rumus":"c² = a² + b², dengan c sebagai sisi miring.",
        "Langkah":"Identifikasi sisi miring, masukkan nilai ke rumus, hitung kuadrat, lalu ambil akar jika diperlukan.",
        "Contoh":"Segitiga dengan sisi siku-siku 3 dan 4 memiliki sisi miring √(9+16)=5.",
        "Penerapan":"Digunakan untuk menghitung jarak diagonal, panjang tangga, dan ukuran tertentu pada bangun.",
        "Rangkuman":"Teorema Pythagoras berlaku khusus untuk segitiga siku-siku."
      }
    },
    {
      id:"math-persamaan", subject:"Matematika", icon:"🧮", title:"Persamaan Linear",
      summary:"Menyelesaikan persamaan satu variabel secara bertahap.",
      sections:{
        "Pengertian":"Persamaan linear satu variabel adalah persamaan yang variabelnya berpangkat satu.",
        "Prinsip":"Lakukan operasi yang sama pada kedua ruas agar nilai persamaan tetap setara.",
        "Contoh":"2x + 6 = 14 → 2x = 8 → x = 4.",
        "Pengecekan":"Masukkan kembali nilai x ke persamaan awal untuk memastikan kedua ruas sama.",
        "Rangkuman":"Tujuan utama adalah mengisolasi variabel dengan operasi yang setara pada kedua ruas."
      }
    },
    {
      id:"math-statistika", subject:"Matematika", icon:"📊", title:"Statistika Dasar",
      summary:"Mengenal mean, median, modus, dan cara membaca data sederhana.",
      sections:{
        "Pengertian":"Statistika membantu mengumpulkan, menyajikan, dan menganalisis data.",
        "Mean":"Rata-rata aritmetika diperoleh dari jumlah seluruh data dibagi banyaknya data.",
        "Median":"Nilai tengah setelah data diurutkan.",
        "Modus":"Nilai yang paling sering muncul.",
        "Contoh":"Data 2, 3, 3, 5, 7 memiliki mean 4, median 3, dan modus 3.",
        "Rangkuman":"Gunakan ukuran pemusatan yang sesuai dengan tujuan analisis dan karakter data."
      }
    },

    {
      id:"sejarah-proklamasi", subject:"Sejarah", icon:"🇮🇩", title:"Proklamasi Indonesia",
      summary:"Mempelajari latar belakang dan rangkaian peristiwa menuju Proklamasi 17 Agustus 1945.",
      sections:{
        "Latar belakang":"Kekalahan Jepang pada Perang Dunia II membuka situasi politik yang memungkinkan bangsa Indonesia mempersiapkan kemerdekaan.",
        "Peristiwa penting":"Terjadi perbedaan pandangan mengenai waktu pelaksanaan proklamasi antara golongan muda dan beberapa tokoh.",
        "Perumusan":"Teks proklamasi dirumuskan melalui pembicaraan para tokoh dan kemudian diketik untuk dibacakan.",
        "Pembacaan":"Proklamasi dibacakan pada 17 Agustus 1945 di Jakarta.",
        "Makna":"Proklamasi menjadi pernyataan kemerdekaan dan dasar penting bagi pembentukan negara Indonesia.",
        "Rangkuman":"Proklamasi merupakan hasil rangkaian proses politik dan perjuangan panjang bangsa Indonesia."
      }
    },
    {
      id:"sejarah-industri", subject:"Sejarah", icon:"🏭", title:"Revolusi Industri",
      summary:"Perubahan besar dalam produksi, teknologi, dan kehidupan masyarakat.",
      sections:{
        "Pengertian":"Revolusi Industri adalah periode perubahan besar menuju produksi yang semakin menggunakan mesin dan sistem pabrik.",
        "Awal perkembangan":"Perkembangan awal sangat terkait dengan Inggris dan kemudian menyebar ke wilayah lain.",
        "Teknologi":"Mesin uap, mekanisasi tekstil, dan perkembangan transportasi menjadi bagian penting pada fase awal.",
        "Dampak":"Produksi meningkat, urbanisasi berkembang, dan struktur pekerjaan serta hubungan sosial mengalami perubahan.",
        "Catatan":"Perubahan industri berlangsung dalam beberapa tahap dan terus berlanjut hingga era digital.",
        "Rangkuman":"Revolusi Industri mengubah cara barang diproduksi dan cara masyarakat bekerja."
      }
    },
    {
      id:"sejarah-kerajaan", subject:"Sejarah", icon:"🏛️", title:"Kerajaan Hindu-Buddha di Nusantara",
      summary:"Mengenal perkembangan kerajaan, peninggalan, dan pengaruh budaya Hindu-Buddha.",
      sections:{
        "Awal pengaruh":"Hubungan perdagangan dan pertukaran budaya berperan dalam masuknya pengaruh Hindu-Buddha ke Nusantara.",
        "Kerajaan":"Contoh kerajaan yang sering dipelajari antara lain Kutai, Tarumanegara, Sriwijaya, dan Majapahit.",
        "Peninggalan":"Prasasti, candi, arca, dan karya sastra menjadi sumber penting untuk memahami periode ini.",
        "Sriwijaya":"Dikenal sebagai kerajaan maritim yang berpengaruh di kawasan Asia Tenggara.",
        "Majapahit":"Berkembang sebagai salah satu kerajaan besar dengan jaringan politik dan perdagangan luas.",
        "Rangkuman":"Periode Hindu-Buddha meninggalkan pengaruh penting pada bahasa, seni, arsitektur, dan tradisi."
      }
    },

    {
      id:"geo-bumi", subject:"Geografi", icon:"🌎", title:"Lapisan Bumi",
      summary:"Mengenal kerak, mantel, inti luar, dan inti dalam serta karakteristiknya.",
      sections:{
        "Struktur":"Bumi memiliki beberapa lapisan dengan komposisi dan kondisi fisik berbeda.",
        "Kerak":"Lapisan paling luar dan relatif tipis dibandingkan lapisan di bawahnya.",
        "Mantel":"Lapisan tebal di bawah kerak yang tersusun terutama dari batuan silikat dan mengalami perpindahan panas.",
        "Inti luar":"Bagian inti yang bersifat cair dan banyak tersusun dari besi serta nikel.",
        "Inti dalam":"Bagian terdalam yang padat akibat tekanan sangat tinggi.",
        "Rangkuman":"Perbedaan suhu, tekanan, dan komposisi menghasilkan struktur bumi yang berlapis."
      }
    },
    {
      id:"geo-cuaca", subject:"Geografi", icon:"🌦️", title:"Cuaca dan Iklim",
      summary:"Membedakan cuaca dan iklim serta mengenal unsur-unsurnya.",
      sections:{
        "Cuaca":"Kondisi atmosfer pada waktu dan tempat tertentu, misalnya hujan atau suhu pada hari ini.",
        "Iklim":"Pola kondisi atmosfer dalam jangka waktu panjang di suatu wilayah.",
        "Unsur":"Suhu, kelembapan, tekanan udara, angin, dan curah hujan merupakan unsur yang banyak diamati.",
        "Faktor":"Lintang, ketinggian, jarak dari laut, relief, dan sirkulasi atmosfer memengaruhi kondisi iklim.",
        "Contoh":"Perkiraan hujan sore ini termasuk informasi cuaca, sedangkan pola musim tahunan termasuk iklim.",
        "Rangkuman":"Cuaca bersifat lebih cepat berubah, sedangkan iklim menggambarkan pola jangka panjang."
      }
    },
    {
      id:"geo-gempa", subject:"Geografi", icon:"🌋", title:"Gempa Bumi dan Gunung Api",
      summary:"Memahami proses tektonik dan aktivitas vulkanik secara dasar.",
      sections:{
        "Gempa":"Gempa bumi adalah getaran bumi yang terjadi karena pelepasan energi secara tiba-tiba, sering berkaitan dengan pergerakan lempeng.",
        "Lempeng":"Litosfer tersusun atas lempeng yang bergerak relatif satu sama lain.",
        "Gunung api":"Gunung api dapat terbentuk ketika magma mencapai permukaan melalui proses geologi tertentu.",
        "Dampak":"Gempa dan erupsi dapat menimbulkan perubahan medan, kerusakan bangunan, abu vulkanik, maupun bahaya lain.",
        "Mitigasi":"Kesiapsiagaan, bangunan yang sesuai, jalur evakuasi, dan informasi resmi membantu mengurangi risiko.",
        "Rangkuman":"Pemahaman proses geologi penting untuk mengenali risiko dan meningkatkan kesiapsiagaan."
      }
    },

    {
      id:"tech-internet", subject:"Teknologi", icon:"🌐", title:"Cara Kerja Internet",
      summary:"Mengenal perangkat, alamat IP, DNS, server, dan perpindahan data.",
      sections:{
        "Pengertian":"Internet adalah jaringan komputer yang saling terhubung dan berkomunikasi menggunakan berbagai protokol.",
        "Alamat IP":"Perangkat menggunakan alamat IP agar dapat dikenali pada jaringan.",
        "DNS":"DNS membantu menerjemahkan nama domain menjadi alamat IP yang dapat digunakan komputer.",
        "HTTP/HTTPS":"Browser mengirim permintaan ke server dan server mengembalikan data yang dibutuhkan halaman web.",
        "Contoh":"Saat membuka situs, browser dapat meminta DNS mencari alamat server sebelum mengirim permintaan HTTP/HTTPS.",
        "Rangkuman":"Internet bekerja melalui kombinasi jaringan, protokol, alamat, server, dan sistem penerjemahan nama."
      }
    },
    {
      id:"tech-ai", subject:"Teknologi", icon:"🤖", title:"Kecerdasan Buatan",
      summary:"Memahami konsep AI, machine learning, data, dan contoh penggunaannya.",
      sections:{
        "Pengertian":"Kecerdasan buatan adalah bidang komputasi yang membuat sistem dapat melakukan tugas yang biasanya memerlukan kemampuan kognitif manusia.",
        "Machine learning":"Dalam machine learning, sistem mempelajari pola dari data untuk menghasilkan prediksi atau keputusan.",
        "Data":"Kualitas dan jumlah data memengaruhi hasil sistem; data yang bias dapat menghasilkan keluaran yang bias.",
        "Contoh":"Rekomendasi konten, pengenalan gambar, penerjemahan, dan asisten digital adalah contoh penerapan AI.",
        "Catatan":"AI tidak otomatis memahami dunia seperti manusia; kemampuan sistem bergantung pada tujuan, data, dan metode yang digunakan.",
        "Rangkuman":"AI adalah kumpulan teknik komputasi yang digunakan untuk menyelesaikan tugas secara otomatis atau adaptif."
      }
    },
    {
      id:"tech-cyber", subject:"Teknologi", icon:"🔐", title:"Keamanan Digital",
      summary:"Kebiasaan dasar melindungi akun, data, dan perangkat saat online.",
      sections:{
        "Kata sandi":"Gunakan kata sandi yang panjang dan unik untuk setiap layanan.",
        "Verifikasi dua langkah":"2FA menambah lapisan perlindungan selain kata sandi.",
        "Phishing":"Phishing adalah upaya menipu pengguna agar memberikan data sensitif melalui pesan, situs, atau identitas palsu.",
        "Pembaruan":"Pembaruan sistem dan aplikasi membantu memperbaiki kelemahan keamanan yang diketahui.",
        "Kebiasaan aman":"Periksa alamat situs, jangan sembarang membuka lampiran, dan gunakan jaringan tepercaya untuk aktivitas sensitif.",
        "Rangkuman":"Keamanan digital adalah kebiasaan berlapis, bukan hanya soal membuat satu kata sandi."
      }
    },

    {
      id:"astro-tatasurya", subject:"Astronomi", icon:"☀️", title:"Tata Surya",
      summary:"Mengenal Matahari, planet, planet katai, asteroid, komet, dan benda langit lain.",
      sections:{
        "Pusat sistem":"Matahari adalah bintang yang menjadi pusat Tata Surya dan sumber energi utama bagi planet-planet.",
        "Planet":"Delapan planet mengorbit Matahari dan terbagi menjadi planet kebumian serta planet raksasa.",
        "Benda kecil":"Asteroid dan komet adalah contoh benda kecil Tata Surya yang juga mengorbit Matahari.",
        "Orbit":"Planet bergerak mengelilingi Matahari pada orbit yang dipengaruhi gravitasi.",
        "Contoh":"Bumi adalah planet kebumian yang memiliki permukaan padat dan satu satelit alami utama, Bulan.",
        "Rangkuman":"Tata Surya merupakan sistem gravitasi yang dipusatkan oleh Matahari."
      }
    },
    {
      id:"astro-bintang", subject:"Astronomi", icon:"✨", title:"Bintang dan Galaksi",
      summary:"Memahami kelahiran bintang, spektrum, dan struktur galaksi secara dasar.",
      sections:{
        "Bintang":"Bintang adalah objek yang menghasilkan energi melalui proses di bagian dalamnya; banyak bintang menghasilkan energi melalui fusi nuklir.",
        "Kelahiran":"Bintang dapat terbentuk dari awan gas dan debu yang runtuh akibat gravitasi.",
        "Siklus hidup":"Massa bintang memengaruhi tahap-tahap kehidupannya dan bagaimana akhirnya berevolusi.",
        "Galaksi":"Galaksi adalah kumpulan besar bintang, gas, debu, dan materi lain yang terikat gravitasi.",
        "Contoh":"Bima Sakti adalah galaksi tempat Tata Surya berada.",
        "Rangkuman":"Bintang dan galaksi memiliki skala sangat besar dan menjadi objek utama yang dipelajari dalam astronomi."
      }
    },
    {
      id:"astro-gravitasi", subject:"Astronomi", icon:"🛰️", title:"Gravitasi dan Orbit",
      summary:"Mempelajari bagaimana gravitasi memengaruhi benda dan benda langit.",
      sections:{
        "Pengertian":"Gravitasi adalah gaya tarik yang muncul antara benda-benda bermassa.",
        "Orbit":"Objek dapat berada di orbit ketika geraknya dan gaya gravitasi saling mengha
