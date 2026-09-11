import './style.css';

const app = document.querySelector('#app');
const classes = [
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII'
];
const students = {
    VII: ['Orang 1', 'Orang 2', 'Orang 3', 'Dst'],
    VIII: ['Orang1', 'Orang 2', 'Orang 3', 'Dst'],
    IX: ['Orang 1', 'Orang 2', 'Orang 3', 'Dst'],
    X: ['Orang 1', 'Orang 2', 'Orang 3', 'Dst'],
    XI: ['Orang 1', 'Orang 2', 'Orang 3','Dst'],
    XII: ['Orang 1', 'Orang 2', 'Orang 3', 'Dst']
};

let selectedClass = '';
 function showFrom() {
    app.innerHTML = `
     <main class="page">
      <!-- HEADER -->
      <section class="hero">
       <div class="circle pink"></div>
       <div class="circle blue"></div>

       <div class="hero-content">

        <div class="label">
         KARTU IZIN BOARDING
         </div>

         <h1>Kartu Izin</h1>

         <p>
          Yuk isi data mu!
         </p>
       </div>
      </section>

      <!-- FORM -->
      <section class="form-card">
       <label class="form-label">
        Pilih kelas
       </label>

       <div class="class-grid">

        ${classes.map(kelas => `
            <button
             class="class-button ${selectedClass === kelas ? `active` : ''}"
             data-class="${kelas}"
            >
             ${kelas}
            </button>
        `).join('')}
    </div>

    <p class="info kelas">
     ${
        selectedClass
         ? `Kelas ${selectedClass} dipilih`
         : 'Pilih kelas terlebih dahulu'
     }
    </p>
  </section>
  </main>
  `;

  document.querySelectorAll('.class-button').forEach(button => {
    button.addEventListener('click', () => {
        selectedClass = button.dataset.class;
        pilihNama();
    });
  });
 }

 function pilihNama() {
    const names = students[selectedClass];

    app.innerHTML = `
     <main class="page">
      <section class="hero">
       <div class="circle pink"></div>
       <div class="circle blue"></div>

       <div class="hero-content">
         <div class="label">
           KARTU IZIN BOARDING
         </div>

         <h1>Pilih Nama</h1>

         <p>
          Kelas ${selectedClass}
         </p>
        </div>
    </section>

    <section class="form-card">

     <label class="form-label">
      Nama kamu
     </label>

     <div class="student-list">
      ${names.map((name, index) => `
        <button
          class="student-button"
          data-index="${index}"
        >
           ${name}
        </button>
        
    `).join('')}
   </div>

    <button id="kembaliAwal" class="continue-button">
      ← Kembali
     </button>
</section>
</main>
`;

document.querySelectorAll('.student-button').forEach(button => {
    button.addEventListener('click', () => {
        const index = Number(button.dataset.index);
        const selectedName = names[index];

        pilihTanggal(selectedName);
    });
 });
 document.querySelector('#kembaliAwal').addEventListener('click', () => {
  selectedClass = '';
  showFrom();
 });
}

function pilihTanggal(selectedName) {
  let jenisIzin = '';
  app.innerHTML = `
   <main class="page">

     <section class="hero">
      <div class="circle pink"></div>
      <div class="circle blue"></div>
      <div class="hero-content">
       <div class="label">
        KARTU IZIN BOARDING
       </div>

       <h1>Tanggal Izin</h1>

       <p>
        Halo, ${selectedName}!
      </p>
      </div>
    </section>

    <section class="form-card">

    <label class="form-label">
       Pilih tanggal izin
     </label>

     <input
      type="date"
      id="tanggalIzin"
      class="date-input"
     >
     <label class="form-label" style="margin-top: 25px;">
      Jenis izin
    </label>
    <div class="student-list">

  <button id="izinLes" class="student-button">
    📚 Les
  </button>

  <button id="izinLainnya" class="student-button">
    📌 Lainnya
  </button>

</div>
     <button
       id="lanjutTanggal"
       class="continue-button"
     >
        Lanjut
      </button>
       <button 
       id="kembaliAwal" 
       class="continue-button"
      >
      ← Kembali
      </button>
  
    </section>
  </main>
  `;
  document.querySelector('#izinLes').addEventListener('click', () => {
    jenisIzin = 'Les';

    document.querySelector('#izinLes').classList.add('active');
    document.querySelector('#izinLainnya').classList.remove('active');
});
document.querySelector('#izinLainnya').addEventListener('click', () => {
  jenisIzin = 'Lainnya';

  document.querySelector('#izinLainnya').classList.add('active');
  document.querySelector('#izinLes').classList.remove('active')
});
 
     
  document.querySelector('#lanjutTanggal').addEventListener('click', () => {
    const tanggal = document.querySelector('#tanggalIzin').value;

    if (!tanggal) {
      alert('Silakan pilih tanggal terlebih dahulu.');
      return;
    }
    
    if (!jenisIzin){
      alert('Silakan pilih jenis izin terlebih dahulu.');
      return;
    }
    if (jenisIzin === 'Lainnya') {
      pilihKeterangan(selectedName, tanggal);
    } else {
    console.log('Nama:', selectedName);
    console.log('Tanggal:', tanggal);
    console.log('Jenis izin:', jenisIzin);
    }
  });

  document.querySelector('#kembaliAwal').addEventListener('click', () => {
     selectedClass = '';
     showFrom();
  });
}
 function pilihKeterangan(selectedName, tanggal) {
  app.innerHTML = `
   <main class="page">

   <section class="hero">
    <div class="circle pink"></div>
    <div class="circle blue"></div>

    <div class="hero-content">
     <div class="label">
      KARTU IZIN BOARDING
    </div>

  <h1>Keterangan</h1>

  <p>
    Halo, ${selectedName}!
  </p>
</div>
</section>

<section class="form-card">

 <label class="form-label">
   Alasan izin
 </label>

 <textarea
  id="keterangan"
  placeholder="Tuliskan alasan izin..."
  rows="5"
></textarea>

<button
 id="lanjutKeterangan"
 class="continue-button"
 >
  Lanjut
  </button>

  <button
   id="kembaliTanggal"
   class="continue-button"
  >
  ← Kembali
  </button>
 </section>
</main>
`;
document.querySelector('#lanjutKeterangan').addEventListener('click', () => {
  const keterangan = document.querySelector('#keterangan').value.trim();
  
  if (!keterangan) {
    alert('Keterangan wajib diisi.');
    return;
 }
 console.log('Nama:', selectedName);
 console.log('Tanggal:', tanggal);
 console.log('Jenis izin:', 'Lainnya');
 console.log('Keterangan:', keterangan);
});
 }

showFrom();