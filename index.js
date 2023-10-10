const express = require('express')
const app = express()

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3000

//middleware (si agregue app.use('/', (req, res, next) es para urls personalizadas))
app.use((req, res, next) =>{
    console.log('middleware1')
    next()
})

// VAN TODAS LAS PETICIONES
//app.get('/', (req,res)=>{})

// LUEGO MANEJO DE ERROR 404, se usa use para todas las opciones GET POST, PUT, ETC. 
app.use((req,res)=>{
    res
        .status(404)
        .json({mensaje:'ERROR'})
})

app.listen(PORT,  ()=>{
    console.log(`Server Listening at PORT ${PORT}`)
})