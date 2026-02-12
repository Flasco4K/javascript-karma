// ----------- SORU 1 --------------
// const veriyiCek = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Sunucu Çevrimdışı")
//         }, 1000);
//     });
// };

// const baslat = async () => {
//     try {
//         console.log("Veri çekiliyor...");
//         const veri = await veriyiCek();
//         console.log(veri)
//     } catch (error) {
//         console.log("Hata Yakalandı:", error);
//     }
// };
// baslat();

// ----------- SORU 2 --------------
const veritabaniVerisiGetir = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 101, nickname: "ali_dev", level: 5, settings: { volume: 80, mic: "active" } })
        }, 2000);
    });
};

const cihazAyarlariniGetir = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ theme: "dark", language: "tr" })
        }, 1000);
    })
};

const profilOlustur = async () => {
    try {
        console.log("Veriler senkronize ediliyor...");
        const veri = await veritabaniVerisiGetir();
        const cihaz = await cihazAyarlariniGetir();

        const tamProfil = { ...veri, ...cihaz };
        const { nickname, theme } = tamProfil;

        console.log("--- İŞLEM BAŞARILI ---");
        console.log(`Selam ${nickname}, şu an ${theme} modunu kullanıyorsun. 🚀`);

    } catch (error) {
        console.log("Hata:", error);
    }
};
profilOlustur();