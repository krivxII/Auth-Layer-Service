![image](http://www.plantuml.com/plantuml/png/jLHDJnin4BtdLxWvfH9abRIddX0V4ggWHQ5mHRFs0AwyjkiF8Atwtpkp9hiBR16bxI7AUlpUcvatkxCJ4uIK6pDvewqqMQ6uJid73rKLu7P-fTDrhdF489rDQDDSkgRo1YnpjcDIHjVLtllj4mwT7HzL3SI4WK8NUyG0RJ7C_N_IRxopn2dwaydfcgwQYuExDCEu9QQd66wqSc5Apr7p7GYy8xPrubj6aPCs-Zl5Z8WCbTe9gWyo5w8bqDbEtqvEC4HdMrcF97K4DHhMF8iP0d6WfmJ2zvNikcmLXFKihjiIk8Ad6UZgiq_q14RiOvH1quap_vXCEW_twrb0fRcjzl_th06fBw01ROXnJ7-YjKKYAtno2kTVem2hnC6T3nWZ7JbpP-vClci8ALq8w0HFAJXZi3Nr_WJaCRU5h5047lANX6sSogRrjqWn7-sDXljp56XGafpLqh72pz560X9lnGxySH_BLMlUbOuflAwJvJb1Ry1erKxkTHg1vz2PqGtp42GAvp6qqaXsM650r12HSGfIwmhPCkgBt8GMf0LUYoj8U0lh5xkp-6jt5l_0dKKpT6VpQZ3_clqn1XfGGAtqdsoFUoGrQlJpGWL5EiLd-gtG5Aao_9xdzNHh-Z4wMnscv8aoGAvUWYHGQJT7U1WCZuBdOq5YqfVrVA82NJ9_kU5l5G4gSZHAWSsUEU2bKcDb4AjTChX3yHP4HcWUgShafoGIMgd1ODp0648TTT_v42Cy110nYykSCZtrhys8LqNel1EokS7mT5KNJUaQ7rmDGMZ5TmhKY6HhNTbCW_ulZcObvl7HTXek9mhPGGqbpMMtpQUdnrzEACqEMfKRymi0)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml


System_Ext(es, "Servidor", "sistema externo que utiliza el servicio de autenticacion")
Person_Ext(pe, "Label", "Usuario a autenticar")



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

Rel(c1r, c2V, "llamadas api","Json/Http")
Rel(c1r, c2R, "llamadas api","Json/Http")
Rel(c1R, c1m, "usa")
Rel(c1R, c1r, "usa")
Rel(c1V, c1r, "usa")
Rel(c1m, c3m, "llamadas api","Json/Http")

Rel(c2V, c2r, "usa",)
Rel(c2R, c2r, "usa",)
Rel(c2r, redis, "Escribe/lee/Borra",)
Rel(pe, es, "introduce credenciales",)
Rel(es, c1R, "envia credenciales para su futura validacion","Json/Http")
Rel(es, c1V, "envia numero de autenticacion para comprobar identidad","Json/Http")
Rel(c3m, c3m2, "usa",)
Rel_L(c3m2, pe, "envia correo electronico con numero de identificacion","SMTP")
@enduml
```

[back](./../../Diagramas.md)