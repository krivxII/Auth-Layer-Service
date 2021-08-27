![Diagrama actividad Registrar](http://www.plantuml.com/plantuml/png/dP4zJWCn48Lxd-ALcowYt1Ja3DnWMBy88w-zyinQuZWSW8eZxCLm4X165FmKbaPFdxzdUOvgKcoTexiCRhpZ5Ew9XHQcaDF1ZLLYy88ex-7ssj9mml31u4hSxc0FJ1YUg3i7Z4nrUn5uiQoGY2adOwBF1VxSK3He2wOWLr-XBYlL17Lx_eTnPb9vP6d8RuMUTMMin2TwizyV7ACIGyfzQnHqc6V4vVspVEi6cBnh9vp-Rkh_vMTLhm5BoUNh7RMyk6ERpoj-0m00)

```bash
@startuml
start
:Recibe peticion;
:valida la petición;
if (peticion valida?) then (yes)
  :envía datos al contenedor de persistencia;
if (respuesta válida?) then (yes)
  :envía datos al contenedor de mensajería;
if (respuesta válida?) then (yes)
  :devuelve respuesta 200;
else (no)
  :envía la  respuesta del sistema de mensajería;
  end
endif
else (no)
  :envía la  respuesta del sistema de persistencia;
  end
endif
else (no)
  :envía respuesta de error;
  end
endif
stop
@enduml
```

[back](../../../../Diagramas.md)