const axios = require('axios');
const weather=require('./weatherApi');

async function ulkeBilgisi(country){
    const sonuc=await axios.get("https://restcountries.com/v3.1/name/"+country);
    
    const {name:{common:ulke},capital:[baskent],latlng:[enlem,boylam],
        population:nufus}=sonuc.data[0];

    console.log(`${ulke} başkenti ${baskent}.\nNufus: ${nufus} enlem-boylam: ${enlem}-${boylam}`)
    weather.havaDurumu(baskent);
   
}

exports.ulkeBilgisi=ulkeBilgisi;