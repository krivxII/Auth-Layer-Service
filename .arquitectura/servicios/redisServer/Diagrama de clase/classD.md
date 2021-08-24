## Diagrama de Clase

![class diagram](http://www.plantuml.com/plantuml/png/VPFHpjCm38Nl-nHHkIdIr0Uefkb7FqY0n0tZ1RB46jdIk3Xf6KAyEvbfscHQwMNydUEJs7tnGL8OUriDKbtb6KJzuJOGUDzUV2tUlETF_Av4_9ILtWl2CG1LVrQ5GYhOlEPGGo-D1TeYv6LwA5NLlqwrSHfkzTnzGgC5ntqt3CtRoCsK1vgCHahWW1H49pwv06UW1-qnma0iJteQW_JtSwEWQAO897tbwnO2XIuGMWla2xwNJajwHIB0rvb9qlLIzzVu27O0Acy6Jd-9fSQDFH362nm36NVU2SM6oq6Uf3TQM_Wf2RQJ7DLtw6L3y6C47tOH7T1vs3cuXTnhajPe6TPtF25QmQV9wXjUmJKdrBzYciyUNQxtt2VbU1A1ds7TBh5lMv5c9w9XlT-F7Ww7Ec8y-QvBuuv-RNiG2ywLDCnIcX0MA2HVb9yQC9flGTTbeo_jDp4soJQZaFrVbKrnKyKWFGbKPJqPMlRh4QooIWIBVxCWipmCBfjH6Yx73CtZBv2IY3zwKNq1fyVU_WK0.png)

```bash
@startuml
package "Express.js" #DDDDDD {
    class router
}
package "cors" #DDDDDD {

}
package "nodemailer" #DDDDDD {

}
package "ajv" #DDDDDD {

}


class "index" {
    void startApp()
}
class "servidor" {
    port : Integer
    void startServer()
}

class "rutasService" {
    void crearRouter()
}

class "controllers" {
    void mandarCorreoController()
}




class "mailHelper" {
    void sendMail(numero : String, correo : String)
}

class "middlewares" {
    void mandarCorreoSchema(request,response,next)
}

class "validator" {
    bool validarCorreoToken(body : Json)
}

class "schemas" {
    mandarCorreoSchema
}


Express.js <.. servidor  : "<<use>>"


index::startApp   ..>  servidor::startServer : "<<use>>"

servidor ..> cors : "<<use>>"
servidor::startServer ..> rutasService::crearRouter : "<<use>>"

rutasService::crearRouter ..> controllers : "<<use>>"
rutasService::crearRouter ..> middlewares : "<<use>>"
rutasService ..> router : "<<use>>"


controllers ..> mailHelper : "<<use>>"



mailHelper ..> "nodemailer": "<<use>>"

middlewares ..> validator : "<<use>>"

validator ..> schemas : "<<use>>"
validator ..> ajv : "<<use>>"
@enduml

```

[back](../../../../Diagramas.md)
