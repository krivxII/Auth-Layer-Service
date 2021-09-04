![imagen](http://www.plantuml.com/plantuml/png/jPB1IWCn48RlynH3p_ReHKGgUF7YHNo0QJAMmMooJ9A5FexFu2FqnPnqrvMYnLMmXqBOVxxv9fDDBgIbTW6AbC1u9xHJwWWzOsPNEJgX2xojXMCHHqvIRDzghgII081SIJgVjwb6Jxh7ftjmAHPDmJWwi49FQWJfAHPSFKekFBQXJ_RXBM9lD9TKEQsCFd5nVMD4l4A9HZDbZBLZJQtUsF8ygJKR6QXmwsy5LZPsjrAEWvmlX2bd5Sla9k3F9YDuFY-TVLaCbmlR5GmKn9lomr6vBIyKTCh-kER06OV3Quja-9V-ogxsh6PGqWj7t2C7wIGIvffHUMSSJNbvxtcz1lSyL0u36tF4W_ti3U3rUZt5lalDJwp5BDuilQZi6813vjFxOLMpu7P19fPizrl3NiBVbC-WFV_oiQ3DUJBc0l97zkly2sejXy3HmyR-QXVU0G00.png)

```bash
@startuml
title Diagrama de secuencia, Autenticacion de usuario


actor usuario
boundary UI
control server
participant "Sistema de autenticación por correo"


usuario -> UI : insertar numero de verificacion
activate UI
UI -> server : enviar numero de verificacion

server -> "Sistema de autenticación por correo": enviar numero de verificacion
activate server
activate "Sistema de autenticación por correo"
"Sistema de autenticación por correo"  -> "Sistema de autenticación por correo" : validar Numero


alt credenciales válidas

"Sistema de autenticación por correo"  -> "Sistema de autenticación por correo" : recuperar token y elimina sus registros
"Sistema de autenticación por correo"  -> server  : devuelve el token



UI  <-- server : devuelve el token
usuario <-- UI : redirige

else credenciales erróneas

autonumber 5

"Sistema de autenticación por correo"  -> server  : credenciales erróneas
deactivate "Sistema de autenticación por correo" 
UI <-- server : credenciales erróneas
deactivate  server 
usuario <-- UI : credenciales erróneas
deactivate  UI  
end
@enduml
```

[back](../../../Diagramas.md)