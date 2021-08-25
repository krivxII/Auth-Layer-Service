![image](http://www.plantuml.com/plantuml/png/jPDVRzCm5CNVyobCdugqDIhZYQTfMoM4DfWoiTVfnhxhZFp7khQxLOZlZczCKohAAA0zH57itpavvoO-ZGaePMkQLzf9anMAXvH2VDUs18-pfKuFkSyHINgNqAMPzBOD1XnhZcDIHlVj-TlZQrxwV7NPMeW9gIpTdHS5Q8Sq2o_aRuDtHLFzcvjrsR5tYwSqnNWa9fDoVGf9UmT6N62Kf8UdoUlc6YbwDw012tO9FPfd-6PqF_FPAQ3rDAuB7dLP0r5AGURqMe9anM-TlZRDE9QBVageD4STxi-zVnHj0rZGfYYkoatS8AsqH7Ruw1NElaG1Jed5Ko2CiJpocyTvJUM9BQJqHEW53vwyCKWi__44oXFNGdQe1istlJ68vzTn_hzEyQORgYzrJ7HuZXs7suAkm6WrpFrm3owphutSBCsB7e8MIqZu2Ek3Eyt_kzFy7pjn9RuwDDMaJYT7c1nDFaJlslSfXS9Le6EW-mDmOlS2bM3xpGzyvecWDLW-VjMpzxYxu7-vHzvl1t93yU539ZItKbcYa4M4Jcem63SO8tMow5OQTXWHW434BEvpoWHYExbTzUseTjaY-LyERJMItWRoFP3GYlSKgB4IJoFWDaKzFsXGbl1Eo-5x_sHV7Uwr7EESebFPcky0)

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
}

Container_Boundary(re, "Redis Service", "Node.js and Express.js"){
Component(c2R, "registro controller", "controlador de expres.js")
Component(c2V, "validacion controller", "controlador de expres.js")

}


Container_Boundary(container1, "api gateway", "Node.js and Express.js"){
Component(c1R, "registro controller", "controlador de expres.js")
Component(c1V, "validacion controller", "controlador de expres.js")
}


}

Rel(c1V, c2V, "usa","Json/Http")
Rel(c1R, c2R, "usa","Json/Http")
Rel(c1R, c3m, "usa","Json/Http")

Rel(c2V, redis, "Borra/lee",)
Rel(c2R, redis, "Escribe/lee/Borra",)
Rel(pe, es, "introduce credenciales",)
Rel(es, c1R, "envia credenciales para su futura validacion",)
Rel(es, c1V, "envia numero de autenticacion para comprobar identidad",)
Rel(c3m, pe, "envia correo electronico con numero de identificacion",)
@enduml
```

[back](./../../Diagramas.md)