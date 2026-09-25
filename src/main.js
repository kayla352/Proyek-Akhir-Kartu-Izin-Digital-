import './style.css';
const app = document.querySelector('#app');
let dataIzin = [];
function getKelompokSiswa (kelas, nama) {
  const kelompok = {
    VII: {
      Putra: ['Jojo', 'Fatih'],
      Putri: ['Nabila', 'Jara']
    },
    VIII: {
      Putra: ['Nasa', 'Lilo'],
      Putri: ['Lilu', 'Caca']
    },
    IX: {
      Putra: ['Koko', 'Momo'],
      Putri: ['Sisi', 'Nabiga']
    },
    X: {
      Putra: ['Jojo', 'Popo'],
      Putri: ['Nana', 'Lili']
    },
    XI: {
      Putra: ['Nopal', 'Kino'],
      Putri: ['Zahra', 'Cinta']
    },
    XII: {
      Putra: ['Aksa', 'Nabil'],
      Putri: ['Amal', 'Aul']
    }
  };

  if (kelompok[kelas].Putra.includes(nama)) {
    return 'Putra';
  }

  if (kelompok[kelas].Putri.includes(nama)) {
    return 'Putri';
  }

  return '';
}

function halamanLogin() {
   app.innerHTML = `
     <main class="page">
       <section class="hero">
        <div class="circle pink"></div>
        <div class="circle blue"></div>

        <div class="hero-content">
         <div class="label">
          KARTU IZIN BOARDING
         </div>

         <h1>Selamat Datang!</h1>

         <p>
          Masuk sebagai siapa?
         </p>
        </div>
      </section>

      <section class="form-card">

       <label class="form-label">
         Pilih peran kamu
       </label>

       <div class="student-list">

       <button
        id="siswa"
        class="student-button"
       >
        🧑‍🎓Siswa
       </button>
       <button
        id="orangTua"
        class="student-button"
       >
         👨‍👩‍👧 Orang Tua
       </button>

       <button
        id="pembina"
        class="student-button"
       >
         🧑‍🏫 Pembina
       </button>

      </div>
    </section>
  </main>
`;

document.querySelector('#siswa').addEventListener('click', () => {
  halamanSiswa();
});

document.querySelector('#orangTua').addEventListener('click', () => {
  halamanOrangTua ();
});

document.querySelector('#pembina').addEventListener('click', () => {
  halamanPembina();
});
}

