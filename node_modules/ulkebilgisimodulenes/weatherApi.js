const axios=require('axios');

async function havaDurumu(sehir){
    const sonuc=await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+sehir+"&lang=tr&APPID=192a9f2545edc7cde1627c9d5f9d8d3a&units=metric");
    const {weather:[{description:durum}],main:{temp:sıcaklık},name:city}=sonuc.data;
    console.log(city+" hava "+durum+" "+sıcaklık+" derecedir.");
    
}

exports.havaDurumu=havaDurumu;





    


