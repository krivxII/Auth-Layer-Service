var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.CORREO_ELECTRONICO || "herman.anez@alumnos.uneatlantico.es",
    pass: process.env.CONTRASENA || 'T3tmVUOk'
  }
});


module.exports = async function wrapedSendMail(numero = 1, correo = "herman.a.a.v@gmail.com"){

  return new Promise((resolve,reject)=>{
    
  let mailOptions = {
    from: 'herman.anez@alumnos.uneatlantico.es',
    to: correo,
    subject: 'Confirmacion de identidad',
    text: `Buenas, aca tiene el numero que necesita para confirmar su identidad ${numero}`
  };

  transporter.sendMail(mailOptions, function(error, info){

    if (error) {
      console.log("error is "+error);
     resolve(400); // or use rejcet(false) but then you will have to handle errors
  } 
 else {
     console.log('Email sent: ' + info.response);
     resolve(200);
  }

  })

  
})}



