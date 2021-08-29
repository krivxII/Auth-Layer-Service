![imagen](http://www.plantuml.com/plantuml/png/lLL1Zjim3Bph5OJFpGU2ebYWVK4BzCwrPbErYcYGTBfvL4zxssi-LaLn0oI1KnSerbUDPeOZadumP_LncuCdpw1FYJVAMwO8ClGZIf_u7Nt69fchK0IDDh8c2I5mxwBK6NIN-YI4PuSMwUfHBwN2CtKy9DgmuoVlkp1KhOeSkFZvMkCSe5O5cjeTs1R5-3lqyAkY8Zi_ie4KCLcetwqJMdsuj41hGjdL--Jo0uNsr8igX93HknvUIkhbM5ZQiUFA_YLJfPwlOPbEo283TT_Ol09He3GMAeVNBLJey7e4TMStzoARFVgxpu-AmmkLiMb6K8eedfvIp_L2EQkVOgRxIWj0xrUh2RMchz0cf6I9aF-OW3dJQ1mb19GOtix3z4XxFdbWaugFGapYAjFBjDRFJf5TZF3SU1qM_gklBw17KUL2MMpIuk9fCug5APT5YclYlEKUXQTyprMUUZD4NEPxb_HweDOLinkHTsZfNFHGv5Z9bxJl6JCtxhV3DmzjevTQjTTsPkPmZghfJ7Gp4r8PYFE_iTwcI5L5OSFOsixOapsrxPeuH2n8vpgUAd2x3U-hp2oz1vHu_3zG-0q0.png)

```bash
@startuml
title Diagrama de secuencia, Registro de usuario


actor "servicio externo"


control "api gateway"
participant "servicio de persistencia"
participant "servicio de mensajería"
database redis



"servicio externo" -> "api gateway" : envía token y correo electrónico
activate "api gateway"
"api gateway" -> "servicio de persistencia" : envía token y correo electrónico

loop "hasta tener un número único"
activate "servicio de persistencia"
"servicio de persistencia" -> "servicio de persistencia" : Creó numero de identificacion
activate redis 
"servicio de persistencia" -> redis 
"servicio de persistencia" <-- redis : Verificar si el numero esta usado

end

activate redis 
"servicio de persistencia" -> redis 
"servicio de persistencia" <-- redis : Verificar si correo ya esta asociado a otro número


alt datos existentes

"servicio de persistencia" -> redis 
"servicio de persistencia" <-- redis : Se borran los datos antiguos


end



"servicio de persistencia" -> redis: almacena numero correo y token
deactivate redis
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