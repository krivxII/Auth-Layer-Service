var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.CORREO_ELECTRONICO || "herman.anez@alumnos.uneatlantico.es",
    pass: process.env.CONTRASENA || 'T3tmVUOk'
  }
});


module.exports = async function wrapedSendMail(mailOptions){

  return new Promise((resolve,reject)=>{
    
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CORREO_ELECTRONICO || "herman.anez@alumnos.uneatlantico.es",
        pass: process.env.CONTRASENA || 'T3tmVUOk'
      }

  })
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



