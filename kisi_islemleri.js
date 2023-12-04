const path="./kisiler.json"
const fs=require('fs');

const kisiEkle=(ad,tel) => {
    const kisiler=kisilerioku();
    const data={
        "ad":ad,
        "telefon":tel
    };
    kisiler.push(data);
    const kisilerJSON=JSON.stringify(kisiler);
    fs.writeFileSync(path,kisilerJSON);
    
    
};
function kisilerioku(){
    let kisiler=[];
    if(fs.readFileSync(path).toString()!=""){
        const dataString=fs.readFileSync(path).toString();
        kisiler=JSON.parse(dataString);
    }
    return kisiler;
}


const kisiGoster= (ad)=>{
    const kisiler=kisilerioku();
    console.log(kisiler.find((kisi)=>{
        return ad==kisi.ad;
    }));
};


const kisiSil= (tel)=>{
    const kisiler=kisilerioku();
    const sonKisiler=kisiler.filter((kisi)=>{
        return kisi.telefon!=tel;
    });
    if(kisiler.length>sonKisiler.length){
        const kisilerJSON=JSON.stringify(sonKisiler);
        fs.writeFileSync(path,kisilerJSON);
        console.log("kisi silindi!");
    }else{
        console.log("Kisi bulunamadı");
    }
};

const kisiListele= ()=>{
    const kisiler=kisilerioku();

    kisiler.forEach(kisi => {
        console.log(kisi);
    });
};

module.exports={
    kisiEkle,
    kisiGoster,
    kisiSil,
    kisiListele,}