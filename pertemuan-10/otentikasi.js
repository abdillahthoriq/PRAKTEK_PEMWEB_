function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log(username, password)
    
    if (username == 'ahmad2017' && password == 'integrity') {
        window.alert('Anda berhasil login dan akan di alihkan ke halaman selanjutnya')
        window.location.replace('berhasil.html')
    }
    else {
        window.alert('username atau password anda salah!')
    }
}