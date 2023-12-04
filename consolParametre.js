const yargs = require("yargs");
const kisi=require('./kisi_islemleri');



yargs.command({
    command:"ekle",
    describe:"yeni kişi eklemeye yarar",
    handler(argv){
        kisi.kisiEkle(argv.ad,argv.tel);
    }
});
yargs.command({
    command:"sil",
    describe:"verilen kişiyi silmeye yarar",
    handler(argv){
        kisi.kisiSil(argv.tel);
    }
});
yargs.command({
    command:"listele",
    describe:"kişileri listelemeye yarar",
    handler(argv){
        kisi.kisiListele();
    }
});
yargs.command({
    command:"goster",
    describe:"verilen kisiyi gostermeye yarar",
    handler(argv){
        kisi.kisiGoster(argv.ad);
    }
});



yargs.parse();