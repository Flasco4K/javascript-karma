// const verileriGetir = async () => {
//     try {
//         const cevap = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//         const veri = await cevap.json();

//         console.log("İnternetten Gelen Veri:", veri);

//     } catch (error) {
//         console.log("Eyvah, internette bir sorun var:", error);
//     }
// };
// verileriGetir();

// 1. Gideceğimiz adres (API)
// const adres = "https://jsonplaceholder.typicode.com/todos/1";

// const veriyiGetir = async () => {
//     try {
//         console.log("1️⃣ İstek atılıyor...");

//         // İsteği attık ve sunucudan cevap gelmesini bekledik
//         const kargo = await fetch(adres);

//         console.log("2️⃣ Cevap geldi! Şimdi paket açılıyor...");

//         // Gelen cevabı okunabilir veriye çevirmeyi bekledik
//         const veri = await kargo.json();

//         console.log("3️⃣ İŞTE SONUÇ:");
//         console.log(veri); // { userId: 1, id: 1, title: "...", completed: false }

//     } catch (error) {
//         // İnternet yoksa veya adres yanlışsa burası çalışır
//         console.log("❌ HATA OLDU:", error.message);
//     }
// }
// veriyiGetir();

// const adres = "https://jsonplaceholder.typicode.com/users/1";

// const veriyiGetir = async () => {
//     try {
//         console.log("1️⃣ İstek atılıyor...");
        
//         const cevap = await fetch(adres);
        
//         console.log("2️⃣ Cevap geldi! Paket açılıyor...");

//         const veri = await cevap.json(); 

//         const { name, email, phone } = veri;

//         console.log("------------------------------------------------");
//         console.log(`👤 Kullanıcı: ${name}`);
//         console.log(`📧 İletişim: ${email}`);
//         console.log(`📞 Tel: ${phone}`);
//         console.log("------------------------------------------------");

//     } catch (error) {
//         console.log("❌ Hata Oldu:", error.message);
//     }
// };

// veriyiGetir();