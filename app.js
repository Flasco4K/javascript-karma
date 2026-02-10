const readline = require('readline');
const fs = require('fs');

// 1. Verileri Dosyadan Yükle (Load Game)
let db = [];
try {
    const dataBuffer = fs.readFileSync('data.json');
    const dataJSON = dataBuffer.toString();
    db = JSON.parse(dataJSON);
} catch (e) {
    db = [];
};

// 2. Verileri Dosyaya Kaydetme Fonksiyonu (Save Game)
// Her ekleme/silme işleminden sonra bunu çağıracağız.
const saveToDatabase = () => {
    const dataJSON = JSON.stringify(db, null, 2); // Veriyi JSON formatına çevir
    fs.writeFileSync('data.json', dataJSON); // Dosyaya yaz
}

// Arayüz (Interface) Oluştur
// Bu kısım, bilgisayarın senin klavyeni dinlemesini sağlar.
const rl = readline.createInterface({
    input: process.stdin, // Klavye Girişi
    output: process.stdout // Terminal Çıkışı
});

// CREATE - EKLE
function peopleAdd(name, age) {
    if (!name || !name.trim()) {
        console.log("\n❌ Hata: İsim boş olamaz!")
        return;
    }
    if (isNaN(age)) {
        console.log("\n❌ Hata: Geçerli bir sayi giriniz!")
        return;
    }
    const newId = db.length > 0 ? db[db.length - 1].id + 1 : 1;
    const newObject = { id: newId, name: name.trim(), age: age };
    db.push(newObject);
    saveToDatabase();
    console.log(`${name} Listeye Eklendi.`);
};

// DELETE - SİLME
function peopleDelete(id) {
    const index = db.findIndex(kisi => kisi.id === id);
    if (index !== -1) {
        const deletedName = db[index].name;
        db.splice(index, 1);
        saveToDatabase()
        console.log(`ID: ${id} (${deletedName}) başarıyla silindi`);
    } else {
        console.log(`Hata ${id} ID'li bir kullanıcı bulunamadı!`);
    }
};

// UPDATE GÜNCELLEME
function peopleUpdate(id, newName, newAge) {
    const index = db.findIndex(kisi => kisi.id === id);
    if (index !== -1) {
        db[index].name = newName;
        db[index].age = newAge;
        saveToDatabase()
        console.log(`ID: ${id} (${newName})  başarıyla güncellendi`);
    } else {
        console.log(`Hata ${id} ID'li bir kullanıcı bulunamadı!`);
    }
};

// --- ANA MENÜ ---
// 1. Önce kullanıcıya seçenekleri göster (Konsol Çıktısı)
const menuGoster = () => {
    console.log("\n--- YAPILACAK İŞLEMİ SEÇİN ---");
    console.log("1. Ekle (Add)");
    console.log("2. Sil (Delete)");
    console.log("3. Güncelle (Update)");
    console.log("4. Listele (List)");
    console.log("5. Çıkış (Exit)");

    //2. Ana Soruyu Sor
    rl.question('Seçiminiz (1-4): ', (secim) => {

        //SENARYO 1: EKLEME (Add)
        if (secim === '1') {
            rl.question('İsim: ', (name) => {
                rl.question('Yaş: ', (age) => {
                    peopleAdd(name, parseInt(age));
                    console.table(db);
                    menuGoster();
                });
            });
        }

        //SENARYO 2: SİL (DELETE)
        else if (secim === '2') {
            rl.question('Silinecek ID: ', (id) => {
                peopleDelete(parseInt(id));
                console.table(db);
                menuGoster();
            });
        }

        //SENARYO 3: GÜNCELLE (UPDATE)
        else if (secim === '3') {
            rl.question('Güncellenecek ID ', (id) => {
                rl.question('Yeni İsim: ', (name) => {
                    rl.question('Yeni Yaş: ', (age) => {
                        peopleUpdate(parseInt(id), name, parseInt(age));
                        console.table(db);
                        menuGoster();
                    });
                });
            });
        }

        //SENARYO 4: LİSTELEME (List)
        else if (secim === '4') {
            console.table(db);
            menuGoster();
        }

        //SENARYO 5: ÇIKIŞ (EXİT)
        else if (secim === '5') {
            console.log("Çıkış yapılıyor... Güle güle!");
            rl.close();
        }

        // SENARYO 6: HATALI GİRİŞ 
        else {
            console.log("Geçersiz seçim!");
            menuGoster();
        }
    })
};
menuGoster();