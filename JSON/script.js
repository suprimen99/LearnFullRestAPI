// let mahasiswa = {
//     nama : "muhamad Supriyanto",
//     nim : "181011400345",
//     email:"Suprianto@gmail.com"
// }

// console.log(Json.stringify (mahasiswa));

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function (){
//     if(xhr.readyState == 4 && xhr.status == 200 ){
//         // let mahasiswa = this.responseText;
//         // dari json jadi object
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();



$.getJSON('coba.json', function (data){
    console.log(data);  
});