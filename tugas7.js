//nomor 1
// 1. siapkan bahan seperti: 
//      -tomat              -bawang merah dan putih
//      -cabai rawit        -minyak goreng 
//      -sosis              -sayur sesuai selera 
//      -satu mangkuk nasi yang sudah dicampur dengan telur, bubuk kaldu, dan merica
// 2. letakkan wajan teflon di atas kompor dan hidupkan kompor
// 3. tuang minyak goreng ke wajan
// 4. masukkan sosis yang sudah dipotong sesuai selara jika minyaknya sudah panas
// 5. jika sosisnya sudah setengah matang sisihkan ke pinggir,
//    kemudian masukkan bawah merah dan putih yang sudah dipotong
// 6. masukkan tomat yang sudah di potong, kemudian aduk dan haluskan tomatnya di dalam wajan
// 7. sisihkan semua yang di dalam wajan ke samping,kemudian masukkan nasi yang didalam mangkuk
// 8. aduk nasinya hingga telurnya matang
// 9. campur semua bahan yang sebelumnya disisihkan dengan nasi 
//    dan masukkan cabai rawit dan sayur yang sudah dipotong, aduk hingga matang
// 11. jika sudah matang matikan kompor dan sajikan di dalam piring

// nomor 3
let minumanFavorite = ["GreenTea", "LycheeTea", "LemonTea"];

// joins all array elements into a string
// console.log(minumanFavorite.join(" - "))

// removes the first array element 
// minumanFavorite.shift()

// adds a new element to an array (at the beginning)
// minumanFavorite.unshift("Chococha", "Mintcho")

// adds new items to an array
// minumanFavorite.splice(1, 1, "Chococha", "Mintcho")
// console.log(minumanFavorite)


let koordinatX= [40, 3, 25, 9, 32, 16]
// creates a new array filled with elements that pass a test provided by a function
// const newKoordinatX= koordinatX.filter((element, index) => {
//     return element>18
// })

// returns a single value: the function's accumulated result
const newKoordinatX= koordinatX.reduce((sum, element, index) => {
    return sum + element
})

// returns the value of the first element that passes a test
// const newKoordinatX= koordinatX.find((element, index) => {
//     return element>18
// })
console.log(newKoordinatX)


// nomor 4
// let text = "javascript"
// console.log(text.match(/a/g).length)
// vowelDetector("javascript")

// function vowelDetector(string){
//     let kontainer ={}
//     if (string.includes("a")){
//         kontainer ={...kontainer, a: string.match(/a/g).length} 
//     }
//     if (string.includes("i")){
//         kontainer ={...kontainer, i: string.match(/i/g).length} 
//     }

//     if (string.includes("u")){
//         kontainer ={...kontainer, u: string.match(/u/g).length} 
//     }
//     if (string.includes("e")){
//         kontainer ={...kontainer, e: string.match(/e/g).length} 
//     }
//     if (string.includes("o")){
//         kontainer ={...kontainer, o: string.match(/o/g).length} 
//     }
//     return kontainer
// }
// console.log(vowelDetector("jAvascript"))

//nomor 5
palindrom("kAtak")
function palindrom(text){
    let n= text.length;
    let newText = text.split("");
    let dummy=[];
    for(let i=0; i<=n-1; i++){
        // console.log(newText[i])
        // console.log(newText[((n-1)-i)])
        dummy+=newText[((n-1)-i)]
        // if ( newText[i] === newText[((n-1)-i)]){
        //     console.log(`${text} merupakan palindrom`  )
        // }else{
        //     console.log( `${text} bukan merupakan palindrom`)
        // }
    }
    console.log(dummy)
    if (text === dummy){
        console.log(`${text} merupakan palindrom`  )
    }else{
        console.log( `${text} bukan merupakan palindrom`)
    }
}

// let text= "makam"
// let newText = text.split("");
// let newText2 = newText.reverse();
// let textReverse = newText2.join("")
// // console.log(textReverse)
// if (text===textReverse){
//     console.log(`${text} merupakan palindrom`  )
// }else{
//     console.log( `${text} bukan merupakan palindrom`)
// }

