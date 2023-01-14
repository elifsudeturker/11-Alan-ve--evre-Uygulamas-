function kare_hesapla(){
    event.preventDefault()
    
    var kare_kenari;
    var kare_alani;
    var kare_cevre;
    kare_kenari = document.getElementById('karenin_kenari').value

    kare_alani = kare_kenari * kare_kenari;
    kare_cevre = kare_kenari * 4;
    
    document.getElementById('result_kare').innerHTML = ' <u><span style="font-style: italic;">Karenin çevresi: <span></u> ' + kare_cevre
    document.getElementById('result_kare').innerHTML += ' <br> <u><span style="font-style: italic;">Karenin alanı: <span></u> ' + kare_alani
    
}

function dikdörtgen_hesapla(){
    event.preventDefault()
    var dikdörtgen_uzunkenar;
    var dikdörtgen_kisakenar;
    var dikdörtgen_cevre;
    var dikdörtgen_alan;
    
    dikdörtgen_uzunkenar = document.getElementById('dikdörtgen_uzunkenar').value
    dikdörtgen_kisakenar = document.getElementById('dikdörtgen_kisakenar').value

    dikdörtgen_cevre = 2 * dikdörtgen_kisakenar + 2 * dikdörtgen_uzunkenar;
    dikdörtgen_alan = dikdörtgen_kisakenar * dikdörtgen_uzunkenar;

    document.getElementById('result_dikdörtgen').innerHTML =' <u><span style="font-style: italic;">Dikdörtgenin çevresi: <span></u> ' + dikdörtgen_cevre
   
    document.getElementById('result_dikdörtgen').innerHTML +='<br> <u><span style="font-style: italic;">Dikdörtgenin alanı: <span></u> ' + dikdörtgen_alan

}

function daire_hesapla(){
    event.preventDefault()
    
    var daire_yaricap;
    var daire_alan;
    var daire_cevre;
    daire_yaricap = document.getElementById('daire_yaricap').value

    daire_alan = daire_yaricap ** 2 * Math.PI;
    daire_cevre = daire_yaricap * 2 * Math.PI;
    
    document.getElementById('result_daire').innerHTML = ' <u><span style="font-style: italic;">Dairenin çevresi: <span></u> ' + daire_cevre
    document.getElementById('result_daire').innerHTML += ' <br> <u><span style="font-style: italic;">Dairenin alanı: <span></u> ' + daire_alan
   
}