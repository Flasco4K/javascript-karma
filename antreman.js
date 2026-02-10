const db = [
    { id: 1, name: "Emirhan", age: 22 },
    { id: 2, name: "Alex Pereira", age: 38 },
    { id: 3, name: "İslam Makhachev", age: 34 },
    { id: 4, name: "Max Holloway", age: 32 },
    { id: 5, name: "Illia Topuria", age: 27 }
];

const oneName = db.find(kisi => kisi.name==="Max Holloway");
console.table(oneName);