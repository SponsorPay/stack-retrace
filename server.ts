import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import { retraceStack } from "./src/retraceStack"

const app = express()

app.use(bodyParser.json())

app.post("/", async function(request: Request, response: Response) {
  const { stack } = request.body

  console.log(`Received stack: ${stack}`)

  const retracedStack = await retraceStack(stack)

  response.send(retracedStack)
})

app.listen(7000)
