// ARRAY
const db = ["FLASCO", "CANMERTİNYO", "Alex Pereira", "Tom Aspinall", "Illia Topuria"];

// CREATE - EKLE
function peopleAdd(isim) {
    db.push(isim);
    console.log(`${isim} Listeye Eklendi.`);
};

// peopleAdd("Max Holloway");
// console.log(db);

// DELETE - SİLME
function peopleDelete(isim) {

    const index = db.indexOf(isim);
    if (index > -1) {
        db.splice(index, 1);
        console.log(`${isim} Silindi.`);
    } else {
        console.log("Böyle bir Kullanıcı Bulunamadı.")
    }
};

// UPDATE GÜNCELLEME
function peopleUpdate(eskiIsim, yeniIsim) {
    const index = db.indexOf(eskiIsim);

    if (index > -1) {
        db[index] = yeniIsim;
        console.log(`${eskiIsim}, ${yeniIsim} Olarak Güncellendi.`);
    } else {
        console.log("Güncellenecek öğrenci bulunamadı.");
    }
};

// READ LİSTELEME - KONTROL İÇİN
function listeyiGoster() {
    console.log("Güncel Liste:", db);
}

