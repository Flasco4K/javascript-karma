// const profile = {
//     username: "coder_ali",
//     fullName: "Ali Yilmaz",
//     location: {
//         city: "İstanbul",
//         country: "Türkiye",
//         address: {
//             street: "Bağdat Cad.",
//             zip: 34000
//         }
//     },
//     social: {
//         twitter: "@ali_code",
//         linkedin: "ali-yilmaz-dev"
//     },
//     posts: [
//         { id: 1, title: "JavaScript Öğreniyorum", likes: 150 },
//         { id: 2, title: "React Çok İyiymiş", likes: 230 }
//     ]
// };

//Soru 1: Profil sayfasında kullanıcının Şehri ve Posta Kodunu göstermemiz lazım.
// const { location: { city, address: { zip } } } = profile;
// console.log(city,zip);

//Soru 2: İSİM DEĞİŞTİRME & DİZİLER
// const { fullName: adSoyad, posts:[ilkPost] } = profile;
// console.log(adSoyad);
// console.log(ilkPost);

//Soru 3: PROFİL GÜNCELLEME (SPREAD KOMBO)
//profile objesini bozmadan, guncelProfile adında yeni bir obje oluşturman. Bu yeni objede şu değişiklikler olsun:
//Şehir Değişsin "Amsterdam" olsun. Yeni Post Eklensin 3. bir post ekle

// const guncelProfile = {
//     ...profile,
//     location:{
//         ...profile.location,
//         city:"Amsterdam"
//     },
//     posts:[
//         ...profile.posts,
//         {
//             id:3,
//             title:"Hollandada Yazılımcı Olmak",
//             likes:500
//         }
//     ]
// };
// console.log("--- GÜNCEL PROFİL ---");
// console.log(guncelProfile);

//Soru 4: Profil sayfasının en altında bir "İletişim ve Adres" kartı yapacağız.
// const { location: { address: { street: cadde } } } = profile;
// const { social: { twitter: xHesabi } } = profile;
// console.log(cadde, xHesabi);

//Soru 5:Belediye bir karar aldı ve Bağdat Caddesi'nin posta kodu değişti!
// const yeniAdresProfil={
//     ...profile,
//     location:{
//         ...profile.location,
//         address:{
//             ...profile.location.address,
//             zip:34744
//         }
//     }
// };
// console.log(yeniAdresProfil);

//Soru 6: Ali artık bir JavaScript uzmanı oldu! proProfil adında yeni bir obje oluştur.
// const proProfil ={
//     ...profile,
//     username:"senior_ali",
//     posts:[
//         {
//             id: 3, title: "Node.js ile Backend Dünyasi", likes: 1000,
//             ...profile.posts
//         }
//     ]
// };
// console.log(proProfil);