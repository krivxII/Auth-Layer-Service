![imagen](http://www.plantuml.com/plantuml/png/TOvHJiGm44F_Smf_Tg_G_M3Fm0s6n2j6cYRLJ5A9szFj2b44V4HohF6pRz75-rWi7IBDhypwHgpichNLQvetCIq2avEfTqnVFpmFNYxexwoOFXYN1CoicmgAz1OGGswrix8qHtdmFMliHbPvufon3aQN_tY5sw1jX4aWEyiHDWOasgwA73qZXhYsQw85CTLs6cC2VFSK6k8nOf7Vam3MalQdzxz8Pmhetlnd97fRqstNOx5F.png)

```bash
@startuml
start
:Recibe peticion;
:valida la peticion;
if (peticion valida?) then (yes)
  :envia datos al contenedor de percistencia;
if (respuesta valida?) then (yes)
  :devuelve las credenciales asociadas al usuario;
else (no)
  :envia la  respuesta del sistema de percistencia;
  end
endif
else (no)
  :envia respuesta de error;
  end
endif
stop
@enduml
```
[back](../../../../Diagramas.md)

