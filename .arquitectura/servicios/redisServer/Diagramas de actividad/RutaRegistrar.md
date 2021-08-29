
![](http://www.plantuml.com/plantuml/png/hL8xZXH13Cth52_iaJX1Jy1AS8Bb19ukxwobwggcx9xLSXiEG4H6EXV3tYbW12bI1MxRxsEt7zIesxwMP6A5yL7et6abP0Oj9XV9b5dVuP7FejPR57RTgKjBRzWqF_8Y9yR69ekqUappXOhZK6WahzyzAq-OVlNWrl7-07lcYkcLzP00Vvqt9lDW_j2PKFULNRHJpMqzHhhpHPJmUMTmGRt-Y0RK1bRpL0tL4oaZ-oDhUlpDYfTdAGnCWtKtAVA5SdCVefXK3avaNc_3pVo9CGHLGc-CZbSAFJeHIDiYpW52Y_qCHw6gBsBBCwP_SDUlzx2z3f3xI0vRmlqKWk5YzezJwvqgIjFRIA1gSjuzE3jjfXo5Foh70RiLxt3tJSD1G9TMxtUvTARi9CD7RJZW_p0chdai9QNWutgHk1DqrcrdjN5uRoVZBEjMs2XJG8ltZpypE-xwxIyKzzvwZEuY8IHFIQrjwS7ZE700wIS0.png)

```bash
@startuml
title Diagrama de actividades, Registro de usuario
start
:Recibe peticion;
:valida la petición;
if (peticion valida?) then (yes)
  
  repeat
  :Crea numero random;
  :revisa que el número no este en la base de datos;
  repeat while  (numero utilizado?) is (si) not (no)
  
  :Se revisa si el usuario ya estaba asociado a otro número;
  switch (el usuario ya está asociado a un número?)

  case ( si )
  :se borran los datos antiguos guardados del usuario;
  :se guardan los datos del usuario asociados con el número creado;
case ( no ) 
  :se guardan los datos del usuario asociados con el número creado;

endswitch 

:se envia la respuesta de acción completada;

else (no)
  :envía respuesta de error;
  end
endif
stop
@enduml
```

[back](../../../../Diagramas.md)