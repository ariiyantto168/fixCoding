/*
===================
FISH FARM SIMULATOR
===================
[INSTRUCTION]
Buatlah suatu aplikasi untuk mensimulasikan perubahan populasi ikan di tiga peternakan ikan milik Taufiq, Ayu, dan Audrick.
Aplikasi ini menerima input berupa perubahan yang terjadi pada populasi peternakan ikan tersebut. Perubahan ini disimpan di dalam suatu array 'changes' yang mencatat perubahan 
perubahan yang terjadi. Perubahan ini berbentuk string dan memiliki format:
'[Nama peternak][operator][persentase perubahan]'
Contoh perubahan:
-'Ayu+1%' -> Berarti, di peternakan milik Ayu terjadi penambahan populasi ikan sebanyak 1 persen. 
-'Hanif-10%' -> Berarti, di peternakan milik Hanif terjadi pengurangan populasi ikan sebanyak 10 persen.
Di dalam soal sudah disediakan ARRAY OF OBJECTS yang berisi populasi ikan untuk masing-masing peternakan (lihat function di dalam soal).
Tugas kalian adalah mencari tahu berapa jumlah populasi peternakan ikan dari ketiga peternak tersebut setelah melalui perubahan perubahan yang tertera di array 'changes'.
Sebagai output, tampilkan lagi ARRAY OF OBJECTS berisi nama peternak dan populasinya yang baru, sesuai perubahan yang tertera di array 'changes'.
[RULES]
- Tidak ada larangan dalam pengunaan built-in function
*/


function populationSim(changes) {
    var farms = [{owner: 'Taufiq', population: 100000},{owner: 'Ayu', population: 230000},{owner: 'Audrick', population: 250000}]
  //    return splitter(changes[1])
     for (var i=0;i<changes.length;i++) {
         var i_change = splitter(changes[i])
         //console.log(i_change)
         population_change = i_change[1]/100
         for (var j=0;j<farms.length;j++) {
             if (farms[j].owner == i_change[0]) {
                 if (i_change[2] == '+') {
                  farms[j].population += farms[j].population * population_change
                 } else if (i_change[2] == '-') {
                  farms[j].population -= farms[j].population * population_change
                 }
             }
         } 
     }
     return farms
  }   
  
  //split personal buatan sendiri, untuk membantu jawaban
  function splitter(string) {
      var first = ""
      var last = ""
      var delim_location = 0;
      var operator = ""
      for (let i =0;i<string.length;i++) {
          if (string[i] == '+' || string[i] == '-') {
              delim_location=i;
              operator = string[i]
          }
      }
      for (let i =0;i<delim_location;i++) {
          first += string[i]
      }
      for (let j =delim_location+1; j<string.length-1;j++) {
          last += string[j]
      }
      return [first,last,operator]
  }
  
  
  
  console.log(populationSim(['Ayu+5%', 'Audrick+10%', 'Taufiq-3%']))
  /**
  [
    { owner: 'Taufiq', population: 97000 },
    { owner: 'Ayu', population: 241500 },
    { owner: 'Audrick', population: 275000 }
  ]
   */