function halamanSiswa() {
  app.innerHTML = `
   <main class="page">
    <section class="hero">
     <div class="circle pink"></div>
     <div class="circle blue"></div>
    
     <div class="hero-content">
      <div class="label">
      KARTU IZIN BOARDING
      </div>

      <h1>Siswa</h1>

      <p>
      Pilih kelas kamu
      </p>
      </div>
    </section>
   
    <section class="form-card">
    <label class="form-label">
     Pilih Kelas
    </label>

    <div class="class-grid">

     <button id="siswaVII" class="class-button">VII</button>
     <button id="siswaVIII" class="class-button">VIII</button>
     <button id="siswaIX" class="class-button">IX</button>
     <button id="siswaX" class="class-button">X</button>
     <button id="siswaXI" class="class-button">XI</button>
     <button id="siswaXII" class="class-button">XII</button>
    </div>

    <div class="info">
     Pilih kelas sesuai dengan kelas kamu.
    </div>

    <button id="kembaliSiswa" class="student-button" style="margin-top: 15px;">
    ← Kembali
    </button>
  </section>
</main>
`;

document.querySelector('#siswaVII').addEventListener('click', () => {
  halamanNamaSiswa('VII');
});
document.querySelector('#siswaVIII').addEventListener('click', () => {
  halamanNamaSiswa('VIII');
});
document.querySelector('#siswaIX').addEventListener('click', () => {
  halamanNamaSiswa('IX');
});
document.querySelector('#siswaX').addEventListener('click', () => {
  halamanNamaSiswa('X');
});
document.querySelector('#siswaXI').addEventListener('click', () => {
  halamanNamaSiswa('XI');
});
document.querySelector('#siswaXII').addEventListener('click', () => {
  halamanNamaSiswa('XII');
});
document.querySelector('#kembaliSiswa').addEventListener('click', () => {
  halamanLogin();
});
}
function halamanNamaSiswa(kelas) {
  const students = {
  Putra: {
      VII: ['Jojo', 'Fatih'],
      VIII: ['Nasa', 'Lilo'],
      IX: ['Koko', 'Momo'],
      X: ['Jojo', 'Popo'],
      XI: ['Nopal', 'Kino'],
      XII: ['Aksa', 'Nabil']
    },
    Putri: {
      VII: ['Nabila', 'Jara'],
      VIII: ['Lilu', 'Caca'],
      IX: ['Sisi', 'Nabiga'],
      X: ['Nana', 'Lili'],
      XI: ['Zahra', 'Cinta'],
      XII: ['Amal', 'Aul']
    }
};
  app.innerHTML = `
   <main class="page">
   <section class="hero">
    <div class="circle pink"></div>
    <div class="circle blue"></div>

    <div class="hero-content">
     <div class="label">
      KARTU IZIN BOARDING
     </div>

     <h1>Kelas ${kelas}</h1>

     <p>
     Pilih nama kamu
     </p>
    </div>
   </section>

   <section class="form-card">

   <label class="form-label">
   Pilih nama
   </label>

   <div class="student-list">
    <button id="putra" class="student-button">
      🧑🏻 Putra
    </button>

    <button id="putri" class="student-button">
      🧕🏻 Putri
    </button>
    </div>
    <div id="daftarNama"></div>
    <button
      id="kembaliNama"
      class="student-button"
      style="margin-top: 15px;"
    >
     ← Kembali
     </button>
    </section>
   </main>
  `;
  document.querySelector('#putra').addEventListener('click', () => {
    tampilkanNama('Putra');
  });
  document.querySelector('#putri').addEventListener('click', () =>{
    tampilkanNama('Putri');
  });
  function tampilkanNama(kelompok) {
    const daftarNama = students[kelompok][kelas];
    document.querySelector('#daftarNama').innerHTML = `
     <label class="form-label" style="margin-top: 25px;">
      Pilih nama
     </label>

     <div class="student-list">
      ${daftarNama.map((nama, index) => `
        <button
        id="nama${index}"
        class="student-button"
        >
        🧑‍🎓 ${nama}
        </button>
      `).join('')}
    </div>
  `;
  daftarNama.forEach((nama, index) => {
    document.querySelector(`#nama${index}`).addEventListener('click', () => {
     const izinAktif = dataIzin.find(izin =>
      izin.kelas === kelas &&
      izin.nama === nama &&
      izin.statusPembina === 'Diizinkan' &&
      !izin.jamKembaliAktual
     );
     if (izinAktif) {
      halamanJamKembaliSiswa(kelas, nama, izinAktif);
     } else {
      halamanTanggalIzin(kelas, nama);
     }

  });
});
}
document.querySelector('#kembaliNama').addEventListener('click', () => {
  halamanSiswa();
});
}
function halamanJamKembaliSiswa(kelas, nama, izin) {
  app.innerHTML = `
    <main class="page">
      <section class="hero">
        <div class="circle pink"></div>
        <div class="circle blue"></div>

        <div class="hero-content">
          <div class="label">
            KARTU IZIN BOARDING
          </div>

          <h1>Sudah Kembali?</h1>

          <p>
            Silakan isi jam kamu kembali.
          </p>
        </div>
      </section>

      <section class="form-card">

        <div class="info">
          <strong>${nama}</strong>
          <br><br>
          📅 Tanggal: ${izin.tanggal}
          <br>
          📝 Jenis izin: ${izin.jenis}
          <br>
          ⏰ Maksimal kembali: ${izin.jamMaksimal}
        </div>

        <label class="form-label" style="margin-top: 25px;">
          Jam kembali sebenarnya
        </label>

        <input
          id="jamKembaliAktual"
          type="time"
          style="
            width: 100%;
            padding: 14px;
            font-size: 18px;
            border: 1px solid #ddd;
            border-radius: 12px;
          "
        >

        <button
          id="sudahKembali"
          class="student-button"
          style="margin-top: 15px;"
        >
          🏠 Sudah Kembali
        </button>

        <button
          id="kembaliSiswa"
          class="student-button"
          style="margin-top: 10px;"
        >
          ← Kembali
        </button>

      </section>
    </main>
  `;

  document.querySelector('#sudahKembali').addEventListener('click', () => {

    const jamKembaliAktual =
      document.querySelector('#jamKembaliAktual').value;

    if (jamKembaliAktual === '') {
      alert('Silakan masukkan jam kembali.');
      return;
    }

    izin.jamKembaliAktual = jamKembaliAktual;

    alert('Jam kembali berhasil dicatat.');

    halamanNamaSiswa(kelas);
  });

  document.querySelector('#kembaliSiswa').addEventListener('click', () => {
    halamanNamaSiswa(kelas);
  });
}


