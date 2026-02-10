const db = [
    { id: 1, name: "Emirhan", age: 22 },
    { id: 2, name: "Alex Pereira", age: 38 },
    { id: 3, name: "İslam Makhachev", age: 34 },
    { id: 4, name: "Max Holloway", age: 32 },
    { id: 5, name: "Illia Topuria", age: 27 }
];

//"Bana yaşı 33'ten BÜYÜK olan dövüşçüleri getir. Gençlerle uğraşmak istemiyorum."
// const yaslilar = db.filter(kisi => kisi.age > 33 );
// console.table(yaslilar)

//"Bana bu adamların yaşları, ID'leri lazım değil. Bana sadece İSİMLERİN olduğu basit bir liste ver. Ama hepsi BÜYÜK HARFLE yazılsın."
// const isimler = db.map(isim => isim.name.toUpperCase());
// console.table(isimler)

//"Bu adamın listedeki TÜM BİLGİLERİNİ (Objeyi) bana bul getir. Dizinin içinde gez, onu bulduğun an dur ve bana ver."
// const oneName = db.find(kisi => kisi.name==="Max Holloway");
// console.table(oneName);

