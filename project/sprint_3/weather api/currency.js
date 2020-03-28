
// xhr calling twice with different get call url
var btn = document.getElementById("btn")
btn.addEventListener("click",function(){
    var xhr = new XMLHttpRequest()
    console.log(xhr)
var input = document.getElementById("amount").value
    console.log(input)
var from  = document.getElementById("select1").value
console.log(from)
var to  = document.getElementById("select2").value
console.log(to)

var url = `https://api.ratesapi.io/api/latest?base=${from}&symbols=${to}`
xhr.open("GET",url)
// xhr.setRequestHeader("Content-type","application/json; charset=utf-8")
xhr.send()    
xhr.onload = function(){
    console.log(this.status)
    console.log(this.response)
   var data = JSON.parse(this.response)
   console.log(data)
   var data2 = data["rates"][to]
   console.log(data2)
//    console.log(data.base)
   var data1 = data.date
   console.log(data1)

// calculation manually based on api data
var ans = Number(input)*Number(data2)
var value = ans.toFixed(6)
console.log(value)

// xhr calling twice with different get call url
var url1 = `https://api.ratesapi.io/api/latest?base=${to}&symbols=${from}`
xhr.open("GET",url1)
// xhr.setRequestHeader("Content-type","application/json; charset=utf-8")
xhr.send()    
xhr.onload = function(){
    console.log(this.status)
    console.log(this.response)
   var value1 = JSON.parse(this.response)
   console.log(value1)
   var value2 = value1["rates"][from]
   console.log(value2)
//    console.log(data.base)
   var value3 = value1.date
   console.log(value3)

// displaying output in browser and replacing sample text
// var value = Number(input)*Number(data2)
// console.log(value)
var line1 = document.getElementById("base").innerHTML = input+" "+from+" ="
var line1 = document.getElementById("value").innerHTML =value
var line1 = document.getElementById("unit").innerHTML =" "+to
var line1 = document.getElementById("to").innerHTML = "1 "+to+" = "+value2 +" "+from
var line1 = document.getElementById("from").innerHTML = "1 "+from+" = "+data2 +" "+to
var line1 = document.getElementById("date").innerHTML = data1


}}

})