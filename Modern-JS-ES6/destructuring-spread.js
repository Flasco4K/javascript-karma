const urun = {
    id: 105,
    baslik: "Sony WH-1000XM5 Kulaklik",
    fiyat: 15000,
    kategori: "Teknoloji",
    teknikOzellikler: {
        renk: "Siyah",
        bluetooth: true,
        pilOmru: "30 Saat"
    }
};
// node destructuring-spread.js
//GÖREV 1: PARÇALA (DESTRUCTURING)
//Bana urun objesinden sadece ürünün Başlığını, Fiyatını ve teknik özelliklerdeki Rengini ver.
// const { baslik, fiyat, teknikOzellikler: { renk } } = urun;
// console.log("Ürünün Başligi:", baslik);
// console.log("Ürünün Fiyati", fiyat);
// console.log("Ürünün Rengi:", renk);

//GÖREV 2 NEREDE? (SPREAD)
//Patron zam yaptı! Fiyatı 18000 yapacağız ama diğer her şey (...urun) aynı kalacak.
// const { fiyat } = urun;
// const yeniUrun = {
//     ...urun,
//     fiyat: 18000
// };
// console.log("Eski Fiyat:",urun.fiyat);
// console.log("Yeni Fiyat: ",yeniUrun.fiyat);
// console.log("Yeni Ürün",yeniUrun);