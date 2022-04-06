const express = require('express')
const app = express ()
const PORT= process.env.PORT || 3027
const indexRouter = require ('./routes/index')

app.use(express.static('public'))
app.use('/', indexRouter)
app.set('view engine', 'ejs')
app.listen(PORT, ()=>{
    console.log( `chelos on port ${PORT}`)
})