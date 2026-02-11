const siparisler = [
    { id: 1001, musteri: "Ahmet Yilmaz", tutar: 1500, durum: "Teslim Edildi", items: ["Klavye", "Mouse"] },
    { id: 1002, musteri: "Ayşe Demir", tutar: 45000, durum: "İptal", items: ["Laptop"] },
    { id: 1003, musteri: "Mehmet Öz", tutar: 350, durum: "Kargoda", items: ["HDMI Kablo", "Temizleme Kiti"] },
    { id: 1004, musteri: "Ahmet Yilmaz", tutar: 2000, durum: "Hazirlaniyor", items: ["Monitör"] },
    { id: 1005, musteri: "Zeynep Kaya", tutar: 8000, durum: "Teslim Edildi", items: ["Tablet", "Kilif"] }
];

//Soru 1:"Raporlarda hata var! İptal edilen siparişleri de listede görüyoruz. Bana acil olarak durumu 'İptal' OLMAYAN siparişleri dök."
// const cancel = siparisler.filter(c => c.durum !== "İptal");
// console.table(cancel);

//Soru 2: "Bu Mousenin kime gideceğini unuttum! Bana içinde 'Mouse' geçen siparişleri bul."
// const mouse = siparisler.filter(m => m.items.includes("Mouse"));
// console.table(mouse);

//Soru 3: "Bu ay toplam ne kadar ciro yaptık? Ama dikkat et, 'İptal' edilenleri sakın hesaba katma! Sadece GERÇEK SATIŞLARI topla."
// const products = siparisler.filter(p => p.durum !== "İptal").reduce((toplam, product) => toplam + product.tutar, 0);
// console.table(products);

//Soru 4:"Bana en yüksek tutarlı siparişi ver. AMA DİKKAT ET: İptal edilen o 45.000'lik siparişi sakın getirme! Gerçekleşenler arasındaki en büyüğü istiyorum."
// const bigProduct = siparisler.filter(b => b.durum !== "İptal").sort((a, b) => b.tutar - a.tutar)[0];
// console.table(bigProduct);

//Soru 5: 