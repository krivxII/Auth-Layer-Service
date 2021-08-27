![image](http://www.plantuml.com/plantuml/png/VL7DRXCn4BxlKmnx8PNQvCA9Ksc9e59QeZOHuhIQsDFDg5uxZEsqvMru1cwzviKOBscRGCHjzjlvVhxnQKmeANUkUiFUk6m9bYcjullHIF1-s79QvaME92RuH3uDJUX6AuU-S4vYieuNe_Dt9zC2pIydemvZ8b6eEI-CXpHS5VMtaBrIEvM0j2Iu3Sw5U_OjEFO4w2ti_MQ9EWLGQt31e7EFgl6IyM_vQlBXsvVvhFbwCVlSJCQVnbSV1qTLbJWvWfj7ZTJ1bW2MiHNiD8B0XKBYAS4P-ZjDizsjgYb937vWSaoX8pc6UXup2eVwTGG4pEKeR53ge-eFTw3OiedzhBkHou1WwNNPyEQNBmZR0bYqHLKjEqww5eDX5CWUyekHVlZDaoO9UppOF7asGSstxitu8GqYoPfja4RhQhsWuizGRxJvsR972D2ZHWs-PuASsF4F17Bmtz3RKCMpkYRNN16toqMG0UmqXsDulfsEzTYl6S7dVmkiWe098jHVzkPoDgtXgDSzGtDteCgkh3wV19iDWH5IISFeA48uUAkwbpsWk1UxlgPMsmlktZ_0ceHlsI0ut0bloK77iGibyobvcplt6m00)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml
' uncomment the following line and comment the first to use locally
' !include C4_Context.puml

LAYOUT_WITH_LEGEND()

title System Context diagram for Internet Banking System

Person(customer, "Usuario", "Usuario a autenticar")
System(auth_system, "sistema de autenticación de identidad", "Permite asociar un usuario a un número de identidad único")

System_Ext(servidor_externo, "servidor", "Página o servicio que utiliza el sistema de autenticación de usuario")


Rel_Neighbor( auth_system , customer , "Envia numero de identidad por correo", "SMTP" )
Rel_Back(servidor_externo, customer , "Introduce credenciales o número de identidad")
Rel(servidor_externo, auth_system ,"Registra un usuario o verifica la identidad del mismo" )
@enduml

```

[back](./../../Diagramas.md)