function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        mobile: document.getElementById("mobile").value,
    }

    console.log("clicked")

    emailjs.send("Sudarshan123", "template_09s7mfq", params).then(alert("Email Sent!!"))
}