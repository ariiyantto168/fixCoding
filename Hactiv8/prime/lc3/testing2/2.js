/**
 * 
 * Kalian ditugaskan untuk membuat sebuah program yang akan dipakai Bandara Internasional Soekarno-Hatta untuk memeriksa apakah seseorang merupakan 
 * suspect Corona atau bukan. 
 * Penumpang akan direpresentasikan dengan sebuah object seperti ini: 
 * {
 *  name: (string),
 *  id: (Number),
 *  temperature: (Number),
 *  travelHistory: [] (Array of Strings),
 * }
 * 
 * Program akan menerima input berupa object yang merepresentasikan penumpang. 
 * Program ini akan mengevaluasi apakah orang ini suspect Corona atau tidak, dan mengeluarkan output berupa string. 
 * Berikut ini adalah kondisi-kondisi yang akan di handle program ini:
 * - Jika suhu tubuhnya diatas 35 derajat dan dia pernah mengunjungi salah satu dari negara berikut 'China', 'Japan', 'Korea', dan 'Singapore'
 *   pada travel historynya, maka dia dinyatakan sebagai "Suspect".
 * - Jika suhu tubunya tidak diatas 35 derajat, maka dia tidak apa-apa "Healthy".
 *      - Namun, jika suhunya tidak diatas 35 derajat tetapi dia pernah berkunjung ke 4 negara diatas, maka dia "Potential Carrier".
 * - Jika suhu tubuhnya tinggi tetapi dia tidak pernah berkunjung ke 4 negara tersebut maka dia hanya sakit "Sick".
 * 
 * 
 * Output yang dikeluarkan program ini memiliki format sebagai berikut:
 * "Passenger [id] [name] [status]"
 *
 * [status] : Suspect, Healthy, Potential Carrier, Sick
 * 
 */
 
function evaluatePassenger(passenger) {
    //implementasikan function disini
    var isSuspect =0
    var country = ['China','Japan','Korea','Singapore']
    for(var i=0;i<passenger.travelHistory.length;i++){
        for(var j =0;j<country.length;j++){
            if (passenger.travelHistory[i]==country[j]){
                isSuspect++
            }
        }
    }
    

    if(passenger.temperature > 35 && isSuspect > 0 ){
        return `Passenger ${passenger.id} ${passenger.name} Suspect`
    }
    else if(passenger.temperature <= 35){
        if(isSuspect > 0){
            return `Passenger ${passenger.id} ${passenger.name} Potential`
        }
        else{
            return `Passenger ${passenger.id} ${passenger.name} Healthy`
        }
    }
    else if(passenger.temperature > 35 && isSuspect==0){
        return `Passenger ${passenger.id} ${passenger.name} Sick`
    }
 }
 
 console.log(evaluatePassenger({name: 'Budi', id: 50, temperature: 40, travelHistory:['Russia', 'Japan']})) //Passenger 50 Budi Suspect
 console.log(evaluatePassenger({name: 'Tono', id: 10, temperature: 40, travelHistory:['Morocco', 'France', 'Burma' ]})) //Passenger 10 Tono Sick
 console.log(evaluatePassenger({name: 'Tsubasa', id: 15, temperature: 30, travelHistory:['Brazil']})) //Passenger 15 Tsubasa Healthy