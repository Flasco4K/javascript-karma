// ----------- SORU 1 --------------
// const kullaniciyiGetir = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Ali Yılmaz");
//         }, 2000);
//     });
// };

// const ekranaYazdir = async () => {
//     console.log("Veri çekiliyor...");
//     const isim = await kullaniciyiGetir();
//     console.log("Gelen Kullanıcı:", isim); 
// };

// ekranaYazdir();

// ----------- SORU 2 --------------
// const girisYap = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Giriş Başarili");
//         }, 1000);
//     });
// };

// const verileriGetir = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Post 1", "Post 2", "Post 3"]);
//         }, 2000);
//     });
// };

// const programiBaslat = async () => {
//     console.log("Sistem başlatılıyor...");

//     const girisSonucu = await girisYap();
//     console.log(girisSonucu);

//     const veriler = await verileriGetir();
//     console.log(veriler);

//     console.log("İşlem tamamlandı!");
// };

// programiBaslat();

// ----------- SORU 3 --------------

// const kartOku = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Kart başarıyla okundu.");
//         }, 1000);
//     });
// };

// const sifreKontrol = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Şifre doğru,Giriş Yapılıyor..");
//         }, 2000);
//     });
// };

// const atmIslemi = async () => {
//     console.log("Sistem Başlatılıyor..");

//     const kart = await kartOku();
//     console.log(kart);

//     const sifre = await sifreKontrol();
//     console.log(sifre);

//     console.log("İşlem tamamlandı!");
// };
// atmIslemi();

// ----------- SORU 4 --------------


