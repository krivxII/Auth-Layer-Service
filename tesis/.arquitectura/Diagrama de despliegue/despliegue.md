![imagen](http://www.plantuml.com/plantuml/png/dP7TJiCm38NlynHMhnaFWAPe5-EM5q1eCedf0crIEIu_Gdjtl2LqdSGcmAhKrkSxEOwyoe8iOzyP2T8Hh0EsZ3s29ttoq0LgHm9ZOj9E9duDFZ4ibqwLA6HjKPfrUY66RShIgBf_M_jfJ526dz0H32En96D0grXGJtVeGefxYqkAHlA93qQeTSnLSEDfun8p9JM47bkAriBzGklRCB7x6nHsaawuk-Jf-ZbVmUtxm9IpVZzSY1s8SyX2qGNyNVZSyUyHS0YR5eNUyEDyga9GeRy4JR97mKVC10sJ3xcP9HLePtR679U_i7MRDx0L6KpvqVPytAffpPg7kNvQPwKleYShg8PpUd4VhbF95KK_zjqN)

```js
@startuml
title Diagrama de despliegue 

node servidor <<cliente>>
node "Doker host" <<host>>{

interface puerto

    node "aplicacion" <<contenedor>>{

        node servicio_de_correo <<imagen>> [----
        servicio de correo
        ----
        Node.js, Express.js]

        node servicio_de_persistencia <<imagen>> [----
        servicio de persistencia
        ----
        Node.js, Express.js]

        node api_gateway <<imagen>> [----
        api gateway
        ----
        Node.js, Express.js]


        database "redis" <<imagen>>

    }
}

servidor <-> puerto: http
puerto<-> api_gateway: http



api_gateway  --- servicio_de_correo : http
api_gateway  --- servicio_de_persistencia : http
servicio_de_persistencia  --- redis: http
@enduml
```

[back](../../Diagramas.md)
