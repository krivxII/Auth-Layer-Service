![imagen](http://www.plantuml.com/plantuml/png/dPB1QiCm38RlVWhHSmjbx5J6w65ZxBBR7a1rH35pv2BBXRxzb3XUbuumw2KGwV-_NnBUPqNHqaUdGIF1Iy2ZO8_G4MJoXTW7NCChdqCQQbwe6skHidCElIQ1aWjAIEwG2dSe5_XyTpwnIee6aJE9ErbAyE64hB0QQi5Nu1bZwD1-UEMmQEBI7qm_8M7pR33OGM0pAKeTu3g2DKrIGqn6DcSJDKbjpcIvvJ94p7-MYZehJThi5b17OX84JL_4mqh1d6g6hkdDiBXqHOnp0yKh95EsDbo6eayYD1ZZpwaNSVzalTLPxSeaD-txcGMbG_WOcUisxQNkSY-rdgJ1A99NIHny0hnUeHtuQRDPHEr0A9yAPKLus6w75pFg9-jjUqAF4fFUjfsZc6d-F4WaCM5slnumF3fBcWSjcEQ9ophYpktjK_hu3G00.png)

```bash
@startuml
title Diagrama de secuencia, Envio de credenciales


actor usuario
boundary UI
control server
participant "servicio de validacion"
autonumber
usuario -> UI : insertar crededenciales
UI -> server : enviar credenciales
server -> server : se validan las credenciales


alt credenciales validas

server -> server : se genera token de identidad
server  -> "servicio de validacion" : se envia el token de sesion y el correo del usuario
"servicio de validacion"  -> "servicio de validacion" : Genera numero de validacion
"servicio de validacion"  -> "servicio de validacion" : Guarda Numero, correo y token
"servicio de validacion"  -> "servicio de validacion" : envia correo electronico al usuario

server <-- "servicio de validacion": respuesta 200
UI  <-- server : respuesta 200
usuario <-- UI : respuesta 200


else credenciales erroneas

autonumber 4

UI <-- server : credenciales erroneas

usuario <-- UI : credenciales erroneas

end
@enduml
```

[back](../../../Diagramas.md)