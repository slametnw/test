//balapan mobil

var pembalap1 = {
  "merek":["ferrari"],
  "kecepatan":[280],
  "warna":["merah"]
};
var pembalap2 = {
  "merek":["lamborgini"],
  "kecepatan":[250],
  "warna":["kuning"]
};

function balapan(){
if(pembalap1.kecepatan[0]>pembalap2.kecepatan[0]){
  console.log("Merek "+pembalap1.merek[0]+" menang");
}else {
  console.log("Merek "+pembalap2.merek[0]+" menang");
}
}

balapan();
/*
ada dua pembalap yaitu pembalap1 dan pembalap2
simpan pembalap1 yang terdiri dari object merek, kecepatan dan juga warna
simpan pembalap2 yang terdiri dari object merek, kecepatan dan juga warna
if pembalap1 kecepatannya lebih besar dari kecepatan pembalap 2
tuliskan merek pembalap1 menang
else
tuliskan merek pembalap 2 menang
 */
