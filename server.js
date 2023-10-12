const express = require('express')

//CREAR EL OBJETO PRINCIPAL DE LA API
const app =express()

//url de pruebas:
app.get('/prueba' , function(request , response){

    response.send("hola")

})

app.get('/prueba2' , (request, response)=>{

    response
        .status(200)
        .json({

            "success": true

        })

})

//crear servidor de aplicacion
app.listen( 5000,
     console.log('servidor ejecutando en puerto' + 5000 ))