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

//"Bana yaşı 30'dan BÜYÜK olanların SADECE İSİMLERİNİ getir."
// const people = db.filter(kisi=> kisi.age > 30).map(kisi=> kisi.name);
// console.table(people);

//"Bu listeyi bana YAŞA GÖRE sırala. En GENÇ olan en üstte (ilk sırada), en yaşlı en altta olsun."
// const siraliListe = db.sort((a, b) => a.age - b.age);
// console.table(siraliListe);

//"Bu takımdaki herkesin yaşlarını topla. Bana tek bir sayı ver (Toplam Yaş)."
// const result = db.reduce((toplam, kisi) => toplam + kisi.age, 0)
// console.log(result);

//"Bu takımın yaş ortalaması kaç? Bana virgülsüz, tam sayı olarak ver."
// const averageAge = Math.round(result / db.length);
// console.log(`Takımın Yaş Ortalaması: ${averageAge}`);