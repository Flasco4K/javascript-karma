const profile = {
    username: "coder_ali",
    fullName: "Ali Yilmaz",
    location: {
        city: "İstanbul",
        country: "Türkiye",
        address: {
            street: "Bağdat Cad.",
            zip: 34000
        }
    },
    social: {
        twitter: "@ali_code",
        linkedin: "ali-yilmaz-dev"
    },
    posts: [
        { id: 1, title: "JavaScript Öğreniyorum", likes: 150 },
        { id: 2, title: "React Çok İyiymiş", likes: 230 }
    ]
};

//Soru 1: Profil sayfasında kullanıcının Şehri ve Posta Kodunu göstermemiz lazım.
const { location: { city, address: { zip } } } = profile;
console.log(city,zip);