function halamanTanggalIzin(kelas, nama) {
   app.innerHTML = `
   <main class="page">

    <section class="hero">
     <div class="circle pink"></div>
     <div class="circle blue"></div>

     <div class="hero-content">
      <div class="label">
       KARTU IZIN BOARDING
      </div>

      <h1>Ajukan Izin</h1>
      <p>
       ${nama} • Kelas ${kelas}
       </p>
       </div>
      </section>

      <section class="form-card">
      <label class="form-label">
       Tanggal izin
      </label>
     
      <input
      id="tanggalIzin"
      type="date"
      class="student-button"
      style="width: 100%;"
      >

      <label class="form-label" style="margin-top: 20px;">
      Jenis izin
      </label>

      <div class="student-list">
      <button id="izinLes" class="student-button">
       📚 Les
      </button>
      <button id="izinLainnya" class="student-button">
       📝 Lainnya
      </button>
      </div>
      <div id="keteranganContainer"></div>
      <button
      id="ajukanIzin"
      class="student-button"
      style="margin-top: 15px;"
      >
       📤 Ajukan Izin
      </button>  
      <button id="kembaliTanggal" class="student-button" style="margin-top: 15px;">
       ← Kembali
      </button>
     </section>
    </main>
  `;

  let jenisIzin = '';
  document.querySelector('#izinLes').addEventListener('click', () => {
    jenisIzin = 'Les';
    document.querySelector('#keteranganContainer').innerHTML = ''; 
  });

  document.querySelector('#izinLainnya').addEventListener('click', () => {
    jenisIzin = 'Lainnya';
  
    document.querySelector('#keteranganContainer').innerHTML = `
    <label class="form-label" style="margin-top: 20px;">
      Keterangan
    </label>

    <textarea
     id="keterangan"
     class="student-button"
     placeholder="Masukkan keterangan izin"
     style="width: 100%; min-height: 100px; resize: vertical;"
    ></textarea>
   `;
  });
    document.querySelector('#ajukanIzin').addEventListener('click', () => {
      const tanggal = document.querySelector('#tanggalIzin').value;

      if (tanggal === '') {
        alert('Silakan pilih tanggal izin terlebih dahulu.');
        return;
      }
      if (jenisIzin === '') {
        alert('Silakan pilih jenis izin terlebih dahulu.');
        return;
      }
      if (jenisIzin === 'Lainnya') {
        const keterangan = document.querySelector('#keterangan').value.trim();

        if (keterangan === '') {
          alert ('Keterangan wajib diisi.');
          return;
      }

      dataIzin.push({
        nama: nama,
        kelas: kelas,
        kelompok: getKelompokSiswa(kelas, nama),
        tanggal: tanggal,
        jenis: jenisIzin,
        keterangan: keterangan,
        statusOrangTua: 'Menunggu'
      });

        alert('Izin berhasil diajukan. Silakan tunggu konfirmasi orang tua.');
        return;
    }
      if (jenisIzin === 'Les') {
        dataIzin.push({
          nama: nama,
          kelas: kelas,
          kelompok: getKelompokSiswa(kelas, nama),
          tanggal: tanggal,
          jenis: jenisIzin,
          keterangan: '-',
          statusOrangTua: 'Dikonfirmasi'
        });
      alert('Izin Les berhasil diajukan.');
      return;
    }
    });
  document.querySelector('#kembaliTanggal').addEventListener('click', () => {
    halamanNamaSiswa(kelas);
  });
}
    
      
      
