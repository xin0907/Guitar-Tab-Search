const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
app.use(morgan("combined")) // 打印日志
app.use(bodyParser.json()) // 解析发送的任何json请求
app.use(cors()) // 让全世界各地的人访问服务器？

app.post("/register", (req, res) => {
	res.send({ message: `register successed! your email is ${req.body.email}` })
})

app.listen(process.env.PORT || 8081)
