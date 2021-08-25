![imagen](http://www.plantuml.com/plantuml/png/dPB1JeGm48RlVOg6i_W0PjFiGQzxzK08cMqdR1KwPDfTDMRVtG8L8IuRtLuW-R-F-KbdwmDmEBQDS6HGUkIJDSHoiz6DHHTGgJ79Td326lhi6VVP1U2HNf7bWNpeq_wfrASGCfuHWAwn6hGbD-WKPOU6UC8Iccf4i39OQM96Ye9jeKQdb2poU2RXcvNH6zafMd0xCdZ_uk_aqtl7w7ryBw-CxP2zzG6Tjl2tuNFZvWhGsQg6W6_miJurGZ91_naqnGO2xC6Zp1YDzTbiqg9DodDDBJY3_0iyYxCGFpkJgtd_1ta8eHF5Od7AI4MiM7wuJAmGCt_ufqkhaE1hwFBwah2MZ_RGA95ZkpnVwxb5PuvjymK0)

```js
@startuml
node servidor <<cliente>>
node "Navegador Web" <<cliente>>
node "Doker host" <<host>>{

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
        node "redis-comander" <<imagen>>
    }
}

servidor <-> api_gateway: http
[Navegador Web] <--> [redis-comander]: http


api_gateway  --- servicio_de_correo : http
api_gateway  --- servicio_de_persistencia : http
servicio_de_persistencia  --- redis: http
redis--- [redis-comander]: http
@enduml
```

[back](../../Diagramas.md)
