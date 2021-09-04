![imagen](http://www.plantuml.com/plantuml/png/hPB1Rl8m48JlVefLpZylW7vLjEeRLEfziQV8gcD7k-kKldrD02c0K5g92vSPppT3TgF6OhLFpg8bq6ladN3F540ANv5zv7_qN0tPecSVIpveLIjBBCuvzbQ4EeMCiQc4lK5owPhaIpOfYJeU8ktOyCNVdHiQi3a7pZPx5a03n4Ur2TcvmCPRrbRfvKY98nkkicwnj7gwzD2QaCV8b6iFcK0n7CPydERCik-tkOniZFlUHU1iJXj7xdvK0oqv_gzMpTAOxv29G1e9wGo76XDhQTvGo9TCd7Oriv8NX2aZGPtZP1JOYX9XFwKRz47Dta02NvlAX4HMFf4V5xqj8fmf5JqDEAzL5_3h__dwQjRDCrQa4UU-S_Nelxqzkddca1Ja_iYUVnk2ICdW-PpbIrqkkioO1pc77Doc_TG-_G00.png)

```bash
@startuml
title Diagrama de secuencia, Autenticacion de usuario


actor "servicio externo"


control "api gateway"
participant "servicio de percistencia"
database DB


activate "api gateway"
"servicio externo" -> "api gateway" : envia numero de identificacion
activate "servicio de percistencia"
"api gateway" -> "servicio de percistencia" : envia numero de identificacion


activate DB 
"servicio de percistencia" -> DB 
"servicio de percistencia" <-- DB : Verifica si el numero esta asociado con algunas credenciales

alt datos  existentes
"servicio de percistencia" -> DB 
"servicio de percistencia" <-- DB : Se recupera el token
"servicio de percistencia" -> DB 
"servicio de percistencia" <-- DB : Se borran los datos asociados
deactivate DB 
"servicio de percistencia" --> "api gateway": devuelve token
"api gateway" --> "servicio externo"  : devuelve token

else 

"servicio de percistencia" --> "api gateway": credenciales erroneas
deactivate "servicio de percistencia"
"api gateway" --> "servicio externo"  : credenciales erroneas
deactivate "api gateway"

end
@enduml
```

[back](../../../Diagramas.md)