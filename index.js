const express = require('express')

const app = express()

app.use(express.static('./build'))

app.get('/', (req, res) => {
    res.send('index')
})

app.listen(3000, () => {
    console.log('The app is listening on port 3000')
})