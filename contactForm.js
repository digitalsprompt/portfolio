// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "arokoolafemi@gmail.com",
//         Password : "D213225B21955A40DD97FA25C6701F35D227",
//         To : 'arokoolafemi@gmail.com',
//         From : "arokoolafemi@gmail.com",
//         Subject : "New Contact Form Enquiry",
//         Body : "Name"

//     }).then(
//      message => alert("message sent successfully")
//     );
//     }

// function sendEmail() {
//      const firstname=document.getElementById('firstname').value;
//      const lastname=document.getElementById('lastname').value;
//      const email=document.getElementById('email').value;
//      const subject=document.getElementById('subject').value;
//      const message=document.getElementById('message').value;
//      const smsg='<html><strong>From :</strong>' + firstname + '<br/><strong>Contact :</strong>' + lastname + '<br/><strong>Email :</strong>' + email + '<br/><strong>Subject :</strong>' + subject +'<br/><strong>Message:</strong>' + message + '</html>';
 
// Email.send({
//     Host: "smtp.gmail.com",
//     Username:'arokoolafemi@gmail.com',
//     Password:'umztfmmyfipjihwo',
//     To : 'arokoolafemi@outlook.com',
//     From : "arokoolafemi@gmail.com",
//     Subject : "Website Email",
//     Body : smsg
//     }).then(
//         message => alert(message)
//     );
// }