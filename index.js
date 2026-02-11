const urunler = [
    { id: 1, name: "iPhone 15", price: 50000, category: "Telefon", stock: true },
    { id: 2, name: "Airpods Pro", price: 9000, category: "Aksesuar", stock: true },
    { id: 3, name: "MacBook Air", price: 40000, category: "Bilgisayar", stock: false },
    { id: 4, name: "Samsung S24", price: 45000, category: "Telefon", stock: true },
    { id: 5, name: "Deri Kilif", price: 1000, category: "Aksesuar", stock: true },
    { id: 6, name: "PlayStation 5", price: 25000, category: "Oyun", stock: true }
];

//Soru 1 : Bana SADECE 'Telefon' kategorisinde olan VE Stokta Olan ürünleri getir."
// const kategori = urunler.filter(urun => urun.category == 'Telefon' && urun.stock == true);
// console.table(kategori);

//Soru 2: Bütün ürünlerin fiyatına %20 ZAM yap. Bana sadece ürünlerin YENİ FİYATLI İSİM LİSTESİNİ ver."
// const ürünler = urunler.map(urun => `${urun.name} - ${urun.price * 1.2} TL`);
// console.table(ürünler)

//Soru 3: "Patron! Bazı ürünler tükenmiş. Bana acil STOKTA OLMAYAN (stock: false) ürünlerin SADECE İSİMLERİNİ ver, sipariş geçeceğim!"
// const product = urunler.filter(k => k.stock == false).map(k => k.name)
// console.table(product);

//Soru 4: "Depoda şu an STOKTA OLAN (stock: true) ürünlerin toplam değeri kaç para? Bana tek bir sayı lazım."
// const depo = urunler.filter(k => k.stock == true).reduce((toplam, product) => toplam + product.price, 0);
// console.table(depo);
