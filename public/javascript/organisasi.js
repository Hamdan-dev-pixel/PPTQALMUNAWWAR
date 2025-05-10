let data = [
    {
        jabatan: 'Muasis Pondok',
        nama: 'KH. Amien Wasthoni',
        foto: 'img/struktur/fahri.jpg'
    },
    {
        jabatan: 'Muasis Pondok',
        nama: 'Nyai Hajjah Siti Zahrotun',
        foto: 'img/struktur/fahri.jpg'
    },
    {
        jabatan: 'Pengasuh 1',
        nama: 'KH. Sholachuddin, S.Pd ',
        foto: '/assets/png & svg/khsholachudin.jpg'
    },
    {
        jabatan: 'Pengasuh 2',
        nama: 'Nyai Hajjah Chotimah, S. Ag Al Hafidzah',
        foto: '/assets/png & svg/nychotimah.jpg'
    },
    {
        jabatan: 'Lurah Pondok',
        nama: 'Ust. Fahri Nur Sho\'ib, S.H Al Hafidz',
        foto: 'img/struktur/fahri.jpg'
    },
    {
        jabatan: 'Wakil Lurah Pondok',
        nama: 'Ust. Muhammad Fadhli, S.Pd Al Hafidz',
        foto: 'img/struktur/fadhli.jpg'
    },
    {
        jabatan: 'Penanggung Jawab 1',
        nama: 'Ust. Zainun Muarif, Al Hafidz',
        foto: 'img/struktur/zainun.jpg'
    },
    {
        jabatan: 'Penanggung Jawab 2',
        nama: 'Ust. Zaki Syarof, S.Kom Al Hafidz',
        foto: 'img/struktur/zaki.jpg'
    },
    {
        jabatan: 'Bendahara 1',
        nama: 'Ustdzh. Wardatun Mustagfirah, Al Hafidzah',
        foto: 'img/struktur/wardatun.jpg'
    },
    {
        jabatan: 'Bendahara 2',
        nama: 'Khoir Ibnu Akhsan',
        foto: '/assets/png & svg/khoir.jpg'
    },
];

let place = document.querySelector('.struktur');
data.forEach(item => {
    let card = `
    <div data-aos="fade-up" data-aos-duration="700" class="card-struktur">
        <div class="image">
            <img data-aos="zoom-in" data-aos-duration="700" src="${item.foto}" alt="${item.nama}">
        </div>
        <div class="text">
            <h2 data-aos="zoom-in" data-aos-duration="700">${item.jabatan}</h2>
            <p data-aos="zoom-in" data-aos-duration="700">${item.nama}</p>
            <div data-aos="fade-up" data-aos-duration="700" class="quote">
            </div>
            <div class="poin">
                <span data-aos="zoom-in" data-aos-duration="700"></span>
                <span data-aos="zoom-in" data-aos-duration="700"></span>
                <span data-aos="zoom-in" data-aos-duration="700"></span>
            </div>
        </div>
    </div>
    `;
    place.innerHTML += card;
});
