// ARRAY
const db = [
    { id: 1, name: "Emirhan Demirhan", age: 22 },
    { id: 2, name: "Alex Pereira", age: 38 },
    { id: 3, name: "İslam Makhachev", age: 34 }
];

// CREATE - EKLE
function peopleAdd(name, age) {
    const newId = db.length + 1;
    const newObject = { id: newId, name: name, age: age };
    db.push(newObject);
    console.log(`${name} Listeye Eklendi.`);
};
// peopleAdd("Max Holloway", 32);
// console.table(db);

// DELETE - SİLME
function peopleDelete(id) {
    const index = db.findIndex(kisi => kisi.id === id);
    if (index !== -1) {
        const deletedName = db[index].name;
        db.splice(index, 1);
        console.log(`ID: ${id} (${deletedName}) başarıyla silindi`);
    } else {
        console.log(`Hata ${id} ID'li bir kullanıcı bulunamadı!`);
    }
};
// peopleDelete(1);
// console.table(db)

// UPDATE GÜNCELLEME
function peopleUpdate(id, newName, newAge) {
    const index = db.findIndex(kisi => kisi.id === id);
    if (index !== -1) {
        db[index].name = newName;
        db[index].age = newAge;
        console.log(`ID: ${id} (${newName})  başarıyla güncellendi`);
    } else {
        console.log(`Hata ${id} ID'li bir kullanıcı bulunamadı!`);
    }
};
// peopleUpdate(1, "Charles Oliveira", 34);
// console.table(db);