function halamanOrangTua() {
  app.innerHTML = `
   <main class="page">

    <section class="hero">
     <div class="circle pink"></div>
     <div class="circle blue"></div>

     <div class="hero-content">
      <div class="label">
       KARTU IZIN BOARDING
      </div>

      <h1>Orang Tua</h1>

      <p>
       Pilih kelas anak
      </p>
     </div>
    </section>

    <section class="form-card">

     <label class="form-label">
      Pilih Kelas
     </label>

     <div class="class-grid">

      <button id="ortuVII" class="class-button">VII</button>
      <button id="ortuVIII" class="class-button">VIII</button>
      <button id="ortuIX" class="class-button">IX</button>
      <button id="ortuX" class="class-button">X</button>
      <button id="ortuXI" class="class-button">XI</button>
      <button id="ortuXII" class="class-button">XII</button>

      <button
      id="kembaliOrang"
      class="student-button"
      style="margin-top: 15px;"
      >
  ← Kembali
</button> 
    </div>

    <div class="info">
     Pilih kelas sesuai dengan kelas anak.
    </div>

  </section>
</main>
`;
document.querySelector('#ortuVII').addEventListener('click', () => {
    halamanNamaAnak('VII');
  });

  document.querySelector('#ortuVIII').addEventListener('click', () => {
    halamanNamaAnak('VIII');
  });

  document.querySelector('#ortuIX').addEventListener('click', () => {
    halamanNamaAnak('IX');
  });

  document.querySelector('#ortuX').addEventListener('click', () => {
    halamanNamaAnak('X');
  });

  document.querySelector('#ortuXI').addEventListener('click', () => {
    halamanNamaAnak('XI');
  });

  document.querySelector('#ortuXII').addEventListener('click', () => {
    halamanNamaAnak('XII');
  });
  document.querySelector('#kembaliOrangTua').addEventListener('click', () => {
    halamanNamaAnak();
});

}
function halamanNamaAnak(kelas) {
  const students = {
    VII: ['Jojo', 'Fatih', 'Nabila', 'Jara'],
    VIII: ['Nasa', 'Lilo', 'Lilu', 'Caca'],
    IX: ['Koko', 'Momo', 'Sisi', 'Nabiga'],
    X: ['Jojo', 'Popo', 'Nana', 'Lili'],
    XI: ['Nopal', 'Kino', 'Zahra', 'Cinta'],
    XII: ['Aksa', 'Nabil', 'Amal', 'Aul']
  };
  
  app.innerHTML = `
   <main class="page">

    <section class="hero">
     <div class="circle pink"></div>
     <div class="circle blue"></div>

     <div class="hero-content">
      <div class="label">
       KARTU IZIN BOARDING
      </div>

      <h1>Kelas ${kelas}</h1>

      <p>
       Pilih nama anak
      </p>
    </div>
  </section>

  <section class="form-card">

  <label class="form-label">
  Pilih nama anak
  </label>

  <div class="student-list">
  ${students[kelas].map((nama, index) => `
    <button
    id="anak${index}"
    class="student-button"
    >
     🧑‍🎓 ${nama} 
    </button>
    `).join('')}
    </div>
    <button
    id="kembaliNamaAnak"
    class="student-button"
    style="margin-top: 15px;"
    >
    ← Kembali
    </button>
  </section>
 </main>
`;
students[kelas].forEach((nama, index) => {
    document.querySelector(`#anak${index}`).addEventListener('click', () => {
      halamanKonfirmasiOrangTua(kelas, nama);
    });
  });

  document.querySelector('#kembaliNamaAnak').addEventListener('click', () => {
    halamanOrangTua();
  });
}
function halamanKonfirmasiOrangTua(kelas, nama) {
   const izin = dataIzin.find(item =>
    item.kelas === kelas &&
    item.nama === nama &&
    item.jenis === 'Lainnya' &&
    item.statusOrangTua === 'Menunggu' 
   );

   if (!izin) {
    app.innerHTML = `
    <main class="page">
     <section class="hero">
     <div class="circle pink"></div>
          <div class="circle blue"></div>

          <div class="hero-content">
            <div class="label">
              KARTU IZIN BOARDING
            </div>

            <h1>Tidak Ada Izin</h1>

            <p>
              ${nama} • Kelas ${kelas}
            </p>
          </div>
        </section>

        <section class="form-card">

          <div class="info">
            Belum ada permintaan izin yang menunggu konfirmasi.
          </div>

          <button
            id="kembaliKonfirmasi"
            class="student-button"
            style="margin-top: 15px;"
          >
            ← Kembali
          </button>

        </section>
      </main>
    `;

    document.querySelector('#kembaliKonfirmasi').addEventListener('click', () => {
      halamanNamaAnak(kelas);
    });

    return;
  }

  app.innerHTML = `
    <main class="page">

      <section class="hero">
        <div class="circle pink"></div>
        <div class="circle blue"></div>

        <div class="hero-content">
          <div class="label">
            KARTU IZIN BOARDING
          </div>

          <h1>Konfirmasi</h1>

          <p>
            ${nama} • Kelas ${kelas}
          </p>
        </div>
      </section>

      <section class="form-card">

        <label class="form-label">
          Permintaan Izin
        </label>

        <div class="student-button">

          <strong>Nama</strong>
          <br>
          ${izin.nama}

          <br><br>

          <strong>Jenis Izin</strong>
          <br>
          ${izin.jenis}

          <br><br>

          <strong>Keterangan</strong>
          <br>
          ${izin.keterangan}

          <br><br>

          <strong>Tanggal</strong>
          <br>
          ${izin.tanggal}

          <br><br>

          <strong>Status</strong>
          <br>
          🟡 Menunggu konfirmasi orang tua

        </div>

        <button
          id="konfirmasi"
          class="student-button"
          style="margin-top: 15px;"
        >
          ✅ Konfirmasi
        </button>

        <button
          id="tidakKonfirmasi"
          class="student-button"
        >
          ❌ Tidak
        </button>

        <button
          id="kembaliKonfirmasi"
          class="student-button"
        >
          ← Kembali
        </button>

      </section>
    </main>
  `;

  document.querySelector('#konfirmasi').addEventListener('click', () => {
    izin.statusOrangTua = 'Dikonfirmasi';

    alert('Izin telah dikonfirmasi.');

    halamanNamaAnak(kelas);
  });

  document.querySelector('#tidakKonfirmasi').addEventListener('click', () => {
    izin.statusOrangTua = 'Ditolak';

    alert('Izin tidak dikonfirmasi.');

    halamanNamaAnak(kelas);
  });

  document.querySelector('#kembaliKonfirmasi').addEventListener('click', () => {
    halamanNamaAnak(kelas);
  });
}
function halamanPembina() {
  app.innerHTML = `

   <main class="page">
    <section class="hero">
     <div class="circle pink"></div>
     <div class="circle blue"></div>

     <div class="hero-content">
     <div class="label">
      KARTU IZIN BOARDING
     </div>

     <h1>Pembina</h1>

     <p>
      Pilih kelas dan kelompok asrama
     </p>
    </div>
  </section>

  <section class="form-card">

    <label class="form-label">
     Pilih Kelas
    </label>

    <div class="class-grid">

  <button id="kelasVII" class="class-button">VII</button>
  <button id="kelasVIII" class="class-button">VIII</button>
  <button id="kelasIX" class="class-button">IX</button>
  <button id="kelasX" class="class-button">X</button>
  <button id="kelasXI" class="class-button">XI</button>
  <button id="kelasXII" class="class-button">XII</button>
  <button
  id="kembaliPembina"
  class="student-button"
  style="margin-top: 15px;"
>
  ← Kembali
</button>
</div>

    <div class="info">
     Setelah memilih kelas, pilih Putra atau Putri.
    </div>

   </section>
  </main>
 `;

 document.querySelector('#kelasVII').addEventListener('click', () => {
  pilihKelasPembina('VII');
});

document.querySelector('#kelasVIII').addEventListener('click', () => {
  pilihKelasPembina('VIII');
});

document.querySelector('#kelasIX').addEventListener('click', () => {
  pilihKelasPembina('IX');
});

document.querySelector('#kelasX').addEventListener('click', () => {
  pilihKelasPembina('X');
});

document.querySelector('#kelasXI').addEventListener('click', () => {
  pilihKelasPembina('XI');
});

document.querySelector('#kelasXII').addEventListener('click', () => {
  pilihKelasPembina('XII');
});
document.querySelector('#kembaliPembina').addEventListener('click', () => {
  halamanLogin();
});

}
 function pilihKelasPembina(kelas) {
  app.innerHTML = `
   <main class="page">
    <section class="hero">
     <div class="circle pink"></div>
     <div class="circle blue"></div>

     <div class="hero-content">
      <div class="label">
       KARTU IZIN BOARDING
      </div>

      <h1>kelas ${kelas}</h1>
       <p>
        Pilih kelompok asrama
       </p>
      </div>
     </section>

     <section class="form-card">

      <label class="form-label">
       Pilih Kelompok
      </label>
      <div class="student-list">
       <button id="putra" class="student-button">
            🧑🏻 Putra
          </button>

          <button id="putri"class="student-button">
            🧕🏻 Putri
          </button>

          <button
           id="kembaliKelompokPembina"
           class="student-button"
           style="margin-top: 15px;"
          >
            ← Kembali
          </button>
        </div>
      </section>
    </main>
  `;
   document.querySelector('#putra').addEventListener('click', () => {
    halamanDashboardPembina(kelas, 'Putra');
   });
   document.querySelector('#putri').addEventListener('click', () => {
    halamanDashboardPembina(kelas, 'Putri');
   });
   document.querySelector('#kembaliKelompokPembina').addEventListener('click', () => {
  halamanPembina();
  });
 }
