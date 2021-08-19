import fetch from "node-fetch"
const Mail_ruta = process.env.URL_CORREO || "http://192.168.56.1:8081/sendMail"

const mailHelper = {

  async sendMail(numero, correo) {

    const mailResponse = await fetch(Mail_ruta + "mandarCorreo", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ numero, correo }),

    });
    console.log(mailResponse)
    return 1;
  }

}

export default mailHelper