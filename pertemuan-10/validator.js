function validator() {
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let jam = document.getElementById('jam').value;
    let tujuan = document.getElementById('tujuan').value;
    let tiket = parseInt(document.getElementById('tiket').value);
    let emailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let timeFormat = /^([0-1][0-9]|2[0-3]).([0-5][0-9])$/;
    if (!nama || nama.length > 30) {
        document.getElementById('errornama').innerHTML = "<i># nama wajib di isi dan memiliki maksimal 30 karakter</i>"
        document.getElementById('errornama').style = "color: red;" 
    } else {
        document.getElementById('errornama').innerHTML = ""
    }
    if (!email || !email.match(emailFormat)) {
        document.getElementById('erroremail').innerHTML = "<i># email wajib di isi dan menggunakan format email (email@example.com)</i>"
        document.getElementById('erroremail').style = "color: red;"
    } else {
        document.getElementById('erroremail').innerHTML = ""
    }

    if (!jam || !jam.match(timeFormat)) {
        document.getElementById('errorjam').innerHTML = "<i># Jam wajib di isi dan menggunakan format 00.00 - 23.59</i>"
        document.getElementById('errorjam').style = "color: red;"
    } else {
        document.getElementById('errorjam').innerHTML = ""
    }

    if (!tujuan) {
        document.getElementById('errortujuan').innerHTML = "<i># tujuan wajib di isi</i>"
        document.getElementById('errortujuan').style = "color: red;"
    } else {
        document.getElementById('errortujuan').innerHTML = ""
    }

    if (!tiket  || tiket > 10 || tiket < 0) {
        document.getElementById('errortiket').innerHTML = "<i># tiket wajib di isi dan hanya bisa di isi dari 1-10</i>"
        document.getElementById('errortiket').style = "color: red;"
    } else {
        document.getElementById('errortiket').innerHTML = ""
    }

    if (nama.length < 30 && email.match(emailFormat) && tiket < 10 || tiket > 0 && jam.match(timeFormat) && tujuan) {
        document.getElementById('hasil').style = "display: table;"
        document.getElementById('inputnama').innerHTML = nama;
        document.getElementById('inputemail').innerHTML = email;
        document.getElementById('inputjam').innerHTML = jam;
        document.getElementById('inputtujuan').innerHTML = tujuan;
        document.getElementById('inputtiket').innerHTML = tiket;
    }
}
