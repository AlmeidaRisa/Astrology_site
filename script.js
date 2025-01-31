function sendMail(){
    let parms = {
        from_name:document.getElementById("fullName").value,
        email_id:document.getElementById("email_id").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_4oiclln","template_j82c7ht",parms).then(
        function (response) {
            alert("Email sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
            alert("Failed to send email. Please try again.");
            console.error("FAILED...", error);
        }
    );
}