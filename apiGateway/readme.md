@startuml
package "Express.js" #DDDDDD {
  class app
  class router
}
package "Corss" #DDDDDD {
  class cors
}
package "Node-fetch" #DDDDDD {
  class fetch
}
package "Ajv" #DDDDDD {
  class ajv
}



index  *-- servidor
servidor *-- rutasService
servidor *-- app
servidor *-- cors
rutasService *-- controllers
rutasService *-- middlewares
rutasService *-- router
controllers *-- redisHelper
controllers *-- mailHelper
redisHelper *-- fetch
mailHelper*-- fetch
middlewares*-- validator
validator*-- schemas
validator*-- ajv
@enduml