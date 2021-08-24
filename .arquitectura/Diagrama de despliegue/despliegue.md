![imagen](http://www.plantuml.com/plantuml/png/dPDFImCn4CNl-HHXpwu8Wd-aB3tejLSFPIdJP6YZsoHCqgf8lxkpPbqthYlgN5fulpVl4MRd8GB5_QuHrccK0UbWj2Cvcwd6e8rOLKaf5d303RJQFQwBiNxh7f7areLOiBlzhQfN8NcK8TKm8Ndy7YawUNLMJ4aNvvVNIKnxmJT6WJBEjdkLuqoBNAFTpbYQp_8ChZIkb2D2nmQpWmtQgfBBakV3qBEIVOdjfOnRyEBJXt0YxvuzOGZyl_uXrYC54xYXCl2xyA7ZtnN0czK68Zx1otGgGxA3_XBKoneYh26WB0Yr2SKWAM-Jz5Av7LYDD0AFuYX4VsbboKMpqwXlv3P6BvRPoTK9p0-bH_C5Z6Pl8hxwqhAyPos6blPflhke53YDZgwWCqpfoVtUf2DJgx8SzUlqELhD7-mR.png)

```
@startuml
node servidor <<cliente>>
node "Navegador Web" <<cliente>>
node "Doker host" <<host>>{
    circle "    puerto 80"
    circle "    puerto 6379"
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

servidor --> [    puerto 80]: http
[Navegador Web]--> [    puerto 6379]: http
[    puerto 80]--> api_gateway 
[    puerto 6379]--> [redis-comander]
api_gateway  --- servicio_de_correo : http
api_gateway  --- servicio_de_persistencia : http
servicio_de_persistencia  --- redis: http
redis--- [redis-comander]: http
@enduml
```

[back](../../Diagramas.md)
