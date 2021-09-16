import fetch from "node-fetch"
const ruta = "https://6fra5t373m.execute-api.eu-west-1.amazonaws.com/development/"
const ruta2= process.env.URL_API

const helper = {

  async registrar({usuario, correo, contrasena}) {

    const response = await fetch(ruta + "users/" + usuario, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "firstName": correo, "password": contrasena }),
    }).then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));

    console.log(response)

    if ((600 > response.status) && (response.status > 499)) {//500
      console.log("error 500 en registrarUsuario")
      return await this.registrar({usuario, correo, contrasena})
    }
    else if ((500 > response.status) && (response.status > 399)) {//400
      console.log("error 400 en registrarUsuario")
      console.log(response)
      return "0"
    }
    else if ((300 > response.status) && (response.status > 199)) {//300

      console.log("se registro al usuario")
      return "1"

    }

  },

  async autenticar({usuario, contrasena}) {

    const response = await fetch(ruta + "users/" + usuario + "/sessions", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "password": contrasena }),
    }).then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));

    if ((600 > response.status) && (response.status > 499)) {//500
      console.log("error 500 en registrarUsuario")
      return await this.autenticar({usuario, contrasena})
    }
    else if ((500 > response.status) && (response.status > 399)) {//400
      console.log("error 400 en registrarUsuario")
      console.log(response)
      return 400
    }
    else if ((300 > response.status) && (response.status > 199)) {//300

      console.log("se registro al usuario")
      console.log(response.body.sessionToken)
      let datos = await this.validar(response.body.sessionToken)
      let final = {...response.body,...datos};
      return await this.a_autenticar(datos.email,response.body.sessionToken)

    }

  },

  async autenticar2(numero) {

    console.log(numero)
    const response = await fetch(ruta2 + "validar", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "numero": numero.numero}),
    }).then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));
    

    console.log(response)

    if ((600 > response.status) && (response.status > 499)) {//500
      console.log("error 500 en registrarUsuario")
      return 0
    }
    else if ((500 > response.status) && (response.status > 399)) {//400
      console.log("error 400 en registrarUsuario")
      console.log(response)
      return 400
    }
    else if ((300 > response.status) && (response.status > 199)) {//300

      console.log("se registro al usuario")
      let datos = await this.validar(response.body.token)
      let final = {...response.body,...datos};
      console.log(final)
      return final

    }

    

  },
  async validar(token) {

    console.log("+"+token)
    console.log(typeof token)



    let headers= {
      "Authorization": token
    }
    var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
   };
    const response = await fetch(ruta+"user", requestOptions)
      .then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));

    console.log(response)
    
    if ((600 > response.status) && (response.status > 499)) {//500

     return await this.validar(token)
    }
    else if ((500 > response.status) && (response.status > 399)) {//400



      console.log("el token no fue validado sera destruido en validar")

      return 0


    }
    else if ((300 > response.status) && (response.status > 199)) {//200

      console.log("el token  fue validado en vaidarr")
      console.log(response.body.username)
      return {"username":response.body.username,"email":response.body.firstName}


    }

  },

  async destruir(token) {

    console.log("+"+token)
    console.log(typeof token)

    console.log("destruir")


    let headers= {
      "authorization": token
    }
    var requestOptions = {
      method: 'DELETE',
      headers: headers,
      redirect: 'follow'
   };
    const response = await fetch(ruta+"sessions/"+token, requestOptions);
      console.log("response")
    console.log(response)
    console.log("response")
    if ((600 > response.status) && (response.status > 499)) {//500
      console.log("destruir reset")
      return await this.destruir(token)
    }
    else if ((500 > response.status) && (response.status > 399)) {//400



      console.log("11111111111111111111")

      return 0


    }
    else if ((300 > response.status) && (response.status > 199)) {//200

      console.log("2222222222222222222222222")
  
      return 1


    }

  },

  async a_autenticar(correo,token) {

    const response = await fetch(ruta2 + "registrar", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "correo": correo, "token" : token}),
    })

    console.log(response)

    if ((600 > response.status) && (response.status > 499)) {//500
      console.log("error 500 en registrarUsuario")
      return 0
    }
    else if ((500 > response.status) && (response.status > 399)) {//400
      console.log("error 400 en registrarUsuario")
      console.log(response)
      return 400
    }
    else if ((300 > response.status) && (response.status > 199)) {//300

      console.log("se registro al usuario")

      return 200

    }

  },  

}

export default helper