function halamanDashboardPembina(kelas, kelompok) {
   app.innerHTML = `
    <main class="page">
    <section class="hero">
     <div class="circle pink"></div>
     <div class="circle blue"></div>

     <div class="hero-content">
      <div class="label">
       KARTU IZIN BOARDING
      </div>

      <h1>Dashboard</h1>
      <p>
       Kelas ${kelas} • ${kelompok}
      </p>
    </div>
  </section>
  <section class="form-card">

   <div class="student-list">
    <button id="permintaan" class="student-button">
     🟡 Permintaan
    </button>

    <button id="riwayat" class="student-button">
     🔵 Riwayat
    </button>

    <button id="lagiDiluar" class="student-button">
     🩷 Lagi di luar
    </button>

    </div>

    <button id="kembali" class="student-button">
       ← Kembali
    </button>
  </section>
</main>
`;
 document.querySelector('#kembali').addEventListener('click', () => {
    pilihKelasPembina(kelas);
  });
 document.querySelector('#permintaan').addEventListener('click', () => {
  halamanPermintaan(kelas, kelompok);
 });
 document.querySelector('#riwayat').addEventListener('click', () => {
  halamanRiwayat(kelas, kelompok);
 });
 document.querySelector('#lagiDiluar').addEventListener('click', () => {
  halamanLagiDiluar(kelas, kelompok);
 });
}

