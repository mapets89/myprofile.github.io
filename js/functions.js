function sendMail() {
    var ok = true;
    var msg = "No puede dejar campos vacios";
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var descrip = document.getElementById("input_descript").value;
    if (name == "") {
        ok = false;
    } else if (mail == "") {
        ok = false;
    } else if (descrip == "") {
        ok = false;
    }
    if (ok == false) {
        alert(msg);
    }
}