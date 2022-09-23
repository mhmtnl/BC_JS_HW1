let info= prompt("Lütfen adınızı giriniz.");
let userName = document.getElementById("myName");
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

if (info!=null && info!="") {
    userName.innerHTML = `${info[0].toUpperCase()}${info.slice(1)} !`}
else{
    alert("Hatırlamanız lazım :/")
    location.reload()}

function clockShow(){
    let dateTime= new Date();
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.getElementById("myClock").innerHTML= `Şu an [ ${hrs}: ${min}: ${sec} ]-> ${day} <br><b> Durma burda, kullanmak gerekiyor !</b>`
}
    setInterval(clockShow, 1000);
