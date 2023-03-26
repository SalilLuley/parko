import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from "@nestjs/swagger";
import helmet from "helmet";
import { AppModule } from "./infrastructure";
import { ResponseInterceptor } from "./parko/core/infrastructure";

import "reflect-metadata";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`${process.env.API_PREFIX}/${process.env.VERSION}`);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.use(helmet());

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle("Parko tool Microservice")
    .setDescription("Parko Clean Architecture")
    .setVersion("0.0.1")
    .setExternalDoc("Postman Collection", "../api-json")
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
