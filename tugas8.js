// Nomor 1 (Validator Password)
// function validatorPassword(input){
//     var peringatan = ""
//     // console.log(Boolean(peringatan))
//     var specials = /^(?=.*\d)(?=.*[a-z])(?=.*[\W_]).{3,}$/g;
//     var uppercase = /^.{1,}[A-Z]/g;
//     var space = /\s/g
//     if(input.length < 8){
//         peringatan += "\nMinimal 8 karakter"
//     }
//     if(!specials.test(input)){
//         peringatan += "\nTerdiri dari minimal 1 huruf, 1 angka, dan 1 simbol"
//     }
//     if(!uppercase.test(input)){
//         peringatan += "\nMinimal terdapat satu huruf kapital"
//     }
//     if(space.test(input)){
//         peringatan += "\nTidak boleh terdapat spasi"
//     }
    
//     return Boolean(peringatan)? peringatan : "Password anda berhasil disimpan"
// }
// console.log(validatorPassword("jU0@fjdsfjsdkhds"))

// Nomor 2 (membandingkan 2 buah array)
// function diffArray(arr1,arr2){
//     let newArr=[]
    // cara 1
    // arr1.forEach(element => {
    //     if (arr2.indexOf(element) === -1) {
    //         // Pushing the elements
    //         newArr.push(element);
    //     }
    // })
    // arr2.forEach(element => {
    //     if (arr1.indexOf(element) === -1) {
    //         // Pushing the elements
    //         newArr.push(element);
    //     }
    // })

    // cara 2
    // function onlyInFirst(first, second) {
    //     for (let i = 0; i < first.length; i++) {
    //       if (second.indexOf(first[i]) === -1) {
    //         newArr.push(first[i]);
    //       }
    //     }
    // }
    // onlyInFirst(arr1, arr2);
    // onlyInFirst(arr2, arr1);
    
    // return newArr
// }
// function diffArray(arr1, arr2) {
//     return arr1
//       .concat(arr2)
//       .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }
  
//   console.log(diffArray([1,2,3,4,5], [1,2,3,5]))


// Nomor 3 (validator nomor HP)
// function validatorPhoneNu(str){
//     var detect="Nomornya tidak ditemukan"
//     // var country = /^(?:\+62|\(\+62\)|\(08\)|08|(?!0))$/
//     var providerTel = /^(?:\+628|08|(?!0))+(?:11|12|13|21|22|52|53|23|51)$/
//     var providerIndo = /^(?:\+628|08|(?!0))+(?:14|15|16|55|56|57|58)$/
//     var providerXL = /^(?:\+628|08|(?!0))+(?:17|18|19|59|77|78)$/
//     var providerAx = /^(?:\+628|08|(?!0))+(?:38|31|32|33)$/
//     var providerTr = /^(?:\+628|08|(?!0))+(?:95|96|97|98|99)$/
//     if (providerTel.test(str)){
//         detect = "Nomor dari indonesia dengan operator Telkomsel"
//     }
//     if (providerIndo.test(str)){
//         detect = "Nomor dari indonesia dengan operator Indosat"
//     }
//     if (providerXL.test(str)){
//         detect = "Nomor dari indonesia dengan operator XL"
//     }
//     if (providerAx.test(str)){
//         detect = "Nomor dari indonesia dengan operator Axis"
//     }
//     if (providerTr.test(str)){
//         detect = "Nomor dari indonesia dengan operator Tree"
//     }
//     return detect 

// }
// console.log(validatorPhoneNu("+62852"))

// Nomor 4 (suit game)
// function suitGame(inputUser){
//     let newInputUser = inputUser.toLowerCase()
//     // console.log(newInputUser)
//     var computer = Math.round(Math.random()*10)
//     // console.log(computer)
//     if (newInputUser === "gunting"){
//         if (computer <=3 ){
//             result = "Computer Mengeluarkan Batu, Computer Menang"
//         } else if (computer >7){
//             result = "Computer Mengeluarkan Kertas, Computer Kalah"
//         }else{
//             result = "Computer Mengeluarkan Gunting, Seri "
//         }
//     }
//     if (newInputUser === "batu"){
//         if (computer <=3 ){
//             result = "Computer Mengeluarkan Batu, Seri"
//         } else if (computer >7){
//             result = "Computer Mengeluarkan Kertas, Computer Menang"
//         }else{
//             result = "Computer Mengeluarkan Gunting, Computer Kalah"
//         }
//     }
//     if (newInputUser === "kertas"){
//         if (computer <=3 ){
//             result = "Computer Mengeluarkan Batu, Computer Kalah"
//         } else if (computer >7){
//             result = "Computer Mengeluarkan Kertas, Seri"
//         }else{
//             result = "Computer Mengeluarkan Gunting, Computer Menang"
//         }
//     }
//     return  result
// }
// console.log(suitGame("gunting"))