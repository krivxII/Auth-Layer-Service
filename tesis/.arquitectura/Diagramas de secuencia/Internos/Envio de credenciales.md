![imagen](http://www.plantuml.com/plantuml/png/jPJ1ZjGm38RlUGghP-O5HWYjW2S0YRityGw1DAuSPs0UYjFUzjeNmsbLQMQgRa62EKv-_v_pryv3KHIjVN8QDH5yZ7WIx142GI5VAVk8R-0JdM9HuVPtBHKbidCElR90LqZEqKS6-gaacJixyfnDdg338S89bNxWfNE3iKmvODQhClCSI8e19jehifvomMyauozJ1LHyn68zltVsMxS1XtUtV3W2vRCLW_9tod01po9a5OcyolYSe-TsgtYsYhlURvtCUli2VyPnYNc0xYiMHR1A4gWPylZIap2CBqtKNNMpdTVcqNwV7uJ6PyZLcDDv39GrFaMFLf0NUiiOTZ0xYhU7WqcC-8LayXSe4IWjR6efr8A1dQCStFz6Bv_aWZCQ2viuC22m2Y_VeKrvKWYeN6om9bEbulvHHvy97ba4CoJpdocODPug6sCEOfzr14mzUigufBbSRXv05-WgpLVjxbVcQ9fpfNIcbiZjb0GCY_FEW2wQxMtUNg-LT5gksAwwQcTZqpQj6cVBRju1Sm1CV-kwUdYC8bI6EerQGOtbQNey8xO4zzEvZyS0g_TkXxBnh3rG3hLFlm40.png)

```bash
@startuml
title Diagrama de secuencia, Registro de usuario


actor "servicio externo"


control "api gateway"
participant "servicio de persistencia"
participant "servicio de mensajería"
database DB



"servicio externo" -> "api gateway" : envía token y correo electrónico
activate "api gateway"
"api gateway" -> "servicio de persistencia" : envía token y correo electrónico

loop "hasta tener un número único"
activate "servicio de persistencia"
"servicio de persistencia" -> "servicio de persistencia" : Creó numero de identificacion
activate DB 
"servicio de persistencia" -> DB 
"servicio de persistencia" <-- DB : Verificar si el numero esta usado

end

activate DB 
"servicio de persistencia" -> DB 
"servicio de persistencia" <-- DB : Verificar si correo ya esta asociado a otro número


alt datos existentes

"servicio de persistencia" -> DB 
"servicio de persistencia" <-- DB : Se borran los datos antiguos


end



"servicio de persistencia" -> DB: almacena numero correo y token
deactivate DB
"servicio de persistencia" --> "api gateway": devuelve número de identidad
deactivate "servicio de persistencia"
activate "servicio de mensajería"
"api gateway" -> "servicio de mensajería": envia numero de identidad y correo electrónico
"servicio de mensajería" -> : envia numero de identificación al correo electrónico
"servicio de mensajería" --> "api gateway"  : respuesta satisfactoria
deactivate "servicio de mensajería"

"api gateway" --> "servicio externo"  : respuesta satisfactoria
deactivate "api gateway"
@enduml
```

[back](../../../Diagramas.md)