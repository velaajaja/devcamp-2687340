const express = require('express')

//CREAR EL OBJETO PRINCIPAL DE LA API
const app =express()

//url de pruebas:
app.get('/prueba' , function(request , response){

    response.send("hola")

})
//obtener todos los botcamps
app.get('/api/v1/devcamp/bootcamps' , (request, response)=>{

    response
        .status(200)
        .json({

            "success": true,
            "msg" : "aqui van a mostrarse todos los bootcamps"

        })

})
//obtener bootcamp por id
app.get('/api/v1/devcamp/bootcamps:id' , (request, response)=>{

    response
        .status(200)
        .json({

            "success": true,
            "msg" : `obteniendo bootcamp con id ${request.params.id }`

        })

})
//crear botcamp
app.post('/api/v1/devcamp/bootcamps' , (request, response)=>{

    response
        .status(200)
        .json({

            "success": true,
            "msg" : "aqui se van a crear todos los bootcamps"

        })

})
//actualizar botcamp
app.put('/api/v1/devcamp/bootcamps/:id' , (request, response)=>{

    response
        .status(200)
        .json({

            "success": true,
            "msg" : `editando bootcamp con id ${request.params.id }`

        })

})
//eliminar botcamp
app.delete('/api/v1/devcamp/bootcamps/:id' , (request, response)=>{

    response
        .status(200)
        .json({

            "success": true,
            "msg" : `se elimina bootcamp con id ${request.params.id }`

        })

})


//crear servidor de aplicacion
app.listen( 5000,
     console.log('servidor ejecutando en puerto' + 5000 ))