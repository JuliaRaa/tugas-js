// nomor 1
// const nama = "Julia Ratni";
// const umur = 24;
// const date = new Date('1998-07-15');
// console.log(nama)
// console.log(umur)
// console.log(date)


// nomor 2
// const makananFavorite = ["Mie Keju", "Takoyaki", "Geprek"];
// const minumanFavorite = ["GreenTea", "LycheeTea", "LemonTea"];
// console.log(makananFavorite)
// console.log(minumanFavorite)

// nomor 3
// const biodata = {
//     namaDepan : "Julia",
//     namaBelakang : "Ratni",
//     umur : 24,
//     riwayatSekolah : {
//         bachelor : "S1 Matematika",
//         seniorHighSchool : "SMAN 2 Unggul Ali Hasjmy",
//         juniorHighSchool : "MTsN Montasik"
//     }
// }
// console.log(biodata.riwayatSekolah.juniorHighSchool)


// nomor 4
// luasLingkaran(5)
// function luasLingkaran(r) {
//     console.log(Math.PI*(r**2))
// }
// luasSegitiga(5,6)
// function luasSegitiga(a,t){
//     console.log((a*t)/2)
// }


// class Luas { 
//     constructor(r,a,t) {
//         this.r = r;
//         this.a = a;
//         this.t = t;
//     }
//     luasLingkaran() {
//         return Math.PI * (this.r**2);
//     };
  
//     luasSegitiga() {
//         return (this.a * this.t)/2;
//     };
// }
// let luas = new Luas(2,3)
// console.log(luas.luasSegitiga())

// nomor 5

// diskon (" ",11)
// function diskon (kode,item){
//     let harga = 10000;
//     let hargaTotal = harga*item;
    
//     if (kode === "SERU" && item >= 10){
//         let hargaDiskon = (harga*item)*(5/100);
//         let hargaAkhir = hargaTotal-hargaDiskon;
//         console.log("Total harga belanjaan adalah " + hargaTotal +
//                     " dengan pemotongan sebesar " + hargaDiskon +
//                     " sehingga total yang harus dibayar adalah " + hargaAkhir);
//     }else if (kode === "HARIAN"){
//         let hargaDiskon = (harga*item)*(10/100);
//         let hargaAkhir = hargaTotal-hargaDiskon;
//         if (hargaDiskon <= 10000){
//             console.log("Total harga belanjaan adalah " + hargaTotal +
//                         " dengan pemotongan sebesar " + hargaDiskon +
//                         " sehingga total yang harus dibayar adalah " + hargaAkhir);
//         }else{
//             let hargaDiskon = 10000;
//             let hargaAkhir = hargaTotal-hargaDiskon;
//             console.log("Total harga belanjaan adalah " + hargaTotal +
//                         " dengan pemotongan sebesar " + hargaDiskon +
//                         " sehingga total yang harus dibayar adalah " + hargaAkhir);
//         }

//     }else{
//         console.log("Total harga belanjaan adalah " + hargaTotal +
//         " dan tidak mendapat potongan harga");

//     }
// }


// nomor 6
// Right triangle pattern
let n=5;
// let string = "";
// let i;
// for (i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// // Left triangle pattern
// let string2 = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string2 += "*";
//   }
//   string2 += "\n";
// }
// console.log(string2);

// // Hollow square pattern

let string3 = "";

for(let i = 1; i <= n; i++) { 
  for(let j = 1; j <= n; j++) {
    if(i === 1 || i === n) {
      string3 += "*";
    }
    else {
      if(j === 1 || j === n ) {
        string3 += "*";
      }
      else {
        string3 += "#";
      }
    }
  }
  string3 += "\n";
}
console.log(string3);