var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.CORREO_ELECTRONICO || "herman.anez@alumnos.uneatlantico.es",
    pass: process.env.CONTRASENA || 'T3tmVUOk'
  }
});


module.exports = async function (numero = 1, correo = "herman.a.a.v@gmail.com") {
  let response;
  console.log("mandando")
  let mailOptions = {
    from: 'herman.anez@alumnos.uneatlantico.es',
    to: correo,
    subject: 'Confirmacion de identidad',
    text: `Buenas, aca tiene el numero que necesita para confirmar su identidad ${numero}`
  };

  

  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      console.log(error);
      return 0;
    } else {
      console.log('Email sent: ' +  info.response);
      return 200;
    }

  }
  
  
  );
}

async function wrapedSendMail(mailOptions){
    return new Promise((resolve,reject)=>{
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CORREO_ELECTRONICO || "herman.anez@alumnos.uneatlantico.es",
        pass: process.env.CONTRASENA || 'T3tmVUOk'
      }
    });

 transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log("error is "+error);
       resolve(400); // or use rejcet(false) but then you will have to handle errors
    } 
   else {
       console.log('Email sent: ' + info.response);
       resolve(200);
    }
   });
   }
   })




