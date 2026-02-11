const users = [
    { id: 1, name: "Ali", age: 25, isActive: true, balance: 1500, tags: ["New", "Gamer"] },
    { id: 2, name: "Veli", age: 17, isActive: true, balance: 400, tags: ["Student", "Gamer"] },
    { id: 3, name: "Ayşe", age: 30, isActive: false, balance: 5000, tags: ["VIP", "Blocked"] },
    { id: 4, name: "Fatma", age: 22, isActive: true, balance: 0, tags: ["Student"] },
    { id: 5, name: "Mehmet", age: 40, isActive: true, balance: 10000, tags: ["VIP", "Investor"] }
];

//Soru 1: "Bize sadece etiketlerinde 'Gamer' yazan üyeleri getir. Ama dikkat et, hesabı Aktif olsun. Ölü hesaplara reklam atmayalım."
// const user = users.filter(u => u.isActive == true && u.tags.includes("Gamer"));
// console.table(user);

//Soru 2: "Bize ACİL olarak 'VIP' statüsündeki, ama hesabı AKTİF olan müşterilerin TOPLAM BAKİYESİNİ bul."
// const vipPara = users.filter(v => v.isActive == true && v.tags.includes("VIP")).reduce((toplam, money) => toplam + money.balance, 0);
// console.log(vipPara);

//Soru 3: "Şirketteki EN ZENGİN müşteriyi bulun bana. Aktif veya pasif olması umurumda değil, parası en çok olanın İSMİNİ istiyorum."
// const rich = users.sort((a, b) => b.balance - a.balance)[0].name;
// console.log(rich)