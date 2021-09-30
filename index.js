function change() {
    let h2 = document.getElementById('h2');
    h2.style.display = 'none';
    let h4 = document.getElementById('h4');
    h4.style.display = 'none';
    let colorCode = '#' + Math.floor(Math.random() * 10**6);
    document.body.style.backgroundColor = colorCode;
    document.getElementById("colorname").innerHTML = colorCode;
}