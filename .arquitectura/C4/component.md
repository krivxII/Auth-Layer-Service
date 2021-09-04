![image](http://www.plantuml.com/plantuml/png/jLJ1JXin4BtdAzoSWWHP9Usf9mg9X5fe4IdqY6Rj8HXvxUtO1jAgKl-Xtz4Jdy2Vz4iwZicofAjIX7g8b7r-xtdcsPvj7u12h4plXRRIH8NYF8JQlouAWglXN8VpM4QF99qDQCDGkgge3TYasV916LqMkw-s3XDqVB1VLE034aEdkwm0RP66zN_ohsfdMPFzWmu6nKJ3dA02mHir1FJyQSHCipGlGKoRQGbItzvOKJiIqX6Xw_LcYyGwdLw70VfDqPyXNMhbgC___Pq3NWSawyJdY286RVGNnepmYIgr-tE7_aRl4Caxk_IjaRtseKIJJ8zz168Ht6k8-Rscb1qNhG9Q3FmYr_1e5ydsGnsqis341BqadRwuZA-zNdCkat90g7HgSW81Il2OXEzmyUlxZqim4OLQuHijtNr15MZJYYZLLA7rS85q-nFwxQLFMARTcpCPo9SLh-TwHJfzSiOW9H5p1TIwZMuyL8wPTN1xew99ORUwdjfB3NVVNg11oGvMI-VPubjd4uHhBTH8CeLifNwiX_4HhnFEcKvFxM9ymYIEMIkGsjcdggaLGKVHUo1HE4QNvkW5Mc50fCDCT0LX6GbdqXcAN44Zzdh3TSmXu1KialLxft1uuGLO9QRNDQ7t_BcMpEWPoOoUbSoewheSlWd56AX0WHVGUh4DRyrhBUNqNXvroYmsokdoxmXDzig7Vg-hTN-p_zOxM-o5KBEanJpw5oQJSiFHmqEGri2JBf2L_9h-lb6cZfD-lD9lPWCkiXDbO3LPfcdub5WOn6B74JMiD0GnCNGwHXKb2icYvGKsw5UqHCcN2VFJRd543GJ2Ht4MG-H_-ShaWTlkeUrqqZZPM25rpEhiAbrLaok1X5PfKO7gy5o6b-THAu7J_K76QbmRIUs9n91j5P6tELjMuLBziuEFXxpDDbeLA_CR)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml
title Diagrama de Componentes del Sistema de autenticación por correo

System_Ext(es, "Servidor", "sistema externo que utiliza el servicio de autenticación")
Person_Ext(pe, "Label", "Usuario a autenticar")



System_Boundary(sy, "sistema de autenticación por correo", "Optional Description"){

ContainerDb(redis, "Database", "Key–value database")

Container_Boundary(mail, "Servidor de mensajería", "Servidor Web"){
Component(c3m, "correo controller", "Web api controller")
Component(c3m2, "Módulo de correo", "Envia correos electronicos")
}

Container_Boundary(re, "Servidor de percistencia", "Servidor Web"){
Component(c2R, "registro controller", "Web api controller")
Component(c2V, "validacion controller", "Web api controller")
Component(c2r, "Módulo de percistencia", "Hace operaciones en la base de datos")

}


Container_Boundary(container1, "Api gateway", "Node.js and Express.js"){
Component(c1R, "registro controller", "Web api controller")
Component(c1V, "validacion controller", "Web api controller")
Component(c1m, "Módulo de correos", "Hace llamadas al servicio de correo")
Component(c1r, "Módulo de redis", "Hace llamadas al servicio de redis")


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
Rel(es, c1R, "envia credenciales para su futura validación","Json/Http")
Rel(es, c1V, "envia numero de autenticación para comprobar identidad","Json/Http")
Rel(c3m, c3m2, "usa",)
Rel_L(c3m2, pe, "Envia correo electronico con numero de identificacion","SMTP")
@enduml
```

[back](./../../Diagramas.md)