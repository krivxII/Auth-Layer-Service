var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:  process.env.CORREO_ELECTRONICO || "herman.anez@alumnos.uneatlantico.es",
    pass:  process.env.CONTRASENA ||'T3tmVUOk'
  }
});




function sendMail(numero=1){
let mailOptions = {
  from: 'herman.anez@alumnos.uneatlantico.es',
  to: 'herman.a.a.v@gmail.com',
  subject: 'Confirmacion de identidad',
  text: `Buenas, aca tiene el numero que necesita para confirmar su identidad ${numero}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

sendMail();