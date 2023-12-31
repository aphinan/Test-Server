const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
const { readdirSync } = require('fs')

const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({ limit: '10mb' }))

readdirSync('./Routes')
    .map((r) => app.use('/api', require('./Routes/' + r)))

app.listen(5000, () => console.log('Server is Running 5000'))