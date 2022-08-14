import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import "dotenv/config"
import * as fs from "fs"
import { AppModule } from "./app.module"
import { TransformInterceptor } from "./interceptors/transform.interceptor"

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      ca: fs.readFileSync(__dirname + "/../ssl/ca_bundle.crt"),
      cert: fs.readFileSync(__dirname + "/../ssl/certificate.crt"),
      key: fs.readFileSync(__dirname + "/../ssl/private.key"),
    },
  })

  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new TransformInterceptor())

  await app.listen(process.env.PORT)
}
bootstrap()
