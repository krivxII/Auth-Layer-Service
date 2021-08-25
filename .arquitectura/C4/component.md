![image](http://www.plantuml.com/plantuml/png/jLHDJnin4BtdLxWvfH9abT1JJuWF2LNGeg1oHRFs0AxyOOrj8Ahux_MioPAaswYbxM6ryjltdZrlrdCO4r3ArepUQITDLYZkKmhnOzCGF4xlTBhFROv8qhk4Basbjqqmu5Yp7vCokcsEF-nVClJruhon41DIWMwEYmAqGvg6_-HlWtUiwVn7LylonTwSFgK9nZqn7fVdIqZQEp3Y1ACatQt6xqUNID6xZXgmqCwXHRE3F-hTZtns2cWvYSj2ZxfW81GAo7nwBK6oufTEtqUZFfQJTaAeD1-rU-_QlnUz7i22DaLnKLxY2kb1IsI7prxXz5iKu9GuVGg4CPObxzpdDP47jZ2b9q8lE7ZonY2n_6K5oXENXUnG3JRryyArNcNZcLQjM8_kGSFBEWeqA8kTqzApm_DW8SGTM702Vrp7VD65TwTZehTLChykr0SmMdMTUvi7SH_wCFfcde54uGDIPurHe1C6H0iHcQSWTQbmB4Evo1KqAruGjBY3X8-m_ErqPd-TpkmVf3Epw-ciVWtMttC-ne051L604R5hlrxZRLaD1xtRgBBu3Z_NPu6cMjNcvmZZlV6dw5rpbb8ep3N2OWUXVAl5CM43f2tmUW1a9T_38V_AcBDiJYj6rV6H1b06LiFab2T7Yur1R8uyKS_YKOVCqDmtbIKAMKJef0Q3SKLZ2XVIN-OrZWX0868Mjpbb0l7wRsoghtkronR9_pGYgv4ilINV0Wcj-9i2rPTqK0EQRrHwSpwfMC2jORC-QmharZQkthTQzWSzHAUoDJy0)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml

System_Ext(es, "", "Optional Description")
Person_Ext(pe, "Label", "Optional Description")



System_Boundary(sy, "sitema de autenticacion", "Optional Description"){

ContainerDb(redis, "redis", "Optional Description")

Container_Boundary(mail, "Mail Service", "Node.js and Express.js"){
Component(c3m, "correo controller", "controlador de expres.js")
Component(c3m2, "modulo de correo", "envia correos electronicos")
}

Container_Boundary(re, "Redis Service", "Node.js and Express.js"){
Component(c2R, "registro controller", "controlador de expres.js")
Component(c2V, "validacion controller", "controlador de expres.js")
Component(c2r, "Modulo de redis", "Hace operaciones en la base de datos")

}


Container_Boundary(container1, "api gateway", "Node.js and Express.js"){
Component(c1R, "registro controller", "controlador de expres.js")
Component(c1V, "validacion controller", "controlador de expres.js")
Component(c1m, "Modulo de correos", "hace llamadas al servicio de correo")
Component(c1r, "Modulo de redis", "hace llamadas al servicio de redis")


}


}

Rel(c1r, c2V, "usa","Json/Http")
Rel(c1r, c2R, "usa","Json/Http")
Rel(c1R, c1m, "usa")
Rel(c1R, c1r, "usa")
Rel(c1V, c1r, "usa")
Rel(c1m, c3m, "usa","Json/Http")

Rel(c2V, c2r, "usa",)
Rel(c2R, c2r, "usa",)
Rel(c2r, redis, "Escribe/lee/Borra",)
Rel(pe, es, "introduce credenciales",)
Rel(es, c1R, "envia credenciales para su futura validacion",)
Rel(es, c1V, "envia numero de autenticacion para comprobar identidad",)
Rel(c3m, c3m2, "usa",)
Rel_L(c3m2, pe, "envia correo electronico con numero de identificacion",)
@enduml
```

[back](./../../Diagramas.md)