function halamanPermintaan(kelas, kelompok) {
 const permintaan = dataIzin.filter(item =>
  item.kelas === kelas &&
  item.kelompok === kelompok &&
  item.statusOrangTua === 'Dikonfirmasi' &&
  item.statusPembina !== 'Diizinkan'
  );

  app.innerHTML = `
   <main class="page">

    <section class="hero">
     <div class="circle pink"></div>
     <div class="circle blue"></div>

     <div class="hero-content">
      <div class="label">
       KARTU IZIN BOARDING
      </div>

      <h1>Permintaan</h1>

      <p>
       Kelas ${kelas} • ${kelompok}
      </p>
    </div>
  </section>

  <section class="form-card">

   <label class="form-label">
    Permintaan Izin
   </label>

   <div class="student-list">
    ${
       permintaan.length === 0
       ? `
       <div class="info">
        Belum ada permintaan izin.
       </div>
       `
       : permintaan.map((izin, index) => `
       <div
       id="permintaan${index}"
       class="student-button"
       >
     <strong>${izin.nama}</strong>
     <br>
     <small>${izin.jenis}</small>
     <br>
     <small>${izin.keterangan}</small>
     <br>
     <small>${izin.tanggal}</small>
     <br>
     <small>🟢 Orang tua telah mengonfirmasi</small>
    </div>
    `).join('')
    }
  </div>

  <button 
  id="kembaliPermintaan" 
  class="student-button">
    ← Kembali
  </button>
</section>
</main>
`;

permintaan.forEach((izin, index) => {
  document
    .querySelector(`#permintaan${index}`)
    .addEventListener('click', () => {
        halamanDetailPermintaan(kelas, kelompok, izin);
    });
});

document.querySelector('#kembaliPermintaan').addEventListener('click', () => {
  halamanDashboardPembina(kelas, kelompok);
});
}
function halamanDetailPermintaan(kelas, kelompok, izin) {
  app.innerHTML = `
   <main class="page">

    <section class="hero">
     <div class="circle pink"></div>
     <div class="circle blue"></div>

     <div class="hero-content">
      <div class="label">
       KARTU IZIN BOARDING
      </div>

      <h1>Detail</h1>

      <p>
      Kelas ${kelas}• ${kelompok}
          </p>
        </div>
      </section>

      <section class="form-card">

      <label class="form-label">
       Detail Permintaan
      </label>

      <div class="student-button">
       <strong>Nama</strong>
       <br>
       ${izin.nama}
       <br><br>

       <strong>Jenis Izin</strong>
       <br>
       ${izin.jenis}

       <br><br>

       <strong>Keterangan</strong>
       <br>
       ${izin.keterangan}
       <br><br>

       <strong>Tanggal</strong>
       <br>
       ${izin.tanggal}

       <br><br>

       <strong>Status</strong>
       <br>
       🟢 Orang tua telah mengonfirmasi
        </div>

        <p><strong>Maksimal jam kembali</strong></p>

        <input
         id="jamKembali"
         type="time"
         class="student-button"
         style="margin-top: 10px; width: 100%; text-align: center;"
        >
        <button id="izinkan" class="student-button" style="margin-top: 15px;">
         ✅ Izinkan
        </button>

        <button id="kembaliDetail" class="student-button">
         ← Kembali
        </button>

        </section>
      </main>
    `;
    document.querySelector('#izinkan').addEventListener('click', () => {
      const jamKembali = document.querySelector('#jamKembali').value;

      if (jamKembali === '') {
        alert('Silakan tentukan maksimal jam kembali terlebih dahulu.');
        return;
      }

      izin.jamMaksimal = jamKembali;
      izin.statusPembina = 'Diizinkan';

      alert('Izin telah diizinkan.');

      halamanLagiDiluar(kelas, kelompok);
    });
    document.querySelector('#kembaliDetail').addEventListener('click', () => {
      halamanPermintaan(kelas, kelompok);
    });
}

