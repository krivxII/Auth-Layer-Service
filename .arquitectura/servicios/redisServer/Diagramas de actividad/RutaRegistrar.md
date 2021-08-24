
![](http://www.plantuml.com/plantuml/png/hL9Dijim2Dxh52pjApYBlfdUe3q1bdW9Cx9mGKecFNsHxQIUTljcj42WxmV4XrNKsfOSjY1CFoZoJB1IvSXIBc6wO-Q4aF6Kv4yONZVO7tmReTwemF0a6mE07wMLi7emVLT2A6qX5L1SKkVmjDAT3U5N8w3ygXS1ikgPqZLdD8Ba1wlOvKqAZnjd0XWEKAkS-JScSHjiC1YFJbIzBeUPwIV1eMVSvPerL1PuOjV36G5D8Zi784XLEGnrKNjmZJSO_eUTGQti43SH71IxzQ6hZLtVBxEeOe4ijlS3M2fVcmTN9qsOUk6lnkM0xSKJxlpeRS0WIZdDCIfXSex3HX4OuKi80vLq32I4JaVbpjk2ADdQjgaa0epRTaHPramL4tPaDdhzoTHX_s18LRItxH9TXZ-3LLd3XyU-f7y0.png)

```bash
@startuml
start
:Recibe peticion;
:valida la peticion;
if (peticion valida?) then (yes)
  
  repeat
  :Crea numero ramdon;
  :revisa que el numero no este en la base de datos;
  repeat while  (numero utilizado?) is (si) not (no)
  
  :Se revisa si el usuario ya estaba asociado a otro numero;
  switch (el usuario ya esta asociado a un numero?)

  case ( si )
  :se borran los datos antiguos guardados del usuario;
  :se guardan los datos del usuario asociados con el numero creado;
case ( no ) 
  :se guardan los datos del usuario asociados con el numero creado;

endswitch 

:se envia la respuesta de accion completada;

else (no)
  :envia respuesta de error;
  end
endif
stop
@enduml
```

[back](../../../../Diagramas.md)