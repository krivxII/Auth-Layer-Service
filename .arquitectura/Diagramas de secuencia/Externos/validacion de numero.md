![imagen](http://www.plantuml.com/plantuml/png/fP8zJWD138Lxdy9AJKgQ2A4KD3Hqq3ip9hAOdOayFrAEmnauGYw69zaeHB0i4irgP_tylUVnhdCXBNK8KAG4nWUXhT90w1apkyhH2TtW2mNnvEJm4Nibre4rzJVn78kLF080kP8KQwwaac2JQlIaUtn-19TYqHGCgOqLTkOfJdOK2oxwDpiSSUtYip3WYCBblK5mXH9DR86_132Sl8eZ0yGUG1eLxfRMO6qdGslbs6Iw4KQTTKpc6HdpvYVMvJmzuMG5Vqs2g_6e-7JCqky-57JA_hYmm1dRuRrBClp3HTdL7QlvbFJ64VV8GGQ9XBbcgsub5qrvnc6yM-DvRfL3OyESY1QyBmhlbijHzgFg_1zqcSbxC2ygMmRWaFbwS5OrQ-wJKot9jhKnx2tyEUK4pVFyHj6ckHvc7dRMVfzolhVh43XwMDkZ3k4J.png)

```bash
@startuml
title Diagrama de secuencia, Validación de numero de identidad 


actor usuario
boundary UI
control server
participant "servicio de validación"


usuario -> UI : insertar numero de verificacion
activate UI
UI -> server : enviar numero de verificacion

server -> "servicio de validación": enviar numero de verificacion
activate server
activate "servicio de validación"
"servicio de validación"  -> "servicio de validación" : validar Numero


alt credenciales válidas

"servicio de validación"  -> "servicio de validación" : recuperar token y elimina sus registros
"servicio de validación"  -> server  : devuelve el token



UI  <-- server : devuelve el token
usuario <-- UI : redirige

else credenciales erróneas

autonumber 5

"servicio de validación"  -> server  : credenciales erróneas
deactivate "servicio de validación" 
UI <-- server : credenciales erróneas
deactivate  server 
usuario <-- UI : credenciales erróneas
deactivate  UI  
end
@enduml 
```

[back](../../../Diagramas.md)