![imagen](http://www.plantuml.com/plantuml/png/fPEnJWCn38PtFuNLcOui5K8TM5ZOO7SJKrdaaif9JkhZy0myGbyCfmqg5LmFYGxLvVpx-_qdkNKkfAKE0OgKmFWWj5KQ23rZPbSvEg4RVA4WdfmSFcAhn3gmflOadcEnaaS085UIOisLL19iKesUT8_FZ-1IB9g28NLaXPrvYfCTnOABziuMHznuzbaOiADmUMyGNA544nVIRmCOJbx5aG5Y6q16AjmihS7QJeRMod6KwSOkiuR9SJfYthjdd0JXLHjSzQNYqz7e3BwoKnGAEcL_FAx06SV3Uwjd-CSSogxkM4cnf3UEk4SECaWap3LRTIkvQCep3drhZUTvh1n6Dio92FQpOyAxvRBBVbNrMz1afsjWGKLbom0SCby6PrMpvfQSQacn3Xl3ti9VfvoYUPu_1xGqbs7cOL_QdoddUviEWQE7jVsrZnZX4m00.png)

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
"servicio de validación"  -> "servicio de validación" : validar Numero
activate "servicio de validación"

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