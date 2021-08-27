![image](http://www.plantuml.com/plantuml/png/ZLDDJmCt5BpdLxpcqaGAH9LwwWb88g0DISG6ePvMB_PhCFBQMty0QTKVqn_GKs-zve_rUNV9ieHISdB6dddZcVMP3-X2B7Jl6sM4ZfBW8OJI_p0UEtm-tQhm43VHanFM13BXLDXYN6eqYNFYWzHgCvvyVx9AqDtDV5oW3-GOoYVCG6N8dPP9_rk8Xia5Yq1u8FZ5QcsVbTc2vaE0Ha9dMpdFAmiy7BGLgFMEDGukZmVmxlpyv-NTEbylL_bqURyO35liFCkpdsRhoHM33NH_lRxAvxFBsMBAO2-ee0cc2hSE2uGqexepIUludmQlVA1w1sCAGmaKQl-tIOYI2P0eUxqLEM_DG4GVR45k1Fqx7z4fss-NWAs6w_FqR9V4ymiRZKIt6uZl-F3N9lQ7y7iF-7S8PE39FIdsdJkIohDIrW29M679ou_uX9bmgWmZcBsKZdm5pub6G9utDWGx8AqAPTW41kiJNoDiq1ClQsm40OkD8WDRuk48ci-PM92plcCKeb6YnWHAXDZ4Cdpd7akrPH_dfO9B3FICkq_Shg89Dado4CUgZKCizI6iNoD1WOOU4MfpDYHhmXQbDKmZVsIXGANpb2AvT-aLP3m-ajl_XP-ucfadFW2aco2wEQ1NMuFI0khN4A1aUM6TewCyffk1n80fSrQUDiiqvJOr2M-HInQJzINhlj1ReL3ogaQRSSsDUtySlhpPIsW_6te9v8nbmLUeYdh_vrOP10iLAfIjeer1QVKRmlyzaRRkzBib_S6yDzLFKEiguMov65-jrwkCcObLd-aqr26WtnanWl_WTP_6rwZvlFj1j4yx5QtmmvBRGfDoThDUzM7OlNVZuRLTQ1xVh7vxemjcOoBNhXQMzQlA-urEw-E3vgvDS5P6GI1u31cXK9C72sR_pv5RLZmZ8sEX_mK0)

```bash
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
' uncomment the following line and comment the first to use locally
' !include C4_Container.puml

' LAYOUT_TOP_DOWN()
' LAYOUT_AS_SKETCH()
LAYOUT_WITH_LEGEND()

title Diagrama de Contenedor del sistema de autenticación de identidad

Person(customer, "Usuario", "Usuario a autenticar")

System_Boundary(c1, "sistema de autenticación de identidad") {
    Container(servidor_redis, "Servidor de redis", "JavaScript, Express", "Lee, escribe y elimina datos de la base de datos, tambien genera los numeros de identidad unicos de cada usuario")
    Container(apig, "Api Gateway", "JavaScript, Express", "Punto de entrada de la aplicación que maneja a los otros componentes")
    Container(mail_server, "Servidor de mensajería", "JavaScript, Express", "Envía el numero de identidad asignado al usuario por correo")
    ContainerDb(database, "Database", "Redis Database", "Guarda los datos asociados a los usuarios")
   
}

System_Ext(servidor_externo, "servidor", "Página o servicio que utiliza el sistema de autenticación de usuario")




Rel(servidor_externo, apig, "Api Call", "JSON/HTTPS")
Rel(apig, mail_server, "Api Call", "async, JSON/HTTPS")
Rel(apig, servidor_redis, "Api Call", "async, JSON/HTTPS")
Rel_L(mail_server, customer, "Envia numero de identidad por correo", "SMTP" )

Rel(servidor_redis,database , "Lee,Escribe,Borra", "sync, Node Redis")

Rel(customer, servidor_externo, "Introduce credenciales o número de identidad")
@enduml
```

[back](./../../Diagramas.md)