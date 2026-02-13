// --------------- SORU 1 -------------------
// const bot = {
//     ad: "GuardBot",
//     uyeler: [],

//     veriyiCek: async function() {
//         try {
//             console.log("🤖 GuardBot iş başında...");

//             const adres = "https://jsonplaceholder.typicode.com/users";
//             const kargo = await fetch(adres);

//             const veri = await kargo.json();
//             this.uyeler = veri; 

//             console.log(`✅ Veriler çekildi, toplam üye: ${this.uyeler.length}`);
//         } catch (error) {
//             console.log("Hata:", error);
//         }
//     },
//     yoneticileriBul: function() {
//         const yoneticiler = this.uyeler.filter(kisi => kisi.id <= 3);
//         return yoneticiler;
//     }
// };

// const baslat = async () => {
//     await bot.veriyiCek();
//     const patronlar = bot.yoneticileriBul();

//     console.log("🏆 Yöneticiler Listesi:");
//     patronlar.forEach(p => console.log("- " + p.name));
// };

// baslat();

// --------------- SORU 2 -------------------
// const magaza = {
//     ad: "TeknoStore",
//     stoklar: [],


//     urunleriGetir: async function () {
//         try {
//             const adres = "https://fakestoreapi.com/products"
//             const kargo = await fetch(adres);

//             const veri = await kargo.json();
//             this.stoklar = veri;
//             console.log("Depoya ürünler yüklendi!")
//         } catch (error) {

//         }
//     },
//     ucuzUrunleriBul: function () {
//         const stock = this.stoklar.filter(s => s.price < 50);
//         return stock;
//     }
// };

// const programiBaslat = async () => {
//     await magaza.urunleriGetir();

//     const firsatUrunleri = magaza.ucuzUrunleriBul();
//     console.log("🔥 İŞTE 50$ ALTI FIRSAT ÜRÜNLERİ 🔥");

//     firsatUrunleri.forEach(urun => {
//         console.log(`- ${urun.title} (${urun.price}$)`);
//     });
// };

// programiBaslat();

// --------------- SORU 3 -------------------