function halamanLagiDiluar(kelas, kelompok) {
  const siswaDiluar = dataIzin.filter(izin =>
    izin.kelas === kelas &&
    izin.kelompok === kelompok &&
    izin.statusPembina === 'Diizinkan' &&
    !izin.jamKembaliAktual
  );
  
  app.innerHTML = `
   <main class="page">

    <section class="hero">
     <div class="circle pink"></div>
     <div class="circle blue"></div>

     <div class="hero-content">
      <div class="label">
       KARTU IZIN BOARDING
      </div>

      <h1>Lagi di luar</h1>

      <p>
       Kelas ${kelas} • ${kelompok}
      </p>
     </div>
    </section>

    <section class="form-card">

     <label class="form-label">
      Siswa yang sedang di luar
     </label>

     <div class="student-list">

      ${
        siswaDiluar.length === 0
        ? `

         <div class="info">
          Tidak ada siswa yang sedang di luar.
         </div>
         `
         : siswaDiluar.map(izin => `
           <div class="student-button">

           <strong>${izin.nama}</strong>

           <br><br>

           <small>
           Jenis izin: ${izin.jenis}
           </small>
           <br>
           <small>
           Keterangan: ${izin.keterangan || '-'}
           </small>
           <br>
           <small>
           Tanggal: ${izin.tanggal}
           </small>
           <br>
           <small>
           ⏰ Maksimal kembali: ${izin.jamMaksimal}
           </small>

           <br>

           <small>
            🟢 Sedang berada di luar
           </small>
     </div>
    `).join('')
  }
  </div>

     <button 
     id="kembaliLuar"
     class="student-button"
     style="margin-top: 15px"
     >
      ← Kembali
     </button>

    </section>

   </main>
  `;

  document.querySelector('#kembaliLuar').addEventListener('click', () => {
    halamanDashboardPembina(kelas, kelompok);
  });
}
 function halamanRiwayat(kelas, kelompok) {
  const riwayat = dataIzin.filter(izin =>
    izin.kelas === kelas &&
    izin.kelompok === kelompok &&
    izin.statusPembina === 'Diizinkan' &&
    izin.jamKembaliAktual
  );

  app.innerHTML = `
   <main class="page">

    <section class="hero">
     <div class="circle pink"></div>
     <div class="circle blue"></div>

     <div class="hero-content">
      <div class="label">
       KARTU IZIN BOARDING
      </div>

      <h1>Riwayat</h1>
      <p>
      Kelas ${kelas} • ${kelompok}
          </p>
        </div>
      </section>

      <section class="form-card">

        <label class="form-label">
          Riwayat Izin
        </label>

        <div class="student-list">

          ${
            riwayat.length === 0
            ? `
              <div class="info">
                Belum ada riwayat izin.
              </div>
            `
            : riwayat.map(izin => `
              <div class="student-button">

                <strong>${izin.nama}</strong>

                <br><br>

                <small>
                  Jenis izin: ${izin.jenis}
                </small>

                <br>

                <small>
                  Tanggal: ${izin.tanggal}
                </small>

                <br>

                <small>
                  ⏰ Maksimal kembali: ${izin.jamMaksimal}
                </small>

                <br>

                <small>
                  🏠 Kembali sebenarnya: ${izin.jamKembaliAktual}
                </small>

              </div>
            `).join('')
          }

        </div>

        <button
          id="kembaliRiwayat"
          class="student-button"
          style="margin-top: 15px;"
        >
          ← Kembali
        </button>

      </section>

    </main>
  `;

  document.querySelector('#kembaliRiwayat').addEventListener('click', () => {
    halamanDashboardPembina(kelas, kelompok);
  });
}

halamanLogin();