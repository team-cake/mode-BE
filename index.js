const express = require('express')
const loggerMiddleWare = require('morgan')
const corsMiddleWare = require('cors')
const { PORT } = require('./config/constants')
const authRouter = require('./routers/auth')
const dailyModeRouter = require('./routers/dailyMode')
//const authMiddleWare = require("./auth/middleware");

const app = express()

app.use(loggerMiddleWare('dev'))

const bodyParserMiddleWare = express.json()
app.use(bodyParserMiddleWare)

app.use(corsMiddleWare())

// GET endpoint for testing purposes, can be removed
app.get('/', (req, res) => {
	res.send('Hi from express')
})

app.use('/', authRouter)
app.use('/', dailyModeRouter)

app.listen(PORT, () => {
	console.log(`🚀 Launched on port: ${PORT}`)
})
