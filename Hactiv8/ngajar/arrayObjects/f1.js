var items = [
    {
        name: 'coklat',
        price: 30000
    },
    {
        name: 'susu',
        price: 40000
    },
]

var newItems = items.push({
    name: 'kentang',
    price: 5000
})

for(var i = 0; i < items.length; i++){
    console.log('saya ingin membeli ' + items[i].name + ' dengan harga ' + items[i].price)
}

var total = 0;
for(var i = 0; i < items.length; i++){
    total += items[i].price
}
console.log('aku menghabiskan uang ' + total)

var total = 0
var hasil = 0
for(var i = 0; i < items.length; i++){
        total += items[i].price
        hasil = total / items[i].price
}

console.log('rata rata uang di habiskan ' + hasil)