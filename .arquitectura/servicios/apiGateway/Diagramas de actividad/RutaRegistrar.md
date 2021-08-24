![Diagrama actividad Registrar](http://www.plantuml.com/plantuml/png/dP2zJWD138JxVGehrKMYY2Zl2b9JmXEOtGaixDadstSIGhmx4H7XeE6di3IsPhwHlFTWYtbiwLsa_WQvte4cHCrLPKZzmgqMfiRd8rsxoiicgnbqqz-6LRc_s8G-GJxMro7L0tNdo8bojQLuW53t3DyceXwoLAR2eKxSAAi414MD2cY2vUe1oPLFE8DFCppuNxmHulm8-pMjO9dH5j2dytAt6nAQWphHLMLZMhaA6ddrmCZVYuaW9Hsd7lxCMJ_aHzAQGZ1J-nhnq2djZteUsni0)

```bash
@startuml
start
:Recibe peticion;
:valida la peticion Json{"correo":String,"token":String};
if (peticion valida?) then (yes)
  :envia datos al contenedor de percistencia;
if (respuesta valida?) then (yes)
  :envia datos al contenedor de mensajeria;
if (respuesta valida?) then (yes)
  :devuelve respuesta 200;
else (no)
  :envia la  respuesta del sistema de mensajeria;
  end
endif
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