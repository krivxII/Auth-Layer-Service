var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:  process.env.CORREO_ELECTRONICO || "herman.anez@alumnos.uneatlantico.es";,
    pass:  process.env.CONTRASENA ||'T3tmVUOk'
  }
});

var mailOptions = {
  from: 'herman.anez@alumnos.uneatlantico.es',
  to: 'herman.a.a.v@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

