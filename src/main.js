import "./style.css";
import { supabase } from "./supabase.js";

const app = document.querySelector('#app');
let dataIzin = [];

let dataSiswa = {};


function tampilkanPopup(judul, pesan, setelahTutup = null) {
  const popupLama = document.querySelector('.popup-notif');

  if (popupLama) {
    popupLama.remove();
  }

  const popup = document.createElement('div');
  popup.className = 'popup-notif';

  popup.innerHTML = `
    <h3>🔔 ${judul}</h3>

    <p>
      ${pesan}
    </p>

    <button id="tutupPopup">
      Oke
    </button>
  `;

  document.body.appendChild(popup);

  document.querySelector('#tutupPopup').addEventListener('click', () => {
    popup.remove();

    if (setelahTutup) {
      setelahTutup();
    }
  });
}

function getKelompokSiswa(kelas, nama) {
  if (!dataSiswa[kelas]) {
    return '';
  }

  if (dataSiswa[kelas].Putra.includes(nama)) {
    return 'Putra';
  }

  if (dataSiswa[kelas].Putri.includes(nama)) {
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
            🧑‍🎓 Siswa
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

        <div class="info">
          Pilih peran sesuai dengan akses kamu.
        </div>

      </section>

    </main>
  `;

  document.querySelector('#siswa').addEventListener('click', () => {
    halamanSiswa();
  });

  document.querySelector('#orangTua').addEventListener('click', () => {
    halamanOrangTua();
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

  if (!dataSiswa[kelas]) {
    alert('Data siswa untuk kelas ini belum tersedia.');
    halamanSiswa();
    return;
  }

  const students = {
    Putra: dataSiswa[kelas].Putra,
    Putri: dataSiswa[kelas].Putri
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
            Pilih kelompok dan nama kamu
          </p>
        </div>
      </section>

      <section class="form-card">

        <label class="form-label">
          Pilih kelompok
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

  document.querySelector('#putri').addEventListener('click', () => {
    tampilkanNama('Putri');
  });

  function tampilkanNama(kelompok) {
    const daftarNama = students[kelompok];

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
      document
        .querySelector(`#nama${index}`)
        .addEventListener('click', () => {

          const izinAktif = dataIzin.find(izin =>
            izin.kelas === kelas &&
            izin.nama === nama &&
            izin.statusPembina === 'Diizinkan' &&
            !izin.jamKembaliAktual
          );

          const izinBelumSelesai = dataIzin.find(izin =>
  izin.kelas === kelas &&
  izin.nama === nama &&
  !izin.jamKembaliAktual &&
  izin.statusOrangTua !== 'Ditolak' &&
  (
    izin.statusOrangTua === 'Menunggu' ||
    izin.statusOrangTua === 'Dikonfirmasi' ||
    izin.statusPembina === 'Menunggu'
  )
);
          

          if (izinAktif) {

            const sekarang = new Date();

            const waktuPergi = new Date(
              `${izinAktif.tanggal}T${izinAktif.jamPergi}`
            );

            if (sekarang >= waktuPergi) {
              halamanJamKembaliSiswa(
                kelas,
                nama,
                izinAktif
              );
            } else {
              halamanStatusIzinSiswa(
                kelas,
                nama,
                izinAktif
              );
            }

          } else if (izinBelumSelesai) {

            halamanStatusIzinSiswa(
              kelas,
              nama,
              izinBelumSelesai
            );

          } else {

            halamanTanggalIzin(
              kelas,
              nama
            );

          }

        });
    });
  }

  document
    .querySelector('#kembaliNama')
    .addEventListener('click', () => {
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

  document.querySelector('#sudahKembali').addEventListener('click', async () => {

    const jamKembaliAktual =
      document.querySelector('#jamKembaliAktual').value;

    if (jamKembaliAktual === '') {
      tampilkanPopup(
        'Jam kembali belum diisi',
        'Silakan masukkan jam kembali terlebih dahulu.'
      );
      return;
    }

    if(jamKembaliAktual <= izin.jamPergi) {
      tampilkanPopup(
         'Jam kembali tidak valid',
         'Jam kembali tidak boleh lebih awal dari jam pergi.'
      );
      return
    }

    const { error } = await supabase
  .from('izin')
  .update({
    jam_kembali_aktual: jamKembaliAktual,
    notifikasi_kembali_ortu: true
  })
  .eq('id', izin.id);

if (error) {
  console.error('Gagal menyimpan jam kembali:', error);
  alert('Jam kembali gagal disimpan ke database.');
  return;
}

izin.jamKembaliAktual = jamKembaliAktual;
izin.notifikasiKembaliOrtu = true;
    tampilkanPopup(
      'Sudah kembali',
      'Jam kembali berhasil dicatat.',
    () => {
      halamanRiwayatSiswa(kelas, nama);
    }
    );
  });

  document.querySelector('#kembaliSiswa').addEventListener('click', () => {
    halamanNamaSiswa(kelas);
  });
}

function halamanStatusIzinSiswa(kelas, nama, izin) {
  app.innerHTML = `
    <div class="page">
      <section class="form-card status-card">

        <div class="status-icon">🕐</div>

        <h2>Status Izin</h2>

        <div class="status-jenis">
          ${izin.jenis}
        </div>

        <div class="status-detail">
          <div class="status-row">
            <span>📅 Tanggal</span>
            <strong>${izin.tanggal}</strong>
          </div>

          <div class="status-row">
            <span>🚶 Jam pergi</span>
            <strong>${izin.jamPergi}</strong>
          </div>

          ${
            izin.keterangan
              ? `
                <div class="status-row">
                  <span>📝 Keterangan</span>
                  <strong>${izin.keterangan}</strong>
                </div>
              `
              : ''
          }
        </div>

        <div class="status-message">
          ${
            izin.jenis === 'Lainnya' &&
            izin.statusOrangTua === 'Ditolak'
              ? `
                <div class="status-badge ditolak">❌ Izin ditolak</div>
                <p>Izin ditolak oleh orang tua.</p>
              `
              : izin.jenis === 'Lainnya' &&
                izin.statusOrangTua === 'Menunggu'
              ? `
                <div class="status-badge menunggu">🟡 Menunggu</div>
                <p>Menunggu konfirmasi orang tua.</p>
              `
              : izin.statusOrangTua === 'Dikonfirmasi' &&
                izin.statusPembina !== 'Diizinkan'
              ? `
                <div class="status-badge proses">🔵 Diproses</div>
                <p>Orang tua sudah mengonfirmasi.<br>
                Menunggu persetujuan pembina.</p>
              `
              : izin.statusPembina !== 'Diizinkan'
              ? `
                <div class="status-badge menunggu">🟡 Menunggu</div>
                <p>Menunggu persetujuan pembina.</p>
              `
              : `
                <div class="status-badge disetujui">🟢 Disetujui</div>

                <div class="approved-info">
                  <p>🚶 Jam pergi: <strong>${izin.jamPergi}</strong></p>
                  <p>🏠 Maksimal kembali: <strong>${izin.jamMaksimal}</strong></p>
                </div>
              `
          }
        </div>
        
        <button id="kembaliStatus" class="student-button">
           ← Kembali
        </button>

      </section>
    </div>
  `;
  document.querySelector('#kembaliStatus').addEventListener('click', () => {
    halamanNamaSiswa(kelas);
  });
}
async function halamanTanggalIzin(kelas, nama) {
  const izinBelumSelesai = dataIzin.find(izin =>
    izin.kelas === kelas &&
    izin.nama === nama &&
    !izin.jamKembaliAktual &&
    izin.statusOrangTua !== 'Ditolak' &&
    (
      izin.statusOrangTua === 'Menunggu' ||
      izin.statusOrangTua === 'Dikonfirmasi' ||
      izin.statusPembina === 'Menunggu'
    )
  );

  if (izinBelumSelesai) {
    alert('Kamu masih memiliki izin yang belum selesai.');
    halamanNamaSiswa(kelas);
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
          Jam pergi
        </label>

        <input
          id="jamPergi"
          type="time"
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

        <button
          id="kembaliTanggal"
          class="student-button"
          style="margin-top: 15px;"
        >
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

  document
    .querySelector('#ajukanIzin')
    .addEventListener('click', async () => {

      const tanggal =
        document.querySelector('#tanggalIzin').value;

      const jamPergi =
        document.querySelector('#jamPergi').value;

      if (tanggal === '') {
        alert('Silakan pilih tanggal izin terlebih dahulu.');
        return;
      }

      if (jamPergi === '') {
        alert('Silakan masukkan jam pergi terlebih dahulu.');
        return;
      }

      const hariIni = new Date();

      const tanggalHariIni =
        hariIni.getFullYear() + '-' +
        String(hariIni.getMonth() + 1).padStart(2, '0') + '-' +
        String(hariIni.getDate()).padStart(2, '0');

      if (tanggal < tanggalHariIni) {
        alert('Tanggal izin tidak boleh sudah lewat.');
        return;
      }

      if (tanggal === tanggalHariIni) {

        const sekarang = new Date();

        const waktuPergi =
          new Date(`${tanggal}T${jamPergi}`);

        if (waktuPergi <= sekarang) {
          alert('Jam pergi sudah lewat. Silakan pilih jam lain.');
          return;
        }
      }

      if (jenisIzin === '') {
        alert('Silakan pilih jenis izin terlebih dahulu.');
        return;
      }

      const kelompok =
        getKelompokSiswa(kelas, nama);

      const { data: siswa, error: siswaError } =
        await supabase
          .from('siswa')
          .select('id')
          .eq('nama', nama)
          .eq('kelas', kelas)
          .eq('kelompok', kelompok)
          .single();

      if (siswaError || !siswa) {
        console.error(
          'Siswa tidak ditemukan:',
          siswaError
        );

        alert(
          'Data siswa tidak ditemukan di database.'
        );

        return;
      }

      let statusOrangTua;
      let keterangan;

      if (jenisIzin === 'Lainnya') {

        const inputKeterangan =
          document.querySelector('#keterangan');

        if (!inputKeterangan) {
          alert('Keterangan wajib diisi.');
          return;
        }

        keterangan =
          inputKeterangan.value.trim();

        if (keterangan === '') {
          alert('Keterangan wajib diisi.');
          return;
        }

        statusOrangTua = 'Menunggu';

      } else {

        keterangan = '-';
        statusOrangTua = 'Dikonfirmasi';

      }

      const { data: izin, error } = await supabase
  .from('izin')
  .insert({
    siswa_id: siswa.id,
    tanggal: tanggal,
    jam_pergi: jamPergi,
    jenis_izin: jenisIzin,
    keterangan: keterangan,
    status_orang_tua:
      jenisIzin === 'Lainnya'
        ? 'menunggu'
        : 'tidak_diperlukan',
    status_pembina: 'menunggu'
  })
  .select(`
    id,
    tanggal,
    jam_pergi,
    jenis_izin,
    keterangan,
    status_orang_tua,
    status_pembina,
    jam_maksimal_kembali,
    jam_kembali_aktual,
    notifikasi_kembali_ortu
  `)
  .single();
      if (error) {
  console.error('Gagal menyimpan izin:', error);

  alert(
    'GAGAL SIMPAN:\n' +
    'Pesan: ' + error.message + '\n' +
    'Detail: ' + (error.details || '-') + '\n' +
    'Hint: ' + (error.hint || '-')
  );

  return;
}

      const izinBaru = {
  id: izin.id,
  nama: nama,
  kelas: kelas,
  kelompok: kelompok,
  tanggal: izin.tanggal,
  jamPergi: izin.jam_pergi?.slice(0, 5) || '',
  jenis: izin.jenis_izin,
  keterangan: izin.keterangan || '',
  statusOrangTua:
    izin.status_orang_tua === 'tidak_diperlukan'
      ? 'Dikonfirmasi'
      : izin.status_orang_tua === 'menunggu'
      ? 'Menunggu'
      : izin.status_orang_tua === 'dikonfirmasi'
      ? 'Dikonfirmasi'
      : izin.status_orang_tua === 'ditolak'
      ? 'Ditolak'
      : izin.status_orang_tua,
  statusPembina:
    izin.status_pembina === 'menunggu'
      ? 'Menunggu'
      : izin.status_pembina === 'diizinkan'
      ? 'Diizinkan'
      : izin.status_pembina,
  jamMaksimal:
    izin.jam_maksimal_kembali?.slice(0, 5) || '',
  jamKembaliAktual:
    izin.jam_kembali_aktual?.slice(0, 5) || '',
  notifikasiKembaliOrtu:
    izin.notifikasi_kembali_ortu || false
};

      dataIzin.unshift(izinBaru);

      if (jenisIzin === 'Lainnya') {

        tampilkanPopup(
          'Izin berhasil diajukan',
          'Silakan tunggu konfirmasi orang tua.',
          () => {
            halamanStatusIzinSiswa(
              kelas,
              nama,
              izinBaru
            );
          }
        );

      } else {

        tampilkanPopup(
          'Izin Les berhasil diajukan',
          'Silakan tunggu persetujuan pembina.',
          () => {
            halamanStatusIzinSiswa(
              kelas,
              nama,
              izinBaru
            );
          }
        );
      }
    });

  document
    .querySelector('#kembaliTanggal')
    .addEventListener('click', () => {
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
    </div>
      <button
      id="kembaliOrang"
      class="student-button"
      style="margin-top: 15px;"
      >
  ← Kembali
</button>

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
  document.querySelector('#kembaliOrang').onclick = halamanLogin;

}
function halamanNamaAnak(kelas) {

  if (!dataSiswa[kelas]) {
    alert('Data siswa untuk kelas ini belum tersedia.');
    halamanOrangTua();
    return;
  }

  const students = dataSiswa;

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

  <button
    id="putraOrtu"
    class="student-button"
  >
    🧑🏻 Putra
  </button>

  <button
    id="putriOrtu"
    class="student-button"
  >
    🧕🏻 Putri
  </button>

  </div>

  <div id="daftarNamaAnak"></div>
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
document.querySelector('#putraOrtu').addEventListener('click', () => {
  tampilkanNamaAnak('Putra', kelas, students);
});

document.querySelector('#putriOrtu').addEventListener('click', () => {
  tampilkanNamaAnak('Putri', kelas, students);
});
document.querySelector('#kembaliNamaAnak').addEventListener('click', () => {
  halamanOrangTua();
});
}

function tampilkanNamaAnak(kelompok, kelas, students) {
  const daftarNama = students[kelas][kelompok];

  document.querySelector('#daftarNamaAnak').innerHTML = `
   <label class="form-label" style="margin-top: 25px;">
    Pilih nama anak
   </label>

   <div class="student-list">
    ${daftarNama.map((nama, index) => `
      <button
       id="anak${index}"
       class="student-button"
      >
      🧑‍🎓 ${nama}
        </button>
      `).join('')}
    </div>
  `;

  daftarNama.forEach((nama, index) => {
    document.querySelector(`#anak${index}`).addEventListener('click', () => {

     const izinMenunggu = dataIzin.find(izin =>
  izin.kelas === kelas &&
  izin.nama === nama &&
  izin.jenis === 'Lainnya' &&
  izin.statusOrangTua === 'Menunggu'
); 

      const izinSudahKembali = dataIzin.find(izin =>
        izin.kelas === kelas &&
        izin.nama === nama &&
        izin.notifikasiKembaliOrtu === true
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

            <h1>${nama}</h1>

            <p>
              Kelas ${kelas}
            </p>
          </div>
        </section>

        <section class="form-card">

          <label class="form-label">
            Menu Orang Tua
          </label>

          <div class="student-list">

           ${izinSudahKembali ? `
            <div class="notification-card">
             <h3>🔔 Anak sudah kembali</h3>
             <p>
                ${nama} telah kembali pada pukul
                <strong>${izinSudahKembali.jamKembaliAktual}</strong>.
            </p>

            <button id="tutupNotifKembali" class="student-button">
             Oke
            </button>
           </div>
          ` : ''}

            <button
              id="permintaanOrtu"
              class="student-button"
            >
              🔔 Permintaan Izin
              ${
                izinMenunggu
                ? '🟡'
                : ''
              }
            </button>

            <button
              id="riwayatOrtu"
              class="student-button"
            >
              🔵 Riwayat
            </button>

          </div>

          <button
            id="kembaliMenuOrtu"
            class="student-button"
            style="margin-top: 15px;"
          >
            ← Kembali
          </button>

        </section>

      </main>
    `;
    
    if (izinSudahKembali) {
  document.querySelector('#tutupNotifKembali').addEventListener('click', async () => {

    const { error } = await supabase
      .from('izin')
      .update({
        notifikasi_kembali_ortu: false
      })
      .eq('id', izinSudahKembali.id);

    if (error) {
      console.error('Gagal menandai notifikasi:', error);
      alert('Notifikasi gagal diperbarui.');
      return;
    }

    izinSudahKembali.notifikasiKembaliOrtu = false;

    tampilkanPopup(
      'Notifikasi dibaca',
      'Notifikasi anak sudah kembali telah dibaca.',
      () => {
        tampilkanNamaAnak(kelompok, kelas, students);
      }
    );
  });
}

        
    document.querySelector('#permintaanOrtu').addEventListener('click', () => {
      halamanKonfirmasiOrangTua(kelas, nama);
    });

    document.querySelector('#riwayatOrtu').addEventListener('click', () => {
      halamanRiwayatOrangTua(kelas, nama);
    });

    document.querySelector('#kembaliMenuOrtu').addEventListener('click', () => {
      halamanNamaAnak(kelas);
    });

  });
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

  document.querySelector('#konfirmasi').addEventListener('click', async () => {

  const { error } = await supabase
    .from('izin')
    .update({
      status_orang_tua: 'Dikonfirmasi'
    })
    .eq('id', izin.id);

  if (error) {
    console.error('Gagal mengonfirmasi izin:', error);
    alert('Konfirmasi izin gagal disimpan.');
    return;
  }

  izin.statusOrangTua = 'Dikonfirmasi';

  tampilkanPopup(
    'Izin telah dikonfirmasi',
    'Izin telah dikonfirmasi dan diteruskan ke pembina.',
    () => {
      halamanNamaAnak(kelas);
    }
  );
});
    

  document.querySelector('#tidakKonfirmasi').addEventListener('click', async () => {

  const { error } = await supabase
    .from('izin')
    .update({
      status_orang_tua: 'Ditolak'
    })
    .eq('id', izin.id);

  if (error) {
    console.error('Gagal menolak izin:', error);
    alert('Penolakan izin gagal disimpan.');
    return;
  }

  izin.statusOrangTua = 'Ditolak';

  tampilkanPopup(
    'Izin tidak dikonfirmasi',
    'Permintaan izin tidak dikonfirmasi oleh orang tua.',
    () => {
      halamanNamaAnak(kelas);
    }
  );
});
  

  document.querySelector('#kembaliKonfirmasi').addEventListener('click', () => {
    halamanNamaAnak(kelas);
  });
}
function halamanRiwayatOrangTua(kelas, nama) {
  const riwayat = dataIzin.filter(izin =>
    izin.kelas === kelas &&
    izin.nama === nama &&
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
            ${nama} • Kelas ${kelas}
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
                  📅 Tanggal: ${izin.tanggal}
                </small>

                <br>

                <small>
                  ⏰ Jam pergi: ${izin.jamPergi}
                </small>

                <br>

                <small>
                  📝 Jenis izin: ${izin.jenis}
                </small>

                <br>

                <small>
                  📄 Keterangan: ${izin.keterangan || '-'}
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
          id="kembaliRiwayatOrtu"
          class="student-button"
          style="margin-top: 15px;"
        >
          ← Kembali
        </button>

      </section>

    </main>
  `;

  document.querySelector('#kembaliRiwayatOrtu').addEventListener('click', () => {
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

  </div>

  <button
  id="kembaliPembina"
  class="student-button"
  style="margin-top: 15px;"
>
  ← Kembali
</button>


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

  const jumlahPutra = dataIzin.filter(izin =>
    izin.kelas === kelas &&
    izin.kelompok === 'Putra' &&
    izin.statusOrangTua === 'Dikonfirmasi' &&
    izin.statusPembina === 'Menunggu'
  ).length;

  const jumlahPutri = dataIzin.filter(izin =>
    izin.kelas === kelas &&
    izin.kelompok === 'Putri' &&
    izin.statusOrangTua === 'Dikonfirmasi' &&
    izin.statusPembina === 'Menunggu'
  ).length;


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
            <span style="float: right;">
             ${jumlahPutra} permintaan izin
            </span>
          </button>

          <button id="putri"class="student-button">
            🧕🏻 Putri
            <span style="float: right;">
              ${jumlahPutri} permintaan izin
            </span>
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
      <div class ="info">
        🔔 ${
           dataIzin.filter(izin =>
             izin.kelas === kelas &&
             izin.kelompok === kelompok &&
             izin.statusOrangTua === 'Dikonfirmasi' &&
             izin.statusPembina === 'Menunggu'
           ).length
        } permintaan menunggu persetujuan
      </div>
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
  item.statusPembina === 'Menunggu'
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

       <strong>Jam pergi</strong>
       <br>
       ${izin.jamPergi}

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
    document.querySelector('#izinkan').addEventListener('click', async () => {
      const jamKembali = document.querySelector('#jamKembali').value;

      if (jamKembali === '') {
        alert('Silakan tentukan maksimal jam kembali terlebih dahulu.');
        return;
      }

      if (jamKembali <= izin.jamPergi) {
        alert('Jam kembali harus lebih dari jam pergi.');
        return;
      }

      const { error } = await supabase
  .from('izin')
  .update({
    jam_maksimal_kembali: jamKembali,
    status_pembina: 'Diizinkan'
  })
  .eq('id', izin.id);

if (error) {
  console.error('Gagal menyetujui izin:', error);
  alert('Persetujuan izin gagal disimpan.');
  return;
}

izin.jamMaksimal = jamKembali;
izin.statusPembina = 'Diizinkan';
      tampilkanPopup(
        'Izin telah diizinkan',
        `Izin ${izin.nama} telah disetujui.`,
        () => {
          halamanDashboardPembina(kelas, kelompok);
        }
      );
    }
    );
    document.querySelector('#kembaliDetail').addEventListener('click', () => {
      halamanPermintaan(kelas, kelompok);
    });
}

function halamanLagiDiluar(kelas, kelompok) {
  const sekarang = new Date ();
  const siswaDiluar = dataIzin.filter(izin => {
    if (
      izin.kelas !== kelas ||
      izin.kelompok !== kelompok ||
      izin.statusPembina !== 'Diizinkan' ||
      izin.jamKembaliAktual
    ) {
      return false;
    }
    
    const waktuPergi = new Date(
      `${izin.tanggal}T${izin.jamPergi}`
    );
    return sekarang >= waktuPergi
    });
   
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
                 📅 Tanggal: ${izin.tanggal}
                </small> 

                <br>

                <small>
                  ⏰ Jam pergi: ${izin.jamPergi}
                </small>

                <br>

                <small>
                  📝 Jenis izin: ${izin.jenis}
                </small>

                <br>

                <small>
                 📄 Keterangan: ${izin.keterangan || '-'}
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

function halamanRiwayatSiswa(kelas, nama) {
  const riwayat = dataIzin.filter(izin =>
    izin.kelas === kelas &&
    izin.nama === nama &&
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
            ${nama} • Kelas ${kelas}
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
                  📅 Tanggal: ${izin.tanggal}
                </small>

                <br>

                <small>
                  ⏰ Jam pergi: ${izin.jamPergi}
                </small>

                <br>

                <small>
                  📝 Jenis izin: ${izin.jenis}
                </small>

                <br>

                <small>
                  📄 Keterangan: ${izin.keterangan || '-'}
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
          id="kembaliRiwayatSiswa"
          class="student-button"
          style="margin-top: 15px;"
        >
          ← Kembali
        </button>

      </section>

    </main>
  `;

  document
    .querySelector('#kembaliRiwayatSiswa')
    .addEventListener('click', () => {
      halamanNamaSiswa(kelas);
    });
}
async function muatDataSiswa() {
  const { data, error } = await supabase
    .from('siswa')
    .select('nama, kelas, kelompok')
    .order('nama');

  if (error) {
    console.error('Gagal mengambil data siswa:', error);
    alert('Data siswa gagal dimuat dari database.');
    return;
  }

  dataSiswa = {
    VII: { Putra: [], Putri: [] },
    VIII: { Putra: [], Putri: [] },
    IX: { Putra: [], Putri: [] },
    X: { Putra: [], Putri: [] },
    XI: { Putra: [], Putri: [] },
    XII: { Putra: [], Putri: [] }
  };

  data.forEach((siswa) => {
    if (dataSiswa[siswa.kelas] && dataSiswa[siswa.kelas][siswa.kelompok]) {
      dataSiswa[siswa.kelas][siswa.kelompok].push(siswa.nama);
    }
  });

  }

async function muatDataIzin() {
  const { data, error } = await supabase
    .from('izin')
    .select(`
      id,
      tanggal,
      jam_pergi,
      jenis_izin,
      keterangan,
      status_orang_tua,
      status_pembina,
      jam_maksimal_kembali,
      jam_kembali_aktual,
      notifikasi_kembali_ortu,
      siswa (
        nama,
        kelas,
        kelompok
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Gagal mengambil data izin:', error);
    alert('Data izin gagal dimuat dari database.');
    return;
  }

  dataIzin = data.map((izin) => ({
    id: izin.id,
    nama: izin.siswa?.nama || '',
    kelas: izin.siswa?.kelas || '',
    kelompok: izin.siswa?.kelompok || '',
    tanggal: izin.tanggal,
    jamPergi: izin.jam_pergi?.slice(0, 5) || '',
    jenis: izin.jenis_izin,
    keterangan: izin.keterangan || '',
    statusOrangTua:
  izin.status_orang_tua === 'tidak_diperlukan'
    ? 'Dikonfirmasi'
    : izin.status_orang_tua === 'menunggu'
    ? 'Menunggu'
    : izin.status_orang_tua === 'dikonfirmasi'
    ? 'Dikonfirmasi'
    : izin.status_orang_tua === 'ditolak'
    ? 'Ditolak'
    : izin.status_orang_tua,

statusPembina:
  izin.status_pembina === 'menunggu'
    ? 'Menunggu'
    : izin.status_pembina === 'diizinkan'
    ? 'Diizinkan'
    : izin.status_pembina,
    jamMaksimal: izin.jam_maksimal_kembali?.slice(0, 5) || '',
    jamKembaliAktual: izin.jam_kembali_aktual?.slice(0, 5) || '',
    notifikasiKembaliOrtu: izin.notifikasi_kembali_ortu || false
  }));
}

async function mulaiAplikasi() {
  await muatDataSiswa();
  await muatDataIzin();

  halamanLogin();
}

mulaiAplikasi();