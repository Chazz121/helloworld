const app = require('express')()

app.get('/', (req, res) =>{
    res.send('hello')
})

app.listen(8080, '0.0.0.0', (err)=>{
    if (!err){
        console.log(`app is running on 8080`)
    }
})