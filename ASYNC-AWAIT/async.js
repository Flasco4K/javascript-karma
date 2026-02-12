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

const girisYap = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Giriş Başarili");
        }, 1000);
    });
};

const verileriGetir = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 2000);
    });
};

const programiBaslat = async () => {
    console.log("Sistem başlatılıyor...");
    
    const girisSonucu = await girisYap();
    console.log(girisSonucu);

    const veriler = await verileriGetir();
    console.log(veriler);

    console.log("İşlem tamamlandı!");
};

programiBaslat();