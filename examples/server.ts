import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import { retraceError } from "../src/retraceError"

const app = express()

app.use(bodyParser.json())

app.post("/retrace-error", async function(request: Request, response: Response) {
  const error = request.body as Error
  const retracedError = await retraceError(error)

  response.send(retracedError)
})

app.listen(7000)
