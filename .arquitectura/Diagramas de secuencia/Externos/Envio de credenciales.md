![imagen](http://www.plantuml.com/plantuml/png/lPHDZjim38NtEWNXTNE1e2W6Q4_G0jrp94wgLXODadARsvVEHC3annClYdghp-yzFPD-KaEnDfPWsGh1bum7mH4X4IZ5HZLc_01VwP3LX24HD6qecKC868q51YMPSymCzCT8AWz-5BawNc30ASC1ZNxZSGYJUpavORKthxdcH1BTuEJs3ZPILVn9ia093PzH2OHIrk3FRH3OVRfC07kWEcS4urzKuGYHHOY12aKJhZdoSgiyEt-L_LB7XTSliCKb5EO9XX-evXnL4cWLQXj96Dg236-Ih7UrVlGmusSXxev-d1DLooyvelErcv_xXGT6Zw6FkzsPsiDtaiM8GJDGwHbegQ8f9c-7QWh_AqB_F4TyZO3AZYS613Rf5ItpNWmI6giFs4dLICC_JVMDu9b5i49XFNjXjNnehE7SoYR7FM0PCLB5tcw_vEjGXaINxRuhUhr6UsVcHcMcc_b9c5nxo-HsPct5RrTkbUpxTYVC_UrR4rfCkjZQPW2MxPBtsWEt4DAfdQPDqRA-O3HsEYHwNCjrBwv_--lRQ78X5PwefZQMlm00.png)

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