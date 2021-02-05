/** 
1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.
**/

var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  },
};
/*
"myCarDetails" değişkenine fonksiyon atandığında, "myCarDetails()" fonksiyonunun istenen değerleri verebilmesi için this yapılarının parent'a erişebilmesi gereklidir.
Bu yüzden fonksiyon, "car" objesi ile binding yapıldı. Fonksiyon ayrı olarak çağrıldığı için bindig için "bind" kullanıldı.
*/
var myCarDetails = car.displayDetails.bind(car);
myCarDetails();

/** 
2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:
name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.
**/

function isValidName(name) {
  if (typeof name === "string" && name !== "") {
    //1. kontrol; parametre string değilse veya boş string ise fonksiyon false döner.
    name = name.trim().split(" "); //string dizisi önce trim, sonra da split edilmiştir.
    if (name[0] === "") {
      //2. kontrol; string dizisi array'e convert edildikten sonra ilk elemean boş string ise fonksiyon false döner.
      return false;
    } else {
      for (let i = 0; i < name.length; i++) {
        if (name[i].length < 2) {
          //3. kontrol; dizinin her elemanı kontrol edilir. Kontrol edilen elemanın string uzunluğu 2'nin altındaysa eleman 4. kontrole gönderilir.
          if (name[i] !== "") {
            //4. kontrol; eleman boş olmayıp 1 karakterden oluşuyorsa fonksiyon false döner.
            return false;
          }
        }
      }
      return true; //Döngü tamamlanınca fonksiyon true döner.
    }
  } else {
    return false;
  }
}

/**
3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.
**/

const book = {
  title: "Brave New World",
  author: "Aldous Huxley",
};

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  );
}
/*
1. sorudaki aynı çözüm mantığı ile fonksiyon bind edilerek çağrılmalıdır. 
Fonksiyon hem bind edildiğinde çağrılabilsin hem de parametre olarak tek bir dizi alabilsin diye "apply" kullanıldı. 
*/
const genreAndYear = ["dystopian", "1932"];
summary.apply(book, genreAndYear);