import express, { Request, Response } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { createErrorRetracer } from "../src"

const app = express()
const errorRetracer = createErrorRetracer()

app.use(cors())
app.use(bodyParser.json())

app.post("/retrace-errorWithStack", async (request: Request, response: Response) => {
  try {
    const retracedError = await errorRetracer.retrace(request.body)

    response.send(retracedError)
  } catch (e) {
    response.send({ error: e })
  }
})

app.listen(7000)
